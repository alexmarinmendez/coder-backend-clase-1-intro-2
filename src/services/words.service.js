export const largestWordService = (sen) => {
  const soloPalabras = sen.toLowerCase().match(/[a-z0-9]+/g);
  const palabrasOrdenadas = soloPalabras.sort((a, b) => b.length - a.length);
  const palabrasMasLargas = palabrasOrdenadas.filter(item => item.length === palabrasOrdenadas[0].length);
  return (palabrasMasLargas.length === 1) ? palabrasMasLargas[0] : palabrasMasLargas
}