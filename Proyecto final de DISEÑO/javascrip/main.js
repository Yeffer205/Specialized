let menuTogle = document.querySelector('.menu-toggle');
let menuTogleIcon= document.querySelector('.menu-toggle i');
let menu= document.getElementById('cabeza');

menuTogle.addEventListener('click',e=>{
    menu.classList.toggle('show');
});



function alerta(){
    alert("Gracias por inscribirse nos comunicaremos con usted ");
    
    
    
}


function Sub(){
    var n, k, r, e, v, sum, avg;
    n=(document.getElementById('aname').value);
    k=parseFloat(document.getElementById('am').value);
    r=parseFloat(document.getElementById('aj').value);
    e=parseFloat(document.getElementById('ad').value);
    v=parseFloat(document.getElementById('an').value);
    // Calculating Total
    sum=k+r+e+v;
    avg=sum/4;
    // Display on Student Data
    var newTable = document.getElementById('PuntosEntabla');
    var row = newTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(0);
    var cell3 = row.insertCell(0);
    var cell4 = row.insertCell(0);

    cell4.innerHTML= n;
    cell3.innerHTML=sum;
    cell2.innerHTML = avg;

    if(avg>=13){
        cell1.innerHTML="<font>aprobado</font>";
    }else{
        cell1.innerHTML="<font>Desaprobado</font>";
    }
}
