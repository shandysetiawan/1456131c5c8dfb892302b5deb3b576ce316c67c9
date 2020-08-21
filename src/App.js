import React, { useState } from 'react';
import { Card, Image, Button, Container, StickyBottomContainer, Header, Modal } from './components';
import { ArrowBackIcon, KeyboardArrowDownIcon } from './components/icon';
import menus from './data/menu';

function App() {
  const [showSticky, setShowSticky] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchedText, setSearchedText] = useState('');

  return (
    <>
      <Container main>
        <Header>
          <ArrowBackIcon />
          <div>
            <div>Alamat Pengantaran</div>
            <div onClick={() => setShowModal(true)} style={{ display: "flex", alignItems: "center" }}>Tokopedia Tower <KeyboardArrowDownIcon /></div>
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

      <Modal show={showModal} setShow={setShowModal}>
        <div>
          Cek makanan yang tersedia di lokasi kamu!
          <input type="text" onChange={e => setSearchedText(e.target.value)} />

          {searchedText.length > 3 &&
            <ul>
              <li>list 1</li>
              <li>list 2</li>
              <li>list 3</li>
            </ul>
          }

        </div>
      </Modal>

    </>
  );
}

export default App;
