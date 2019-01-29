import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Button, Image, ImageBackground, KeyboardAvoidingView, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Actions } from 'react-native-router-flux'
import Logo from '../assets/SunUp_Logo_Horiz2.png';
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
               <KeyboardAwareScrollView contentContainerStyle= {{ justifyContent: 'space-between',
                     alignItems: 'center', height: "100%", paddingTop: 40}} 
                     resetScrollToCoords={{ x: 0, y: 0 }}
                     scrollEnabled={true}>
                  <Image style= {styles.image} source= {Logo}/>
                  <Input onChangeText={(text) => this.inputHandler('userFullName', text)} 
                     containerStyle={{ backgroundColor: 'white', borderRadius: 15, width: "85%"}} inputContainerStyle= {{borderBottomWidth: 0}}
                     placeholder= "full name"
                     leftIcon={{ type: 'font-awesome', name: 'user' }}/>
                  <Input onChangeText={(text) => this.inputHandler('userOrgName', text)}
                     containerStyle={{ backgroundColor: 'white', borderRadius: 15, width: "85%"}} inputContainerStyle= {{borderBottomWidth: 0}}
                     placeholder= "company name"
                     leftIcon={{ type: 'font-awesome', name: 'building' }}/>
                  <Input onChangeText={(text) => this.inputHandler('userEmail', text)} 
                     containerStyle={{ backgroundColor: 'white', borderRadius: 15, width: "85%"}} 
                     inputContainerStyle= {{borderBottomWidth: 0}} placeholder= "email" autoCapitalize= "none" 
                     autoCorrect= {false} keyboardType= "email-address" leftIcon={{ type: 'font-awesome', name: 'envelope' }}/>
                  <Input onChangeText={(text) => this.inputHandler('userPassword', text)} 
                     containerStyle={{ backgroundColor: 'white', borderRadius: 15, width: "85%"}} 
                     inputContainerStyle= {{borderBottomWidth: 0}} placeholder= "password" secureTextEntry leftIcon={{ type: 'font-awesome', name: 'lock' }}/>
                  <Input onChangeText={(text) => this.inputHandler('userConfirmPassword', text)}
                     containerStyle={{ backgroundColor: 'white', borderRadius: 15, width: "85%"}} inputContainerStyle= {{borderBottomWidth: 0}}
                     placeholder= "confirm password" secureTextEntry leftIcon={{ type: 'font-awesome', name: 'lock' }}/>
                  <View style= {styles.buttonContainer}>
                     <TouchableOpacity style={styles.inputButton}>
                        <Button color='white' title= "Sign In" onPress={() => Actions.signin()}/>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.inputButton}>
                        <Button color='white'title= "Sign Up" onPress={() => this.submitForm()}/>
                     </TouchableOpacity>  
                  </View>  
               </KeyboardAwareScrollView>
            </ImageBackground>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   inputContainer: {
      height: "100%",
      paddingTop: 40,
      // paddingBottom: 40
    },
    image: {
      width: "85%",
      height: "20%",
      borderRadius: 5,
    },
    buttonContainer: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: "85%",
      marginBottom: 40
    },
    inputButton: {
      width: "45%",
      backgroundColor: '#ffd11a',
      borderRadius: 5,
    } 
})

export default compose(
   graphql(addUser, {name: "addUser"})
)(SignUp)