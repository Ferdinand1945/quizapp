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
        numberOfQ: 0,
        numberOfAnsweredQ: 0,
        currentQIndex: 0,
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        hints: 5,
        fiftyFifty: 1,
        usedFiftyFifty: false,
        nextButtonDisabled: false,
        previousButtonDisabled: true,
        previousRandomNumbers: [],
        time: {}
    }
  }
  componentDidMount () {
    const {quiz, currentQ, nextQ, previousQ} = this.state;
    this.showquiz(quiz, currentQ, nextQ, previousQ);
  }
  showquiz = (quiz = this.state.quiz, currentQ, nextQ, previousQ) => {
    let {currentQIndex} = this.state;

    if (this.state.quiz !== null) {
      quiz = this.state.quiz;
      currentQ = quiz[currentQIndex];
      nextQ = quiz[currentQIndex +1];
      previousQ = quiz[currentQIndex -1];
      const answer = currentQ.answer;
      this.setState({currentQ,nextQ,previousQ,answer})
    }
  };
  render() {
    console.log(quiz)
    const {
      currentQ,
      fiftyFifty,
      hints,
      numberOfQ,
      currentQIndex,
      time
    } = this.state;
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
                    <p>{currentQ.quiz}</p>
                    <button>{currentQ.option1}</button>
                    <button>{currentQ.option2}</button>
                    <button>{currentQ.option3}</button>
                    <button>{currentQ.option3}</button>
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