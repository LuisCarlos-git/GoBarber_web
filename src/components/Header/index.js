import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Notifications from '../Notifications';

import logo from '../../assets/logo-roxa.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const data = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{data.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>

            <img
              src={
                data.avatar.url ||
                'https://api.adorable.io/avatars/100/abott@adorable.png'
              }
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
