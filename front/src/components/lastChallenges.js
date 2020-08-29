import React from 'react';
import styled from 'styled-components';

import Challenge from './challengeMin';

const Wrapper = styled.div` 
    display: flex;
    padding: 1em;
`;

export default () => {

    let challenges = [ "1", "2", "3", "4", "5", "6" ];

    return(
        <Wrapper>
            { challenges.map( (value, key) => (
                <Challenge key={ key } id={ value } />
            )) }
        </Wrapper>
    );
}