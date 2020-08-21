import React, { useState } from 'react';
import { Card, Image, Button, Container, StickyBottomContainer, Header, Modal, Input, ListContainer, ListItem, TruncatText, ButtonGroup, ButtonGroupItem } from './components';
import { ArrowBackIcon, KeyboardArrowDownIcon } from './components/icon';
import menus from './data/menu';
import locations from './data/location.json';

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
        <ButtonGroup>
          <ButtonGroupItem fullWidth>Lunch</ButtonGroupItem>
          <ButtonGroupItem fullWidth>Dinner</ButtonGroupItem>
        </ButtonGroup>
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
          <h4>Cek makanan yang tersedia di lokasi kamu!</h4>
          <Input type="text" onChange={e => setSearchedText(e.target.value)} />

          {searchedText.length >= 3 &&
            <ListContainer>
              {locations.map(location =>
                <ListItem title={location.name}>
                  <TruncatText>{location.address}</TruncatText>
                </ListItem>
              )}
            </ListContainer>
          }

        </div>
      </Modal>
    </>
  );
};

export default App;;
