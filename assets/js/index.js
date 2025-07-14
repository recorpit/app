// Homepage con statistiche Supabase
document.addEventListener('DOMContentLoaded', async function() {
    console.log('Generatore POS pronto!');
    
    // Verifica connessione Supabase
    const isConnected = await checkSupabaseConnection();
    
    if (isConnected) {
        // Carica statistiche
        loadStats();
    } else {
        showMessage('warning', 'Database non connesso. Verifica la configurazione Supabase.');
    }
});

// Carica statistiche dal database
async function loadStats() {
    const result = await posDB.getStats();
    
    if (result.success) {
        // Mostra statistiche
        document.getElementById('stats').classList.remove('hidden');
        document.getElementById('totalPos').textContent = result.stats.totale;
        document.getElementById('posMonth').textContent = result.stats.ultimoMese;
        document.getElementById('clientiUnici').textContent = result.stats.clientiUnici;
    }
}

// Mostra messaggi
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
