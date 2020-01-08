var elenco = ["Rossi","Bianchi","Verdi","Orsini"];
var cognomeUser = prompt("Inserisci il tuo cognome:");
elenco.push(cognomeUser);
elenco.sort();
for ( i = 0; i < elenco.length; i++) {
  document.getElementById('listaUsers').innerHTML += '<li>' + elenco[i] + '</li>';
}
console.log("Elenco partecipanti:<p>");
console.log(elenco);
