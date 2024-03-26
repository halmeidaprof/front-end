let listaCompras = [];

function tratarDado(valorCampo){
  return valorCampo.trim();
}

function ehValido(valorCampo){
  let resultado = valorCampo.trim();
  return resultado.length && !!valorCampo;
}

function adicionar() {
  let item = document.getElementById('item').value;
  let valor = document.getElementById('valor').value;
  
  if(ehValido(item) && ehValido(valor)){
    listaCompras.push({'item': item, 'valor': valor});
  }else{
    alert('Existem campos inválidos');
    return;
  }
  
  console.log('listacompras ', listaCompras);
  
  document.getElementById('item').value = '';
  document.getElementById('valor').value = '';
  
}



