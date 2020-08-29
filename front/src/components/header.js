import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

const Header = styled.header`
    height: 4em;
    background-color: #e2e2e2;
`;


export default () => {



    return(
        <Header>
            <div>dwdwdwdwdwdw</div>
            <Link to="/">Home</Link>
            <Link to="/animal">Zwierze</Link>
        </Header>
    );
}