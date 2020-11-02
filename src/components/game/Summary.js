import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Table, CardTitle, Col, Container, Row } from 'reactstrap'

class Summary extends Component {
  constructor (props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQ: 0,
      numberOfAnsweredQ: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      fiftyFiftyUsed: 0,
      timeAdded: 0
    };
  }

  componentDidMount () {
    const { state } = this.props.location;
    if (state) {
      this.setState({
        score: (state.score / state.numberOfQ) * 100,
        numberOfQ: state.numberOfQ,
        numberOfAnsweredQ: state.numberOfAnsweredQ,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,
        fiftyFiftyUsed: state.fiftyFiftyUsed
      });
    }
  }

  render () {
    const { state } = this.props.location;
    let stats, result;
    const userScore = this.state.score;

    if (userScore <= 50 ) {
      result =  <div className={'text-danger'}>Better luck next time!</div>;
    } else {
      result = <div className={'text-success'}>Well done!!!</div>;
    }

    if (state !== undefined) {
      stats = (

        <>
          <Container className={'mt-2'}>
            <Row className={'justify-content-center '}>
              <Col md={'8'}>
                <Card className={'bg-light'}>
                  <div className="p-4">
                    <CardBody>
                      <h2>{result}</h2>
                      <h4>Your Score: {this.state.score.toFixed(0)}&#37;</h4>
                      <Table>
                        <thead>
                        <tr>
                          <th>#</th>
                          <th>Stats</th>
                          <th>Score</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td> Total number of questions:
                            </td>
                          <td>{this.state.numberOfQ}</td>

                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Number of attempted questions:</td>
                          <td>{this.state.numberOfAnsweredQ}</td>

                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Number of Correct Answers:</td>
                          <td>{this.state.correctAnswers}</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Number of Wrong Answers:</td>
                          <td>{this.state.wrongAnswers}</td>

                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>50-50 Used:</td>
                          <td>{this.state.fiftyFiftyUsed}</td>

                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>+ 10 extra seconds Used:</td>
                          <td>{this.state.timeAdded}</td>
                        </tr>
                        </tbody>
                      </Table>
                      <section>
                        <ul className={'d-flex justify-content-end'}>
                          <li className={'btn btn-success '}>
                            <Link to ="/quiz" className={'text-white'}>Play Again</Link>
                          </li>
                          <li className={'btn'}>
                            <Link to ="/">Back to Home</Link>
                          </li>
                        </ul>
                      </section>
                    </CardBody>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      );
    } else {
      stats = (
        <section>
          <h1 className="no-stats">No Statistics Available</h1>
          <ul>
            <li>
              <Link to ="/quiz">Take a Quiz</Link>
            </li>
            <li>
              <Link to ="/">Back to Home</Link>
            </li>
          </ul>
        </section>
      );
    }
    return (
      <>
        <div className="quiz-summary">
          {stats}
        </div>
      </>
    );
  }
}

export default Summary;