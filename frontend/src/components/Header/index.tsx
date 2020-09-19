import React from 'react';
import { Link } from 'react-router-dom';
import { FaList } from 'react-icons/fa';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <img
          src="http://www.levetecnologia.com.br/img/logo.png"
          alt="Leve tecnologia"
        />
        <Link to="/pessoas">
          Ir para Listagem de Pessoas
          <FaList name="faList" size={24} color="white" />
        </Link>
      </div>
    </Container>
  );
};

export default Header;
