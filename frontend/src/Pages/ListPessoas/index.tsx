import React, { useEffect, useState, useCallback } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import Header from '../../components/Header';
import { FilterCPF, FilterTelefone } from '../../utils/Filters';
import api from '../../services/api';

import { Container, ListPessoa, PessoaItem } from './styles';

type Pessoa = {
  id: string;
  cpf: string;
  telefone: string;
  nome: string;
  filterCPF: string;
  filterTelefone: string;
};

const ListPessoas: React.FC = () => {
  const [pessoa, setPessoa] = useState<Pessoa[]>([{} as Pessoa]);

  useEffect(() => {
    async function loadPessoas() {
      const { data } = await api.get<Pessoa[]>('/pessoas');

      data.map(pessoas => {
        pessoas.filterCPF = FilterCPF(pessoas.cpf);
        pessoas.filterTelefone = FilterTelefone(pessoas.telefone);
      });

      setPessoa(data);
    }
    loadPessoas();
  }, []);

  const handleDelete = useCallback(
    (cpfPessoa: string) => {
      async function deletePessoa(cpf: string) {
        const filtroPessoas = pessoa.filter(pessoas => pessoas.cpf !== cpf);

        await api.delete(`pessoas/${cpf}`);
        setPessoa(filtroPessoas);
      }

      deletePessoa(cpfPessoa);
    },
    [pessoa],
  );

  return (
    <Container>
      <Header link="Voltar para Cadastro de Pessoas" caminho="/" />
      <ListPessoa>
        {pessoa.map(pessoaItem => (
          <li key={pessoaItem.id}>
            <PessoaItem>
              <p>{pessoaItem.filterCPF}</p>
              <strong>{pessoaItem.nome}</strong>
              <span>{pessoaItem.filterTelefone}</span>
              <div>
                <button
                  type="button"
                  onClick={() => handleDelete(pessoaItem.cpf)}
                >
                  <FaTrashAlt size={20} color="gray" />
                </button>
              </div>
            </PessoaItem>
          </li>
        ))}
      </ListPessoa>
    </Container>
  );
};

export default ListPessoas;
