import React from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';

import {
  Container,
  Title,
  SignUpButton,
  BackToSignInButton,
  BackToSignInText,
} from './styles';

interface SignUpFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = React.useRef<FormHandles>(null);
  const emailInputRef = React.useRef<TextInput>(null);
  const passwordInputRef = React.useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleSignUp = React.useCallback(async (data: SignUpFormData): Promise<
    void
  > => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .required('Email é obrigatório')
          .email('Email inválido'),
        password: Yup.string().min(6, 'Senha deve ter no mínimo 6 dígitos'),
      });

      await schema.validate(data, { abortEarly: false });

      await api.post('/users', data);

      Alert.alert('Sucesso', 'Você já pode fazer seu login na plataforma');

      navigation.goBack();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      }

      Alert.alert(
        'Erro no cadastro',
        'Ocorreu um erro no cadastro. Verifique as credenciais',
      );
    }
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container style={{ flex: 1 }}>
            <Image source={logoImg} />

            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                name="name"
                icon="user"
                placeholder="Nome"
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => emailInputRef.current?.focus()}
              />
              <Input
                ref={emailInputRef}
                name="email"
                icon="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <SignUpButton onPress={() => formRef.current?.submitForm()}>
                Criar conta
              </SignUpButton>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignInButton onPress={() => navigation.navigate('SignIn')}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText>Voltar para o Login</BackToSignInText>
      </BackToSignInButton>
    </>
  );
};

export default SignIn;
