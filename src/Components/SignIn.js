import  React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Button, Image, ImageBackground, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../assets/SunUp_Logo_Horiz2.png';
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
   
   inputHandler = (name, text) => {
      this.setState({
         [name]: text
      })
   }

   render() {
      return (
         <View style= {styles.background}>
            <ImageBackground source={BackgroundImg} style={{width: 'auto', height: '100%'}}>
               <KeyboardAvoidingView style= {styles.inputContainer} behavior= "padding">
                  <Image style= {styles.image} source= {Logo} />            
                  <Input onChangeText={(text) => this.inputHandler('userEmail', text)} containerStyle={{ backgroundColor: 'white', borderRadius: 15, width: "85%"}} inputContainerStyle= {{borderBottomWidth: 0}} placeholder= "email" autoCapitalize= "none" autoCorrect= {false} keyboardType= "email-address" leftIcon={{ type: 'font-awesome', name: 'envelope' }}/>
                  <Input onChangeText={(text) => this.inputHandler('userPassword', text)} containerStyle={{ backgroundColor: 'white', borderRadius: 15, width: "85%"}} inputContainerStyle= {{borderBottomWidth: 0}} placeholder= "password" secureTextEntry leftIcon={{ type: 'font-awesome', name: 'lock' }}/>
                  <View style= {styles.buttonContainer}>
                     <TouchableOpacity style={styles.inputButton}>
                        <Button color='white' title= "Sign In" onPress={() => Actions.userinput()}/>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.inputButton}>
                        <Button color='white'title= "Sign Up" onPress={() => Actions.signup()}/>
                     </TouchableOpacity>  
                  </View> 
               </KeyboardAvoidingView>
            </ImageBackground>
         </View>
      );
   }
}
 
const styles = StyleSheet.create({
   inputContainer: {
      justifyContent: 'space-around',
      alignItems: 'center',
      height: "100%",
      paddingTop: 40,
      paddingBottom: 40
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

export default SignIn


