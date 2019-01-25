import React from 'react';
import Router from './Router';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { AppRegistry } from 'react-native';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'http://sun-up-back.herokuapp.com/graphql'
});

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUserId: null,
      currentUserName: ''
    }
  }

  storeUserID = (user) => {
    this.setState({
      currentUserId: user.id,
      currentUserName: user.name_full
    })
  }

  render() {
    return (
      <ApolloProvider client={client}>
          <Router/> 
      </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent('MyApplication', () => App);