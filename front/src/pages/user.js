import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

import AnimalInfo from '../components/animalInfo';
import LastChallenges from '../components/lastChallenges';
import Badge from '../components/badge';

import { UserContext } from '../context/userContext';

export const Wrapper = styled.div`
    padding: 2em;

    text-align: center;
`;

export const Header = styled.div`
    margin-bottom: 2em;
    padding-bottom: 1em;
`;


export default () => {

    let { user } = useContext(UserContext);

    return(
        <Wrapper>
            <Container>
                <Header>
                    <h4>Witaj &lt;nazwa_uzytkownika&gt;!</h4>
                    <hr />
                </Header>
                <Badge>Twój pupil</Badge>
                <AnimalInfo />
                <Badge>Ostatnie wyzwania</Badge>
                <LastChallenges />
            </Container>
        </Wrapper>
    );
}