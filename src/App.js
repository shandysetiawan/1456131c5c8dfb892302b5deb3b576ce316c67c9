import React, { useState } from 'react';
import { Card, Image, Button, Container, StickyBottomContainer, Header, Modal } from './components';
import { ArrowBackIcon, KeyboardArrowDownIcon } from './components/icon';
import menus from './data/menu';

function App() {
  const [showSticky, setShowSticky] = useState(false);

  return (
    <>
      <Container main>
        <Header>
          <ArrowBackIcon />
          <div>
            <div>Alamat Pengantaran</div>
            <div style={{ display: "flex", alignItems: "center" }}>Tokopedia Tower <KeyboardArrowDownIcon /></div>
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

      <Modal>

      </Modal>

    </>
  );
}

export default App;
