import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../assets/SunUp_Logo.png';
import BackgroundImg from '../assets/solar-panels.jpg'


const SignIn = (props) => {
   return(
     <View style= {styles.background}>
         <ImageBackground source={BackgroundImg} style={{width: 'auto', height: '100%'}}>
            <View style= {styles.inputContainer}>
               <Image style= {styles.image} source= {Logo} />
               <TextInput style={styles.inputUser}
                  placeholder= "email"/>
               <TextInput style={styles.inputUser}
                  placeholder= "password"/>
                  {/* onChangeText= {props.placeNameChangeHandler} */}
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
   )
}

const styles = StyleSheet.create({
   background: {
      opacity: 20
   },
   inputContainer: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: "90%"
    },
    inputUser: {
      width: "70%",
      borderWidth: 1,
      borderColor: '#A0A0A0',
      height: 30,
      borderRadius: 3,
      backgroundColor: 'white'
    },
    image: {
      width: 225,
      height: 225,
      marginTop: 50,
      opacity: 50
    },
    inputButton: {
      minWidth: 50,
      backgroundColor: '#0098F7',
      margin: 15,
      borderRadius: 5,
    },
    buttonContainer: {
      display: "flex",
      flexDirection: 'row',
      alignContent: 'space-between'
    }
    
})

export default SignIn


