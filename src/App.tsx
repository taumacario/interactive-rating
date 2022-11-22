import { Card } from './components/Card';
import { Container } from './components/Container';
import  { globalStyles } from './styles/global'

import {RateContextProvider} from './context/RateContext'

globalStyles()

export function App() {
  return (
      <RateContextProvider>
        <Container>
          <Card />
        </Container>
      </RateContextProvider>
  );
}