import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap'
import quiz from '../../quiz.json';

class Quiz extends Component {
  constructor (props){
    super(props);
      this.state = {
        quiz,
        answer: '',
        currentQ: {},
        nextQ: {},
        previousQ: {},
        numberofQ: 0,
        numberofAnsweredQ: 0,
        score: 0,
    }
  }
  render() {
    console.log(quiz)
    return(
    <>
      <Container>
        <Row>
            <Col md={'10'}>
              <div className="panel panel-primary">
                <h3 className="panel-title">
                  Quiz
                </h3>
                <div className="panel-body">
                  <p>Time remain 0:15  </p>
                  <p>50/50</p>
                  <p>+10 sec</p>
                  <div>
                    <p>The question</p>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                  </div>
                <div>
                  <Button id="previous">
                    Previous
                  </Button>
                  <Button id="next">
                    Next
                  </Button>
                  <Button className={'btn btn-danger ml-2'} id="quit">
                    Quit
                  </Button>
                </div>
                </div>
              </div>
            </Col>
        </Row>
      </Container>
    </>
    )
  }
}
export default Quiz;