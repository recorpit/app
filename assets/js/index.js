// Script minimo per homepage
document.addEventListener('DOMContentLoaded', function() {
    console.log('Generatore POS pronto!');
});

// Mostra messaggi (se necessario in futuro)
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
