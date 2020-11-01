import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const Home = () => (
  <Container>
    <Row className="d-flex justify-content-center mt-3 ">
      <Col md={'10'} lg={'10'}>
        <div className="border">
              <h1>Jayway Quiz Test</h1>
              <div>
                  <div className={'btn btn-primary'}>
                    <Link to={'/quiz'} className={'btn'}>Spela!</Link>
                  </div>
              </div>
            </div>
      </Col>
    </Row>

  </Container>
)

export default Home;