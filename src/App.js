import React from 'react';
import { Cadastrar } from './components/Cadastrar';
import styled from 'styled-components';



function App() {
  return (
   <Container>
  
   <Cadastrar />
   </Container>
  );
}

export default App;

const Container  = styled.div`
height: 100vh;
width: 100vw;
background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
`
