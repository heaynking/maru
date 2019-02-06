function plus(obj){
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    for (var i = 1; i < table.rows.length; i++){
      var value = parseInt(table.rows[index].cells[4].textContent);
    }
    value++;
    for (var i = 1; i < table.rows.length; i++){
      table.rows[index].cells[4].textContent = value;
    }
    pricesum();
    
}
function minus(obj){
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    for (var i = 1; i < table.rows.length; i++){
      var value = parseInt(table.rows[index].cells[4].textContent);
    }
    value--;
    for (var i = 1; i < table.rows.length; i++){
      table.rows[index].cells[4].textContent = value;
    }
    pricesum();
    
}

function addRow() {
    var Mymenu = document.getElementById("menu");
    var Mymenu_split = Mymenu.value.split(' ');
    var price_mixed = Mymenu_split[3];
    var price = price_mixed.match(/\d+/g).map(Number);
    var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    document.getElementById("menu").value = "";

    row.insertCell(0).innerHTML= '<input style="height:60px; width:60px; font-size:30px;" type="button" value = "X" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= Mymenu_split[1];
    row.insertCell(2).innerHTML= Mymenu_split[2];
    row.insertCell(3).innerHTML= '<input style="height:60px; width:60px; font-size:50px;" type="button" value = "-" onClick="Javacsript:minus(this)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input style="height:60px; width:60px; font-size:50px;" type="button" value = "+" onClick="Javacsript:plus(this)">';
    row.insertCell(4).innerHTML= '1';
    row.insertCell(5).innerHTML= price;
    pricesum();
}

function pricesum(){
  var table = document.getElementById("myTableData"), sumVal = 0;

  for (var i = 1; i < table.rows.length; i++){
    sumVal = sumVal + parseInt(table.rows[i].cells[4].textContent) * parseInt(table.rows[i].cells[5].textContent);
  }
  document.getElementById("total").innerHTML = '合計：　¥　' + sumVal;
}

function deleteRow(obj) {
     
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);

    pricesum();
   
}



function load() {
   
    console.log("Page load finished");

}
