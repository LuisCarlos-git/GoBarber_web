import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin: -20px 0 20px;
  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #eee;
    border: 3px solid rgba(255, 255, 255, 0.5);
  }

  input {
    display: none;
  }
`;
