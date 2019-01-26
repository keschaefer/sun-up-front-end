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
   mutation ($id: String, $current_year_tax: Number, $current_year_energy_cost: Int, $roof_square_footage: Number, $projected_energy_annual_kW: Number) {
      updateUser(id: $id, current_year_tax: $current_year_tax, current_year_energy_cost: $current_year_energy_cost, roof_square_footage: $roof_square_footage, projected_energy_annual_kW: $projected_energy_annual_kW ){
      id
      name_full
      org_name
      current_year_energy_cost
   }
}
`

class UserInput extends Component {
constructor() {
   super() 
      this.state = {
         currentUserid: "5c4b2e95769ad66ee19f2f88",
         current_year_tax: null,
         current_year_energy_cost: null,
         roof_square_footage: 0,
         projected_energy_annual_kW: null,
      }
   }

inputHandler = (name, text) => {
   this.setState({
      [name]: text
   })
}

submitFormUserInput = () => {
   console.log(this.props.addUserFinancialInputs)
   this.props.addUserFinancialInputs({
      variables: {
         id: this.state.currentUserid,
         current_year_tax: this.state.current_year_tax,
         current_year_energy_cost: this.state.current_year_energy_cost,
         roof_square_footage: this.state.roof_square_footage,
         projected_energy_annual_kW: this.state.projected_energy_annual_kW,
      }
   })
   Actions.useroutlook()
   console.log(this.state)
}

render() {
   if (!this.props.getUser.loading) {
      return(
         <View style= {styles.inputContainer}>
            <Text style = {styles.header}>{this.props.getUser.user.name_full}, we need a little info to estimate to your energy outlook</Text>
               <TextInput onChangeText={(text) => this.inputHandler('current_year_tax', text)} style={styles.inputUser} 
               placeholder= "2019 Taxes"/>
               <Text style = {styles.subText}>*Your 2018 tax burden is good placeholder if you don"t anticipate much change in your taxes for 2019</Text>
               <TextInput onChangeText={(text) => this.inputHandler('current_year_energy_cost', text)} style= {styles.inputUser}
               placeholder= "2019 Energy Bill"/>
               <Text style={styles.subText}>*Your 2018 energy bill is good placeholder if you don"t anticipate much change in your energy needs for 2019</Text>
               <TextInput onChangeText={(text) => this.inputHandler('projected_energy_annual_kW', text)} style={styles.inputUser}
               placeholder= "Square Feet Available for Panels"/>
               <Text style={styles.subText}>*Visit www.projectsunroof.com to get your roof's square footage your energy potential</Text>
               <View style={styles.inputButton}>
                  <Button color="white"title= "Submit" onPress={() => {Actions.useroutlook()}}/>
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