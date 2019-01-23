import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import SignIn from './src/Components/SignIn.js';
import SignUp from './src/Components/SignUp.js';
import UserInput from './src/Components/UserInput.js';
import UserOutlook from './src/Components/UserOutlook.js';

//import reactrouter flux library
//import additional components

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="signin" component={SignIn} title="SignIn" initial />
                <Scene key="signup" component={SignUp} title="SignUp" />
                <Scene key="userinput" component={UserInput} title="UserInput" />
                <Scene key="userreport" component={UserOutlook} title="UserReport" />
            </Stack>
        </Router>
    )
}

export default RouterComponent;