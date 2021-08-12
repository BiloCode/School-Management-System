import * as React from 'react';
import { View } from 'react-native';

//
import { ButtonComponent } from '../../components/atoms/Button';
// import { Paragraph } from '../../components/atoms/Paragraph/style';

const handleButton = () => console.log('Pressed me.');

const ScreenTest = () => (
  <View style={{ justifyContent: 'space-around', alignContent: 'space-around', flex: 3 }}>
    <ButtonComponent color="RED" size="normal" text="REALIZAR ENTREGA" onPress={handleButton} />
    <ButtonComponent color="RED" size="normal" text="REALIZAR ENTREGA" onPress={handleButton} ghost />
    <ButtonComponent color="RED" size="normal" text="REALIZAR ENTREGA" onPress={handleButton} opacity />
    <ButtonComponent color="RED" size="normal" text="REALIZAR ENTREGA" onPress={handleButton} ghost opacity />

    <ButtonComponent color="BLUE" size="small" text="REALIZAR ENTREGA" onPress={handleButton} />
    <ButtonComponent color="BLUE" size="small" text="REALIZAR ENTREGA" onPress={handleButton} ghost />
    <ButtonComponent color="BLUE" size="small" text="REALIZAR ENTREGA" onPress={handleButton} opacity />
    <ButtonComponent color="BLUE" size="small" text="REALIZAR ENTREGA" onPress={handleButton} ghost opacity />
  </View>
);

export default ScreenTest;
