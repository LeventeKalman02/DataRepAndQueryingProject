import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddFav from './Components/addfavourite';
import SavedQuotes from './Components/savedquotes';
import GetApiQuotes from './Components/getquotes';
import EditQuote from './Components/editquote';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Add the Navbar */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/getQuotes">FreeInspirationalQuotes</Navbar.Brand>
            <Nav className="me-auto">
              {/* link to each element on the navbar and add the names */}
              <Nav.Link href="/getQuotes">Get Quotes</Nav.Link>
              <Nav.Link href="/savedQuotes">Saved Quotes</Nav.Link>
              <Nav.Link href="/addfavourite">Save This Quote</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* add the routing path for each element and link to component*/}
        <Routes>
          <Route path='/' element={<GetApiQuotes></GetApiQuotes>}></Route>
          <Route path='/getQuotes' element={<GetApiQuotes></GetApiQuotes>}></Route>
          <Route path='/addfavourite' element={<AddFav></AddFav>}></Route>
          <Route path='/savedQuotes' element={<SavedQuotes></SavedQuotes>}></Route>
          <Route path='/edit/:id' element={<EditQuote></EditQuote>}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
