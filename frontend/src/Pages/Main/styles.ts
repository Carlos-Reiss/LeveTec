import styled from 'styled-components';

export const Container = styled.div`
  div {
    display: flex;
    flex-direction: row;
    padding: 20px 60px;
  }
`;

export const MainCadastro = styled.main`
  width: 620px;

  margin: 60px 200px;

  display: flex;
  flex-direction: column;
  position: relative;

  form fieldset {
    border: 1px solid lightgrey;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.6);

    border-radius: 8px;
    margin-top: 100px;
    padding: 10px 10px;

    legend {
      font-size: 18px;
      font-weight: bold;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      label {
        font-family: 'Roboto';
        font-size: 16px;
        font-weight: bold;
      }
      input {
        width: 60%;
        height: 30px;

        padding: 0px 30px 0px;

        border: 0.7px solid #999;
        border-radius: 10px;
        font-size: 16px;
        &:focus,
        &:hover {
          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
          border: 1px solid #327da8;
        }
      }
    }
  }

  form p {
    font-size: 24px;
    text-align: center;
    margin-top: 60px;
    font-weight: bold;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 15px;
    border: 0;
    border-radius: 8px;

    width: 180px;
    height: 60px;

    background: #2f3138;
    color: #f5f5f5;

    margin-left: 300px;

    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
    transition: opacity 600ms;

    &:hover {
      opacity: 0.9;
      color: white;
      box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.6);
      cursor: pointer;
    }

    svg {
      margin-left: 10px;
    }
  }
`;

export const QrCode = styled.div`
  position: absolute;

  a {
    position: relative;
    bottom: -340px;
    right: -1260px;
    img {
      opacity: 0.9;
      width: 280px;
      height: 280px;
    }
  }
`;
