import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Content from './Components/mainpage';
import AddFav from './Components/addfavourite';
import GetApiQuotes from './Components/getquotes';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Add the Navbar */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="home">FreeInspirationalQuotes</Navbar.Brand>
            <Nav className="me-auto">
              {/* link to each element on the navbar and add the names */}
              <Nav.Link href="/getQuotes">Get Quotes</Nav.Link>
              <Nav.Link href="/addfavourite">Save Favourite Quotes</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* add the routing path for each element and link to component*/}
        <Routes>
          <Route path='/home' element={<Content></Content>}></Route>
          <Route path='/getQuotes' element={<GetApiQuotes></GetApiQuotes>}></Route>
          <Route path='/addfavourite' element={<AddFav></AddFav>}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
