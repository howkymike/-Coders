import React, { useState, useContext, useEffect } from 'react';
import { Container, Spinner, Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import styled from 'styled-components';
import { Link, useParams, useHistory } from 'react-router-dom';

import { Wrapper } from './user';
import { UserContext } from '../context/userContext';

const Background = styled.div`
    background-image: url("/list.png");
    background-position: left center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
`;

const Header = styled.div` 
    background-color: #e2e2e2;
    padding: 0.5em;
`;

const Body = styled.div` 
    background-color: #e2e2e2;
    padding: 1em;
    margin: 1em;
`;

const ChallengeWrapper = styled.div` 
    .form-group {
        margin: 1em 0;
    }
`;

export default () => {

    let [loading, setLoading] = useState(true);
    let [challenge, setChallenge] = useState({});
    let [answers, setAnswers] = useState([]);

    let { user, updateInfo } = useContext(UserContext);

    let { id } = useParams();
    let history = useHistory();

    useEffect( () => {
        fetch("http://127.0.0.1:5001/api/challenges/" + id).then( res => {
            return res.json();
        }).then( json => {
            console.log(json);
            setChallenge(json);
            setLoading(false);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const takeChallenge = () => {
        fetch(`http://127.0.0.1:5001/api/userinfos/addchallenge?challengeId=${id}&userId=${user.id}`).then(res => res.json()).then(json => {
            updateInfo().then( () => history.push("/user"));
        });
    }


    const checkProgress = () => {
        fetch(`http://127.0.0.1:5001/api/userinfos/verifyChallenge?challengeId=${id}&userId=${user.id}&verification=${JSON.stringify(answers)}`).then(res => res.json()).then(json => {
            updateInfo().then( () => history.push("/user"));
        });
    }

    const setAnswer = (key, value) => {
        let arr = [...answers];
        arr[key] = value;
        setAnswers(arr);
    }

    const completed = id => {
        return user.finishedChallenges.findIndex(val => { console.log(val, id); return val === id}) !== -1
    }

    const active = id => {
        return user.currentChallenge.findIndex(val => { console.log(val, id); return val === id}) !== -1
    }

    return(
        <Background>
            <Wrapper>
                <Container>
                    <Header>
                        <h4>{ loading ? "Challenge" : challenge.name}</h4>
                    </Header>
                    <Body>
                        { loading || !user.logged ?
                            <Spinner type="grow" color="dark" /> :
                            <ChallengeWrapper>
                                <div>
                                    { challenge.desc }    
                                </div>    
                                <hr />
                                { !completed(id) && active(id) && challenge.verify === "question" &&
                                    <div>
                                        <Form>
                                            <h5>Answer this questions to check progress</h5>
                                            { challenge.questions && challenge.questions.map( (value, key) => (
                                                <FormGroup key={ key } row>
                                                    <Label for={ "ans" + key} sm={3}>{ value.question }</Label>
                                                    <Col sm={9}>
                                                        <Input type="text" id={ "ans" + key } placeholder="..." value={ answers[key] || ""} onChange={ e => setAnswer(key, e.target.value) }/>
                                                    </Col>
                                                </FormGroup>
                                            ))}
                                            
                                        </Form>
                                    </div>
                                }
                                { !completed(id) ?
                                    <>
                                    { !active(id) ?
                                        <Button color="success" onClick={ () => takeChallenge() }>Take on challenge</Button> :
                                        <Button color="success" onClick={ () => checkProgress() }>Check progress</Button>
                                    }
                                    </> :
                                    <Button color="secondary" onClick={ () => history.push("/challenges") }>Challenge done, search for more</Button>
                                }   
                                
                            </ChallengeWrapper>
                        }
                    </Body>
                </Container>
            </Wrapper>
        </Background>
    );
}