import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function logout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Seu nome de usuario" />
        <Input name="email" placeholder="Digite seu email" />

        <hr />

        <Input name="oldPassword" placeholder="Sua senha atual" />
        <Input name="password" placeholder="Sua nova senha" />
        <Input name="confirmPassword" placeholder="Confirme sua senha" />

        <button type="submit">Alterar dados de cadastro</button>
      </Form>

      <button onClick={logout} type="button">
        Sair do GoBarber
      </button>
    </Container>
  );
}
