// lev 2_1

var edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veranderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veranderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veranderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veranderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veranderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veranderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veranderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veranderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veranderung: "0.00%" },
];

// Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.
newArr1 = [];
edelMetallPreise.forEach((x) => {
  console.log(x.name);
  newArr1.push(x.name);
});

// Verwende map() und greife auf alle name zu.
edelMetallPreise.map((x) => {
  console.log(x.name);
});
// Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese ein neues Array.
let newArr2 = [];
edelMetallPreise.forEach((x) => {
  newArr2.push(x.preiseGramEuro);
  console.log(newArr2);
});
// Verwende map() und greife auf alle preiseGramEuro zu.
edelMetallPreise.map((x) => {
  console.log(x.preiseGramEuro);
});
// Verwende forEach() und greife auf alle veranderung zu und pushe in ein neues Array.
console.log(newArr1);
console.log(newArr2);

let metalAndPrices = [];

newArr1.forEach((x) => {
  metalAndPrices.push(x);
});
console.log(metalAndPrices);
newArr2.forEach((x) => {
  metalAndPrices.push(x);
});
console.log(metalAndPrices);

// Verwende map() und greife auf alle veranderung zu.
newArr1.map((x) => {
  console.log("metal names: " + x);
});
newArr2.map((x) => {
  console.log("metal prices: " + x);
});
console.log(newArr1);
console.log(newArr2);

// Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu
console.log(edelMetallPreise.preiseGramEuro);

let expensiveMetals = edelMetallPreise.filter((x) => x.preiseGramEuro > 50);
console.log(expensiveMetals);

// Drucke alles als Tabelle in deinem HTML-Dokument aus.
function printTable() {
    edelMetallPreise.forEach((x) => {
      document.getElementById("output").innerHTML += 
        `<tr>
        <td> ${x.name} </td>
        <td> ${x.preiseGramEuro} </td>
        <td> ${x.veranderung} </td>
        </tr>`;
  });
}
printTable();