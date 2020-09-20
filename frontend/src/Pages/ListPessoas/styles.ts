import styled from 'styled-components';

export const Container = styled.div``;

export const ListPessoa = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 60px;

  li {
    list-style: none;
    line-height: 24px;
    margin-bottom: 20px;
  }
`;

export const PessoaItem = styled.div`
  width: 690px;
  height: 230px;
  background: #f5f5f5;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 8px;
  box-shadow: 1px 1px 5px #999;

  strong {
    margin-bottom: 2px;
    font-size: 20px;
  }
  p {
    margin-bottom: 2px;
  }
  span {
    font-style: italic;
  }
  position: relative;
  div {
    position: absolute;
    bottom: 20px;
    right: 20px;
    button {
      border: 0px;
      cursor: pointer;
      transition: padding 300ms;
      &:hover {
        opacity: 0.9;
        padding: 5px;
      }
    }
  }
`;
