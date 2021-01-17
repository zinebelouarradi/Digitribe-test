
import './App.css';
import PersonComponent from './components/PersonComponent';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container>
        <Col lg={12} className={"margin-top"} />
        <PersonComponent />

      </Container>
      <Footer />

    </div>
  );
}

export default App;
