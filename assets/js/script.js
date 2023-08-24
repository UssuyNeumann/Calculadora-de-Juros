document.getElementById('calculadora').addEventListener('click', function(){
    const valor = document.getElementById('valor').value;
    const juros = (document.getElementById('juros').value) / 100;
    const periodo = document.getElementById('periodo').value;
    
    const total = valor * (1 + juros)**periodo; 

    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.',','));
});