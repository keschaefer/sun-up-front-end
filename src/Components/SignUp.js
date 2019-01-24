import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux'
import Logo from '../assets/SunUp_Logo.png';
import BackgroundImg from '../assets/solar-panels.jpg'
import { Input } from 'react-native-elements';

class SignUp extends Component {
   constructor() {
      super() 
         this.state = {
            userFullName: "",
            userCompanyName: "",
            userEmail: "",
            userPassword: "",
            userConfirmPassword: "",
         }
      }
   
   // updateInputState = () => {
   //    this.setState({
   //       [key]:
   //    })
   // }

   render() {
      return(
         <View>
            <ImageBackground source={BackgroundImg} style={{width: 'auto', height: '100%'}}>
               <View style= {styles.inputContainer}>
                  <Image style= {styles.image} source= {Logo} />
                  <Input style={styles.inputUser}
                     placeholder= "Full Name"
                     leftIcon={{ type: 'font-awesome', name: 'user' }}/>
                  <Input style= {styles.inputUser}
                     placeholder= "Company Name"
                     leftIcon={{ type: 'font-awesome', name: 'building' }}/>
                  <Input style={styles.inputUser}
                     placeholder= "Email"
                     leftIcon={{ type: 'font-awesome', name: 'envelope' }}/>
                  <Input style={styles.inputUser}
                     placeholder= "Password"
                     leftIcon={{ type: 'font-awesome', name: 'lock' }}/>
                  <Input style={styles.inputUser}
                     placeholder= "Confirm Password"
                     leftIcon={{ type: 'font-awesome', name: 'lock' }}/>
                  <View style= {styles.buttonContainer}>
                     <View>
                        <Button color='blue' title= "Existing User?" onPress={() => Actions.signin()}/>
                     </View>
                     <View style={styles.inputButton}>
                        <Button color='white'title= "Sign Up" onPress={() => Actions.userinput()}/>
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
      backgroundColor: 'white'
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

export default SignUp