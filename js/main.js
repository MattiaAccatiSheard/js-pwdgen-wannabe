//chiedo qualcosa di prova con prompt
//struttura: prefix var - nome var - valore var
//let username = "Mattia";


//lo rendo visibile  con console.log(nome.var)
//funziona, ma (da errore:Uncaught TypeError: Cannot read properties of null (reading 'getContext') at screen.js: 1: 754 at screen.js: 1: 4630)


//non credo sia importante : PROVO PROMPT
//let username = prompt('come ti chiami?');
//console.log(username);
// subito non funzionava: REGOLA POSSIBILE:
//DEVO METTERE CONSOLE DOPO LA VARIABILE CHE LA DESCRIVE E MAI PRIMA



/////////////TRACCIA/////////////
//Chiedi all'utente il suo nome,
//poi chiedi il suo cognome,
//poi chiedi il suo colore preferito,
//infine scrivi sulla pagina nomecognomecolorepreferito23

/////////////INIZIO ESERCIZIO///////////////
let nome = prompt ('Come ti chiami?');
let cognome = prompt ('E il tuo cognome?');
let color = prompt ('Qual è il tuo colore preferito?');
let num = 23;


console.log( nome + cognome + color + num );
