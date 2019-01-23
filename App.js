import React from 'react';
import { StyleSheet, ScrollView, View, FlatList, Button, Text } from 'react-native';
import SignUp from './src/Components/SignUp.js';
import SignIn from './src/Components/SignIn.js';
// import EnergyOutlook from './src/Components/EnergyOutlook.js';

export default class App extends React.Component {
  
  state = {
    name_full: "",
    org_name: "",
    email: "",
    password: "",
  }

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
      <View style={styles.container}>
          <SignUp/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // // padding: 30,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
});

