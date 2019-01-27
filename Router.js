import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import SignIn from './src/Components/SignIn.js';
import SignUp from './src/Components/SignUp.js';
import UserInput from './src/Components/UserInput.js';
import UserOutlook from './src/Components/UserOutlook.js';
import MatchMakingOutput from './src/Components/MatchMakingOutput.js';

//import reactrouter flux library
//import additional components

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="signin" component={SignIn} title="" initial />
                <Scene key="signup" component={SignUp} title="" />
                <Scene key="userinput" component={UserInput} title="" />
                <Scene key="useroutlook" component={UserOutlook} title="" />
                <Scene key="matchmaking" component={MatchMakingOutput} title= ""/>
            </Stack>
        </Router>
    )
}

export default RouterComponent;