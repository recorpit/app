${generateFooter(24)}
    `;
}

function generateMixerPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">SCHEDA ATTREZZATURA - BETONIERA</h2>
        </div>
        
        <div class="equipment-card">
            <h4>🏗️ BETONIERA - Codice ATT-002</h4>
            
            <div class="checkbox-present">
                <strong>PRESENTE: ☐ SI ☑ NO</strong>
            </div>
            
            <table class="risk-table">
                <tr><th>RISCHIO</th><th>PROBABILITÀ</th><th>DANNO</th><th>ENTITÀ</th></tr>
                <tr>
                    <td>⚡ Elettrocuzione</td>
                    <td><span class="risk-level risk-basso">BASSO</span></td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                </tr>
                <tr>
                    <td>🔄 Impigliamento organi in movimento</td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                </tr>
                <tr>
                    <td>👁️ Getti di materiale</td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                    <td><span class="risk-level risk-basso">BASSO</span></td>
                    <td><span class="risk-level risk-basso">BASSO</span></td>
                </tr>
            </table>
            
            <h5>🔍 PRIMA DELL'USO:</h5>
            <ul>
                <li class="editable-element" data-type="text">Verificare l'integrità delle parti elettriche visibili</li>
                <li class="editable-element" data-type="text">Verificare l'efficienza del comando di emergenza</li>
                <li class="editable-element" data-type="text">Controllare la pulizia della vasca di impasto</li>
                <li class="editable-element" data-type="text">Verificare la stabilità della macchina</li>
            </ul>
            
            <h5>⚡ DURANTE L'USO:</h5>
            <ul>
                <li class="editable-element" data-type="text">Mantenere costante la pulizia dell'area circostante</li>
                <li class="editable-element" data-type="text">Non rimuovere le protezioni degli organi in movimento</li>
                <li class="editable-element" data-type="text">Non introdurre attrezzi nella vasca con motore acceso</li>
                <li class="editable-element" data-type="text">Nelle pause di lavoro spegnere il motore</li>
            </ul>
            
            <h5>🛡️ DOPO L'USO:</h5>
            <ul>
                <li class="editable-element" data-type="text">Scollegare elettricamente la macchina</li>
                <li class="editable-element" data-type="text">Eseguire le operazioni di revisione e manutenzione</li>
                <li class="editable-element" data-type="text">Pulire accuratamente la vasca di impasto</li>
            </ul>
            
            <h5>🦺 DPI DI RIFERIMENTO:</h5>
            <p class="editable-element" data-type="text">Casco, guanti da lavoro, calzature di sicurezza, occhiali protettivi</p>
        </div>
        
        ${generateFooter(25)}
    `;
}

function generateCompressorPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">SCHEDA ATTREZZATURA - COMPRESSORE</h2>
        </div>
        
        <div class="equipment-card">
            <h4>💨 COMPRESSORE - Codice ATT-003</h4>
            
            <div class="checkbox-present">
                <strong>PRESENTE: ☑ SI ☐ NO</strong>
            </div>
            
            <table class="risk-table">
                <tr><th>RISCHIO</th><th>PROBABILITÀ</th><th>DANNO</th><th>ENTITÀ</th></tr>
                <tr>
                    <td>💥 Scoppio serbatoio</td>
                    <td><span class="risk-level risk-basso">BASSO</span></td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                </tr>
                <tr>
                    <td>🔊 Rumore</td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                </tr>
                <tr>
                    <td>⚡ Elettrocuzione</td>
                    <td><span class="risk-level risk-basso">BASSO</span></td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                </tr>
            </table>
            
            <h5>🔍 PRIMA DELL'USO:</h5>
            <ul>
                <li class="editable-element" data-type="text">Posizionare la macchina in luogo ventilato</li>
                <li class="editable-element" data-type="text">Verificare l'efficienza del manometro</li>
                <li class="editable-element" data-type="text">Controllare l'integrità dell'isolamento elettrico</li>
                <li class="editable-element" data-type="text">Verificare l'efficienza della valvola di sicurezza</li>
            </ul>
            
            <h5>⚡ DURANTE L'USO:</h5>
            <ul>
                <li class="editable-element" data-type="text">Tenere sotto controllo i manometri</li>
                <li class="editable-element" data-type="text">Non rimuovere gli sportelli del compressore</li>
                <li class="editable-element" data-type="text">Effettuare i rifornimenti a motore spento</li>
                <li class="editable-element" data-type="text">Segnalare tempestivamente eventuali anomalie</li>
            </ul>
            
            <h5>🛡️ DOPO L'USO:</h5>
            <ul>
                <li class="editable-element" data-type="text">Spegnere il motore e scaricare il serbatoio</li>
                <li class="editable-element" data-type="text">Scollegare elettricamente la macchina</li>
                <li class="editable-element" data-type="text">Eseguire le operazioni di revisione e manutenzione</li>
            </ul>
            
            <h5>🦺 DPI DI RIFERIMENTO:</h5>
            <p class="editable-element" data-type="text">Casco, calzature di sicurezza, cuffie o tappi antirumore, guanti da lavoro</p>
        </div>
        
        ${generateFooter(26)}
    `;
}

function generateExcavatorPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">SCHEDA ATTREZZATURA - ESCAVATORE</h2>
        </div>
        
        <div class="equipment-card">
            <h4>🚜 ESCAVATORE - Codice ATT-004</h4>
            
            <div class="checkbox-present">
                <strong>PRESENTE: ☑ SI ☐ NO</strong>
            </div>
            
            <table class="risk-table">
                <tr><th>RISCHIO</th><th>PROBABILITÀ</th><th>DANNO</th><th>ENTITÀ</th></tr>
                <tr>
                    <td>🏗️ Ribaltamento</td>
                    <td><span class="risk-level risk-basso">BASSO</span></td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                </tr>
                <tr>
                    <td>⚠️ Investimento persone</td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                </tr>
                <tr>
                    <td>💥 Urti con strutture</td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                </tr>
            </table>
            
            <h5>🔍 PRIMA DELL'USO:</h5>
            <ul>
                <li class="editable-element" data-type="text">Controllare l'efficienza dei comandi</li>
                <li class="editable-element" data-type="text">Verificare l'efficienza del girofaro e dell'avvisatore acustico</li>
                <li class="editable-element" data-type="text">Garantire la visibilità del posto di manovra</li>
                <li class="editable-element" data-type="text">Verificare l'integrità dei tubi flessibili</li>
            </ul>
            
            <h5>⚡ DURANTE L'USO:</h5>
            <ul>
                <li class="editable-element" data-type="text">Segnalare l'operatività con il girofaro</li>
                <li class="editable-element" data-type="text">Non ammettere a bordo altre persone</li>
                <li class="editable-element" data-type="text">Nelle fasi di inattività posare a terra la benna</li>
                <li class="editable-element" data-type="text">Mantenere sgombra e pulita la cabina</li>
                <li class="editable-element" data-type="text">Richiedere l'aiuto di personale a terra per manovre in spazi ristretti</li>
            </ul>
            
            <h5>🛡️ DOPO L'USO:</h5>
            <ul>
                <li class="editable-element" data-type="text">Posizionare correttamente la macchina</li>
                <li class="editable-element" data-type="text">Azionare il freno di stazionamento</li>
                <li class="editable-element" data-type="text">Abbassare la benna a terra</li>
                <li class="editable-element" data-type="text">Eseguire le operazioni di revisione e manutenzione</li>
            </ul>
            
            <h5>🦺 DPI DI RIFERIMENTO:</h5>
            <p class="editable-element" data-type="text">Casco, calzature di sicurezza, guanti da lavoro, abbigliamento alta visibilità</p>
        </div>
        
        ${generateFooter(27)}
    `;
}

function generateCranePage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">SCHEDA ATTREZZATURA - AUTOGRU</h2>
        </div>
        
        <div class="equipment-card">
            <h4>🏗️ AUTOGRU - Codice ATT-005</h4>
            
            <div class="checkbox-present">
                <strong>PRESENTE: ☐ SI ☑ NO</strong>
            </div>
            
            <table class="risk-table">
                <tr><th>RISCHIO</th><th>PROBABILITÀ</th><th>DANNO</th><th>ENTITÀ</th></tr>
                <tr>
                    <td>🏗️ Caduta di carichi sospesi</td>
                    <td><span class="risk-level risk-basso">BASSO</span></td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                </tr>
                <tr>
                    <td>🏗️ Ribaltamento</td>
                    <td><span class="risk-level risk-basso">BASSO</span></td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                </tr>
                <tr>
                    <td>⚡ Elettrocuzione</td>
                    <td><span class="risk-level risk-basso">BASSO</span></td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                </tr>
            </table>
            
            <h5>🔍 PRIMA DELL'USO:</h5>
            <ul>
                <li class="editable-element" data-type="text">Verificare l'efficienza dei dispositivi frenanti</li>
                <li class="editable-element" data-type="text">Controllare l'efficienza delle protezioni</li>
                <li class="editable-element" data-type="text">Verificare l'efficienza del limitatore di carico</li>
                <li class="editable-element" data-type="text">Delimitare la zona di lavoro</li>
            </ul>
            
            <h5>⚡ DURANTE L'USO:</h5>
            <ul>
                <li class="editable-element" data-type="text">Mantenere la macchina in perfetto equilibrio</li>
                <li class="editable-element" data-type="text">Non utilizzare la gru come argano</li>
                <li class="editable-element" data-type="text">Mantenere tensionati i cavi</li>
                <li class="editable-element" data-type="text">Non effettuare manovre brusche</li>
                <li class="editable-element" data-type="text">Controllare che non vi siano persone nell'area di manovra</li>
            </ul>
            
            <h5>🛡️ DOPO L'USO:</h5>
            <ul>
                <li class="editable-element" data-type="text">Non lasciare carichi sospesi</li>
                <li class="editable-element" data-type="text">Posizionare correttamente la macchina</li>
                <li class="editable-element" data-type="text">Azionare il freno di stazionamento</li>
                <li class="editable-element" data-type="text">Eseguire le operazioni di revisione e manutenzione</li>
            </ul>
            
            <h5>🦺 DPI DI RIFERIMENTO:</h5>
            <p class="editable-element" data-type="text">Casco, calzature di sicurezza, guanti da lavoro, abbigliamento alta visibilità</p>
        </div>
        
        ${generateFooter(28)}
    `;
}

function generateFinalPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">FINE DOCUMENTO POS</h2>
        </div>
        
        <div style="text-align: center; margin: 4rem 0;">
            <h3 class="editable-element" data-type="text">Il presente Piano Operativo di Sicurezza</h3>
            <h3 class="editable-element" data-type="text">è stato redatto in conformità al</h3>
            <h3 class="editable-element" data-type="text">D.Lgs. 81/2008 e s.m.i.</h3>
        </div>
        
        <div style="margin: 3rem 0;">
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="width: 50%; padding: 2rem; border: 1px solid #ddd;">
                        <h4>👷 Il Datore di Lavoro</h4>
                        <p style="margin: 2rem 0;">RAPIDA ASFALTI SRL</p>
                        <div style="border-top: 1px solid #666; margin-top: 3rem; padding-top: 0.5rem;">
                            <em class="editable-element" data-type="text">Firma e Timbro</em>
                        </div>
                    </td>
                    <td style="width: 50%; padding: 2rem; border: 1px solid #ddd;">
                        <h4>🛡️ Il Responsabile RSPP</h4>
                        <p style="margin: 2rem 0;" class="editable-element" data-type="text">Nome RSPP</p>
                        <div style="border-top: 1px solid #666; margin-top: 3rem; padding-top: 0.5rem;">
                            <em class="editable-element" data-type="text">Firma</em>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        
        <div style="text-align: center; margin: 3rem 0;">
            <p><strong>Data redazione:</strong> <span class="editable-element" data-type="text">${new Date().toLocaleDateString('it-IT')}</span></p>
            <p><strong>Revisione n.:</strong> <span class="editable-element" data-type="text">2</span></p>
            <p><strong>Validità:</strong> <span class="editable-element" data-type="text">Per tutta la durata dei lavori</span></p>
        </div>
        
        <div style="margin-top: 4rem; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
            <p style="text-align: center; font-size: 0.9rem; color: #666;">
                <strong class="editable-element" data-type="text">RAPIDA ASFALTI SRL</strong><br>
                <span class="editable-element" data-type="text">Via Padre Leopoldo, 67/D - 36016 Thiene (VI)</span><br>
                <span class="editable-element" data-type="text">P.IVA 03996820241</span>
            </p>
        </div>
        
        ${generateFooter(29)}
    `;
}

// Funzioni per le altre pagine (continua...)
function generateActivitiesPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">5. ATTIVITÀ DEL CANTIERE</h2>
        </div>
        
        <div class="activities-content">
            <p class="editable-element" data-type="text">Le attività principali del cantiere comprendono tutte le fasi necessarie alla realizzazione dell'opera, nel rispetto delle normative vigenti in materia di sicurezza e salute sui luoghi di lavoro.</p>
            
            <h4>📋 Elenco Attività Principali</h4>
            <table class="risk-table">
                <tr><th>FASE</th><th>DESCRIZIONE ATTIVITÀ</th><th>DURATA</th></tr>
                <tr>
                    <td><strong>1</strong></td>
                    <td class="editable-element" data-type="text">Allestimento cantiere e installazione segnaletica</td>
                    <td class="editable-element" data-type="text">2 giorni</td>
                </tr>
                <tr>
                    <td><strong>2</strong></td>
                    <td class="editable-element" data-type="text">Demolizione e scarifica pavimentazione esistente</td>
                    <td class="editable-element" data-type="text">3 giorni</td>
                </tr>
                <tr>
                    <td><strong>3</strong></td>
                    <td class="editable-element" data-type="text">Scavi e movimentazione terra</td>
                    <td class="editable-element" data-type="text">4 giorni</td>
                </tr>
                <tr>
                    <td><strong>4</strong></td>
                    <td class="editable-element" data-type="text">Posa sottoservizi e opere di drenaggio</td>
                    <td class="editable-element" data-type="text">2 giorni</td>
                </tr>
                <tr>
                    <td><strong>5</strong></td>
                    <td class="editable-element" data-type="text">Realizzazione fondazione stradale</td>
                    <td class="editable-element" data-type="text">2 giorni</td>
                </tr>
                <tr>
                    <td><strong>6</strong></td>
                    <td class="editable-element" data-type="text">Stesa e compattazione conglomerato bituminoso</td>
                    <td class="editable-element" data-type="text">1 giorno</td>
                </tr>
                <tr>
                    <td><strong>7</strong></td>
                    <td class="editable-element" data-type="text">Finiture e ripristini</td>
                    <td class="editable-element" data-type="text">1 giorno</td>
                </tr>
            </table>
        </div>
        
        ${generateFooter(7)}
    `;
}

function generateModalitiesPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">6. MODALITÀ ORGANIZZATIVE</h2>
        </div>
        
        <div class="modalities-content">
            <h4>⏰ Orari di Lavoro</h4>
            <table class="risk-table">
                <tr><th>PERIODO</th><th>ORARIO</th><th>NOTE</th></tr>
                <tr>
                    <td><strong>Lunedì - Venerdì</strong></td>
                    <td class="editable-element" data-type="text">08:00 - 12:00 / 13:00 - 17:00</td>
                    <td class="editable-element" data-type="text">Orario standard</td>
                </tr>
                <tr>
                    <td><strong>Sabato</strong></td>
                    <td class="editable-element" data-type="text">08:00 - 12:00</td>
                    <td class="editable-element" data-type="text">Se necessario</td>
                </tr>
                <tr>
                    <td><strong>Domenica</strong></td>
                    <td class="editable-element" data-type="text">Riposo</td>
                    <td class="editable-element" data-type="text">Salvo emergenze</td>
                </tr>
            </table>
            
            <h4>🚧 Organizzazione del Cantiere</h4>
            <ul>
                <li class="editable-element" data-type="text"><strong>Accessi:</strong> Accesso principale da via definita dal PSC</li>
                <li class="editable-element" data-type="text"><strong>Viabilità:</strong> Percorsi separati per mezzi e pedoni</li>
                <li class="editable-element" data-type="text"><strong>Depositi:</strong> Aree dedicate per materiali e attrezzature</li>
                <li class="editable-element" data-type="text"><strong>Parcheggi:</strong> Area dedicata per veicoli del personale</li>
                <li class="editable-element" data-type="text"><strong>Rifiuti:</strong> Raccolta differenziata secondo normativa</li>
            </ul>
            
            <h4>📞 Comunicazioni</h4>
            <p class="editable-element" data-type="text">Tutte le comunicazioni di cantiere avverranno tramite il capo cantiere che mantiene i contatti con la direzione lavori e il coordinatore per la sicurezza in fase di esecuzione.</p>
        </div>
        
        ${generateFooter(8)}
    `;
}

function generateServicesPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">7. SERVIZI IGIENICO ASSISTENZIALI</h2>
        </div>
        
        <div class="services-content">
            <h4>🚿 Servizi Igienici</h4>
            <table class="risk-table">
                <tr><th>SERVIZIO</th><th>UBICAZIONE</th><th>CARATTERISTICHE</th></tr>
                <tr>
                    <td><strong>WC</strong></td>
                    <td class="editable-element" data-type="text">Bagno chimico portatile</td>
                    <td class="editable-element" data-type="text">Numero minimo secondo D.Lgs 81/08</td>
                </tr>
                <tr>
                    <td><strong>Lavabo</strong></td>
                    <td class="editable-element" data-type="text">Integrato nel bagno chimico</td>
                    <td class="editable-element" data-type="text">Acqua potabile e sapone</td>
                </tr>
                <tr>
                    <td><strong>Spogliatoio</strong></td>
                    <td class="editable-element" data-type="text">Container prefabbricato</td>
                    <td class="editable-element" data-type="text">Armadietti doppi per abbigliamento</td>
                </tr>
            </table>
            
            <h4>🍽️ Refettorio</h4>
            <p class="editable-element" data-type="text">Il refettorio è ubicato nel container ufficio, dotato di tavolo, sedie, frigorifero e scaldavivande. L'ambiente è riscaldato e ventilato secondo le normative vigenti.</p>
            
            <h4>⚕️ Primo Soccorso</h4>
            <ul>
                <li class="editable-element" data-type="text"><strong>Cassetta di pronto soccorso:</strong> Ubicata nell'ufficio di cantiere</li>
                <li class="editable-element" data-type="text"><strong>Responsabile:</strong> Capo cantiere con formazione specifica</li>
                <li class="editable-element" data-type="text"><strong>Numeri emergenza:</strong> 118 - 115 - 112</li>
                <li class="editable-element" data-type="text"><strong>Ospedale più vicino:</strong> Da definire secondo ubicazione cantiere</li>
            </ul>
            
            <h4>🧯 Antincendio</h4>
            <p class="editable-element" data-type="text">Estintori a polvere da 6 kg ubicati presso l'ufficio di cantiere e i depositi materiali. Responsabile antincendio: capo cantiere con formazione specifica.</p>
        </div>
        
        ${generateFooter(9)}
    `;
}

function generateEquipmentPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">8. ATTREZZATURE</h2>
        </div>
        
        <div class="equipment-content">
            <h4>🔧 Attrezzature Manuali</h4>
            <table class="risk-table">
                <tr><th>ATTREZZATURA</th><th>USO</th><th>RISCHI PRINCIPALI</th></tr>
                <tr>
                    <td class="editable-element" data-type="text">Martello demolitore</td>
                    <td class="editable-element" data-type="text">Demolizioni</td>
                    <td class="editable-element" data-type="text">Rumore, vibrazioni</td>
                </tr>
                <tr>
                    <td class="editable-element" data-type="text">Flex</td>
                    <td class="editable-element" data-type="text">Taglio materiali</td>
                    <td class="editable-element" data-type="text">Proiezione schegge, rumore</td>
                </tr>
                <tr>
                    <td class="editable-element" data-type="text">Trapano</td>
                    <td class="editable-element" data-type="text">Forature</td>
                    <td class="editable-element" data-type="text">Elettrocuzione, rumore</td>
                </tr>
            </table>
            
            <h4>🚜 Macchine e Mezzi d'Opera</h4>
            <table class="risk-table">
                <tr><th>MACCHINA</th><th>USO</th><th>OPERATORE</th></tr>
                <tr>
                    <td class="editable-element" data-type="text">Escavatore</td>
                    <td class="editable-element" data-type="text">Scavi e demolizioni</td>
                    <td class="editable-element" data-type="text">Con patentino</td>
                </tr>
                <tr>
                    <td class="editable-element" data-type="text">Pala caricatrice</td>
                    <td class="editable-element" data-type="text">Movimentazione materiali</td>
                    <td class="editable-element" data-type="text">Con patentino</td>
                </tr>
                <tr>
                    <td class="editable-element" data-type="text">Rullo compattatore</td>
                    <td class="editable-element" data-type="text">Compattazione</td>
                    <td class="editable-element" data-type="text">Con patentino</td>
                </tr>
                <tr>
                    <td class="editable-element" data-type="text">Finitrice</td>
                    <td class="editable-element" data-type="text">Stesa asfalto</td>
                    <td class="editable-element" data-type="text">Specializzato</td>
                </tr>
            </table>
            
            <h4>📋 Verifiche e Manutenzioni</h4>
            <p class="editable-element" data-type="text">Tutte le attrezzature sono soggette a verifiche periodiche secondo il programma di manutenzione aziendale e le disposizioni del costruttore. I libretti di uso e manutenzione sono sempre disponibili in cantiere.</p>
        </div>
        
        ${generateFooter(10)}
    `;
}

function generatePPEPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">9. DISPOSITIVI DI PROTEZIONE INDIVIDUALE</h2>
        </div>
        
        <div class="ppe-content">
            <h4>🦺 DPI Obbligatori per Tutti</h4>
            <table class="risk-table">
                <tr><th>DPI</th><th>NORMA</th><th>QUANDO UTILIZZARE</th></tr>
                <tr>
                    <td>🔨 <strong>Casco di protezione</strong></td>
                    <td class="editable-element" data-type="text">EN 397</td>
                    <td class="editable-element" data-type="text">Sempre in cantiere</td>
                </tr>
                <tr>
                    <td>👟 <strong>Calzature di sicurezza S3</strong></td>
                    <td class="editable-element" data-type="text">EN ISO 20345</td>
                    <td class="editable-element" data-type="text">Sempre in cantiere</td>
                </tr>
                <tr>
                    <td>🦺 <strong>Giubbotto alta visibilità</strong></td>
                    <td class="editable-element" data-type="text">EN ISO 20471</td>// Variabili globali
let currentPage = 1;
let totalPages = 29;
let editMode = false;
let selectedElement = null;
let formData = {
    committente: '',
    indirizzoCantiere: '',
    descrizioneLavori: '',
    dataInizio: '',
    dataFine: '',
    durataLavori: '',
    numeroOperatori: '',
    tipologiaLavori: 'Asfaltature',
    logoUrl: '',
    firmaUrl: ''
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    updatePageContent();
    updateNavigationButtons();
    loadSavedFormat();
}

function setupEventListeners() {
    // Navigation buttons
    document.getElementById('prevPageBtn').addEventListener('click', previousPage);
    document.getElementById('nextPageBtn').addEventListener('click', nextPage);
    document.getElementById('pageSelect').addEventListener('change', goToPage);
    
    // Zoom control
    document.getElementById('zoomSlider').addEventListener('input', updateZoom);
    
    // Form inputs
    const formInputs = ['committente', 'indirizzoCantiere', 'descrizioneLavori', 'dataInizio', 'dataFine', 'durataLavori', 'numeroOperatori', 'tipologiaLavori'];
    formInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', updateFormData);
        }
    });
    
    // File uploads
    setupFileUpload('logoFile', 'logoPreview', 'logo');
    setupFileUpload('firmaFile', 'firmaPreview', 'firma');
    
    // Step navigation
    document.querySelectorAll('.step-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const step = this.dataset.step;
            showStep(step);
        });
    });
    
    // Toolbar buttons
    document.getElementById('addTextBtn').addEventListener('click', addTextElement);
    document.getElementById('addImageBtn').addEventListener('click', showImageUploadModal);
    document.getElementById('addTableBtn').addEventListener('click', addTableElement);
    document.getElementById('addHeaderBtn').addEventListener('click', addHeaderElement);
    document.getElementById('addBoxBtn').addEventListener('click', addBoxElement);
    document.getElementById('editModeBtn').addEventListener('click', toggleEditMode);
    
    // Main buttons
    document.getElementById('saveFormatBtn').addEventListener('click', saveFormat);
    document.getElementById('previewBtn').addEventListener('click', showPreview);
    document.getElementById('generatePdfBtn').addEventListener('click', generatePDF);
    
    // Modal buttons
    document.getElementById('saveTextBtn').addEventListener('click', saveTextEdit);
    document.getElementById('cancelTextBtn').addEventListener('click', closeTextEditModal);
    document.getElementById('addImageConfirmBtn').addEventListener('click', addImageFromModal);
    document.getElementById('cancelImageBtn').addEventListener('click', closeImageUploadModal);
    
    // Properties panel
    document.getElementById('applyPropertiesBtn').addEventListener('click', applyProperties);
    document.getElementById('deleteElementBtn').addEventListener('click', deleteSelectedElement);
}

// Navigation functions
function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePageContent();
        updateNavigationButtons();
        document.getElementById('pageSelect').value = currentPage;
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePageContent();
        updateNavigationButtons();
        document.getElementById('pageSelect').value = currentPage;
    }
}

function goToPage() {
    const selectedPage = parseInt(document.getElementById('pageSelect').value);
    currentPage = selectedPage;
    updatePageContent();
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');
    const currentPageNum = document.getElementById('currentPageNum');
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    currentPageNum.textContent = currentPage;
}

function updateZoom() {
    const zoomValue = document.getElementById('zoomSlider').value;
    const documentPage = document.getElementById('documentPage');
    document.getElementById('zoomValue').textContent = zoomValue + '%';
    documentPage.style.transform = `scale(${zoomValue / 100})`;
}

// Form handling
function updateFormData() {
    formData.committente = document.getElementById('committente').value;
    formData.indirizzoCantiere = document.getElementById('indirizzoCantiere').value;
    formData.descrizioneLavori = document.getElementById('descrizioneLavori').value;
    formData.dataInizio = document.getElementById('dataInizio').value;
    formData.dataFine = document.getElementById('dataFine').value;
    formData.durataLavori = document.getElementById('durataLavori').value;
    formData.numeroOperatori = document.getElementById('numeroOperatori').value;
    formData.tipologiaLavori = document.getElementById('tipologiaLavori').value;
    
    updatePageContent();
}

function showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected step
    document.getElementById(`step${stepNumber}`).classList.add('active');
    
    // Update step buttons
    document.querySelectorAll('.step-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-step="${stepNumber}"]`).classList.add('active');
}

// File upload handling
function setupFileUpload(inputId, previewId, type) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    const uploadArea = input.parentElement;
    
    input.addEventListener('change', function(e) {
        handleFileUpload(e.target.files[0], preview, type);
    });
    
    // Drag and drop
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', function() {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleFileUpload(file, preview, type);
        }
    });
}

function handleFileUpload(file, previewElement, type) {
    if (!file || !file.type.startsWith('image/')) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = type;
        
        previewElement.innerHTML = '';
        previewElement.appendChild(img);
        
        if (type === 'logo') {
            formData.logoUrl = e.target.result;
        } else if (type === 'firma') {
            formData.firmaUrl = e.target.result;
        }
        
        updatePageContent();
    };
    reader.readAsDataURL(file);
}

// Page content generation
function updatePageContent() {
    const documentPage = document.getElementById('documentPage');
    const content = generatePageContent(currentPage);
    documentPage.innerHTML = content;
    
    if (editMode) {
        makeElementsEditable();
    }
}

function generatePageContent(pageNum) {
    switch(pageNum) {
        case 1: return generateCoverPage();
        case 2: return generateIndexPage();
        case 3: return generateDefinitionsPage();
        case 4: return generateSiteDataPage();
        case 5: return generateRolesPage();
        case 6: return generateOrganizationPage();
        case 7: return generateActivitiesPage();
        case 8: return generateModalitiesPage();
        case 9: return generateServicesPage();
        case 10: return generateEquipmentPage();
        case 11: return generatePPEPage();
        case 12: return generateTrainingPage();
        case 13: return generateHealthSurveillancePage();
        case 14: return generateEmergencyPage();
        case 15: return generateSignagePage();
        case 16: return generateInterferencePage();
        case 17: return generateSchedulePage();
        case 18: return generateRiskAssessment1Page();
        case 19: return generateRiskAssessment2Page();
        case 20: return generateRiskAssessment3Page();
        case 21: return generateRiskAssessment4Page();
        case 22: return generateRiskAssessment5Page();
        case 23: return generateEquipmentSheetsPage();
        case 24: return generateGasCylinderPage();
        case 25: return generateMixerPage();
        case 26: return generateCompressorPage();
        case 27: return generateExcavatorPage();
        case 28: return generateCranePage();
        case 29: return generateFinalPage();
        default: return generateCoverPage();
    }
}

function generateCoverPage() {
    return `
        <div class="pos-header">
            ${formData.logoUrl ? `<div class="logo-container">
                <img src="${formData.logoUrl}" alt="Logo" class="logo-display">
            </div>` : ''}
            <h1 class="pos-title editable-element" data-type="text">PIANO OPERATIVO DI SICUREZZA</h1>
            <p class="pos-subtitle editable-element" data-type="text">ai sensi del D.Lgs. 81/2008 - Art. 96 lett. g) e Allegato XV</p>
        </div>
        
        <div class="company-info">
            <div class="company-box">
                <h3>IL COMMITTENTE:</h3>
                <p class="editable-element" data-type="text">${formData.committente || 'Nome Committente'}</p>
                <p class="editable-element" data-type="text">${formData.indirizzoCantiere || 'Indirizzo Cantiere'}</p>
            </div>
            
            <div class="company-box">
                <h3>L'IMPRESA:</h3>
                <p><strong>RAPIDA ASFALTI SRL</strong></p>
                <p>VIA PADRE LEOPOLDO, 67/D</p>
                <p>36016 THIENE (VI)</p>
                <p>P.IVA 03996820241</p>
                ${formData.firmaUrl ? `<img src="${formData.firmaUrl}" alt="Firma" class="firma-display">` : ''}
            </div>
        </div>
        
        <div class="work-info">
            <h3>DESCRIZIONE LAVORI:</h3>
            <p class="editable-element" data-type="text">${formData.descrizioneLavori || 'Descrizione dei lavori da eseguire'}</p>
            
            <div style="margin-top: 2rem;">
                <p><strong>Data Inizio:</strong> <span class="editable-element" data-type="text">${formData.dataInizio || 'dd/mm/yyyy'}</span></p>
                <p><strong>Data Fine:</strong> <span class="editable-element" data-type="text">${formData.dataFine || 'dd/mm/yyyy'}</span></p>
                <p><strong>Durata:</strong> <span class="editable-element" data-type="text">${formData.durataLavori || '15'} giorni</span></p>
            </div>
        </div>
        
        ${generateFooter(1)}
    `;
}

function generateIndexPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">INDICE</h2>
        </div>
        
        <div class="index-content">
            <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>1. DEFINIZIONI ED ABBREVIAZIONI</strong></td><td style="text-align: right; padding: 0.5rem;">3</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>2. DATI DEL CANTIERE</strong></td><td style="text-align: right; padding: 0.5rem;">4</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>3. MANSIONI</strong></td><td style="text-align: right; padding: 0.5rem;">5</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>4. ORGANIZZAZIONE AZIENDALE</strong></td><td style="text-align: right; padding: 0.5rem;">6</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>5. ATTIVITÀ DEL CANTIERE</strong></td><td style="text-align: right; padding: 0.5rem;">7</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>6. MODALITÀ ORGANIZZATIVE</strong></td><td style="text-align: right; padding: 0.5rem;">8</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>7. SERVIZI IGIENICO ASSISTENZIALI</strong></td><td style="text-align: right; padding: 0.5rem;">9</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>8. ATTREZZATURE</strong></td><td style="text-align: right; padding: 0.5rem;">10</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>9. DISPOSITIVI DI PROTEZIONE INDIVIDUALE</strong></td><td style="text-align: right; padding: 0.5rem;">11</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>10. FORMAZIONE E INFORMAZIONE</strong></td><td style="text-align: right; padding: 0.5rem;">12</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>11. SORVEGLIANZA SANITARIA</strong></td><td style="text-align: right; padding: 0.5rem;">13</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>12. GESTIONE DELLE EMERGENZE</strong></td><td style="text-align: right; padding: 0.5rem;">14</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>13. SEGNALETICA DI CANTIERE</strong></td><td style="text-align: right; padding: 0.5rem;">15</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>14. INTERFERENZE</strong></td><td style="text-align: right; padding: 0.5rem;">16</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>15. CRONOPROGRAMMA</strong></td><td style="text-align: right; padding: 0.5rem;">17</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>16. VALUTAZIONE DEI RISCHI</strong></td><td style="text-align: right; padding: 0.5rem;">18</td></tr>
                <tr><td style="padding: 0.5rem; border-bottom: 1px solid #ddd;"><strong>17. SCHEDE TECNICHE ATTREZZATURE</strong></td><td style="text-align: right; padding: 0.5rem;">23</td></tr>
            </table>
        </div>
        
        ${generateFooter(2)}
    `;
}

function generateDefinitionsPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">1. DEFINIZIONI ED ABBREVIAZIONI</h2>
        </div>
        
        <div class="definitions-content">
            <div class="definition-item">
                <h4>📋 POS - Piano Operativo di Sicurezza</h4>
                <p class="editable-element" data-type="text">Documento complementare del PSC per le imprese esecutrici ai sensi dell'art. 96 del D.Lgs. 81/2008.</p>
            </div>
            
            <div class="definition-item">
                <h4>🏗️ PSC - Piano di Sicurezza e Coordinamento</h4>
                <p class="editable-element" data-type="text">Piano redatto dal coordinatore per la progettazione ai sensi dell'art. 100 del D.Lgs. 81/2008.</p>
            </div>
            
            <div class="definition-item">
                <h4>👷 DPI - Dispositivi di Protezione Individuale</h4>
                <p class="editable-element" data-type="text">Attrezzature destinate ad essere indossate e tenute dal lavoratore per proteggerlo contro uno o più rischi.</p>
            </div>
            
            <div class="definition-item">
                <h4>⚠️ DVR - Documento di Valutazione dei Rischi</h4>
                <p class="editable-element" data-type="text">Documento obbligatorio che deve essere elaborato dal datore di lavoro in tutte le aziende.</p>
            </div>
            
            <div class="definition-item">
                <h4>🚨 RSPP - Responsabile del Servizio di Prevenzione e Protezione</h4>
                <p class="editable-element" data-type="text">Persona in possesso delle capacità e dei requisiti professionali di cui all'articolo 32.</p>
            </div>
            
            <div class="definition-item">
                <h4>⚕️ MC - Medico Competente</h4>
                <p class="editable-element" data-type="text">Medico in possesso di uno dei titoli e dei requisiti formativi e professionali di cui all'articolo 38.</p>
            </div>
        </div>
        
        ${generateFooter(3)}
    `;
}

function generateSiteDataPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">2. DATI DEL CANTIERE</h2>
        </div>
        
        <div class="site-data-content">
            <table class="risk-table">
                <tr>
                    <th style="width: 30%;">DESCRIZIONE</th>
                    <th>DETTAGLI</th>
                </tr>
                <tr>
                    <td><strong>Committente</strong></td>
                    <td class="editable-element" data-type="text">${formData.committente || 'Nome Committente'}</td>
                </tr>
                <tr>
                    <td><strong>Indirizzo Cantiere</strong></td>
                    <td class="editable-element" data-type="text">${formData.indirizzoCantiere || 'Indirizzo completo del cantiere'}</td>
                </tr>
                <tr>
                    <td><strong>Tipologia Lavori</strong></td>
                    <td class="editable-element" data-type="text">${formData.tipologiaLavori || 'Asfaltature'}</td>
                </tr>
                <tr>
                    <td><strong>Data Inizio Lavori</strong></td>
                    <td class="editable-element" data-type="text">${formData.dataInizio || 'dd/mm/yyyy'}</td>
                </tr>
                <tr>
                    <td><strong>Data Fine Lavori</strong></td>
                    <td class="editable-element" data-type="text">${formData.dataFine || 'dd/mm/yyyy'}</td>
                </tr>
                <tr>
                    <td><strong>Durata Prevista</strong></td>
                    <td class="editable-element" data-type="text">${formData.durataLavori || '15'} giorni lavorativi</td>
                </tr>
                <tr>
                    <td><strong>Numero Operatori</strong></td>
                    <td class="editable-element" data-type="text">${formData.numeroOperatori || '5'} operatori</td>
                </tr>
                <tr>
                    <td><strong>Coordinatore Sicurezza</strong></td>
                    <td class="editable-element" data-type="text">Da definire secondo PSC</td>
                </tr>
            </table>
            
            <div style="margin-top: 2rem;">
                <h4>📝 Descrizione dei Lavori</h4>
                <p class="editable-element" data-type="text">${formData.descrizioneLavori || 'Descrizione dettagliata delle lavorazioni da eseguire nel cantiere, incluse le fasi operative e le modalità di intervento.'}</p>
            </div>
        </div>
        
        ${generateFooter(4)}
    `;
}

function generateRolesPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">3. MANSIONI</h2>
        </div>
        
        <div class="roles-content">
            <table class="risk-table">
                <tr>
                    <th>MANSIONE</th>
                    <th>DESCRIZIONE ATTIVITÀ</th>
                    <th>COMPETENZE RICHIESTE</th>
                </tr>
                <tr>
                    <td><strong>👷 Capo Cantiere</strong></td>
                    <td class="editable-element" data-type="text">Coordinamento delle attività, controllo qualità, sicurezza operatori</td>
                    <td class="editable-element" data-type="text">Esperienza cantiere, formazione sicurezza</td>
                </tr>
                <tr>
                    <td><strong>🚛 Operatore Macchine</strong></td>
                    <td class="editable-element" data-type="text">Conduzione escavatori, pale caricatrici, rulli compattatori</td>
                    <td class="editable-element" data-type="text">Patentino macchine movimento terra</td>
                </tr>
                <tr>
                    <td><strong>🔧 Operaio Specializzato</strong></td>
                    <td class="editable-element" data-type="text">Asfaltature, preparazione materiali, finiture</td>
                    <td class="editable-element" data-type="text">Esperienza asfaltature, uso attrezzature</td>
                </tr>
                <tr>
                    <td><strong>👨‍🔧 Operaio Comune</strong></td>
                    <td class="editable-element" data-type="text">Supporto alle lavorazioni, movimentazione materiali</td>
                    <td class="editable-element" data-type="text">Formazione base sicurezza</td>
                </tr>
                <tr>
                    <td><strong>🚚 Autista</strong></td>
                    <td class="editable-element" data-type="text">Trasporto materiali, conferimento inerti</td>
                    <td class="editable-element" data-type="text">Patente C+E, CQC merci</td>
                </tr>
            </table>
            
            <div style="margin-top: 2rem;">
                <h4>📋 Note Organizzative</h4>
                <p class="editable-element" data-type="text">Ogni operatore deve essere in possesso della formazione specifica per la mansione svolta e dell'idoneità sanitaria rilasciata dal Medico Competente. Il personale deve utilizzare costantemente i DPI assegnati secondo le procedure aziendali.</p>
            </div>
        </div>
        
        ${generateFooter(5)}
    `;
}

function generateOrganizationPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">4. ORGANIZZAZIONE AZIENDALE</h2>
        </div>
        
        <div class="organization-content">
            <h4>🏢 RAPIDA ASFALTI SRL</h4>
            <div class="company-box" style="margin: 1rem 0;">
                <p><strong>Sede Legale:</strong> Via Padre Leopoldo, 67/D - 36016 Thiene (VI)</p>
                <p><strong>P.IVA:</strong> 03996820241</p>
                <p><strong>Telefono:</strong> <span class="editable-element" data-type="text">0445 123456</span></p>
                <p><strong>Email:</strong> <span class="editable-element" data-type="text">info@rapidaasfalti.it</span></p>
            </div>
            
            <h4>👥 Organigramma Sicurezza</h4>
            <table class="risk-table">
                <tr>
                    <th>RUOLO</th>
                    <th>NOMINATIVO</th>
                    <th>QUALIFICA</th>
                </tr>
                <tr>
                    <td><strong>Datore di Lavoro</strong></td>
                    <td class="editable-element" data-type="text">Da definire</td>
                    <td>Legale Rappresentante</td>
                </tr>
                <tr>
                    <td><strong>RSPP</strong></td>
                    <td class="editable-element" data-type="text">Da definire</td>
                    <td>Responsabile Servizio Prevenzione e Protezione</td>
                </tr>
                <tr>
                    <td><strong>Medico Competente</strong></td>
                    <td class="editable-element" data-type="text">Da definire</td>
                    <td>Medico del Lavoro</td>
                </tr>
                <tr>
                    <td><strong>RLS</strong></td>
                    <td class="editable-element" data-type="text">Da definire</td>
                    <td>Rappresentante Lavoratori per la Sicurezza</td>
                </tr>
                <tr>
                    <td><strong>Preposto Cantiere</strong></td>
                    <td class="editable-element" data-type="text">Da definire</td>
                    <td>Capo Cantiere</td>
                </tr>
            </table>
            
            <div style="margin-top: 2rem;">
                <h4>📋 Responsabilità</h4>
                <p class="editable-element" data-type="text">L'organizzazione aziendale è strutturata secondo i requisiti del D.Lgs. 81/2008. Ogni figura ha compiti e responsabilità specifiche per garantire la sicurezza nei luoghi di lavoro e la corretta applicazione delle misure preventive.</p>
            </div>
        </div>
        
        ${generateFooter(6)}
    `;
}

function generateRiskAssessment1Page() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">VALUTAZIONE RISCHI - FASI 1-2</h2>
        </div>
        
        <h4>FASE 1: ALLESTIMENTO DEL CANTIERE</h4>
        <table class="risk-table">
            <tr><th>RISCHIO</th><th>PROBABILITÀ</th><th>DANNO</th><th>ENTITÀ</th><th>MISURE PREVENTIVE</th></tr>
            <tr>
                <td>⚠️ Investimento da veicoli</td>
                <td><span class="risk-level risk-medio">MEDIA</span></td>
                <td><span class="risk-level risk-alto">ALTO</span></td>
                <td><span class="risk-level risk-alto">ALTO</span></td>
                <td class="editable-element" data-type="text">Segnaletica, giubbotti alta visibilità, moviere</td>
            </tr>
            <tr>
                <td>🏗️ Caduta materiali dall'alto</td>
                <td><span class="risk-level risk-basso">BASSA</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Controllo carichi, delimitazione aree</td>
            </tr>
            <tr>
                <td>⚡ Elettrocuzione</td>
                <td><span class="risk-level risk-basso">BASSA</span></td>
                <td><span class="risk-level risk-alto">ALTO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Quadri certificati, protezioni differenziali</td>
            </tr>
        </table>
        
        <h4>FASE 2: DEMOLIZIONE E SCARIFICA</h4>
        <table class="risk-table">
            <tr><th>RISCHIO</th><th>PROBABILITÀ</th><th>DANNO</th><th>ENTITÀ</th><th>MISURE PREVENTIVE</th></tr>
            <tr>
                <td>💨 Inalazione polveri</td>
                <td><span class="risk-level risk-medio">MEDIA</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Maschere FFP2, bagnatura superfici</td>
            </tr>
            <tr>
                <td>🔊 Rumore</td>
                <td><span class="risk-level risk-alto">ALTA</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td><span class="risk-level risk-alto">ALTO</span></td>
                <td class="editable-element" data-type="text">Cuffie antirumore, rotazione operatori</td>
            </tr>
            <tr>
                <td>🏗️ Ribaltamento macchine</td>
                <td><span class="risk-level risk-basso">BASSA</span></td>
                <td><span class="risk-level risk-alto">ALTO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Verifiche stabilità, operatori qualificati</td>
            </tr>
        </table>
        
        ${generateFooter(18)}
    `;
}

function generateRiskAssessment2Page() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">VALUTAZIONE RISCHI - FASI 3-5</h2>
        </div>
        
        <h4>FASE 3: SCARICO DELLE ATTREZZATURE E/O DEI MATERIALI</h4>
        <table class="risk-table">
            <tr><th>RISCHIO</th><th>PROBABILITÀ</th><th>DANNO</th><th>ENTITÀ</th><th>MISURE PREVENTIVE</th></tr>
            <tr>
                <td>🏗️ Caduta di carichi sospesi</td>
                <td><span class="risk-level risk-basso">BASSA</span></td>
                <td><span class="risk-level risk-alto">ALTO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Controllo imbragature, delimitazione zone</td>
            </tr>
            <tr>
                <td>🦶 Schiacciamento piedi</td>
                <td><span class="risk-level risk-medio">MEDIA</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Calzature antinfortunistiche S3</td>
            </tr>
        </table>
        
        <h4>FASE 4: REALIZZAZIONE DELLA CARPENTERIA</h4>
        <table class="risk-table">
            <tr><th>RISCHIO</th><th>PROBABILITÀ</th><th>DANNO</th><th>ENTITÀ</th><th>MISURE PREVENTIVE</th></tr>
            <tr>
                <td>✂️ Tagli e abrasioni</td>
                <td><span class="risk-level risk-medio">MEDIA</span></td>
                <td><span class="risk-level risk-basso">BASSO</span></td>
                <td><span class="risk-level risk-basso">BASSO</span></td>
                <td class="editable-element" data-type="text">Guanti da lavoro, attenzione nell'uso utensili</td>
            </tr>
            <tr>
                <td>🔨 Colpi e urti</td>
                <td><span class="risk-level risk-medio">MEDIA</span></td>
                <td><span class="risk-level risk-basso">BASSO</span></td>
                <td><span class="risk-level risk-basso">BASSO</span></td>
                <td class="editable-element" data-type="text">Casco di protezione, ordine nell'area lavoro</td>
            </tr>
        </table>
        
        <h4>FASE 5: GETTO IN CALCESTRUZZO</h4>
        <table class="risk-table">
            <tr><th>RISCHIO</th><th>PROBABILITÀ</th><th>DANNO</th><th>ENTITÀ</th><th>MISURE PREVENTIVE</th></tr>
            <tr>
                <td>🧪 Contatto con sostanze chimiche</td>
                <td><span class="risk-level risk-medio">MEDIA</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Guanti impermeabili, lavaggio frequente</td>
            </tr>
            <tr>
                <td>🏗️ Caduta in piano</td>
                <td><span class="risk-level risk-basso">BASSA</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td><span class="risk-level risk-basso">BASSO</span></td>
                <td class="editable-element" data-type="text">Pulizia percorsi, calzature antiscivolo</td>
            </tr>
        </table>
        
        ${generateFooter(19)}
    `;
}

function generateRiskAssessment3Page() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">VALUTAZIONE RISCHI - FASI 6-8</h2>
        </div>
        
        <h4>FASE 6: LAVORAZIONE E POSA FERRI</h4>
        <table class="risk-table">
            <tr><th>RISCHIO</th><th>PROBABILITÀ</th><th>DANNO</th><th>ENTITÀ</th><th>MISURE PREVENTIVE</th></tr>
            <tr>
                <td>✂️ Punture e tagli</td>
                <td><span class="risk-level risk-alto">ALTA</span></td>
                <td><span class="risk-level risk-basso">BASSO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Guanti antitaglio, protezione punte ferro</td>
            </tr>
            <tr>
                <td>🏗️ Caduta dall'alto</td>
                <td><span class="risk-level risk-basso">BASSA</span></td>
                <td><span class="risk-level risk-alto">ALTO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Imbracature di sicurezza, parapetti</td>
            </tr>
        </table>
        
        <h4>FASE 7: MONTAGGIO ELEMENTI PREFABBRICATI</h4>
        <table class="risk-table">
            <tr><th>RISCHIO</th><th>PROBABILITÀ</th><th>DANNO</th><th>ENTITÀ</th><th>MISURE PREVENTIVE</th></tr>
            <tr>
                <td>🏗️ Caduta di carichi sospesi</td>
                <td><span class="risk-level risk-basso">BASSA</span></td>
                <td><span class="risk-level risk-alto">ALTO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Controllo gru, segnalazioni acustiche</td>
            </tr>
            <tr>
                <td>🦶 Schiacciamento</td>
                <td><span class="risk-level risk-medio">MEDIA</span></td>
                <td><span class="risk-level risk-alto">ALTO</span></td>
                <td><span class="risk-level risk-alto">ALTO</span></td>
                <td class="editable-element" data-type="text">Coordinamento movimenti, aree interdette</td>
            </tr>
        </table>
        
        <h4>FASE 8: REALIZZAZIONE IMPIANTI</h4>
        <table class="risk-table">
            <tr><th>RISCHIO</th><th>PROBABILITÀ</th><th>DANNO</th><th>ENTITÀ</th><th>MISURE PREVENTIVE</th></tr>
            <tr>
                <td>⚡ Elettrocuzione</td>
                <td><span class="risk-level risk-basso">BASSA</span></td>
                <td><span class="risk-level risk-alto">ALTO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Disattivazione linee, verifiche tensione</td>
            </tr>
            <tr>
                <td>🔥 Ustioni</td>
                <td><span class="risk-level risk-basso">BASSA</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td><span class="risk-level risk-basso">BASSO</span></td>
                <td class="editable-element" data-type="text">Guanti termici, raffreddamento metalli</td>
            </tr>
        </table>
        
        ${generateFooter(20)}
    `;
}

function generateRiskAssessment4Page() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">VALUTAZIONE RISCHI - FASE 9</h2>
        </div>
        
        <h4>FASE 9: SMONTAGGIO DEL PONTEGGIO</h4>
        <table class="risk-table">
            <tr><th>RISCHIO</th><th>PROBABILITÀ</th><th>DANNO</th><th>ENTITÀ</th><th>MISURE PREVENTIVE</th></tr>
            <tr>
                <td>🏗️ Caduta dall'alto</td>
                <td><span class="risk-level risk-medio">MEDIA</span></td>
                <td><span class="risk-level risk-alto">ALTO</span></td>
                <td><span class="risk-level risk-alto">ALTO</span></td>
                <td class="editable-element" data-type="text">Imbracature, procedure smontaggio graduale</td>
            </tr>
            <tr>
                <td>🏗️ Caduta di materiali dall'alto</td>
                <td><span class="risk-level risk-medio">MEDIA</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Delimitazione area, casco protezione</td>
            </tr>
            <tr>
                <td>🏗️ Crollo strutture</td>
                <td><span class="risk-level risk-basso">BASSA</span></td>
                <td><span class="risk-level risk-alto">ALTO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Smontaggio secondo schema autorizzato</td>
            </tr>
            <tr>
                <td>🔨 Urti e colpi</td>
                <td><span class="risk-level risk-alto">ALTA</span></td>
                <td><span class="risk-level risk-basso">BASSO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Casco, coordinamento movimenti</td>
            </tr>
            <tr>
                <td>🦶 Schiacciamento arti</td>
                <td><span class="risk-level risk-medio">MEDIA</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Calzature S3, guanti protezione</td>
            </tr>
        </table>
        
        <div style="margin-top: 2rem;">
            <h4>📋 Note Procedurali Fase 9</h4>
            <p class="editable-element" data-type="text">Lo smontaggio del ponteggio deve avvenire in sequenza inversa rispetto al montaggio, con particolare attenzione alla stabilità della struttura residua. È obbligatorio l'uso di imbracature di sicurezza per tutti gli operatori impegnati nelle operazioni di smontaggio.</p>
        </div>
        
        ${generateFooter(21)}
    `;
}

function generateRiskAssessment5Page() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">VALUTAZIONE RISCHI - FASE 10</h2>
        </div>
        
        <h4>FASE 10: FINITURE</h4>
        <table class="risk-table">
            <tr><th>RISCHIO</th><th>PROBABILITÀ</th><th>DANNO</th><th>ENTITÀ</th><th>MISURE PREVENTIVE</th></tr>
            <tr>
                <td>🧪 Inalazione vapori</td>
                <td><span class="risk-level risk-medio">MEDIA</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Maschere con filtri, ventilazione ambienti</td>
            </tr>
            <tr>
                <td>👁️ Irritazione agli occhi</td>
                <td><span class="risk-level risk-medio">MEDIA</span></td>
                <td><span class="risk-level risk-basso">BASSO</span></td>
                <td><span class="risk-level risk-basso">BASSO</span></td>
                <td class="editable-element" data-type="text">Occhiali protettivi, lavaggio frequente</td>
            </tr>
            <tr>
                <td>🧤 Dermatiti da contatto</td>
                <td><span class="risk-level risk-medio">MEDIA</span></td>
                <td><span class="risk-level risk-basso">BASSO</span></td>
                <td><span class="risk-level risk-basso">BASSO</span></td>
                <td class="editable-element" data-type="text">Guanti impermeabili, creme protettive</td>
            </tr>
            <tr>
                <td>🏗️ Caduta in piano</td>
                <td><span class="risk-level risk-basso">BASSA</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td><span class="risk-level risk-basso">BASSO</span></td>
                <td class="editable-element" data-type="text">Pulizia pavimenti, calzature antiscivolo</td>
            </tr>
            <tr>
                <td>🔥 Incendio</td>
                <td><span class="risk-level risk-basso">BASSA</span></td>
                <td><span class="risk-level risk-alto">ALTO</span></td>
                <td><span class="risk-level risk-medio">MEDIO</span></td>
                <td class="editable-element" data-type="text">Estintori, divieto fumo, ventilazione</td>
            </tr>
        </table>
        
        <div style="margin-top: 2rem;">
            <h4>🎨 Lavorazioni di Finitura Specifiche</h4>
            <ul>
                <li class="editable-element" data-type="text"><strong>Pitturazione:</strong> Uso di prodotti a bassa emissione, ventilazione forzata</li>
                <li class="editable-element" data-type="text"><strong>Impermeabilizzazioni:</strong> Controllo temperature applicazione, DPI specifici</li>
                <li class="editable-element" data-type="text"><strong>Rivestimenti:</strong> Taglio materiali con aspirazione polveri</li>
                <li class="editable-element" data-type="text"><strong>Serramenti:</strong> Movimentazione con ausili meccanici</li>
            </ul>
        </div>
        
        ${generateFooter(22)}
    `;
}

function generateEquipmentSheetsPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">17. SCHEDE TECNICHE ATTREZZATURE</h2>
        </div>
        
        <div class="equipment-intro">
            <p class="editable-element" data-type="text">Le seguenti schede tecniche descrivono le principali attrezzature utilizzate nel cantiere, con indicazione dei rischi specifici e delle misure di prevenzione da adottare.</p>
        </div>
        
        <div class="equipment-list">
            <h4>📋 Indice Attrezzature</h4>
            <table class="risk-table">
                <tr><th>ATTREZZATURA</th><th>CODICE</th><th>PAGINA</th><th>PRESENTE</th></tr>
                <tr>
                    <td>🔧 Bombola Gas</td>
                    <td>ATT-001</td>
                    <td>24</td>
                    <td><input type="checkbox" checked> SI ☐ NO</td>
                </tr>
                <tr>
                    <td>🏗️ Betoniera</td>
                    <td>ATT-002</td>
                    <td>25</td>
                    <td><input type="checkbox"> SI ☑ NO</td>
                </tr>
                <tr>
                    <td>💨 Compressore</td>
                    <td>ATT-003</td>
                    <td>26</td>
                    <td><input type="checkbox" checked> SI ☐ NO</td>
                </tr>
                <tr>
                    <td>🚜 Escavatore</td>
                    <td>ATT-004</td>
                    <td>27</td>
                    <td><input type="checkbox" checked> SI ☐ NO</td>
                </tr>
                <tr>
                    <td>🏗️ Autogru</td>
                    <td>ATT-005</td>
                    <td>28</td>
                    <td><input type="checkbox"> SI ☑ NO</td>
                </tr>
            </table>
        </div>
        
        <div style="margin-top: 2rem;">
            <h4>⚠️ Avvertenze Generali</h4>
            <ul>
                <li class="editable-element" data-type="text">Tutte le attrezzature devono essere utilizzate da personale formato e autorizzato</li>
                <li class="editable-element" data-type="text">Prima dell'uso verificare sempre l'efficienza dei dispositivi di sicurezza</li>
                <li class="editable-element" data-type="text">Rispettare scrupolosamente le procedure di manutenzione programmata</li>
                <li class="editable-element" data-type="text">In caso di anomalie sospendere immediatamente l'utilizzo</li>
                <li class="editable-element" data-type="text">Tenere sempre a disposizione i manuali d'uso e manutenzione</li>
            </ul>
        </div>
        
        ${generateFooter(23)}
    `;
}

function generateGasCylinderPage() {
    return `
        <div class="pos-header">
            <h2 class="pos-title">SCHEDA ATTREZZATURA - BOMBOLA GAS</h2>
        </div>
        
        <div class="equipment-card">
            <h4>🔧 BOMBOLA GAS - Codice ATT-001</h4>
            
            <div class="checkbox-present">
                <strong>PRESENTE: ☑ SI ☐ NO</strong>
            </div>
            
            <table class="risk-table">
                <tr><th>RISCHIO</th><th>PROBABILITÀ</th><th>DANNO</th><th>ENTITÀ</th></tr>
                <tr>
                    <td>💥 Esplosione</td>
                    <td><span class="risk-level risk-basso">BASSO</span></td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                </tr>
                <tr>
                    <td>🔥 Incendio</td>
                    <td><span class="risk-level risk-basso">BASSO</span></td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                </tr>
                <tr>
                    <td>🫁 Asfissia</td>
                    <td><span class="risk-level risk-basso">BASSO</span></td>
                    <td><span class="risk-level risk-alto">ALTO</span></td>
                    <td><span class="risk-level risk-medio">MEDIO</span></td>
                </tr>
            </table>
            
            <h5>🔍 PRIMA DELL'USO:</h5>
            <ul>
                <li class="editable-element" data-type="text">Verificare l'integrità delle bombole e dei riduttori di pressione</li>
                <li class="editable-element" data-type="text">Controllare la presenza di eventuali perdite</li>
                <li class="editable-element" data-type="text">Verificare la stabilità del supporto delle bombole</li>
                <li class="editable-element" data-type="text">Controllare la funzionalità degli strumenti di misura</li>
            </ul>
            
            <h5>⚡ DURANTE L'USO:</h5>
            <ul>
                <li class="editable-element" data-type="text">Trasportare le bombole con appositi carrelli</li>
                <li class="editable-element" data-type="text">Non fumare nelle vicinanze delle bombole</li>
                <li class="editable-element" data-type="text">Tenere le bombole lontane da fonti di calore</li>
                <li class="editable-element" data-type="text">Non utilizzare fiamme libere per ricercare perdite</li>
            </ul>
            
            <h5>🛡️ DOPO L'USO:</h5>
            <ul>
                <li class="editable-element" data-type="text">Chiudere sempre il rubinetto della bombola</li>
                <li class="editable-element" data-type="text">Riporre le bombole in luogo ventilato</li>
                <li class="editable-element" data-type="text">Controllare che i tappi di protezione siano montati</li>
            </ul>
            
            <h5>🦺 DPI DI RIFERIMENTO:</h5>
            <p class="editable-element" data-type="text">Guanti da lavoro, calzature di sicurezza, abbigliamento ignifugo quando necessario</p>
        </div>
        
        ${generateFooter(24)}
    `;
