import React, { useState } from 'react';
import {
  Card,
  Image,
  Button,
  Container,
  StickyBottomContainer,
  Header,
  Modal,
  Input,
  ListContainer,
  ListItem,
  TruncatText,
  ButtonGroup,
  ButtonGroupItem,
  DateWrapper,
  AddCartButton,
  Date
} from './components';
import { ArrowBackIcon, KeyboardArrowDownIcon, StarIcon, PlaceIcon } from './components/icon';
import menus from './data/menu';
import locations from './data/location.json';
import dates from './data/date.json';

function App() {
  const [showSticky, setShowSticky] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchedText, setSearchedText] = useState('');

  return (
    <>
      <Header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowBackIcon />
          <div style={{ marginLeft: '12px' }}>
            <div>Alamat Pengantaran</div>
            <div onClick={() => setShowModal(true)} style={{ display: "flex", alignItems: "center" }}>Tokopedia Tower <KeyboardArrowDownIcon /></div>
          </div>
        </div>
        <DateWrapper>
          {dates.map(date => <Date tabIndex={date.active ? 0 : -1} disabled={!date.active}>
            <span>{date.day}</span>
            <span>{date.date}</span>
          </Date>)}
        </DateWrapper>
      </Header>

      <Container main>
        <ButtonGroup>
          <ButtonGroupItem fullWidth>Lunch</ButtonGroupItem>
          <ButtonGroupItem fullWidth>Dinner</ButtonGroupItem>
        </ButtonGroup>
        {menus.map(menu => <Card>
          <Image src={menu.image} />
          <Container>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", alignItems: "center" }}>{menu.rating}</div>
              <div style={{ display: "flex" }}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <h2>{menu.title}</h2>
            <div>{menu.cook_by} &middot; {menu.category}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {menu.price}
              <Button onClick={() => setShowSticky(true)}>ADD +</Button>
            </div>
          </Container>
        </Card>)
        }
      </Container>

      <StickyBottomContainer show={showSticky}>
        <AddCartButton />
      </StickyBottomContainer>

      <Modal show={showModal} setShow={setShowModal}>
        <div>
          <h4>Cek makanan yang tersedia di lokasi kamu!</h4>
          <Input type="text" onChange={e => setSearchedText(e.target.value)} />

          {searchedText.length >= 3 &&
            <ListContainer>
              {locations.map(location =>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <PlaceIcon />
                  <ListItem title={location.name}>
                    <TruncatText>{location.address}</TruncatText>
                  </ListItem>
                </div>
              )}
            </ListContainer>
          }
        </div>
      </Modal>
    </>
  );
};

export default App;;
