import React, { useState, useEffect } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

import { Header, Wrapper } from './user';


const Background = styled.div`
    background-image: url("/list.png");
    background-position: left center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
`;


export default () => {

    let [form, setForm] = useState({
        name: "",
        type: "",
        desc: "",
        exp: "",
        verify: "",
        questions: [{ question: "", answer: ""}],
    });

    const setFormField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        });
    } 

    const setQuestion = (index, type, text) => {
        let arr = form.questions;
        arr[index][type] = text;
        setForm({
            ...form,
            questions: arr
        })
    }

    const addChallenge = e => {
        e.preventDefault();
        console.log(JSON.stringify(form));
        fetch("http://127.0.0.1:5001/api/challenges/addChallenge?form=" + JSON.stringify(form)).then(res => res.json()).then(json => {
            console.log(json);
        });

        console.log(form);
    }

    return(
        <Background>
            <Wrapper>
                <Container>
                    <Header>
                        <h4>Submit a new challange</h4>
                        <hr />
                    </Header>
                    <Form onSubmit={ e => addChallenge(e) }>
                        <FormGroup>
                            <Input type="text" id="name" placeholder="Name" value={ form.name } onChange={ e => setFormField("name", e.target.value) }/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="select" id="category" value={ form.type } onChange={ e => setFormField("type", e.target.value) }>
                                <option value="" disabled>Category</option>
                                { ["school", "it", "sport"].map( (value, key) => (
                                    <option key={ key } value={ value }>{ value }</option>
                                )) }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" id="name" placeholder="Experience" value={ form.exp } onChange={ e => setFormField("exp", e.target.value) }/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="textarea" id="desc" placeholder="Description" value={ form.desc } onChange={ e => setFormField("desc", e.target.value) } />
                        </FormGroup>
                        <hr />
                        <FormGroup>
                            <Input type="select" id="verify" value={ form.verify } onChange={ e => setFormField("verify", e.target.value) }>
                                <option value="" disabled>Verification method</option>
                                { [{val: "question", name:"question"}, {val:"mod", name:"approved by moderator"}].map( (value, key) => (
                                    <option key={ key } value={ value.val }>{ value.name }</option>
                                )) }
                            </Input>
                        </FormGroup>
                        { form.verify === "question" &&
                            <> 
                                { form.questions.map((value, key) => (
                                    <React.Fragment key={key}>
                                        <FormGroup>
                                            <Input type="text" id="question" value={ value.question || "" } onChange={ e => setQuestion(key, "question", e.target.value) } placeholder="Question" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" id="answer" value={ value.answer || "" } onChange={ e => setQuestion(key, "answer", e.target.value) } placeholder="Answear" />
                                        </FormGroup>
                                    </React.Fragment>
                                ))}
                                <FormGroup>
                                    <Button onClick={ () => setForm({ ...form, questions: [...form.questions, { question: "", answer: ""}]})} color="secondary">Add question</Button>
                                </FormGroup>  
                            </>
                        }
                        <Button color="primary" size="lg" block >Submit</Button>
                    </Form>
                </Container>
            </Wrapper>
        </Background>
    );
}