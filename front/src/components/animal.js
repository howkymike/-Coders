import React from 'react';
import styled from 'styled-components';

import doge from '../imgs/dogelv1.png';

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

export default () => {
    return(
        <Wrapper>
            <Img src={ doge } alt="Doge lvl. 1" />
            <Shadow />
            <Name>George</Name>
        </Wrapper>
    );
}