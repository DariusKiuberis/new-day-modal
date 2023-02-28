import { MantineProvider } from '@mantine/core';
import './App.css'
import LandingPage from './components/pages/LandingPage';

function App() {

  return (

    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="App">
        <LandingPage />
      </div>
    </MantineProvider >
  )
}

export default App
