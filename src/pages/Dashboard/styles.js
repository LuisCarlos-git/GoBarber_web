import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      font-size: 20px;
      color: #fff;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 5px;
  background: #fff;

  strong {
    color: ${({ available }) => (available ? '#999' : '#7159c1')};
    font-size: 20px;
    display: block;
    font-weight: normal;
  }

  span {
    color: ${({ available }) => (available ? ' #999' : '#666')};
    margin-top: 10px;
    display: block;
  }

  opacity: ${({ past }) => (past ? 0.5 : 1)};
`;
