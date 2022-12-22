import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Portfolio from './components/portfolio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
