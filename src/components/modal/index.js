import React from "react";
import styled from "styled-components";
import { CloseIcon } from "../icon";

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const ModalContent = styled.div`
  position: absolute;
  width: 370px;
  height: 80vh;
  bottom: 0;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-size: 12px;
  margin-left: 37%;
`;

const ModalChildren = styled.div`
  margin-top: 32px;
  padding: 0 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1.5em;
`;

export const Modal = (props) =>
  props.show && (
    <ModalContainer>
      <ModalContent>
        <CloseIcon floatRight onClick={() => props.setShow(false)} />
        <ModalChildren>{props.children}</ModalChildren>
      </ModalContent>
    </ModalContainer>
  );
