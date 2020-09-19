import styled from 'styled-components';

export const Container = styled.div`
  background: #2f3138;
  padding: 10px 30px;
  height: 140px;

  div {
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: space-between;

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
