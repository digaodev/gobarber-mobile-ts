import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  margin: 0 24px ${Platform.OS === 'android' ? 150 : 40}px 24px;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  margin: 64px 0 24px 0;
`;

export const SignUpButton = styled(Button)`
  margin-top: 16px;
`;

export const BackToSignInButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  background: #312e38;
  border-color: #232129;
  border-top-width: 1px;
  padding: 16px 0 ${14 + getBottomSpace()}px 0;
`;

export const BackToSignInText = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Regular';
  font-size: 20px;
  margin-left: 16px;
`;
