import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux'
import Logo from '../assets/SunUp_Logo.png';
import BackgroundImg from '../assets/solar-panels.jpg'
import { Input } from 'react-native-elements';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const addUser = gql`
mutation($password: String!, $name_full: String!, $email: String!, $org_name: String!) {
   addUser(password: $password, name_full: $name_full, email: $email, org_name: $org_name){
     id
     name_full
   }
 }
 `

class SignUp extends Component {
   constructor() {
      super() 
         this.state = {
            userFullName: "",
            userOrgName: "",
            userEmail: "",
            userPassword: "",
            userConfirmPassword: "",
         }
      }

   inputHandler = (name, text) => {
      this.setState({
         [name]: text
      })
   }

   submitForm = () => {
      this.props.addUser({
         variables: {
            password: this.state.userPassword,
            name_full: this.state.userFullName,
            email: this.state.userEmail,
            org_name: this.state.userOrgName
         }
      })
      Actions.userinput()
   }

   render() {
      return(
         <View>
            <ImageBackground source={BackgroundImg} style={{width: 'auto', height: '100%'}}>
               <View style= {styles.inputContainer}>
               <Image style= {styles.image} source= {Logo} />
                  <Input onChangeText={(text) => this.inputHandler('userFullName', text)} 
                     containerStyle={{ backgroundColor: 'white', borderRadius: 15}} inputContainerStyle= {{borderBottomWidth: 0}}
                     placeholder= "Full Name"
                     leftIcon={{ type: 'font-awesome', name: 'user' }}/>
                  <Input onChangeText={(text) => this.inputHandler('userOrgName', text)}
                     containerStyle={{ backgroundColor: 'white', borderRadius: 15}} inputContainerStyle= {{borderBottomWidth: 0}}
                     placeholder= "Company Name"
                     leftIcon={{ type: 'font-awesome', name: 'building' }}/>
                  <Input onChangeText={(text) => this.inputHandler('userEmail', text)}
                     containerStyle={{ backgroundColor: 'white', borderRadius: 15}} inputContainerStyle= {{borderBottomWidth: 0}}
                     placeholder= "Email"
                     leftIcon={{ type: 'font-awesome', name: 'envelope' }}/>
                  <Input onChangeText={(text) => this.inputHandler('userPassword', text)}
                     containerStyle={{ backgroundColor: 'white', borderRadius: 15}} inputContainerStyle= {{borderBottomWidth: 0}}
                     placeholder= "Password"
                     leftIcon={{ type: 'font-awesome', name: 'lock' }}/>
                  <Input onChangeText={(text) => this.inputHandler('userConfirmPassword', text)}
                     containerStyle={{ backgroundColor: 'white', borderRadius: 15}} inputContainerStyle= {{borderBottomWidth: 0}}
                     placeholder= "Confirm Password"
                     leftIcon={{ type: 'font-awesome', name: 'lock' }}/>
                  <View style= {styles.buttonContainer}>
                     <View style={styles.inputButton}>
                        <Button color='white'title= "Sign Up" onPress={() => this.submitForm()}/>
                     </View>
                     <View style={styles.inputButton}>
                        <Button color='white' title= "Existing User?" onPress={() => Actions.signin()}/>
                     </View>
                  </View>  
               </View>
            </ImageBackground>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   inputContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: "100%",
    },
    image: {
      width: 200,
      height: 200,
      marginTop: 15,
      marginBottom: 15,
      borderRadius: 5,
    },
    inputButton: {
      minWidth: 60,
      backgroundColor: '#0098F7',
      margin: 15,
      marginTop: 25,
      borderRadius: 5,
    },
    buttonContainer: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: "75%",
      marginBottom: 20
    }
})

export default compose(
   graphql(addUser, {name: "addUser"})
)(SignUp)