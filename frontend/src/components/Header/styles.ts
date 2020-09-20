import styled from 'styled-components';

export const Container = styled.div`
  background: #2f3138;
  height: 140px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0px 100px;

    img {
      width: 200px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      text-decoration: none;
      font-size: 18px;
      color: white;

      svg {
        margin-left: 10px;
      }
    }
  }
`;
