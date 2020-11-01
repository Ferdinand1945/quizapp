import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap'
import quiz from '../../quiz.json';
import classnames from 'classnames';
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
  handleOptClick = (e) => {
    if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
      this.correctAnswer();
    } else {
      this.wrongAnswer();
    }
  }
  correctAnswer = () => {
    alert('is correct!');
    this.setState(prevState => ({
      score: prevState.score + 1,
      correctAnswers: prevState.correctAnswers + 1,
      currentQIndex: prevState.currentQIndex + 1,
      numberOfAnsweredQ: prevState.numberOfAnsweredQ + 1
    }), () => {
      if (this.state.nextQ === undefined) {
        console.log('ended')
      } else {
        this.showquiz(this.state.quiz, this.state.currentQ, this.state.nextQ, this.state.previousQ);
      }
    });
  }

  wrongAnswer = () => {
    alert('wroooong');
    this.setState(prevState => ({
      wrongAnswers: prevState.wrongAnswers + 1,
      currentQIndex: prevState.currentQIndex + 1,
      numberOfAnsweredQ: prevState.numberOfAnsweredQ + 1
    }), () => {
      if (this.state.nextQ === undefined) {
        console.log('ended')
      } else {
        this.showquiz(this.state.quiz, this.state.currentQ, this.state.nextQ, this.state.previousQ);
      }
    });
  }
  
  handleBtnNext = () => {
    if (this.state.nextQ !== undefined) {
      this.setState(prevState => ({
        currentQIndex: prevState.currentQIndex + 1
      }), () => {
        this.showquiz(this.state.state, this.state.currentQ, this.state.nextQ, this.state.previousQ);
      });
    }
  };
  handleBtnPrev = () => {
    if (this.state.previousQ !== undefined) {
      this.setState(prevState => ({
        currentQIndex: prevState.currentQIndex - 1
      }), () => {
        this.showquiz(this.state.state, this.state.currentQ, this.state.nextQ, this.state.previousQ);
      });
    }
  };
  handleQuit = () => {
    if (window.confirm('Are you sure you want to quit?')) {
      this.props.history.push('/');
    }
  };

  handleClick = (e) => {
    switch (e.target.id) {
      case 'next':
        this.handleBtnNext();
        break;

      case 'previous':
        this.handleBtnPrev();
        break;

      case 'quit':
        this.handleQuit();
        break;

      default:
        break;
    }
  };
  handleFiftyFifty = () => {
    console.log('50 50')
  }
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
                  <span onClick={this.handleFiftyFifty}>
                    {fiftyFifty} (50/50)
                  </span>
                  <p>+10 sec</p>
                  <p>
                    ({currentQIndex + 1} of {numberOfQ})
                  </p>
                  <div>
                    <p>{currentQ.question}</p>
                    <button className={'option'} onClick={this.handleOptClick}>{currentQ.option1}</button>
                    <button className={'option'} onClick={this.handleOptClick}>{currentQ.option2}</button>
                    <button className={'option'} onClick={this.handleOptClick}>{currentQ.option3}</button>
                    <button className={'option'} onClick={this.handleOptClick}>{currentQ.option4}</button>
                  </div>
                  <div>
                    <button
                      className={classnames('', {'disable': this.state.previousButtonDisabled})}
                      id="previous"
                      onClick={this.handleClick}>
                      Previous
                    </button>
                    <button
                      className={classnames('', {'disable': this.state.nextButtonDisabled})}
                      id="next"
                      onClick={this.handleClick}>
                      Next
                    </button>
                    <button id="quit" onClick={this.handleClick}>
                      Quit
                    </button>
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