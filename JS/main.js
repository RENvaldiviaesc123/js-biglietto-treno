//Richiesta informazioni utente:nome, cognome, quantità km ed età.
    let userName = prompt("Inserisci il tuo nome");
    let userSurname = prompt("Inserisci il tuo cognome");
    let userAge = parseInt(prompt("Inserisci la tua età"));
    let kmAmount = parseInt(prompt("Inserisci la quantità di kilometri percorsi"));

//Calcoliamo il prezzo dei biglietti
    let firstPriceTicket = kmAmount * 0.21;
    console.log(
        ` Ciao ${userName} ${userSurname} il prezzo del tuo biglietto senza sconto è: ${firstPriceTicket}
        `
    );

//Calcoliamo gli sconti per le diverse fasce d'età (20% per i <18, normale per gli altri e 40% per i 65<)
        if (userAge >= 65) {
            //applichiamo lo sconto del 40% per i maggiori di 65 anni
            let scontoVec = (firstPriceTicket - (firstPriceTicket * 0.4));
            let nuovPriceVec = ( Math.round(scontoVec * 100) / 100 );
            console.log (
                `Evviva! ${userName}  ${userSurname} Ha ricevuto uno sconto del 40% sul prezzo del suo biglietto. Ora il prezzo 
                è di ${nuovPriceVec}.
                ` 
            )
        } else if (userAge < 18) {
            //applichiamo lo sconto del 20% per i minori di 18 anni
            let scontoMin = (firstPriceTicket - (firstPriceTicket * 0.2))
            let prezzoFinal1 = ( Math.round(scontoMin * 100) / 100 );
            console.log(
            `Evviva! ${userName}  ${userSurname} lei è minorenne quindi, avrà uno sconto del 20% sul prezzo del 
            biglietto. Perciò il prezzo è sceso a  ${prezzoFinal1}.
            `
            );
        } else {
            //Mostriamo solo il prezzo del biglietto senza alcun sconto sul prezzo 
            console.log(
                `Gentile ${userName}  ${userSurname} il prezzo del suo biglietto è ${firstPriceTicket}.
                `
            );
        }
