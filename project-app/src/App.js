import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Content from './Components/content';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Add the Navbar */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              {/* link to each element on the navbar and add the names */}
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* add the routing path for each element and link to component*/}
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
