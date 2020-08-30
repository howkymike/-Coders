import React from 'react';
import styled from 'styled-components';

const Badge = styled.div` 
    background-color: #6c757d;
    padding: 0.2em 0;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    margin: 0.3em 0;
    width: 100%;
`;

export default ({ children }) => {

    return(
        <Badge>
            { children }
        </Badge>
    );
}