import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Badge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  @media (max-width: 760px) {
    display: none;
  }
`;

export default function Navbar() {
  return (
    <Header>
      <h1>Awesome Recepies</h1>
      <Badge id="edamam-badge"></Badge>
    </Header>
  );
}
