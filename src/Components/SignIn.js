import  React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../assets/SunUp_Logo.png';
import BackgroundImg from '../assets/solar-panels.jpg'
import { Input } from 'react-native-elements';

class SignIn extends Component {
   constructor() {
      super() 
         this.state = {
            userEmail: "",
            userPassword: "",
         }
      }

   render() {
      return (
     <View style= {styles.background}>
         <ImageBackground source={BackgroundImg} style={{width: 'auto', height: '100%', opacity: "50%"}}>
            <View style= {styles.inputContainer}>
               <Image style= {styles.image} source= {Logo} />
               <Input 
                  placeholder= "email"
                  leftIcon={{ type: 'font-awesome', name: 'envelope' }}/>
               <Input 
                  placeholder= "password"
                  leftIcon={{ type: 'font-awesome', name: 'lock' }}/>
               <View style= {styles.buttonContainer}>
                  <View style={styles.inputButton}>
                     <Button color='white' title= "Sign In"/>
                  </View>
                  <View style={styles.inputButton}>
                     <Button color='white'title= "Sign Up" onPress={() => Actions.signup()}/>
                  </View>
               </View>
            </View>
         </ImageBackground>
      </View>
      );
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
      width: 225,
      height: 225,
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
      width: "75%",
      marginBottom: 20
    }
    
})

export default SignIn


