import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import Logo from '../assets/SunUp_Logo.png';

const SignIn = (props) => {
   return(
      <View style= {styles.inputContainer}>
         <Image style= {styles.image} source= {Logo} />
         <TextInput style={styles.inputPlace}
            placeholder= "email"/>
         <TextInput style={styles.inputPlace}
            placeholder= "password"/>
            {/* onChangeText= {props.placeNameChangeHandler} */}
         <View style= {styles.buttonContainer}>
            <Button style={styles.inputButton} title= "Sign In" />
            <Button title= "Sign Up"/>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   inputContainer: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: "90%"
    },
    inputPlace: {
      width: "70%",
      borderWidth: 1,
      borderColor: '#A0A0A0',
      height: 30,
      borderRadius: 3
    },
    image: {
      width: 225,
      height: 225,
      marginTop: 50,
    },
    inputButton: {
      backgroundColor: 'red'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
    
})

export default SignIn


