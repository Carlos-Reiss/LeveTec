import React, { useState, useCallback } from 'react';
import InputMask from 'react-input-mask';

import { FaRegSave } from 'react-icons/fa';

import Header from '../../components/Header';
import { Container, MainCadastro, QrCode } from './styles';

import api from '../../services/api';
import qrcode from '../../assets/qrcode2.svg';

type Pessoa = {
  cpf: string;
  nome: string;
  telefone: string;
};

const Main: React.FC = () => {
  const [cpf, setCPF] = useState<string>('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(true);

  const handleCadastro = useCallback(() => {
    async function cadastro() {
      setLoading(false);
      if (cpf === '' || nome.length === 0 || telefone === '') {
        alert('Não pode cadastrar uma pessoa sem informar os campos abaixo');
        setLoading(true);
        return;
      }

      try {
        await api.post<Pessoa>('/pessoas', {
          nome,
          cpf,
          telefone,
        });
        setLoading(true);
        alert('Cadastro realizado com sucesso!');

        setCPF('');
        setNome('');
        setTelefone('');
      } catch (error) {
        alert('Erro Cpf já existente ou Invalido, tente novamente');
        setCPF('');
        setNome('');
        setTelefone('');
        setLoading(true);
      }
    }
    cadastro();
  }, [cpf, nome, telefone]);

  return (
    <Container>
      <Header />
      <div>
        <MainCadastro>
          <form>
            {loading ? (
              <fieldset>
                <legend> Cadastro de Pessoa: </legend>
                <div>
                  <label>CPF:</label>
                  <InputMask
                    mask="999.999.999-99"
                    placeholder="123.456.789-90"
                    value={cpf}
                    onChange={e => setCPF(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="nome">Nome completo:</label>
                  <input
                    placeholder="digite seu nome aqui..."
                    name="nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                </div>

                <div>
                  <label>Telefone:</label>
                  <InputMask
                    mask="(99)99999-9999"
                    placeholder="(00) 99999-9999"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                  />
                </div>
                <div>
                  <button type="button" onClick={handleCadastro}>
                    Cadastrar Pessoa
                    <FaRegSave name="faList" size={20} color="white" />
                  </button>
                </div>
              </fieldset>
            ) : (
              <p>Carregando...</p>
            )}
          </form>
        </MainCadastro>

        <QrCode>
          <a href="https://github.com/carlos-reiss/leveTec" target="_blank">
            <img src={qrcode} alt="" />
          </a>
        </QrCode>
      </div>
    </Container>
  );
};

export default Main;
