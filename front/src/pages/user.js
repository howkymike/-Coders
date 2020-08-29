import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

import AnimalInfo from '../components/animalInfo';
import LastChallenges from '../components/lastChallenges';
import Badge from '../components/badge';

export const Wrapper = styled.div`
    padding: 2em;

    text-align: center;
`;

export const Header = styled.div`
    margin-bottom: 2em;
    padding-bottom: 1em;
`;

const Background = styled.div`
    background-image: url("/piesoback.gif");
    flex: auto;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: -1;
`;


export default () => {

    return(
        <Background>
        <Wrapper>
            <Container className="themed-container" fluid={true}>
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
        </Background>
    );
}