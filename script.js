function somar() {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);
  document.getElementById('resultado').textContent = `Resultado: ${n1 + n2}`;
}
