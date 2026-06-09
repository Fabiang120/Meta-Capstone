import logo from './logo.svg';
import './App.css';
import './Header.js';
import Header from './Header.js';
import Main from './Main.js';
import Nav from './Nav.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
      <Header>
        <Nav></Nav>
      </Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
