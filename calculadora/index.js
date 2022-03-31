const btnCalcular = document.getElementById( 'btn-calcular' );

btnCalcular.addEventListener( 'click', function(){
  let cuenta = parseInt( document.querySelector( '#cuenta' ).value );
  let propina = parseInt( document.querySelector( '#propina' ).value );
  let totalCuenta = document.querySelector( '#total-cuenta' );
  let totalPropina = document.querySelector( '#total-propina' );
  let totalPagar = document.querySelector( '#total-pagar' );
  
  //Calculamos el total de la propina
  let calculoTotalPropina = ( cuenta * propina ) / 100;
  //Calculamos el total de la cuenta
  let calculoTotalPagar = cuenta + calculoTotalPropina;
  
  //Mostramos la información en pantalla
  totalCuenta.innerHTML = cuenta;
  totalPropina.innerHTML = calculoTotalPropina;
  totalPagar.innerHTML = calculoTotalPagar;
} );