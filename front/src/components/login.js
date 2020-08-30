import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { UserContext, MessageContext } from '../context/userContext';

const LoginBox = styled.div` 
    width: 30em;
    background-color: #e2e2e2;
    margin: auto;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20);
    border-radius: 5px;
    padding: 1em;
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
    let { user, login, register } = useContext(UserContext);
    let history = useHistory();

    let { msg } = useContext(MessageContext);

    const formSubmit = e => {
        try {
            e.preventDefault();
            if(type) {
                if(login(form.login, form.pass)) {
                    msg("success", "Logged successfuly");
                    history.push("/user");
                }
            } else {
                if(register(form.login, form.pass, form.pass2)) {
                    msg("success", "Registered successfuly");
                    setType(true);
                }
            }
                
        } catch(e) {
            console.log(e);
        }
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
                        <Button color="success" size="lg" type="submit">Login</Button>
                        <Button color="danger" size="lg" onClick={ () => setType(false)}>Register</Button>
                    </ButtonWrapper> :
                    <ButtonWrapper>               
                        <Button color="success" size="lg" type="submit">Register</Button>
                        <Button color="danger" size="lg" onClick={ () => setType(true)}>Login</Button>
                    </ButtonWrapper>
                }
            </Form>
        </LoginBox>
    );
}