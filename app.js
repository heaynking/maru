function plus(obj){
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById('number').value = value;
    }
}
function minus(){
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number').value = value;
    }
}

function addRow() {
    var Mymenu = document.getElementById("menu");
    var Mymenu_split = Mymenu.value.split(' ');
    var price = Mymenu_split[3];
    var table = document.getElementById("myTableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= Mymenu_split[0];
    row.insertCell(2).innerHTML= Mymenu_split[1];
    row.insertCell(3).innerHTML= Mymenu_split[2];
    row.insertCell(4).innerHTML= '<form onsubmit="return false" oninput="o.value = parseInt(a.value)"><input style="width: 2em;" name="a" type="number" step="any"><output name="o" type="hidden"></output></form>';
    row.insertCell(5).innerHTML= price;
    
}

function sumprice(){
        let rows = document.querySelectorAll("table tr td:last-child");
        let sum = 0;
        for (let i = 0; i < rows.length; i++) {
            sum += Number(rows[i].textContent);
        }
 
        document.getElementById("total").textContent = sum;
}

function pricesum(){
  var table = document.getElementById("myTableData"), sumVal = 0;

  for (var i = 0; i < table.rows.length; i++){
    sumVal = sumVal + parseInt(table.rows[i].cells[4].textContent) * parseInt(table.rows[i].cells[5].textContent);
  }
  document.getElementById("total").innerHTML = sumVal;
}

function deleteRow(obj) {
     
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
   
}



function load() {
   
    console.log("Page load finished");

}
