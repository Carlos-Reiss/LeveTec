export default function LimparNome(cpf: string): string {
  let novoCpf = cpf.replace('.', '');
  novoCpf = novoCpf.replace('.', '');
  novoCpf = novoCpf.replace('-', '');
  return novoCpf;
}
