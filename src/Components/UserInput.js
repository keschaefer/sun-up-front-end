import React, { Component } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";
import { Actions } from "react-native-router-flux"
import ApolloClient from "apollo-boost";
import gql from "graphql-tag"
import { graphql, compose } from "react-apollo"

// const client = new ApolloClient({
//    uri: "http://sun-up-back.herokuapp.com/graphql"
// });

const getUser = gql`
query {
	user(id: "5c4b2e95769ad66ee19f2f88"){
      name_full
      org_name
	}
}
`
const addUserFinancialInputs = gql`
mutation {
   addUser(password: "", name_full: "", email: "", org_name: ""){
      id
      name_full
   }
}
`

class UserInput extends Component {
constructor() {
   super() 
      this.state = {
      }
   }

render() {
   if (!this.props.getUser.loading) {
      return(
         <View style= {styles.inputContainer}>
            <Text style = {styles.header}>{this.props.getUser.user.name_full}, we need a little info to estimate to your energy outlook</Text>
               <TextInput style={styles.inputUser} 
               placeholder= "2019 Taxes"/>
               <Text style = {styles.subText}>*Your 2018 tax burden is good placeholder if you don"t anticipate much change in your taxes for 2019</Text>
               <TextInput style= {styles.inputUser}
               placeholder= "2019 Energy Bill"/>
               <Text style={styles.subText}>*Your 2018 energy bill is good placeholder if you don"t anticipate much change in your energy needs for 2019</Text>
               <TextInput style={styles.inputUser}
               placeholder= "kW Generated Annually"/>
               <Text style={styles.subText}>*Visit www.projectsunroof.com to estimate your energy potential</Text>
               <View style={styles.inputButton}>
                  <Button color="white"title= "Submit" onPress={() => Actions.useroutlook()}/>
               </View>
         </View>
      )} else {
         return (
            <View>
               <Text>Loading...</Text>
            </View>
         )
      }
   }
}

const styles = StyleSheet.create({
   inputContainer: {
      flexDirection: "column",
      justifyContent: "space-around",
      height: "100%",
      padding: 20,
      backgroundColor: "white"
    },
    inputUser: {
      width: "70%",
      borderWidth: 1,
      borderColor: "#A0A0A0",
      height: 30,
      borderRadius: 3,
      backgroundColor: "white"
    },
    image: {
      width: 225,
      height: 225,
      marginTop: 50,
      opacity: 80
    },
    inputButton: {
      minWidth: 50,
      backgroundColor: "#0098F7",
      margin: 8,
      borderRadius: 5,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around"
    },
    header: {
      fontWeight: "bold",
      fontSize: 20
    },
    subText: {
      fontSize: 10
    }
    
})

export default compose(
   graphql(addUserFinancialInputs, {name: "addUserFinancialInputs"}),
   graphql(getUser, {name: "getUser"})
)(UserInput)