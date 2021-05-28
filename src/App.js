import React from "react";
import styled from "styled-components";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";
import Title from "./components/Title";


const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`

function App() {
  return (
    <AppWrapper>
      <Flex justify={"center"}>
        <Title>Console cmd 2021</Title>
      </Flex>
      <Flex direction={"column"} margin={"10px 0"}>
        <Console />
        <Button align={"flex-end"} color={"green"} >Отправить</Button >
      </Flex >
    </AppWrapper>
  );
};

export default App;
