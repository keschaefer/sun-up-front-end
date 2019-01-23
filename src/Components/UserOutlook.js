import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Button, ImageBackground, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'
import BackgroundImg from '../assets/solar-panels.jpg'
import SlidingBar from '../assets/sliding-scale.png';

const SignUp = (props) => {
   return(
     <View>
         <ImageBackground source={BackgroundImg} style={{width: 'auto', height: '100%'}}>
            <View style= {styles.inputContainer}>
               <Text style={{color:'white'}} style= {styles.header}>Here's your energy outlook!</Text>
               <Text style={{color:'white'}}>*All numbers are estimates.</Text>
               <Text style={{color:'white'}}>Cost to Install</Text>
               <Text style={{color:'white'}}>Tax Benefit Over Five Years</Text>
               <Text style={{color:'white'}}>Energy Bill Savings annually</Text>
               <Text style={{color:'white'}}>Your Net Savings over the next Five Years</Text>
               <Image source= {SlidingBar} style= {styles.image}/>
               <Text style={{color:'white'}} >Project not a financial win? Connect with other like-minded buisnesses to take advantage of a "partnership flip" and save on solar together while also saving the planet.</Text>
               <View style= {styles.buttonContainer}>
                  <View style={styles.inputButton}>
                     <Button color='white' title= "Submit" onPress={() => Actions.useroutlook()}/>
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
      height: "100%",
      // margin: 15,
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
      width: "90%",
    },
    header: {
      fontSize: 25,
      color: 'white'
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