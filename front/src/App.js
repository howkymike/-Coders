import React from 'react';
import UserProvider from './context/userContext';
import Wrapper from './components/wrapper';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <UserProvider>
            <Wrapper>
            </Wrapper>
        </UserProvider>
    );
}

export default App;
