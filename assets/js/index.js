// Script semplificato per homepage
document.addEventListener('DOMContentLoaded', function() {
    // Verifica che il modello esista nel server
    checkTemplateAvailability();
});

// Verifica disponibilità template
async function checkTemplateAvailability() {
    try {
        const response = await fetch('data/modello_base.docx', { method: 'HEAD' });
        if (!response.ok) {
            showMessage('warning', 'Attenzione: il modello base non è stato trovato in data/modello_base.docx');
        }
    } catch (error) {
        console.warn('Impossibile verificare il modello:', error);
    }
}

// Mostra messaggi
function showMessage(type, message) {
    const statusDiv = document.getElementById('statusMessage');
    if (!statusDiv) return;
    
    statusDiv.className = `status-message ${type}`;
    statusDiv.textContent = message;
    statusDiv.style.display = 'block';
    
    // Nascondi messaggio dopo 5 secondi
    setTimeout(() => {
        statusDiv.style.display = 'none';
    }, 5000);
}
