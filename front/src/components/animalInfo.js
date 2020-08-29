import React from 'react';
import styled from 'styled-components';
import { Progress, Button } from 'reactstrap';

import doge from '../imgs/dogelv1.png';

const Wrapper = styled.div` 
    padding: 0.5em;
`;

const Frame = styled.div` 
    border: 2px solid #000;
    border-radius: 3px;
    width: 20em;
`;

const Img = styled.img` 
    display: block;
    max-height: 20em;
    width: auto;
    height: auto;
`;

const Name = styled.div` 
    background-color: #e2e2e2;
`;

const ButtonWrapper = styled.div` 
    padding: 0.5em;
    display: flex;
    justify-content: space-around;

    button {
        width: 45%;
        padding: 0.2em;
    }
`;

export default () => {


    return(
        <Wrapper>
            <Frame>
                <Img src={ doge } alt="Doge lvl. 1" />
                <Wrapper>
                    <Progress striped color="success" value="50">Lvl1. 10/20</Progress>
                </Wrapper>
                <Name> &lt;Sven&gt; </Name>
                <ButtonWrapper>
                    <Button color="success">Pet</Button>
                    <Button color="success">Settings</Button>
                </ButtonWrapper>
            </Frame>
        </Wrapper>
    );
}