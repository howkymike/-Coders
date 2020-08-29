import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-image: url("/background.jpg");
    flex: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: -1;
`;

export default () => {

    return(
        <Background></Background>
    );
}