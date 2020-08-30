import React, { useContext } from 'react';
import styled from 'styled-components';

import doge from '../imgs/dogelv1.png';
import doge2 from '../imgs/dogelv2.png';
import doge3 from '../imgs/dogelv3.png';
import doge4 from '../imgs/dogelv4.png';
import { UserContext } from '../context/userContext';

const Wrapper = styled.div` 
    width: 15em;
    margin: 0 auto;
`;

const Img = styled.img`  
    display: block;
    max-height: 20em;
    max-width: 15em;
    width: auto;
    height: auto;
    position: relative;
    top: 4em;
`;

const Shadow = styled.div` 
    width: 15em;
    height: 4em;
    border-radius: 50%;
    background-color: #ffffff44;
`;

const Name = styled.div`  
    background-color: #e2e2e2;
    margin: 0.5em;
`;

let doges = [
    doge, doge2, doge3, doge4
]

export default () => {

    let { user } = useContext(UserContext);

    return(
        <Wrapper>
            <Img src={ doges[user.level - 1] } alt={`Doge lvl. ${user.level}`} />
            <Shadow />
            <Name>{ user.animalName }</Name>
        </Wrapper>
    );
}