import styled from 'styled-components';

export const Container = styled.div`
  div {
    display: flex;
    flex-direction: row;
    padding: 20px 60px;
  }
`;

export const MainCadastro = styled.main`
  width: 580px;

  margin: 80px 50px;

  form 
  fieldset {
    border: 0.5px solid lightgrey;
    border-radius: 8px;
    margin-top: 30px;
    padding: 10px 10px;
    
    div{
      
      display: flex;
      align-items: center;
      justify-content: space-between;

      label{
        font-family: 'Roboto';
        font-size: 16px;
      }
      input{
        width: 60%;
        height: 30px;

        padding: 0px 20px 0px;

        border: 0.7px solid #999;
        border-radius: 4px;
        font-size: 16px;
      }      
    }
  }
`;
