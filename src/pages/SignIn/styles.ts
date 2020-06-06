import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  margin: 0 24px;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  margin: 64px 0 24px 0;
`;

export const ButtonSignIn = styled(Button)`
  margin-top: 16px;
`;
