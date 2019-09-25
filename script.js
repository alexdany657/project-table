/*
var response = await fetch("table.json");
var json;
if (response.ok) {
    json = await response.json();
}

alert("1");
console.log(json);
*/
var header = a.createTHead().insertRow(0);
for (var j=0; j<Object.keys(b[0]).length; ++j) {
    header.insertCell(j);
    header.cells[j].innerHTML=Object.keys(b[0])[j];
}

for (var i=0; i<b.length; ++i) {
    a.insertRow(i+1);
    for (var j=0; j<Object.keys(b[i]).length; ++j) {
        a.rows[i+1].insertCell(j);
        a.rows[i+1].cells[j].innerHTML=Object.values(b[i])[j];
    }
}
