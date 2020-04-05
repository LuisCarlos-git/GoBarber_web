import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;
export const Content = styled.div`
  height: 65px;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: #7159c1;
      font-weight: bold;
      transition: color 0.2s;

      &:hover {
        color: ${darken(0.2, '#7159c1')};
      }
    }

    img {
      padding-right: 20px;
      margin-right: 20px;
    }
  }
  aside {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    padding-left: 20px;
    text-align: right;
    margin-right: 15px;
    padding-right: 15px;

    a {
      color: #7159c1;
      transition: color 0.2s;

      &:hover {
        color: ${darken(0.2, '#7159c1')};
      }
    }
  }

  strong {
    font-size: 16px;
  }
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;
