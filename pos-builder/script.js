// Variabili globali
let currentStep = 1;
let currentZoom = 100;
let uploadedLogo = null;
let uploadedFirma = null;

// Inizializza data odierna
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('datainiziolavori').valueAsDate = new Date();
    updatePreview();
    updateProgress();
    updateNavigationButtons();
});

// Gestione steps
function toggleStep(stepNumber) {
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    document.querySelector(`[data-step="${stepNumber}"]`).classList.add('active');
    currentStep = stepNumber;
    updateProgress();
}

function nextStep() {
    if (currentStep < 5) {
        toggleStep(currentStep + 1);
    }
}

function prevStep() {
    if (currentStep > 1) {
        toggleStep(currentStep - 1);
    }
}

function updateProgress() {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const progress = (currentStep / 5) * 100;
        progressBar.style.width = progress + '%';
    }
}

// Gestione zoom
function zoomIn() {
    currentZoom = Math.min(currentZoom + 25, 200);
    updateZoom();
}

function zoomOut() {
    currentZoom = Math.max(currentZoom - 25, 50);
    updateZoom();
}

function updateZoom() {
    const zoomLevelElement = document.getElementById('zoomLevel');
    const documentPreview = document.getElementById('documentPreview');
    
    if (zoomLevelElement) {
        zoomLevelElement.textContent = currentZoom + '%';
    }
    if (documentPreview) {
        documentPreview.style.transform = `scale(${currentZoom / 100})`;
    }
}

// Gestione upload immagini
function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedLogo = e.target.result;
            const preview = document.getElementById('logoPreview');
            if (preview) {
                preview.innerHTML = `<img src="${uploadedLogo}" class="uploaded-image" alt="Logo">`;
            }
            updatePreview();
        };
        reader.readAsDataURL(file);
    }
}

function handleFirmaUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedFirma = e.target.result;
            const preview = document.getElementById('firmaPreview');
            if (preview) {
                preview.innerHTML = `<img src="${uploadedFirma}" class="uploaded-image" alt="Firma">`;
            }
            updatePreview();
            updateFirmaDisplay();
        };
        reader.readAsDataURL(file);
    }
}

// Gestione navigazione pagine
function previousPage() {
    const pageSelect = document.getElementById('pageSelect');
    if (pageSelect) {
        const currentPage = parseInt(pageSelect.value);
        if (currentPage > 1) {
            pageSelect.value = (currentPage - 1).toString();
            updatePagePreview();
        }
    }
}

function nextPage() {
    const pageSelect = document.getElementById('pageSelect');
    if (pageSelect) {
        const currentPage = parseInt(pageSelect.value);
        if (currentPage < 29) {
            pageSelect.value = (currentPage + 1).toString();
            updatePagePreview();
        }
    }
}

function updateNavigationButtons() {
    const pageSelect = document.getElementById('pageSelect');
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');
    
    if (pageSelect && prevBtn && nextBtn) {
        const currentPage = parseInt(pageSelect.value);
        
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === 29;
    }
}

// Aggiornamento preview
function updatePreview() {
    const data = getFormData();
    updateVariableSummary(data);
    updatePagePreview();
    updateLogoDisplay();
    updateFirmaDisplay();
    updateClienteDisplay();
}

function getFormData() {
    return {
        intestazioneCliente: document.getElementById('intestazioneCliente').value || 'Nome Cliente',
        indirizzocliente: document.getElementById('indirizzocliente').value || 'Indirizzo Cliente',
        paesecantiere: document.getElementById('paesecantiere').value || 'Località Cantiere',
        indirizzocantiere: document.getElementById('indirizzocantiere').value || 'Indirizzo Cantiere',
        datainiziolavori: document.getElementById('datainiziolavori').value || new Date().toISOString().split('T')[0],
        duratalavori: document.getElementById('duratalavori').value || '5',
        prodottotest1: document.getElementById('prodottotest1').value || 'Lavorazione 1',
        prodottotest2: document.getElementById('prodottotest2').value || 'Lavorazione 2',
        customNotes: document.getElementById('customNotes').value || '',
        fileName: document.getElementById('fileName').value || 'POS_Documento'
    };
}

function updateVariableSummary(data) {
    const summaryElement = document.getElementById('variableSummary');
    if (summaryElement) {
        const summary = `
            Cliente: ${data.intestazioneCliente}<br>
            Cantiere: ${data.paesecantiere}<br>
            Inizio Lavori: ${data.datainiziolavori}<br>
            Durata: ${data.duratalavori} giorni<br>
            Lavorazioni: ${data.prodottotest1}, ${data.prodottotest2}
        `;
        summaryElement.innerHTML = summary;
    }
}

function updateLogoDisplay() {
    const logoDisplay = document.getElementById('logoDisplay');
    if (logoDisplay) {
        if (uploadedLogo) {
            logoDisplay.innerHTML = `<img src="${uploadedLogo}" style="max-width: 180px; max-height: 120px; object-fit: contain; display: block; margin: 20px auto;" alt="Logo Rapida Asfalti">`;
            logoDisplay.style.width = 'auto';
            logoDisplay.style.height = 'auto';
            logoDisplay.style.background = 'none';
            logoDisplay.style.color = 'inherit';
        } else {
            logoDisplay.innerHTML = 'Rapida Asfalti Srl<br>LOGO';
            logoDisplay.style.width = '180px';
            logoDisplay.style.height = '120px';
            logoDisplay.style.background = 'linear-gradient(135deg, #1e3a8a, #3b82f6)';
            logoDisplay.style.color = 'white';
            logoDisplay.style.display = 'flex';
            logoDisplay.style.alignItems = 'center';
            logoDisplay.style.justifyContent = 'center';
            logoDisplay.style.margin = '20px auto';
            logoDisplay.style.borderRadius = '8px';
            logoDisplay.style.fontWeight = 'bold';
            logoDisplay.style.fontSize = '16px';
            logoDisplay.style.textAlign = 'center';
        }
    }
}

function updateFirmaDisplay() {
    const firmaDisplay = document.getElementById('firmaDisplay');
    if (firmaDisplay) {
        if (uploadedFirma) {
            firmaDisplay.innerHTML = `<img src="${uploadedFirma}" style="max-width: 160px; max-height: 60px; object-fit: contain; margin-left: auto; display: block;" alt="Firma Rapida Asfalti">`;
        } else {
            firmaDisplay.innerHTML = '';
        }
    }
}

function updateClienteDisplay() {
    const clientePreview = document.getElementById('clientePreview');
    if (clientePreview) {
        const data = getFormData();
        clientePreview.innerHTML = `
            <div><strong>${data.intestazioneCliente}</strong></div>
            <div>${data.indirizzocliente}</div>
        `;
    }
}

function updatePagePreview() {
    const pageSelect = document.getElementById('pageSelect');
    const currentPageNum = document.getElementById('currentPageNum');
    const footerPageNum = document.getElementById('footerPageNum');
    const currentPageDisplay = document.getElementById('currentPageDisplay');
    const pageContent = document.getElementById('pageContent');
    
    if (!pageSelect || !currentPageNum || !pageContent) {
        return;
    }
    
    const pageNum = pageSelect.value;
    const data = getFormData();
    currentPageNum.textContent = pageNum;
    if (footerPageNum) {
        footerPageNum.textContent = pageNum;
    }
    if (currentPageDisplay) {
        currentPageDisplay.textContent = pageNum;
    }
    
    updateNavigationButtons();
    
    // Genera il contenuto per ogni pagina
    switch(pageNum) {
        case '1':
            pageContent.innerHTML = generatePage1Preview(data);
            break;
        case '2':
            pageContent.innerHTML = generatePage2Preview();
            break;
        case '3':
            pageContent.innerHTML = generatePage3Preview();
            break;
        case '4':
            pageContent.innerHTML = generatePage4Preview(data);
            break;
        case '5':
            pageContent.innerHTML = generatePage5Preview();
            break;
        case '18':
            pageContent.innerHTML = generatePage18Preview();
            break;
        case '24':
            pageContent.innerHTML = generatePage24Preview();
            break;
        default:
            pageContent.innerHTML = `
                <div class="document-title">Pagina ${pageNum}</div>
                <p>Contenuto della pagina ${pageNum} del POS - Layout professionale conforme al modello originale.</p>
                <div class="section-header">Sezione ${pageNum}</div>
                <p>Questa pagina contiene informazioni specifiche relative alla sezione ${pageNum} del Piano Operativo di Sicurezza secondo il D.Lgs. 81/2008.</p>
            `;
    }
}

// Funzioni per generare preview delle pagine
function generatePage1Preview(data) {
    const logoHtml = uploadedLogo ? 
        `<img src="${uploadedLogo}" style="max-width: 180px; max-height: 120px; object-fit: contain; display: block; margin: 20px auto;" alt="Logo">` :
        `<div class="logo-preview">Rapida Asfalti Srl<br>LOGO</div>`;
        
    const firmaHtml = uploadedFirma ? 
        `<div style="margin-top: 15px; text-align: right;"><img src="${uploadedFirma}" style="max-width: 160px; max-height: 60px; object-fit: contain; margin-left: auto; display: block;" alt="Firma"></div>` :
        '';
        
    return `
        <div class="document-title">PIANO OPERATIVO di SICUREZZA (P.O.S.)</div>
        <div style="text-align: center; font-style: italic; margin: 10px 0;">
            (ai sensi del D.Lgs. 9 aprile 2008, n. 81 e s.m.i.)
        </div>
        
        ${logoHtml}
        
        <div style="border: 2px solid #1e3a8a; padding: 20px; margin: 30px 0; text-align: center;">
            <h2 style="margin: 10px 0;">PIANO OPERATIVO di SICUREZZA</h2>
            <h3 style="margin: 10px 0;">(P.O.S.)</h3>
            <div style="font-style: italic;">(ai sensi del D.Lgs. 9 aprile 2008, n. 81 e s.m.i.)</div>
        </div>
        
        <div style="display: flex; justify-content: space-between; margin: 30px 0;">
            <div style="border: 2px solid #1e3a8a; padding: 15px; width: 45%;">
                <h4 style="margin: 0 0 10px 0;">Committente:</h4>
                <div><strong>${data.intestazioneCliente}</strong></div>
                <div>${data.indirizzocliente}</div>
            </div>
            <div style="border: 2px solid #1e3a8a; padding: 15px; width: 45%;">
                <h4 style="margin: 0 0 10px 0;">L'Impresa:</h4>
                <div><strong>RAPIDA ASFALTI SRL</strong></div>
                <div>VIA PADRE LEOPOLDO, 67/D</div>
                <div>36016 THIENE (VI)</div>
                <div>P.IVA 03996820241</div>
                ${firmaHtml}
            </div>
        </div>
    `;
}

function generatePage2Preview() {
    return `
        <div class="document-title">INDICE</div>
        
        <div style="line-height: 1.6; font-size: 12px;">
            <div><strong>1</strong> DATI GENERALI DEL CANTIERE ......................................................................................... 4</div>
            <div><strong>2</strong> DATI IDENTIFICATIVI DELL'IMPRESA ESECUTRICE ............................................................ 4</div>
            <div><strong>3</strong> SPECIFICHE MANSIONI INERENTI LA SICUREZZA - ORGANIZZAZIONE DELL'AZIENDA ............ 5</div>
            <div><strong>4</strong> DESCRIZIONE DELL'ATTIVITÀ DI CANTIERE ...................................................................... 7</div>
            <div><strong>5</strong> DESCRIZIONE DELLE MODALITÀ ORGANIZZATIVE ......................................................... 8</div>
            <div><strong>6</strong> ELENCO DEI PONTEGGI, DELLE MACCHINE, ATTREZZATURE ED IMPIANTI ........................ 10</div>
            <div><strong>7</strong> ELENCO DELLE SOSTANZE E PREPARATI PERICOLOSI .................................................... 11</div>
            <div><strong>8</strong> ESITI DEI RAPPORTI DI VALUTAZIONE DEL RUMORE E DELLE VIBRAZIONI ......................... 13</div>
            <div><strong>9</strong> MACROCLIMA ............................................................................................................... 14</div>
            <div><strong>10</strong> PROCEDURE COMPLEMENTARI E DI DETTAGLIO RICHIESTE DAL PSC ............................ 15</div>
            <div><strong>11</strong> DOCUMENTAZIONE FORMAZIONE FORNITE AI LAVORATORI ........................................ 16</div>
            <div><strong>12</strong> FORMAZIONE DIPENDENTI ............................................................................................ 17</div>
            <div><strong>13</strong> VALUTAZIONE DEI RISCHI DEL CANTIERE ...................................................................... 18</div>
            <div><strong>14</strong> ATTREZZATURE PER ESEGUIRE IL LAVORO ................................................................... 24</div>
        </div>
    `;
}

function generatePage3Preview() {
    return `
        <div class="document-title">DEFINIZIONI ED ABBREVIAZIONI</div>
        
        <div style="margin: 20px 0;">
            <h4>Direttore tecnico di cantiere:</h4>
            <p>Figura incaricata della gestione del cantiere, compresa la sicurezza. Può essere un Legale Rappresentante o un dipendente della ditta appaltatrice.</p>
            
            <h4>Capocantiere / Preposto:</h4>
            <p>Persona che, in ragione delle competenze professionali e nei limiti di poteri gerarchici e funzionali adeguati alla natura dell'incarico conferitogli, sovrintende all'attività lavorativa.</p>
            
            <h4>RSPP:</h4>
            <p>Responsabile del servizio di prevenzione e protezione.</p>
            
            <h4>PSC:</h4>
            <p>Piano di sicurezza e di coordinamento di cui all'articolo 100, comma 1 del D.Lgs. 81/2008 e s.m.i.</p>
            
            <h4>CSE:</h4>
            <p>Coordinatore per la sicurezza in fase di esecuzione.</p>
            
            <h4>IMPRESA ESECUTRICE:</h4>
            <p>Impresa che esegue un'opera o parte di essa impegnando proprie risorse umane e materiali.</p>
        </div>
    `;
}

function generatePage4Preview(data) {
    return `
        <div class="section-header">1 DATI GENERALI DEL CANTIERE</div>
        <table class="content-table">
            <tr>
                <td style="background: #f0f0f0; width: 30%;"><strong>Indirizzo di cantiere</strong></td>
                <td>${data.paesecantiere}<br>${data.indirizzocantiere}</td>
            </tr>
            <tr>
                <td style="background: #f0f0f0;"><strong>Eventuali recapiti</strong></td>
                <td></td>
            </tr>
        </table>
        
        <div class="section-header">2 DATI IDENTIFICATIVI DELL'IMPRESA ESECUTRICE</div>
        <table class="content-table">
            <tr>
                <td style="background: #f0f0f0; width: 30%;"><strong>Denominazione</strong></td>
                <td><strong>RAPIDA ASFALTI SRL</strong></td>
            </tr>
            <tr>
                <td style="background: #f0f0f0;"><strong>Indirizzo</strong></td>
                <td>Via Padre Leopoldo 67/d<br>36016 Thiene (VI)</td>
            </tr>
            <tr>
                <td style="background: #f0f0f0;"><strong>Tel</strong></td>
                <td>0445 386059</td>
            </tr>
            <tr>
                <td style="background: #f0f0f0;"><strong>Datore di Lavoro</strong></td>
                <td>Gallato Silvio</td>
            </tr>
            <tr>
                <td style="background: #f0f0f0;"><strong>Incarico ricevuto da:</strong></td>
                <td>${data.intestazioneCliente}<br>${data.indirizzocliente}</td>
            </tr>
        </table>
    `;
}

function generatePage5Preview() {
    return `
        <div class="section-header">3 SPECIFICHE MANSIONI INERENTI LA SICUREZZA</div>
        
        <h4>Elenco dei lavoratori dell'impresa esecutrice presenti in cantiere:</h4>
        <table class="content-table">
            <tr><th>Nome</th><th>Qualifica/Mansione</th></tr>
            <tr><td>Josic Tatomir</td><td>Operaio specializzato</td></tr>
            <tr><td>Bojan Stanic</td><td>Operaio specializzato</td></tr>
            <tr><td>Zoran Stanic</td><td>Operaio specializzato</td></tr>
            <tr><td>Gallato Silvio</td><td>Datore di lavoro</td></tr>
            <tr><td><strong>TOTALE N. 10</strong></td><td></td></tr>
        </table>
        
        <h4>SOGGETTI RESPONSABILI PER LA SICUREZZA DEL PRESENTE CANTIERE</h4>
        <table class="content-table">
            <tr>
                <td><strong>RSPP</strong></td>
                <td>Gallato Silvio</td>
            </tr>
            <tr>
                <td><strong>Addetti Primo Soccorso</strong></td>
                <td>Tatomir Josic, Stanic Bojan, Gallato Silvio</td>
            </tr>
            <tr>
                <td><strong>Addetti Antincendio</strong></td>
                <td>Tatomir Josic, Stanic Bojan, Gallato Silvio</td>
            </tr>
        </table>
    `;
}

function generatePage18Preview() {
    return `
        <div class="section-header">12 VALUTAZIONE DEI RISCHI DEL CANTIERE</div>
        
        <h4>METODOLOGIA E CRITERI</h4>
        <p>Per ogni lavorazione vengono individuati i relativi pericoli connessi con le lavorazioni stesse, le attrezzature impiegate e le eventuali sostanze utilizzate.</p>
        
        <h4>FASE 1: ARRIVO AL CANTIERE CON MEZZI DELL'IMPRESA</h4>
        <table class="content-table">
            <tr style="background: #00ffff;">
                <th>RISCHIO</th>
                <th>VALUTAZIONE</th>
                <th>MISURE PREVENTIVE</th>
            </tr>
            <tr>
                <td>Possibili investimenti di terze persone</td>
                <td><strong>BASSO</strong></td>
                <td>Le manovre svolte all'interno del cantiere e/o della proprietà del Cliente saranno effettuate a passo d'uomo</td>
            </tr>
        </table>
    `;
}

function generatePage24Preview() {
    return `
        <div class="section-header">13 ATTREZZATURE PER ESEGUIRE IL LAVORO</div>
        
        <div class="equipment-section">
            <div class="equipment-title">
                <span>BOMBOLA GAS PROPANO E BRUCIATORE</span>
                <span class="present-checkbox">PRESENTE: SI ☑ NO ☐</span>
            </div>
            
            <h4>GENERALE:</h4>
            <ul>
                <li>Bombole gas in uso dalle ditte di imbottigliamento Liquidgas o Gas Adige</li>
                <li>Bruciatori di proprietà</li>
            </ul>
            
            <h4>RISCHI:</h4>
            <table class="content-table" style="width: 60%;">
                <tr>
                    <td>Calore fiamme</td>
                    <td style="text-align: center; font-size: 20px;">🔥</td>
                </tr>
                <tr>
                    <td>Gas Vapori</td>
                    <td style="text-align: center; font-size: 20px;">☣️</td>
                </tr>
                <tr>
                    <td>Incendio Scoppio</td>
                    <td style="text-align: center; font-size: 20px;">💥</td>
                </tr>
                <tr>
                    <td>Rumore</td>
                    <td style="text-align: center; font-size: 20px;">🔊</td>
                </tr>
            </table>
            
            <h4>PRIMA DI INIZIARE:</h4>
            <ul>
                <li>Verificare l'integrità dei tubi in gomma e le connessioni tra bombola e cannello</li>
                <li>Verificare la funzionalità del riduttore di pressione</li>
                <li>Verificare la stabilità delle bombole e del materiale sul piano di lavoro</li>
            </ul>
            
            <h4>DPI IN RIFERIMENTO:</h4>
            <div>👷 🦺 🥽 👤 🔇 😷</div>
        </div>
    `;
}

// Generazione PDF
function generateFinalPDF() {
    const data = getFormData();
    
    // Verifica campi obbligatori
    if (!data.intestazioneCliente.trim() || data.intestazioneCliente === 'Nome Cliente') {
        showError('Il campo "Denominazione Cliente" è obbligatorio!');
        return;
    }
    
    if (!data.paesecantiere.trim() || data.paesecantiere === 'Località Cantiere') {
        showError('Il campo "Località Cantiere" è obbligatorio!');
        return;
    }
    
    showProgress();
    
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        
        generateAllPages(doc, data);
        
        const fileName = `${data.fileName.replace(/[^a-zA-Z0-9]/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);
        
        showSuccess();
        
    } catch (error) {
        console.error('Errore generazione PDF:', error);
        showError('Errore durante la generazione del PDF. Riprova.');
    }
}

function generateAllPages(doc, data) {
    // Pagina 1: Copertina
    addHeaderFooter(doc, 1);
    doc.setFontSize(18);
    doc.text('PIANO OPERATIVO di SICUREZZA (P.O.S.)', 105, 40, { align: 'center' });
    
    if (uploadedLogo) {
        doc.addImage(uploadedLogo, 'JPEG', 60, 60, 90, 60);
    } else {
        doc.setFillColor(30, 58, 138);
        doc.rect(60, 60, 90, 60, 'F');
        doc.setTextColor(255);
        doc.setFontSize(16);
        doc.text('RAPIDA ASFALTI SRL', 105, 85, { align: 'center' });
        doc.text('LOGO', 105, 95, { align: 'center' });
        doc.setTextColor(0);
    }
    
    // Box committente e impresa
    doc.rect(25, 180, 75, 60, 'D');
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text('Committente:', 27, 190);
    doc.setFont(undefined, 'normal');
    doc.text(data.intestazioneCliente, 27, 200);
    doc.text(data.indirizzocliente, 27, 208);
    
    doc.rect(110, 180, 75, 60, 'D');
    doc.setFont(undefined, 'bold');
    doc.text('L\'Impresa:', 112, 190);
    doc.setFont(undefined, 'normal');
    doc.text('RAPIDA ASFALTI SRL', 112, 200);
    doc.text('VIA PADRE LEOPOLDO, 67/D', 112, 208);
    doc.text('36016 THIENE (VI)', 112, 216);
    doc.text('P.IVA 03996820241', 112, 224);
    
    if (uploadedFirma) {
        doc.addImage(uploadedFirma, 'JPEG', 140, 228, 80, 30);
    }
    
    // Aggiungi altre pagine...
    for (let i = 2; i <= 29; i++) {
        doc.addPage();
        addHeaderFooter(doc, i);
        doc.setFontSize(12);
        doc.text(`Pagina ${i} - Contenuto del POS`, 105, 100, { align: 'center' });
        doc.setFontSize(10);
        doc.text('Layout professionale conforme al D.Lgs. 81/2008', 105, 120, { align: 'center' });
    }
}

function addHeaderFooter(doc, pageNum) {
    // Header in alto
    doc.setFontSize(9);
    doc.setTextColor(100);
    doc.text('Revisione n. 2 | Data revisione 10/05/2022 | Impresa Rapida Asfalti Srl', 20, 15);
    doc.text(`Pagina ${pageNum} di 29`, 170, 15);
    
    // Footer in basso
    doc.text('Revisione n. 2 | Data revisione 10/05/2022 | Impresa Rapida Asfalti Srl', 20, 285);
    doc.text(`Pagina ${pageNum} di 29`, 170, 285);
    doc.setTextColor(0);
}

// Funzioni di utilità
function showProgress() {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            progressBar.style.width = progress + '%';
            if (progress >= 100) {
                clearInterval(interval);
            }
        }, 200);
    }
}

function showSuccess() {
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    if (successMessage) {
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

function showError(message) {
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    if (errorMessage) {
        errorMessage.innerHTML = `❌ ${message}`;
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
    if (successMessage) {
        successMessage.style.display = 'none';
    }
}

// Drag & drop per file upload
document.addEventListener('DOMContentLoaded', function() {
    ['logoUpload', 'firmaUpload'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('dragover', (e) => {
                e.preventDefault();
                element.classList.add('dragover');
            });
            
            element.addEventListener('dragleave', () => {
                element.classList.remove('dragover');
            });
            
            element.addEventListener('drop', (e) => {
                e.preventDefault();
                element.classList.remove('dragover');
                
                const files = e.dataTransfer.files;
                if (files.length > 0) {
                    const fileInput = id === 'logoUpload' ? 'logoFile' : 'firmaFile';
                    const input = document.getElementById(fileInput);
                    if (input) {
                        input.files = files;
                        if (id === 'logoUpload') {
                            handleLogoUpload({ target: { files } });
                        } else {
                            handleFirmaUpload({ target: { files } });
                        }
                    }
                }
            });
        }
    });
});
