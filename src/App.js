import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Card, Image, Button, Container, StickyBottomContainer, Header } from './components';
import { ArrowBack, KeyboardArrowDown } from './components/icon';
import menus from './data/menu';

function App() {
  const [showSticky, setShowSticky] = useState(false);

  return (
    <ThemeProvider theme={{}}>
      <Container main>
        <Header>
          <ArrowBack />
          <div>
            <div>Alamat Pengantaran</div>
            <div style={{ display: "flex", alignItems: "center" }}>Tokopedia Tower <KeyboardArrowDown /></div>
          </div>
        </Header>
        {menus.map(menu => <Card>
          <Image src={menu.image} />
          <Container>
            <div>rating</div>
            <h2>{menu.title}</h2>
            <div>{menu.cook_by} &middot; {menu.category}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {menu.price}
              <Button onClick={() => setShowSticky(true)}>Add</Button>
            </div>
          </Container>
        </Card>)
        }
      </Container>

      <StickyBottomContainer show={showSticky}>
        <Button fullWidth>Sticky Button</Button>
      </StickyBottomContainer>

    </ThemeProvider >
  );
}

export default App;
