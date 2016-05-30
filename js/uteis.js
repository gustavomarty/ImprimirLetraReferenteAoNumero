function ImprimirLetra(index)
{
  var numero = parseInt(index);
  var base = 0;
  var restoDiv = 0;
  var letra = "";

  if (numero < 26)
  {
    letra += String.fromCharCode(parseInt(index)+64);
  }
  else
  {
    base = parseInt(numero/26);
    if (numero % 26 == 0)
      base = base - 1;

    letra += String.fromCharCode(parseInt(base)+64) + String.fromCharCode(parseInt(index - base * 26)+64);
  }
  console.log(letra);
}
