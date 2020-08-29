import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { UserContext } from '../context/userContext';

const LoginBox = styled.div` 
    width: 30em;
    background-color: #e2e2e2;
    margin-left: 30%;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20);
    border-radius: 5px;
    padding: 1em;

    @media (max-width: 768px) {
        margin: auto;
    }
`;

const ButtonWrapper = styled.div` 
    display: flex;
    justify-content: space-between;

    button {
        width: 45%;
    }
`;

export default () => {
    let [type, setType] = useState(true);
    let [form, setForm] = useState({ login: "", pass: "", pass2: "" });
    let { login, register } = useContext(UserContext);

    const formSubmit = e => {
        e.preventDefault();
        if(type)
            login(form.login, form.pass);
        else
            register(form.login, form.pass, form.pass2);
    }

    return(
        <LoginBox onSubmit={ e => formSubmit(e) }>
            { type ? "Log in!" : "Register!" }
            <hr />
            <Form>
                <FormGroup>
                    <Label for="name">Login</Label>
                    <Input type="text" id="name" placeholder="..." value={form.login} onChange={ e => setForm({...form, login: e.target.value})} />
                </FormGroup>
                <FormGroup>
                    <Label for="pass">Password</Label>
                    <Input type="password" id="pass" placeholder="..." value={form.pass} onChange={ e => setForm({...form, pass: e.target.value})} />
                </FormGroup>
                { !type &&
                    <FormGroup>
                        <Label for="pass">Password</Label>
                        <Input type="password" id="pass" placeholder="..." value={form.pass2} onChange={ e => setForm({...form, pass2: e.target.value})} />
                    </FormGroup>
                }
                { type ?
                    <ButtonWrapper>
                        <Button color="success" size="lg">Login</Button>
                        <Button color="danger" size="lg" onClick={ () => setType(false)}>Register</Button>
                    </ButtonWrapper> :
                    <ButtonWrapper>               
                        <Button color="success" size="lg">Register</Button>
                        <Button color="danger" size="lg" onClick={ () => setType(true)}>Login</Button>
                    </ButtonWrapper>
                }
            </Form>
        </LoginBox>
    );
}