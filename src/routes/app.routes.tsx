import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
    initialRouteName="SignIn"
  >
    <AuthStack.Screen name="Dashboard" component={Dashboard} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
