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