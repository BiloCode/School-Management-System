import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/native/Login';
import Home from '../../screens/native/Home';

const Stack = createStackNavigator();

const DefaultStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default DefaultStack;
