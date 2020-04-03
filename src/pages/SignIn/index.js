import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Informe um email valido')
    .required('E-mail obrigatorio'),
  password: Yup.string()
    .min(6, 'No minimo 6 caracteres')
    .required('Senha obrigatoria'),
});

export default function SingIn() {
  const dispacth = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispacth(signInRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="Go Barber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="text" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">{loading ? 'Carregando...' : ' Acessar'}</button>
        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}
