function plus(obj){
        var index = obj.parentNode.parentNode.rowIndex;
        var table = document.getElementById("myTableData");
        hn = table.rows.item(this);
        alert(hn.innerHTML);
        hm = document.getElementById("amount");
        hm.value ++ ;
}
function minus(){
        hm = document.getElementById("amount");
        sum = document.getElementById("rowtotal");
    if (hm.value > 1) {
         hm.value -- ;
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
    row.insertCell(4).innerHTML= price;
    row.insertCell(5).innerHTML= '<input type="text" size="1" value="1" id="amount"><input type="button" value = "-" onClick="Javacsript:minus()"><input type="button" value = "+" onClick="Javacsript:plus(this)">';
}

function sumprice(){
        let rows = document.querySelectorAll("table tr td:last-child");
        let sum = 0;
        for (let i = 0; i < rows.length; i++) {
            sum += Number(rows[i].textContent);
        }
 
        document.getElementById("total").textContent = sum;
}

function deleteRow(obj) {
     
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
   
}



function load() {
   
    console.log("Page load finished");

}
