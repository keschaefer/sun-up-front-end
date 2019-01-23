import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Button, Image, ImageBackground } from 'react-native';
import Logo from '../assets/SunUp_Logo.png';
import BackgroundImg from '../assets/solar-panels.jpg'

const SignUp = (props) => {
   return(
     <View>
         <ImageBackground source={BackgroundImg} style={{width: 'auto', height: '100%'}}>
            <View style= {styles.inputContainer}>
               <Image style= {styles.image} source= {Logo} />
               <TextInput style={styles.inputUser}
                  placeholder= "Full Name"/>
               <TextInput style= {styles.inputUser}
                  placeholder= "Company Name"/>
               <TextInput style={styles.inputUser}
                  placeholder= "Email"/>
               <TextInput style={styles.inputUser}
               placeholder= "Password"/>
               <TextInput style={styles.inputUser}
               placeholder= "Confirm Password"/>
                  {/* onChangeText= {props.placeNameChangeHandler} */}
               <View style= {styles.buttonContainer}>
                  <View style={styles.inputButton}>
                     <Button color='white' title= "Existing User?"/>
                  </View>
                  <View style={styles.inputButton}>
                     <Button color='white'title= "Sign Up"/>
                  </View>
               </View>
            </View>
         </ImageBackground>
      </View>
   )
}

const styles = StyleSheet.create({
   inputContainer: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: "90%",
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
      opacity: 80
    },
    inputButton: {
      minWidth: 50,
      backgroundColor: '#0098F7',
      margin: 8,
      borderRadius: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
    
})

export default SignUp