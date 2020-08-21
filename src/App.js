import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Card, Image, Button } from './components';
import menus from './data/menu';

function App() {
  return (
    <ThemeProvider theme={{}}>
      {menus.map(menu => <Card>
        <Image src={menu.image} />
        <div>rating</div>
        <h2>{menu.title}</h2>
        <div>{menu.cook_by} &middot; {menu.category}</div>
        <div>{menu.price}</div>
        <Button>ADD</Button>
      </Card>)
      }
    </ThemeProvider >
  );
}

export default App;
