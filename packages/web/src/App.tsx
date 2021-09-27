import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import RouterApplication from '@router';
import store from '@store';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <RouterApplication />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
