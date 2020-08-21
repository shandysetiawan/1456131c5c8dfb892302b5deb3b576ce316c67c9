import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Card } from './components';

function App() {
  return (
    <ThemeProvider theme={{}}>
      <Card>Kulina Test</Card>
    </ThemeProvider>
  );
}

export default App;
