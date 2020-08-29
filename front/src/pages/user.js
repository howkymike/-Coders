import React, { useContext } from 'react';
import styled from 'styled-components';

import { UserContext } from '../context/userContext';

import Animal from '../components/animal';
import AnimalInfo from '../components/animalInfo';

export const Wrapper = styled.div`
    padding: 2em;
    text-align: center;
    display: flex;
    flex: auto;
`;

export const Header = styled.div`
    margin-bottom: 2em;
    padding-bottom: 1em;
`;

const Background = styled.div`
    background-image: url("/piesoback.gif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
`;

const Flex = styled.div`  
    width: 50%;
    display: flex;
    flex-direction: column;
`;

export default () => {

    let { user } = useContext(UserContext);

    return(
        <Background>
            <Wrapper>
                <Flex style={{justifyContent: "end"}}>
                    <Animal />
                </Flex>
                <Flex style={{justifyContent: "center"}}>
                    <AnimalInfo />
                </Flex>
            </Wrapper>
        </Background>
    );
}

/*
<Container fluid={true}>
                    <Header>
                        <h4>Witaj {user.name}!</h4>
                        <hr />
                    </Header>
                    <Badge>Twój pupil</Badge>
                    <AnimalInfo />
                    <Badge>Ostatnie wyzwania</Badge>
                    <LastChallenges />
                </Container>*/