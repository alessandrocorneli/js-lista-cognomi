var elenco = ["Rossi","Bianchi","Verdi","Orsini"];
var cognomeUser = prompt("Inserisci il tuo cognome:");
elenco.push(cognomeUser);
for (var i = 0; i < elenco.length; i++) {
  elenco[i] = elenco[i].toUpperCase();
}
elenco.sort();
for ( i = 0; i < elenco.length; i++) {
  document.getElementById('listaUsers').innerHTML += '<li>' + elenco[i] + '</li>';
}
document.writeln("Elenco partecipanti:<p>");
document.writeln(elenco);
