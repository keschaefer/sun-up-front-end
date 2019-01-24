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
   
   inputHandler = (name, text) => {
      this.setState({
         [name]: text
      })
   }

   render() {
      return (
     <View style= {styles.background}>
         <ImageBackground source={BackgroundImg} style={{width: 'auto', height: '100%'}}>
            <View style= {styles.inputContainer}>
               <Image style= {styles.image} source= {Logo} />
               <Input style= {styles.inputs} onChangeText={(text) => this.inputHandler('userEmail', text)} containerStyle={{ backgroundColor: 'white', borderRadius: 15}} inputContainerStyle= {{borderBottomWidth: 0}}
               placeholder= "email"
               leftIcon={{ type: 'font-awesome', name: 'envelope' }}/>
               <Input onChangeText={(text) => this.inputHandler('userPassword', text)} containerStyle={{ backgroundColor: 'white', borderRadius: 15}} inputContainerStyle= {{borderBottomWidth: 0}}
               placeholder= "password"
               leftIcon={{ type: 'font-awesome', name: 'lock' }}/>
               <View style= {styles.buttonContainer}>
                  <View style={styles.inputButton}>
                     <Button color='white' title= "Sign In" onPress={() => Actions.userinput()}/>
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
      justifyContent: 'space-around',
      alignItems: 'center',
      height: "100%",
      padding: 25
    },
    image: {
      width: 150,
      height: 150,
      marginTop: 15,
      marginBottom: 15,
      borderRadius: 5,
    },
    inputButton: {
      minWidth: 100,
      backgroundColor: '#0098F7',
      margin: 5,
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


