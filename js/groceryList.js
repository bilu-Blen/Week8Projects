
groceryList = [];

function addGrocery() {
    var inp = document.getElementById("groceryname");
    groceryList.push(inp.value);
    inp.value  = "";
}

function showGrocery() {
    document.getElementById("showList").innerHTML = groceryList.join(", ");
}
