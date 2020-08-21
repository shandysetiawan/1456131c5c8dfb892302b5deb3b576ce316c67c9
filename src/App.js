import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Card, Image, Button, Container } from './components';
import menus from './data/menu';

function App() {
  return (
    <ThemeProvider theme={{}}>
      <Container main>
        {menus.map(menu => <Card>
          <Image src={menu.image} />
          <Container>
            <div>rating</div>
            <h2>{menu.title}</h2>
            <div>{menu.cook_by} &middot; {menu.category}</div>
            <div>{menu.price}</div>
            <Button>ADD</Button>
          </Container>
        </Card>)
        }
      </Container>
    </ThemeProvider >
  );
}

export default App;
