import React from 'react';
import Router from './Router';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { AppRegistry } from 'react-native';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'http://sun-up-back.herokuapp.com/graphql'
});

// client
//   .query({
//     query: gql`
//       {
//         users {
//           name_full
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

export default class App extends React.Component {

  placeNameChangeHandler = (val) => {
    // this.setState({
    //   placeName: val,
    // });
  }

  placeNameSubmit = () => {
    // if (this.state.placeName.trim() === "") {
    //   return
    // } 
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.concat({
    //       key: Math.random(), 
    //       name: prevState.placeName,
    //       image: PlaceImage}),
    //   }
    // })
  }

  onItemPressed = () => {
    // return alert("You deleted an item!")
  }

  onItemSelected = (key) => {
    // this.setState({
    //   placeSelected: this.state.places.find(place => {
    //     return place.key === key
    //   })
    // })
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