import { FC } from 'react';
import { Text } from '@chakra-ui/layout';

const LigthText: FC = ({ children }) => (
  <Text fontSize="sm" color="gray.300">
    {children}
  </Text>
);

export default LigthText;
