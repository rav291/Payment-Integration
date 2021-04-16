import './bootstrap.min.css'
import Header from './components/Header';
import { Col, Container, Image, Row } from 'react-bootstrap';

const App = () => {
  return (
    <div className="bg-info">
      <Header />

      <Container >
        <Row>
          <Col className="p-3">
            <Row> <h1 className="mt-5 text-black" style={{ fontFamily: 'arial', fontSize: '3rem' }}>Donate Today</h1></Row>

            <Image className="rounded-circle" style={{ width: '100%', height: '100%' }} src='/children.jpg' />
          </Col>
          <Col className="p-3">
            <h3 className="mt-5" style={{ textAlign: 'center' }}>Real generosity is doing something nice for someone who will never find out.</h3>

            <h4 className="mt-5" style={{ textAlign: 'center' }}> Help build a world with zero hunger</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
