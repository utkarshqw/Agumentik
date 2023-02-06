import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Home from './pages/Home';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <Box className="App">
     <AllRoutes/>
    </Box>
  );
}

export default App;
