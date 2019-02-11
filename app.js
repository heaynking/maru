function date(){
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = y + "/" + m + "/" + d;
}

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

function getTable(){
    var table = document.getElementById("myTableData");


}

function addRow() {


    var Mymenu = document.getElementById("menu");
    var Mymenu_split = Mymenu.value.split(' ');
    var price_mixed = Mymenu_split[3];
    var price = price_mixed.match(/\d+/g).map(Number);
    var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    if (Mymenu_split[4]=="drink"){
        var row = table.insertRow(0);
    }else{
        var row = table.insertRow(rowCount);    
    }
    document.getElementById("menu").value = "";

    var table_json = {"jpn":Mymenu_split[1], "kor":Mymenu_split[2], "num":1, "price":price};
    row.insertCell(0).innerHTML= '<input style="height:60px; width:60px; font-size:30px; color:orange;" type="button" value = "X" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= table_json.jpn;
    row.insertCell(2).innerHTML= '<input style="color:orange; height:60px; width:50px; font-size:30px;" type="button" value = "-" onClick="Javacsript:minus(this)">&nbsp;&nbsp;&nbsp;&nbsp;<input style="height:60px; width:50px; font-size:30px; color:orange;" type="button" value = "+" onClick="Javacsript:plus(this)">';
    row.insertCell(3).innerHTML= table_json.num;
    row.insertCell(4).innerHTML= table_json.price;

    pricesum();
}

function pricesum(){
  var table = document.getElementById("myTableData"), sumVal = 0;

  for (var i = 1; i < table.rows.length; i++){
    sumVal = sumVal + parseInt(table.rows[i].cells[3].textContent) * parseInt(table.rows[i].cells[4].textContent);
  }
  document.getElementById("total").innerHTML = '合計：　¥　' + sumVal;
}

function deleteRow(obj) {
     
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    var result = confirm("지우시겠습니까?");
    if (result){
    table.deleteRow(index);
    pricesum();
    }
}



function load() {

    console.log("Page load finished");

}
