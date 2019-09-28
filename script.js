async function get() {
    return await fetch("table.json");
}

async function parse(response) {
    if (response.ok) {
        return await response.json();
    }
    return
}

/*
var json;
if (response.ok) {
    json = await response.json();
}
*/

async function sendJSON(object) {
    var response = await fetch("/table.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(object)
        });
}


async function main() {

    async function addElement(inps, b) {
        obj = {};
        cnt = a.rows.length;
        a.insertRow(cnt);
        for (var i = 0; i < inps.length; ++i) {
            // b[b.length] = {};
            // b[b.length - 1].Object.keys(b[0])[i] = inps[i].value;
            // var key = Object.keys(b[0])[i];
            obj[Object.keys(b[0])[i]] = inps[i].value;
            a.rows[cnt].insertCell(i);
            a.rows[cnt].cells[i].innerHTML = inps[i].value;
        }
        b[b.length] = obj;
        await sendJSON(b);
    }

    var json = await parse(await get());

    var b = json;
    a.border = 1;
    var header = a.createTHead().insertRow(0);
    var inps = [];
    for (var j=0; j<Object.keys(b[0]).length; ++j) {
        header.insertCell(j);
        header.cells[j].innerHTML=Object.keys(b[0])[j];
        var inp = document.createElement("input");
        inps[inps.length] = inp;
        document.body.appendChild(inp);
    }

    for (var i=0; i<b.length; ++i) {
        a.insertRow(i+1);
        for (var j=0; j<Object.keys(b[i]).length; ++j) {
            a.rows[i+1].insertCell(j);
            a.rows[i+1].cells[j].innerHTML=Object.values(b[i])[j];
        }
    }

    var add_button = document.body.appendChild(document.createElement("button"));
    add_button.innerHTML = "Add";
    
    add_button.addEventListener("click", await function(){addElement(inps, b);});

    return 0;
}

main();
