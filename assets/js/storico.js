// Gestione storico POS
document.addEventListener('DOMContentLoaded', async function() {
    // Carica tutti i POS all'avvio
    await loadAllPOS();
    
    // Event listener per ricerca con Enter
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchPOS();
        }
    });
});

// Carica tutti i POS
async function loadAllPOS() {
    showLoading();
    const result = await posDB.getAll();
    
    if (result.success) {
        displayPOSList(result.data);
    } else {
        showMessage('error', 'Errore nel caricamento dei POS');
        displayPOSList([]);
    }
}

// Cerca POS
async function searchPOS() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    
    if (!searchTerm) {
        loadAllPOS();
        return;
    }
    
    showLoading();
    const result = await posDB.searchByCliente(searchTerm);
    
    if (result.success) {
        displayPOSList(result.data);
        if (result.data.length === 0) {
            showMessage('info', 'Nessun risultato trovato per la ricerca');
        }
    } else {
        showMessage('error', 'Errore nella ricerca');
        displayPOSList([]);
    }
}

// Mostra lista POS
function displayPOSList(posList) {
    const container = document.getElementById('posListContainer');
    
    if (posList.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>📄 Nessun POS trovato</p>
                <button class="btn-primary" onclick="window.location.href='nuovo-pos.html'">
                    Crea il primo POS
                </button>
            </div>
        `;
        return;
    }
    
    let html = '<div class="pos-list">';
    
    posList.forEach(pos => {
        const dataGenerazione = new Date(pos.data_generazione).toLocaleDateString('it-IT');
        const cantiere = pos.cantiere_data;
        
        html += `
            <div class="pos-item">
                <div class="pos-item-header">
                    <h3>${pos.cliente_nome}</h3>
                    <span class="pos-date">${dataGenerazione}</span>
                </div>
                <div class="pos-item-details">
                    <p>📍 ${cantiere.indirizzo}, ${cantiere.paese}</p>
                    <p>🏗️ ${pos.lavorazioni.length} lavorazioni</p>
                </div>
                <div class="pos-item-actions">
                    <button class="btn-secondary btn-small" onclick="viewDetails('${pos.id}')">
                        👁️ Dettagli
                    </button>
                    <button class="btn-secondary btn-small" onclick="regeneratePDF('${pos.id}')">
                        📄 Rigenera PDF
                    </button>
                    <button class="btn-secondary btn-small btn-danger" onclick="deletePOS('${pos.id}')">
                        🗑️ Elimina
                    </button>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Visualizza dettagli POS
async function viewDetails(id) {
    const result = await posDB.getById(id);
    
    if (result.success) {
        const pos = result.data;
        const modalContent = document.getElementById('modalContent');
        
        let lavorazioniHtml = '';
        pos.lavorazioni.forEach((lav, index) => {
            lavorazioniHtml += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${lav.descrizione}</td>
                    <td>${lav.durata} gg</td>
                </tr>
            `;
        });
        
        modalContent.innerHTML = `
            <div class="detail-section">
                <h3>Cliente</h3>
                <p><strong>${pos.cliente_data.intestazioneCliente}</strong></p>
                <p>${pos.cliente_data.indirizzocliente}</p>
                <p>${pos.cliente_data.capcliente} ${pos.cliente_data.Paesecliente}</p>
                <p>P.IVA: ${pos.cliente_data.pivacliente || '-'}</p>
            </div>
            
            <div class="detail-section">
                <h3>Cantiere</h3>
                <p>${pos.cantiere_data.indirizzo}</p>
                <p>${pos.cantiere_data.paese}</p>
            </div>
            
            <div class="detail-section">
                <h3>Impresa Esecutrice</h3>
                <p><strong>${pos.impresa_data.intestazione}</strong></p>
                <p>${pos.impresa_data.indirizzo}</p>
                <p>${pos.impresa_data.cap} ${pos.impresa_data.paese}</p>
            </div>
            
            <div class="detail-section">
                <h3>Lavorazioni</h3>
                <table class="detail-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Descrizione</th>
                            <th>Durata</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${lavorazioniHtml}
                    </tbody>
                </table>
            </div>
            
            <div class="detail-section">
                <p><small>Generato il ${new Date(pos.data_generazione).toLocaleString('it-IT')}</small></p>
            </div>
        `;
        
        openModal();
    } else {
        showMessage('error', 'Errore nel caricamento dei dettagli');
    }
}

// Rigenera PDF da dati esistenti
async function regeneratePDF(id) {
    const result = await posDB.getById(id);
    
    if (result.success) {
        // Reindirizza a nuovo-pos con i dati precompilati
        localStorage.setItem('regeneratePOS', JSON.stringify(result.data));
        window.location.href = 'nuovo-pos.html?regenerate=true';
    } else {
        showMessage('error', 'Errore nel recupero dei dati');
    }
}

// Elimina POS
async function deletePOS(id) {
    if (!confirm('Sei sicuro di voler eliminare questo POS?')) {
        return;
    }
    
    const result = await posDB.delete(id);
    
    if (result.success) {
        showMessage('success', 'POS eliminato con successo');
        loadAllPOS();
    } else {
        showMessage('error', 'Errore nell\'eliminazione');
    }
}

// Modal functions
function openModal() {
    document.getElementById('detailModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('detailModal').classList.add('hidden');
}

// Utility functions
function showLoading() {
    document.getElementById('posListContainer').innerHTML = `
        <div class="loading">
            <p>⏳ Caricamento in corso...</p>
        </div>
    `;
}

function showMessage(type, message) {
    const statusDiv = document.getElementById('statusMessage');
    if (!statusDiv) return;
    
    statusDiv.className = `status-message ${type}`;
    statusDiv.textContent = message;
    statusDiv.style.display = 'block';
    
    setTimeout(() => {
        statusDiv.style.display = 'none';
    }, 5000);
}

// Chiudi modal cliccando fuori
window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target === modal) {
        closeModal();
    }
}
