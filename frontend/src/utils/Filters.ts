export function FilterCPF(cpf: string) {
  let cpfFormat = '';
  for (let i = 0; i < cpf.length; i += 1) {
    cpfFormat += cpf.charAt(i);
    if (i === 2) {
      cpfFormat += '.';
    }
    if (i === 5) {
      cpfFormat += '.';
    }
    if (i === 8) {
      cpfFormat += '-';
    }
  }

  return cpfFormat;
}

export function FilterTelefone(telefone: string) {
  let telefoneFormat = '';
  for (let i = 0; i < telefone.length; i += 1) {
    if (i === 0) {
      telefoneFormat += '(';
    }
    if (i === 2) {
      telefoneFormat += ')';
    }
    if (i === 7) {
      telefoneFormat += '-';
    }
    telefoneFormat += telefone.charAt(i);
  }
  return telefoneFormat;
}
