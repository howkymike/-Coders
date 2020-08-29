import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Spinner } from 'reactstrap';

const Wrapper = styled.div` 
    width: 8em;
    height: 8em;
    border: 2px solid #000;
    margin: 0 0.5em;
    background: url("/background.jpg");
    cursor: pointer;
`;

const Name = styled.div` 
    text-align: center;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 2em;
    white-space: nowrap; 
    padding: 0.2em 0.5em;
    background-color: #e2e2e2;
`;

export default ({ id }) => {

    let [loading, setLoading] = useState(true);
    let [challenge, setChallenge] = useState({});

    useEffect(() => {
        // zapytanie api;

        setTimeout( () => {
            setChallenge({
                id: "1",
                name: "Wyzwanie 2dwdwwd dwdwdwdwdwwdwd wd wdwd",
                background: "lel",
                points: 100
            })
            setLoading(false);
        }, 1000);
    });

    return(
        <Wrapper>
            { loading ?
                <Spinner type="grow" color="dark" /> :
                <div>
                    <Name>{ challenge.name }</Name>
                
                </div>
            }
        </Wrapper>
    );
}