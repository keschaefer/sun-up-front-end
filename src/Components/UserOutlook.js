import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Button, Image, ImageBackground, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'
import BackgroundImg from '../assets/solar-panels.jpg'

const SignUp = (props) => {
   return(
     <View>
         <ImageBackground source={BackgroundImg} style={{width: 'auto', height: '100%'}}>
            <Text >We need a little info to estimate to your energy outlook</Text>
            <View style= {styles.inputContainer}>
               <TextInput style={styles.inputUser}
                  placeholder= "Company's estimated taxes 2019"/>
                  <Text>*Your 2018 tax burden is good placeholder if you don't anticipate much change in your taxes for 2019!</Text>
               <TextInput style= {styles.inputUser}
                  placeholder= "Company's estimated annual energy cost 2019"/>
               <TextInput style={styles.inputUser}
                  placeholder= "Amount of energy generated in kW"/>
                  <Text>*Visit www.projectsunroof.com to estimate your energy potential</Text>
               <View style= {styles.buttonContainer}>
                  <View style={styles.inputButton}>
                     <Button color='white'title= "Submit" onPress={() => Actions.useroutlook()}/>
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