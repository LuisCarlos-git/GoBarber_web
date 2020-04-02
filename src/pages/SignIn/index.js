import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';

import logo from '../../assets/logo.svg';

export default function SingIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="Go Barber" />

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="text" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}
