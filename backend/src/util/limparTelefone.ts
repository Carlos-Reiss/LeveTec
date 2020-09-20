export default function LimparTelefone(telefone: string): string {
  let novoTelefone = telefone.replace('(', '');
  novoTelefone = novoTelefone.replace(')', '');
  novoTelefone = novoTelefone.replace('-', '');
  return novoTelefone;
}
