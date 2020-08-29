import React from 'react';
import styled from 'styled-components';

import doge from '../imgs/dogelv1.png';

const Wrapper = styled.div` 
    padding: 0.5em;
`;

const Frame = styled.div` 
    border: 2px solid #000;
    border-radius: 3px;
    width: 20em;
    margin: auto;
`;

const Img = styled.img` 
    display: block;
    max-height: 20em;
    width: auto;
    height: auto;
`;

const Name = styled.img` 
    
`;

export default () => {


    return(
        <Wrapper>
            <Frame>
                <Img src={ doge } alt="Doge lvl. 1" />

            </Frame>

        </Wrapper>
    );
}