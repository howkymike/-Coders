import React from 'react';
import styled from 'styled-components';


import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = styled.footer`
    height: 4em;
    background-color: #e2e2e2;
`;


export default () => {
    return(
        <Footer>
            <p>Author: ***Coders</p>
        </Footer>
    );
}