import React from 'react';
import { Link } from 'react-router-dom';
import { FaList } from 'react-icons/fa';
import { Container } from './styles';

type Title = {
  link?: string;
  caminho?: string;
};

const Header: React.FC<Title> = ({
  link = 'Ir para a Listagem de Pessoas',
  caminho = '/pessoas',
}) => {
  return (
    <Container>
      <div>
        <Link to="/">
          <img
            src="http://www.levetecnologia.com.br/img/logo.png"
            alt="Leve tecnologia"
          />
        </Link>
        <Link to={caminho}>
          {link}
          <FaList name="faList" size={24} color="white" />
        </Link>
      </div>
    </Container>
  );
};

export default Header;
