import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import CustomNavBar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
      <CustomNavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
