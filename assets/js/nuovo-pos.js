// Initialize jsPDF
const { jsPDF } = window.jspdf;

// Path del template
const TEMPLATE_PATH = 'data/modello_base.docx';

document.addEventListener('DOMContentLoaded', function() {
    // Form submit handler
    const form = document.getElementById('posDataForm');
    form.addEventListener('submit', generatePDF);
});

// Genera PDF
async function generatePDF(e) {
    e.preventDefault();
    
    try {
        showMessage('info', 'Generazione PDF in corso...');
        
        // Ottieni dati dal form
        const formData = new FormData(e.target);
        const data = {};
        
        // Processa dati form
        for (let [key, value] of formData.entries()) {
            data[key] = value || '';
        }
        
        // Formatta data
        if (data.datainiziolavori) {
            const date = new Date(data.datainiziolavori);
            data.datainiziolavori = date.toLocaleDateString('it-IT');
        }
        
        // Carica e processa il template
        const templateProcessed = await loadAndProcessTemplate(data);
        
        // Genera il PDF
        generatePDFFromData(data);
        
    } catch (error) {
        console.error('Errore:', error);
        showMessage('error', 'Errore nella generazione del documento: ' + error.message);
    }
}

// Carica e processa il template Word
async function loadAndProcessTemplate(data) {
    try {
        // Carica il template dalla cartella data
        const response = await fetch(TEMPLATE_PATH);
        if (!response.ok) {
            throw new Error('Impossibile caricare il modello base');
        }
        
        const arrayBuffer = await response.arrayBuffer();
        const templateContent = new Uint8Array(arrayBuffer);
        
        // Combina dati impresa
        const impresaCompleta = `${data.intestazioneImpresa}\n${data.indirizzoimpresa}\n${data.capImpresa}\n${data.PaeseImpresa}`;
        
        // Prepara dati per il template
        const templateData = {
            ...data,
            intestazioneImpresa: impresaCompleta,
            indirizzoimpresa: '',
            capImpresa: '',
            PaeseImpresa: ''
        };
        
        // Crea documento da template
        const zip = new PizZip(templateContent);
        const doc = new window.docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
            delimiters: {
                start: '$',
                end: '$'
            }
        });
        
        // Imposta dati
        doc.setData(templateData);
        doc.render();
        
        return doc;
        
    } catch (error) {
        console.error('Errore nel processamento del template:', error);
        throw error;
    }
}

// Genera PDF direttamente con jsPDF
function generatePDFFromData(data) {
    // Crea nuovo documento PDF
    const doc = new jsPDF();
    
    // Imposta font
    doc.setFont("helvetica");
    
    // Titolo principale
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("PIANO OPERATIVO DI SICUREZZA", 105, 20, { align: "center" });
    
    let yPosition = 40;
    
    // COMMITTENTE
    addSection(doc, "COMMITTENTE", yPosition);
    yPosition += 10;
    
    yPosition = addField(doc, "Intestazione:", data.intestazioneCliente, yPosition);
    yPosition = addField(doc, "Indirizzo:", data.indirizzocliente, yPosition);
    yPosition = addField(doc, "CAP:", data.capcliente, yPosition);
    yPosition = addField(doc, "Paese:", data.Paesecliente, yPosition);
    yPosition = addField(doc, "P.IVA:", data.pivacliente, yPosition);
    
    // DATI CANTIERE
    yPosition += 10;
    addSection(doc, "DATI GENERALI DEL CANTIERE", yPosition);
    yPosition += 10;
    
    yPosition = addField(doc, "Paese cantiere:", data.paesecantiere, yPosition);
    yPosition = addField(doc, "Indirizzo cantiere:", data.indirizzocantiere, yPosition);
    
    // IMPRESA ESECUTRICE
    yPosition += 10;
    addSection(doc, "DATI IDENTIFICATIVI DELL'IMPRESA ESECUTRICE", yPosition);
    yPosition += 10;
    
    yPosition = addField(doc, "Intestazione:", data.intestazioneImpresa, yPosition);
    yPosition = addField(doc, "Indirizzo:", data.indirizzoimpresa, yPosition);
    yPosition = addField(doc, "CAP:", data.capImpresa, yPosition);
    yPosition = addField(doc, "Paese:", data.PaeseImpresa, yPosition);
    
    // ATTIVITÀ CANTIERE
    yPosition += 10;
    addSection(doc, "DESCRIZIONE DELL'ATTIVITÀ DI CANTIERE", yPosition);
    yPosition += 10;
    
    yPosition = addField(doc, "Data inizio lavori:", data.datainiziolavori, yPosition);
    yPosition = addField(doc, "Durata lavori (gg):", data.duratalavori, yPosition);
    
    // Nuova pagina per lavorazioni se necessario
    if (yPosition > 220) {
        doc.addPage();
        yPosition = 20;
    }
    
    // LAVORAZIONI
    yPosition += 10;
    addSection(doc, "LAVORAZIONI", yPosition);
    yPosition += 10;
    
    // Intestazioni tabella
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("LAVORAZIONE", 20, yPosition);
    doc.text("DURATA (gg)", 150, yPosition);
    yPosition += 5;
    
    // Linea separatrice
    doc.line(20, yPosition, 190, yPosition);
    yPosition += 5;
    
    // Lavorazioni
    doc.setFont("helvetica", "normal");
    for (let i = 1; i <= 6; i++) {
        const lavorazione = data[`prodottotest${i}`];
        const durata = data[`duratalav${i}`];
        
        if (lavorazione || durata) {
            doc.text(lavorazione || '-', 20, yPosition);
            doc.text(durata || '-', 150, yPosition);
            yPosition += 7;
            
            // Nuova pagina se necessario
            if (yPosition > 270) {
                doc.addPage();
                yPosition = 20;
            }
        }
    }
    
    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setFont("helvetica", "normal");
        doc.text(`Pagina ${i} di ${pageCount}`, 105, 285, { align: "center" });
        doc.text(`Generato il ${new Date().toLocaleDateString('it-IT')}`, 20, 285);
    }
    
    // Nome file
    const clientName = data.intestazioneCliente || 'POS';
    const fileName = sanitizeFileName(clientName) + '.pdf';
    
    // Salva PDF
    doc.save(fileName);
    
    showMessage('success', `PDF generato con successo: ${fileName}`);
    
    // Reset form dopo 2 secondi
    setTimeout(() => {
        document.getElementById('posDataForm').reset();
        window.location.href = 'index.html';
    }, 2000);
}

// Funzioni helper per PDF
function addSection(doc, title, y) {
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(102, 126, 234); // Colore tema
    doc.text(title, 20, y);
    doc.setTextColor(0, 0, 0); // Reset nero
    return y;
}

function addField(doc, label, value, y) {
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(label, 20, y);
    doc.setFont("helvetica", "normal");
    
    // Gestisci valori multi-linea
    if (value && value.includes('\n')) {
        const lines = value.split('\n');
        let currentY = y;
        lines.forEach((line, index) => {
            if (index === 0) {
                doc.text(line || '-', 60, currentY);
            } else {
                currentY += 7;
                doc.text(line || '-', 60, currentY);
            }
        });
        return currentY + 7;
    } else {
        doc.text(value || '-', 60, y);
        return y + 7;
    }
}

// Sanitizza nome file
function sanitizeFileName(name) {
    return name.replace(/[^a-z0-9\s\-_]/gi, '').trim() || 'POS';
}

// Mostra messaggi
function showMessage(type, message) {
    const statusDiv = document.getElementById('statusMessage');
    if (!statusDiv) return;
    
    // Mappa tipo a classe CSS
    const typeMap = {
        'info': 'warning',
        'error': 'error',
        'success': 'success'
    };
    
    statusDiv.className = `status-message ${typeMap[type] || type}`;
    statusDiv.textContent = message;
    statusDiv.style.display = 'block';
    
    // Nascondi dopo 5 secondi (tranne info)
    if (type !== 'info') {
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 5000);
    }
}
