var km = prompt("Inserire i km");

var ticket = 0.21*km;

var eta= prompt("inserire l'età");

if (eta <= 18) {
  alert("l'importo da pagare è € "+ticket* 20 / 100);
}

else if (eta >= 65) {
  alert ("l'importo da pagare è € "+ticket* 40 / 100);
}

else{
  alert("l'importo da pagare è € "+ticket);
}
