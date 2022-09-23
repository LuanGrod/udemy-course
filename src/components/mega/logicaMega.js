function sortearNumero(min, max, array) {
  let random = Math.floor(Math.random() * (max + 1 - min) + min);
  return array.includes(random) ? sortearNumero(min, max, array) : random;
}

function gerarNumeros(qtde) {
  const numeros = Array(qtde)
    .fill(0)
    .reduce((nums) => {
      const novoNumero = sortearNumero(1, 60, nums);
      return [...nums, novoNumero];
    }, [])
    .sort((n1, n2) => n1 - n2);

  return numeros;
}
