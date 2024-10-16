import { Col, Container, Row } from 'react-bootstrap';
import Countries from './components/Countries/Countries.tsx';

const App = () => {
    return (
        <>
          <Container className='mt-5'>
            <Row className={'h-75'}>
              <Col style={{maxHeight: '500px', overflowY: 'scroll', border: '1px solid #ccc' }} sm={3} className='border border-2 border-secondary shadow-lg rounded-3 me-5'><Countries/></Col>
              <Col style={{height: '500px'}} sm={8} className='border border-2 border-secondary shadow-lg rounded-3'>Info about country</Col>
            </Row>
          </Container>
        </>
    );
};

export default App;
