// ===== DATABASE PRODOTTI/LAVORAZIONI =====
const PRODOTTI_DB = [
    "Impermeabilizzazione coperture",
    "Colibentazione tetti", 
    "Posa manti in PVC",
    "Rifacimento tetti industriali",
    "Asfaltature",
    "Demolizioni",
    "Lavori di attrezzaria",
    "Riparazioni coperture",
    "Isolamenti termici",
    "Installazione grondaie"
];

// ===== DATABASE ATTREZZATURE =====
const ATTREZZATURE_DB = [
    { name: "Mazza", checked: [true, false, false, false, false, false] },
    { name: "Mazzette", checked: [true, false, false, false, false, false] },
    { name: "Mazzuolo", checked: [true, false, false, false, false, false] },
    { name: "Cazzuola", checked: [true, false, false, false, false, false] },
    { name: "Martello da Carpentiere", checked: [true, false, false, false, false, false] },
    { name: "Sega circolare Bosch gks 20-230", checked: [false, false, false, false, false, false] },
    { name: "Trapano", checked: [true, false, false, false, false, false] },
    { name: "Fiamma ossiacetilenica", checked: [true, false, false, false, false, false] },
    { name: "Tagliasigillante elettrica", checked: [true, false, false, false, false, false] },
    { name: "Cannello a propano", checked: [true, false, false, false, false, false] },
    { name: "Scalpelli e punte", checked: [true, false, false, false, false, false] },
    { name: "Martello demolitore Makita del. 840. mm 12 kg", checked: [false, false, false, false, false, false] },
    { name: "Smerigliatrice makita modello DG4031", checked: [true, false, false, false, false, false] },
    { name: "Motosega Makita uc 403 cc", checked: [false, false, false, false, false, false] },
    { name: "Gruppo elettrogeno", checked: [true, false, false, false, false, false] },
    { name: "Molatrice portatile makita dss// ===== POS RAPIDA ASFALTI - JAVASCRIPT UNIFICATO =====

// ===== CONFIGURAZIONE GLOBALE =====
const CONFIG = {
    STORAGE_KEY: 'pos_rapida_asfalti_data',
    AUTO_SAVE_INTERVAL: 5000, // 5 secondi
    REVISION: 1,
    COMPANY: 'Rapida Asfalti Srl',
    TOTAL_PAGES: 29
};

// ===== DATABASE DIPENDENTI =====
const DIPENDENTI_DB = [
    { id: 1, nome: "Gallato Silvio", qualifica: "Datore di lavoro" },
    { id: 2, nome: "Stanic Bojan", qualifica: "Operaio specializzato" },
    { id: 3, nome: "Stanic Zoran", qualifica: "Operaio specializzato" },
    { id: 4, nome: "Josic Tatomir", qualifica: "Operaio specializzato" },
    { id: 5, nome: "Josic Petar", qualifica: "Operaio specializzato" },
    { id: 6, nome: "Marhaban Abderrahim", qualifica: "Operaio specializzato" },
    { id: 7, nome: "Marhaban Fahd", qualifica: "Operaio semplice" },
    { id: 8, nome: "Badjie Buba", qualifica: "Operaio semplice" },
    { id: 9, nome: "Touras Pa Boy", qualifica: "Operaio semplice" },
    { id: 10, nome: "Camara Morray", qualifica: "Operaio semplice" },
    { id: 11, nome: "Gallato Alice", qualifica: "Operaio specializzato" },
    { id: 12, nome: "Gallato Pierluigi", qualifica: "Operaio specializzato" },
    { id: 13, nome: "Giovanni Scordo", qualifica: "Medico competente" },
    { id: 14, nome: "Marco Rossi", qualifica: "Operaio specializzato" },
    { id: 15, nome: "Luca Bianchi", qualifica: "Operaio semplice" }
];

// ===== STATO GLOBALE =====
let documentData = {
    revisione: {
        numero: "1",
        data: new Date().toISOString().split('T')[0]
    },
    cliente: {
        intestazione: "",
        indirizzo: "",
        cap_citta: "",
        piva: ""
    },
    cantiere: {
        indirizzo: "",
        cap_citta: "",
        recapiti: ""
    },
    organigramma: {
        dipendente_1: "BOJAN STANIC",
        dipendente_2: "ZORAN STANIC",
        dipendente_3: "TOURAS JOSIC",
        dipendente_4: "JOSIC PETAR",
        dipendente_5: "MARHABAN ABDERRAHIM",
        dipendente_6: "MARHABAN FAHD",
        dipendente_7: "BADJIE BUBA",
        dipendente_8: "TOURAS PA BOY",
        dipendente_9: "CAMARA MORRAY"
    },
    lavoratori: [],
    lastSaved: null
};

let selectedWorkers = [];
let autoSaveTimer = null;

// ===== INIZIALIZZAZIONE =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inizializzazione POS Rapida Asfalti...');
    
    // Carica dati salvati
    loadSavedData();
    
    // Inizializza componenti
    initializeWorkers();
    initializeFieldListeners();
    initializeHotKeys();
    
    // Avvia auto-save
    startAutoSave();
    
    console.log('✅ Inizializzazione completata');
    updateStatus('Documento caricato e pronto per la compilazione');
});

// ===== GESTIONE DATI =====
function loadSavedData() {
    try {
        const savedData = localStorage.getItem(CONFIG.STORAGE_KEY);
        if (savedData) {
            const parsed = JSON.parse(savedData);
            documentData = { ...documentData, ...parsed };
            console.log('📂 Dati caricati dal localStorage');
        }
        
        // Aggiorna tutti i campi nel DOM
        updateAllFields();
        updateRevisionDisplay();
        
    } catch (error) {
        console.error('❌ Errore nel caricamento dati:', error);
        updateStatus('Errore nel caricamento dati salvati');
    }
}

function saveAllData() {
    try {
        // Raccogli tutti i dati dai campi
        collectAllFieldData();
        
        // Salva nel localStorage
        documentData.lastSaved = new Date().toISOString();
        localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(documentData));
        
        console.log('💾 Dati salvati:', documentData);
        updateStatus('Tutti i dati salvati correttamente');
        updateLastSaved();
        
        return true;
    } catch (error) {
        console.error('❌ Errore nel salvataggio:', error);
        updateStatus('Errore nel salvataggio dati');
        return false;
    }
}

function collectAllFieldData() {
    // Raccogli dati da tutti i campi data-field
    const fields = document.querySelectorAll('[data-field]');
    fields.forEach(field => {
        const fieldPath = field.getAttribute('data-field');
        const value = field.value || field.textContent || '';
        
        // Imposta il valore nell'oggetto dati usando il path
        setNestedValue(documentData, fieldPath, value);
    });
    
    // Raccogli dati lavoratori selezionati
    documentData.lavoratori = selectedWorkers;
}

function setNestedValue(obj, path, value) {
    const keys = path.split('.');
    let current = obj;
    
    for (let i = 0; i < keys.length - 1; i++) {
        if (!(keys[i] in current)) {
            current[keys[i]] = {};
        }
        current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

function updateAllFields() {
    const fields = document.querySelectorAll('[data-field]');
    fields.forEach(field => {
        const fieldPath = field.getAttribute('data-field');
        const value = getNestedValue(documentData, fieldPath);
        
        if (value) {
            if (field.tagName === 'INPUT' || field.tagName === 'TEXTAREA' || field.tagName === 'SELECT') {
                field.value = value;
            } else {
                field.textContent = value;
            }
        }
    });
    
    // Aggiorna elementi sincronizzati
    updateSyncedElements();
}

function updateSyncedElements() {
    // Sincronizzazione dati revisione
    document.querySelectorAll('.revision-sync').forEach(el => {
        el.textContent = documentData.revisione.numero;
    });
    
    document.querySelectorAll('.revision-date-sync').forEach(el => {
        const date = new Date(documentData.revisione.data).toLocaleDateString('it-IT');
        el.textContent = date;
    });
    
    // Sincronizzazione dati cliente
    document.querySelectorAll('.client-sync').forEach(el => {
        const fieldPath = el.getAttribute('data-field');
        const value = getNestedValue(documentData, fieldPath);
        if (value && el.value !== value) {
            el.value = value;
        }
    });
}

// ===== GESTIONE LAVORATORI =====
function initializeWorkers() {
    // Inizializza con lavoratori di default se non ci sono dati salvati
    if (selectedWorkers.length === 0) {
        selectedWorkers = [
            { id: 4, nome: "Josic Tatomir", qualifica: "Operaio specializzato" },
            { id: 2, nome: "Stanic Bojan", qualifica: "Operaio specializzato" },
            { id: 3, nome: "Stanic Zoran", qualifica: "Operaio specializzato" },
            { id: 5, nome: "Josic Petar", qualifica: "Operaio specializzato" },
            { id: 1, nome: "Gallato Silvio", qualifica: "Datore di lavoro" },
            { id: 6, nome: "Marhaban Abderrahim", qualifica: "Operaio specializzato" },
            { id: 7, nome: "Marhaban Fahd", qualifica: "Operaio semplice" },
            { id: 8, nome: "Badjie Buba", qualifica: "Operaio semplice" },
            { id: 9, nome: "Touras Pa Boy", qualifica: "Operaio semplice" },
            { id: 10, nome: "Camara Morray", qualifica: "Operaio semplice" }
        ];
    }
    
    renderWorkers();
}

function renderWorkers() {
    const tbody = document.getElementById('workersBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';

    selectedWorkers.forEach((worker, index) => {
        const row = document.createElement('tr');
        row.className = 'table-row';
        row.innerHTML = `
            <td class="table-cell name-cell">
                <select class="worker-select" onchange="updateWorker(${index}, this.value)">
                    <option value="">Seleziona lavoratore...</option>
                    ${DIPENDENTI_DB.map(person => 
                        `<option value="${person.id}" ${person.id === worker.id ? 'selected' : ''}>${person.nome}</option>`
                    ).join('')}
                </select>
            </td>
            <td class="table-cell qualification-cell">${worker.qualifica}</td>
            <td class="table-cell action-cell">
                <button class="remove-btn" onclick="removeWorker(${index})">🗑️</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    updateWorkerTotal();
}

function addWorker() {
    selectedWorkers.push({ id: null, nome: "", qualifica: "" });
    renderWorkers();
    saveAllData();
}

function removeWorker(index) {
    selectedWorkers.splice(index, 1);
    renderWorkers();
    saveAllData();
}

function updateWorker(index, personId) {
    if (personId) {
        const person = DIPENDENTI_DB.find(p => p.id == personId);
        if (person) {
            selectedWorkers[index] = { ...person };
        }
    } else {
        selectedWorkers[index] = { id: null, nome: "", qualifica: "" };
    }
    renderWorkers();
    saveAllData();
}

function updateWorkerTotal() {
    const total = selectedWorkers.filter(worker => worker.id !== null).length;
    const totalElement = document.getElementById('totalWorkers');
    if (totalElement) {
        totalElement.textContent = total;
    }
}

// ===== GESTIONE CAMPI E EVENTI =====
function initializeFieldListeners() {
    // Listener per tutti i campi editabili
    document.addEventListener('input', function(e) {
        if (e.target.hasAttribute('data-field')) {
            handleFieldChange(e.target);
        }
    });
    
    document.addEventListener('change', function(e) {
        if (e.target.hasAttribute('data-field')) {
            handleFieldChange(e.target);
        }
    });
}

function handleFieldChange(field) {
    const fieldPath = field.getAttribute('data-field');
    const value = field.value;
    
    // Aggiorna i dati globali
    setNestedValue(documentData, fieldPath, value);
    
    // Sincronizza campi correlati
    syncRelatedFields(fieldPath, value);
    
    // Mostra che ci sono modifiche non salvate
    updateStatus('Modifiche non salvate...');
}

function syncRelatedFields(fieldPath, value) {
    // Sincronizzazione dati cliente tra pagine
    if (fieldPath.startsWith('cliente.')) {
        document.querySelectorAll(`[data-field="${fieldPath}"]`).forEach(field => {
            if (field.value !== value) {
                field.value = value;
            }
        });
    }
    
    // Sincronizzazione dati revisione
    if (fieldPath === 'revisione.numero') {
        document.querySelectorAll('.revision-sync').forEach(el => {
            el.textContent = value;
        });
        updateRevisionDisplay();
    }
    
    if (fieldPath === 'revisione.data') {
        document.querySelectorAll('.revision-date-sync').forEach(el => {
            const date = new Date(value).toLocaleDateString('it-IT');
            el.textContent = date;
        });
    }
}

// ===== HOT KEYS =====
function initializeHotKeys() {
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key.toLowerCase()) {
                case 's':
                    e.preventDefault();
                    saveAllData();
                    break;
                case 'e':
                    e.preventDefault();
                    exportToPDF();
                    break;
                case 'p':
                    e.preventDefault();
                    printDocument();
                    break;
                case 'n':
                    e.preventDefault();
                    if (confirm('Creare un nuovo documento? Tutti i dati non salvati andranno persi.')) {
                        newDocument();
                    }
                    break;
            }
        }
    });
    
    console.log('⌨️ Hot keys attivate: Ctrl+S (Salva), Ctrl+E (Export), Ctrl+P (Stampa), Ctrl+N (Nuovo)');
}

// ===== AUTO-SAVE =====
function startAutoSave() {
    if (autoSaveTimer) {
        clearInterval(autoSaveTimer);
    }
    
    autoSaveTimer = setInterval(() => {
        saveAllData();
    }, CONFIG.AUTO_SAVE_INTERVAL);
    
    console.log(`🔄 Auto-save attivato ogni ${CONFIG.AUTO_SAVE_INTERVAL/1000} secondi`);
}

// ===== EXPORT PDF =====
function exportToPDF() {
    updateStatus('Generazione PDF in corso...');
    
    // Nascondi toolbar e status bar per il PDF
    const toolbar = document.getElementById('globalToolbar');
    const statusBar = document.getElementById('statusBar');
    const originalToolbarDisplay = toolbar.style.display;
    const originalStatusDisplay = statusBar.style.display;
    
    toolbar.style.display = 'none';
    statusBar.style.display = 'none';
    
    // Configura opzioni PDF
    const opt = {
        margin: 0,
        filename: `POS_RapidaAsfalti_Rev${documentData.revisione.numero}_${new Date().toISOString().split('T')[0]}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            letterRendering: true,
            allowTaint: false
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait',
            putOnlyUsedFonts: true,
            floatPrecision: 16
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    // Genera PDF
    html2pdf()
        .set(opt)
        .from(document.getElementById('documentContainer'))
        .save()
        .then(() => {
            updateStatus('PDF generato e scaricato con successo');
            
            // Ripristina toolbar e status bar
            toolbar.style.display = originalToolbarDisplay;
            statusBar.style.display = originalStatusDisplay;
        })
        .catch(error => {
            console.error('❌ Errore generazione PDF:', error);
            updateStatus('Errore nella generazione del PDF');
            
            // Ripristina toolbar e status bar anche in caso di errore
            toolbar.style.display = originalToolbarDisplay;
            statusBar.style.display = originalStatusDisplay;
        });
}

// ===== STAMPA =====
function printDocument() {
    updateStatus('Preparazione per la stampa...');
    
    // Salva prima di stampare
    saveAllData();
    
    // Avvia stampa
    window.print();
    
    updateStatus('Documento pronto per la stampa');
}

// ===== NUOVO DOCUMENTO =====
function newDocument() {
    // Reset dati
    documentData = {
        revisione: {
            numero: "1",
            data: new Date().toISOString().split('T')[0]
        },
        cliente: {
            intestazione: "",
            indirizzo: "",
            cap_citta: "",
            piva: ""
        },
        cantiere: {
            indirizzo: "",
            cap_citta: "",
            recapiti: ""
        },
        organigramma: {
            dipendente_1: "BOJAN STANIC",
            dipendente_2: "ZORAN STANIC",
            dipendente_3: "TOURAS JOSIC",
            dipendente_4: "JOSIC PETAR",
            dipendente_5: "MARHABAN ABDERRAHIM",
            dipendente_6: "MARHABAN FAHD",
            dipendente_7: "BADJIE BUBA",
            dipendente_8: "TOURAS PA BOY",
            dipendente_9: "CAMARA MORRAY"
        },
        lavoratori: [],
        lastSaved: null
    };
    
    selectedWorkers = [];
    
    // Pulisci localStorage
    localStorage.removeItem(CONFIG.STORAGE_KEY);
    
    // Aggiorna interfaccia
    document.querySelectorAll('[data-field]').forEach(field => {
        if (field.tagName === 'INPUT' || field.tagName === 'TEXTAREA' || field.tagName === 'SELECT') {
            field.value = '';
        } else {
            field.textContent = '';
        }
    });
    
    // Reinizializza componenti
    initializeWorkers();
    updateAllFields();
    updateRevisionDisplay();
    
    updateStatus('Nuovo documento creato');
}

// ===== GESTIONE UI =====
function updateStatus(message) {
    const statusElement = document.getElementById('statusText');
    if (statusElement) {
        statusElement.textContent = message;
    }
    console.log(`📊 Status: ${message}`);
}

function updateLastSaved() {
    const lastSavedElement = document.getElementById('lastSaved');
    if (lastSavedElement && documentData.lastSaved) {
        const date = new Date(documentData.lastSaved);
        lastSavedElement.textContent = `Ultimo salvataggio: ${date.toLocaleTimeString('it-IT')}`;
    }
}

function updateRevisionDisplay() {
    const revisionElement = document.getElementById('revisionDisplay');
    if (revisionElement) {
        revisionElement.textContent = documentData.revisione.numero;
    }
}

// ===== GESTIONE ERRORI =====
window.addEventListener('error', function(e) {
    console.error('❌ Errore JavaScript:', e.error);
    updateStatus('Si è verificato un errore. Controlla la console per i dettagli.');
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('❌ Promise non gestita:', e.reason);
    updateStatus('Errore nell\'elaborazione. Operazione annullata.');
});

// ===== EXPORT GLOBALE DELLE FUNZIONI =====
window.saveAllData = saveAllData;
window.exportToPDF = exportToPDF;
window.printDocument = printDocument;
window.newDocument = newDocument;
window.addWorker = addWorker;
window.removeWorker = removeWorker;
window.updateWorker = updateWorker;

// ===== LOG DI AVVIO =====
console.log(`
🏗️ POS RAPIDA ASFALTI SRL - Sistema Unificato
📋 Versione: 1.0.0
🏢 Azienda: ${CONFIG.COMPANY}
📄 Pagine: 6/${CONFIG.TOTAL_PAGES} (implementate)
⚡ Hot Keys: Ctrl+S, Ctrl+E, Ctrl+P, Ctrl+N
💾 Auto-save: Ogni ${CONFIG.AUTO_SAVE_INTERVAL/1000}s
🎯 Stato: Pronto per la compilazione
`);

// ===== FUTURE FEATURES PLACEHOLDER =====
// Qui verranno aggiunte le funzionalità per le pagine 7-18 quando saranno implementate

/*
TODO per prossime versioni:
- Implementare pagine 7-18
- Integrazione con Supabase
- Sistema di backup cloud
- Validazione avanzata dei dati
- Template personalizzabili
- Sistema di notifiche
- Esportazione in formato Word
- Firma digitale
- Sistema di approvazione
- Storico revisioni
*/