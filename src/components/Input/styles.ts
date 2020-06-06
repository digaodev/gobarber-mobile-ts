import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  background: #232129;
  border-radius: 10px;
  height: 60px;
  width: 100%;
  margin-bottom: 12px;
  padding: 0 16px;
`;

export const TextInput = styled.TextInput`
  flex: 1;

  color: #fff;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
