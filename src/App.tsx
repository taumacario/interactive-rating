import { useState } from 'react';
import { Acknowledgment } from './components/Acknowledgment';
import { Card } from './components/Card';
import { Container } from './components/Container';
import { Rating } from './components/Rating';
import  { globalStyles } from './styles/global'

globalStyles()

export function App() {
  const [show, setShow] = useState(true)

  function UpdateValue() {
    setShow(false)
   
  }

  return (
    <>
      <Container>
        <Card>
          {show ? 
          <Rating /> :
          <Acknowledgment />
          }
          <button onClick={UpdateValue}>click</button>
        </Card>
      </Container>
    </>
  );
}