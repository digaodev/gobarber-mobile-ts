import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';

import { Container, Title, ButtonSignIn } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container style={{ flex: 1 }}>
      <Image source={logoImg} />

      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <ButtonSignIn
        onPress={() => {
          console.log('Entrar');
        }}
      >
        Entrar
      </ButtonSignIn>
    </Container>
  );
};

export default SignIn;
