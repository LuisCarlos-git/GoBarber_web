import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 50px auto;
  width: 600px;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 5px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      border: 0;
      border-radius: 5px;
      font-weight: bold;
      color: #fff;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#3b9eff')};
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.2);
      margin: 10px 0 20px;
    }
  }

  > button {
    width: 100%;
    margin: 5px 0 0;
    height: 44px;
    background: #f64c75;
    border: 0;
    border-radius: 5px;
    font-weight: bold;
    color: #fff;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#f64c75')};
    }
  }
`;
