import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-image: url("/background.jpg");
    height: 100%; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export default () => {

    return(
        <Background></Background>
    );
}