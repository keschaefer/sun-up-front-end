import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import SignIn from './src/Components/SignIn';
import SignUp from './src/Components/SignUp'
//import reactrouter flux library
//import additional components

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="login" component={Welcome} title="Login" initial />
                <Scene key="camera" component={Camera} title="Camera" />
                <Scene key="library" component={Library} title="Library" />
                <Scene key="wildflower" component={Wildflower} title="Wildflower" />
            </Stack>
        </Router>
    )
}

export default RouterComponent;