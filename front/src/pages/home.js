import React from 'react';
import styled from 'styled-components';

import Login from '../components/login';

const Background = styled.div`
    background-image: url("/backgwithgff.gif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default () => {

    return(
        <Background>
            <Login></Login>
        </Background>
    );
}