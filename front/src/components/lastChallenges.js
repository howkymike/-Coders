import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Challenge from './challengeMin';

const Wrapper = styled.div` 
    display: flex;
    padding: 1em;
`;

export default () => {

    let [challenges, setChallenges] = useState([]);

    useEffect( () => {
        fetch("http://127.0.0.1:5001/api/challenges/").then( res => {
            return res.json();
        }).then(json => {
            setChallenges(
                json.map( value => value.id )
            );
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return(
        <Wrapper>
            { challenges.map( (value, key) => (
                <Challenge key={ key } id={ value } />
            )) }
        </Wrapper>
    );
}