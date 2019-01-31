import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Button, Text, ImageBackground, Image, Linking} from "react-native";
import { Actions } from "react-native-router-flux";
import Backdrop from "../assets/leaves-pattern.png";
/* Background pattern from Toptal Subtle Patterns */
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Logo from '../assets/SunUp_Logo.png';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import { Input } from 'react-native-elements';

params = {
         'api_key': 'txmFF3Jhtstm',
       }

const getUser = gql`
query {
	user(id: "5c4cb71a3f9de3c0133c38a2"){
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
         <View>
            <ImageBackground source={Backdrop} style={{width: "100%", height: "100%"}}>
               <KeyboardAwareScrollView contentContainerStyle= {{ justifyContent: 'space-between',
                  alignItems: 'center', height: "100%", padding: 20}} 
                  resetScrollToCoords={{ x: 0, y: 0 }}
                  scrollEnabled={true}>      
                  <Text style = {styles.header}>{this.props.getUser.user.name_full}, we need a little info to estimate to your energy outlook:</Text>
                     <Input onChangeText={(text) => this.inputHandler('userOrgName', text)}
                     containerStyle={{ backgroundColor: 'white', borderRadius: 15, width: "100%"}} inputContainerStyle= {{borderBottomWidth: 0}} inputStyle={{fontSize: 14}}
                     placeholder= "Your 2019 Tax Burden" keyboardType= "numbers-and-punctuation"
                     leftIcon={{ type: 'font-awesome', name: 'usd' }}/>
                  <Text style = {styles.subText}>*Your 2018 tax burden is good placeholder if you don't anticipate much change in your taxes for 2019.</Text>
                     <Input onChangeText={(text) => this.inputHandler('userOrgName', text)}
                     containerStyle={{ backgroundColor: 'white', borderRadius: 15, width: "100%"}} inputContainerStyle= {{borderBottomWidth: 0}} inputStyle={{fontSize: 14}}
                     placeholder= "Your Total 2019 Energy Costs" keyboardType= "numbers-and-punctuation"
                     leftIcon={{ type: 'font-awesome', name: 'usd' }}/>
                  <Text style={styles.subText}>*Your 2018 energy bill is good placeholder if you don't anticipate much change in your energy needs for 2019.</Text>
                     <Input onChangeText={(text) => this.inputHandler('userOrgName', text)}
                     containerStyle={{ backgroundColor: 'white', borderRadius: 15, width: "100%"}} inputContainerStyle= {{borderBottomWidth: 0}} inputStyle={{fontSize: 14}}
                     placeholder= "Square Feet Available for Solar" keyboardType= "numbers-and-punctuation"
                     leftIcon={{ type: 'font-awesome', name: 'leaf' }}/>
                  <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/get/sunroof')}>
                     <Text style={styles.subText}>
                        *Visit <Text style= {{fontWeight: 'bold', textDecorationLine: 'underline'}}>Project Sunroof </Text>to get your roof's square footage.
                     </Text>
                     </TouchableOpacity>
                  <View style= {styles.buttonContainer}>
                     <View style={styles.inputButton}>
                        <Button color="white" title= "Submit" onPress={() => {Actions.useroutlook()}}/>
                     </View>
                  </View>
               </KeyboardAwareScrollView>
            </ImageBackground>
         </View>
      )} else {
         return (
            <View>
               <ImageBackground source={Backdrop} style={{width: "100%", height: "100%"}}>
                  <View style= {styles.inputContainerLoading}>
                     <Image style= {styles.image} source= {Logo} />
                  </View>
               </ImageBackground>
            </View>
         )
      }
   }
}

const styles = StyleSheet.create({
   inputContainer: {
      justifyContent: "space-around",
      height: "100%",
      padding: 20,
    },
    inputContainerLoading: {
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      padding: 20,
    },
    buttonContainer: {
      width: "100%",
      alignItems: "center",
    },
    image: {
      width: 225,
      height: 225,
      marginTop: 50,
    },
    inputButton: {
      backgroundColor: "#ffd11a",
      margin: 8,
      borderRadius: 5,
      width: "50%",
      alignItems: "center"
    },
    header: {
      fontWeight: "bold",
      fontSize: 20,
      color: "#4d4d4d"
    },
    subText: {
      fontSize: 12,
      color: "#4d4d4d"
    },  
})

export default compose(
   graphql(addUserFinancialInputs, {name: "addUserFinancialInputs"}),
   graphql(getUser, {name: "getUser"})
)(UserInput)