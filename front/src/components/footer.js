import React from 'react';
import styled from 'styled-components';


import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = styled.footer`
    height: 4em;
    background-color: #e2e2e2;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20);
    text-align: center;
    line-height: 4em;
`;

export default () => {
    return(
        <Footer>
            <p>***Coders. © 2020</p>
        </Footer>
    );
}