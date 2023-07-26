export const age = (birthYear, birthMonth) => {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const mesAtual = dataAtual.getMonth() + 1;
  let idade = anoAtual - birthYear;
  return (mesAtual < birthMonth) ? idade-- : idade;
}