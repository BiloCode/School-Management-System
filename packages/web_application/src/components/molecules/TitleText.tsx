import * as React from 'react';
import { View } from 'react-native';

import Text from '../atoms/Text';

type TProps = {
  title: string;
  text: string;
};

const TitleText = ({ text, title }: TProps) => (
  <View>
    <View style={{ marginBottom: 2 }}>
      <Text weight="BLACK" size="BIG">
        {title}
      </Text>
    </View>
    <Text size="SMALL">{text}</Text>
  </View>
);

export default TitleText;
