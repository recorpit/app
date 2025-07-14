// Configurazione Supabase
const SUPABASE_URL = 'https://tuoprogetto.supabase.co'; // Sostituisci con il tuo URL
const SUPABASE_ANON_KEY = 'tua-anon-key'; // Sostituisci con la tua anon key

// Inizializza Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Verifica connessione
async function checkSupabaseConnection() {
    try {
        const { data, error } = await supabase.from('pos_documents').select('count');
        if (error && error.code === '42P01') {
            console.log('Tabella non trovata. Creala con lo schema fornito.');
            return false;
        }
        console.log('Connessione a Supabase riuscita!');
        return true;
    } catch (error) {
        console.error('Errore connessione Supabase:', error);
        return false;
    }
}

// Funzioni per la gestione dei POS
const posDB = {
    // Salva nuovo POS
    async create(posData) {
        try {
            const { data, error } = await supabase
                .from('pos_documents')
                .insert([{
                    cliente_nome: posData.intestazioneCliente,
                    cliente_data: posData,
                    cantiere_data: {
                        paese: posData.paesecantiere,
                        indirizzo: posData.indirizzocantiere
                    },
                    impresa_data: {
                        intestazione: posData.intestazioneImpresa,
                        indirizzo: posData.indirizzoimpresa,
                        cap: posData.capImpresa,
                        paese: posData.PaeseImpresa
                    },
                    lavorazioni: this.extractLavorazioni(posData),
                    data_generazione: new Date().toISOString(),
                    pdf_generato: true
                }])
                .select();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Errore salvataggio POS:', error);
            return { success: false, error };
        }
    },

    // Estrai lavorazioni dal form
    extractLavorazioni(posData) {
        const lavorazioni = [];
        for (let i = 1; i <= 6; i++) {
            if (posData[`prodottotest${i}`] || posData[`duratalav${i}`]) {
                lavorazioni.push({
                    descrizione: posData[`prodottotest${i}`] || '',
                    durata: posData[`duratalav${i}`] || ''
                });
            }
        }
        return lavorazioni;
    },

    // Recupera tutti i POS
    async getAll() {
        try {
            const { data, error } = await supabase
                .from('pos_documents')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Errore recupero POS:', error);
            return { success: false, error };
        }
    },

    // Recupera POS per ID
    async getById(id) {
        try {
            const { data, error } = await supabase
                .from('pos_documents')
                .select('*')
                .eq('id', id)
                .single();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Errore recupero POS:', error);
            return { success: false, error };
        }
    },

    // Cerca POS per cliente
    async searchByCliente(searchTerm) {
        try {
            const { data, error } = await supabase
                .from('pos_documents')
                .select('*')
                .ilike('cliente_nome', `%${searchTerm}%`)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Errore ricerca POS:', error);
            return { success: false, error };
        }
    },

    // Elimina POS
    async delete(id) {
        try {
            const { error } = await supabase
                .from('pos_documents')
                .delete()
                .eq('id', id);
            
            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error('Errore eliminazione POS:', error);
            return { success: false, error };
        }
    },

    // Statistiche
    async getStats() {
        try {
            // Totale POS
            const { count: totalPos } = await supabase
                .from('pos_documents')
                .select('*', { count: 'exact', head: true });

            // POS ultimo mese
            const lastMonth = new Date();
            lastMonth.setMonth(lastMonth.getMonth() - 1);
            
            const { count: posLastMonth } = await supabase
                .from('pos_documents')
                .select('*', { count: 'exact', head: true })
                .gte('created_at', lastMonth.toISOString());

            // Clienti unici
            const { data: clienti } = await supabase
                .from('pos_documents')
                .select('cliente_nome')
                .order('cliente_nome');
            
            const clientiUnici = [...new Set(clienti?.map(c => c.cliente_nome) || [])];

            return {
                success: true,
                stats: {
                    totale: totalPos || 0,
                    ultimoMese: posLastMonth || 0,
                    clientiUnici: clientiUnici.length
                }
            };
        } catch (error) {
            console.error('Errore statistiche:', error);
            return { success: false, error };
        }
    }
};

// Esporta per uso globale
window.posDB = posDB;
window.checkSupabaseConnection = checkSupabaseConnection;
