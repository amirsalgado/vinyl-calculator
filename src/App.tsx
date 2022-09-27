
import { MantineProvider } from '@mantine/core';
import Calc from './pages/calc';

export default function App() {
  return (
    <MantineProvider>
      <div className="App">
        <h1>Calculadora de Vinyl</h1>
        <Calc />
      </div>
    </MantineProvider>
  )
}