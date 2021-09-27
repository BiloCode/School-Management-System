import * as React from 'react';
import { View } from 'react-native';

import Button from '../../../components/atoms/Button';
import PerfilPicture from '../../../components/molecules/PerfilPicture';

const Login = () => (
  <View style={{ backgroundColor: 'white', height: '100%' }}>
    <PerfilPicture source="https://cdn.myanimelist.net/images/characters/8/437727.jpg" />
    <Button color="BLUE" size="SMALL" text="INGRESAR AL SISTEMA" ghost />
  </View>
);

export default Login;
