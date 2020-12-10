import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 5rem;
  height: 3rem;
  border: 1px white;
  background: rgb(74, 15, 114);
  font-size: large;
  color: aliceblue;
  cursor: pointer;
  margin: 0px 0px 1rem 1rem;
`;

const Wrapper = styled.div`
  @media screen and (min-width: 1000px) {
    width: 30%;
  }

  @media screen and (max-width: 1000px) {
    margin-right: 2rem;
  }
`;

export default function SelectButtons({ changeSelect }) {
  const selection1 = ["veggie", "rice", "pasta"];
  const selection2 = ["fish", "salad", "beef"];

  const handleClick = (e) => {
    changeSelect(e.target.value);
  };

  return (
    <Wrapper>
      <Container>
        {selection1.map((sel, index) => {
          return (
            <Button
              key={index}
              className="select-btn"
              onClick={handleClick}
              type="text"
              value={sel}
            >
              {sel}
            </Button>
          );
        })}
      </Container>
      <Container>
        {selection2.map((sel, index) => {
          return (
            <Button
              key={index}
              className="select-btn"
              onClick={handleClick}
              type="text"
              value={sel}
            >
              {sel}
            </Button>
          );
        })}
      </Container>
    </Wrapper>
  );
}
