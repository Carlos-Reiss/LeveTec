import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Header from '../../components/Header';
import { Container, MainCadastro } from './styles';


type Pessoa = {
  cpf: string;
  nome: string;
  telefone: string;
};

const Main: React.FC = () => {


  const [pessoa, setPessoa] = useState<Pessoa>({} as Pessoa);  

  return (
    <Container>
      <Header />

      <MainCadastro>
        <h3>Cadastrar Pessoa</h3>
        <form>
          <fieldset>
            <legend> Cadastro de Pessoa: </legend>
            <div>
              <label htmlFor="cpf">CPF:</label>
              <InputMask mask="999.999.999-99" placeholder="123.456.789-90" id="cpf" />
            </div>
            <div>
              <label htmlFor="nome" >Nome completo:</label>
              <input placeholder="digite seu nome aqui..." name="nome" id="nome" />
            </div>

            <div>
              <label htmlFor="telefone" >Telefone:</label>
              <InputMask mask="(99)99999-9999" placeholder="(00) 99999-9999" id="telefone"/>
            </div>
          </fieldset>
        </form>
        <button onClick={()=> console.log(pessoa)} >Salvar</button>
      </MainCadastro>
    </Container>
  );
};

export default Main;
