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
    position: relative;
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

const Points = styled.div` 
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.2em 0.5em;
    background-color: #e2e2e2;
`;

export default ({ id }) => {

    let [loading, setLoading] = useState(true);
    let [challenge, setChallenge] = useState({});

    useEffect(() => {
        // zapytanie api;
        fetch("http://127.0.0.1:5000/api/challenges/" + id).then( res => {
            console.log(res);
            return res.json();
        }).then( json => {
            setChallenge(json);
            setLoading(false);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return(
        <Wrapper>
            { loading ?
                <Spinner type="grow" color="dark" /> :
                <div>
                    <Name>{ challenge.name }</Name>
                    <Points>{ challenge.exp } pkt.</Points>
                </div>
            }
        </Wrapper>
    );
}