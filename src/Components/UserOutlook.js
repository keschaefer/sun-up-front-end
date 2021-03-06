import React, { Component } from 'react';
import { View, StyleSheet, Image, Button, ImageBackground, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import Backdrop from "../assets/leaves-pattern.png";
/* Background pattern from Toptal Subtle Patterns */
import Logo from '../assets/SunUp_Logo.png';

const getUser = gql`
query {
	user(id: "5c4cb71a3f9de3c0133c38a2"){
      name_full
      org_name
      current_year_tax
      current_year_energy_cost
      roof_square_footage
	}
}
`

class UserOutlook extends Component {
constructor() {
   super() 
      this.state = {
         currentUserid: "",
         currentUserNameFull: ""
   }
}

numberFormat = (num) => {
   return num.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
}

costOfInstall = () => {
   return this.props.getUser.user.roof_square_footage * 14.218 * 3.85  
}

taxITC = () => {
   return (this.costOfInstall() * .3)
}

bonusDepreciation = () => {
   return ((this.costOfInstall() * .85) * .3)
}

energySavings = () => {
   return ((((this.props.getUser.user.roof_square_footage * .014198) * 3.5) * .13) * 365)
}

netSavings = (years) => {
   return (Number(this.costOfInstall()) - ( Number(this.taxITC()) + Number(this.bonusDepreciation()) + (years * Number(this.energySavings()))))
}

   render() {
      if (!this.props.getUser.loading) {
         return (
            <View>
               <ImageBackground source={Backdrop} style={{width: "100%", height: "100%"}}>
                  <ScrollView contentContainerStyle= {styles.container}>
                     <Text style= {styles.header}>Here's the energy outlook for {this.props.getUser.user.org_name}</Text>
                     <View style= {styles.mainTextContainer}>
                        <View style= {styles.textContainer}>
                           <View style= {styles.subTextContainer}>
                              <Text style= {styles.subText}>Cost to Install</Text>
                           </View>
                           <View style= {styles.subTextNumericContainer}>
                              <Text style= {styles.values}>${this.numberFormat(this.costOfInstall())}</Text>
                           </View>
                        </View>
                        <View style= {styles.textContainer}>
                           <View style= {styles.subTextContainer}>
                              <Text style= {styles.subText}>One Time Investment Tax Credit 2019</Text> 
                           </View>
                           <View style= {styles.subTextNumericContainer}>
                              <Text style= {styles.values}>${this.numberFormat(this.taxITC())}</Text>
                           </View>
                        </View>
                        <View style= {styles.textContainer}>
                           <View style= {styles.subTextContainer}>
                              <Text style= {styles.subText}>One Time Bonus Depreciation for 2019</Text> 
                           </View> 
                           <View style= {styles.subTextNumericContainer}>  
                              <Text style= {styles.values}>${this.numberFormat(this.bonusDepreciation())}</Text>
                           </View>
                        </View>
                        <View style= {styles.textContainer}>
                           <View style= {styles.subTextContainer}>
                              <Text style= {styles.subText}>Energy Bill Savings annually</Text>
                           </View>
                           <View style= {styles.subTextNumericContainer}>
                              <Text style= {styles.values}>${this.numberFormat(this.energySavings())}</Text>
                           </View>
                        </View>
                        <View style= {styles.textContainerNet}>
                           <View style= {styles.subTextContainerNet}>
                              <Text style= {styles.subTextNet}>Your Net Savings over the next Five Years</Text> 
                           </View>
                           <View style= {styles.subTextNumericContainerNet}>
                              <Text style= {styles.values}>${this.numberFormat(this.netSavings(5))}</Text>
                           </View>
                        </View>
                     </View>
                     <Text style= {styles.subText}>Project not a financial win? Connect with other like-minded buisnesses to take advantage of a "partnership flip" and save on solar together while also saving the planet. Enroll by clicking the button below!</Text>
                     <View style= {styles.buttonContainer}>
                        <View style={styles.inputButton}>
                           <Button color='white' title= "Enroll" onPress={() => Actions.matchmaking()}/>
                        </View>
                     </View>
                  </ScrollView>
               </ImageBackground>
            </View>
         )
      } else {
         return (
            <View>
               <ImageBackground source={Backdrop} style={{width: "100%", height: "100%"}}>
                  <Image style= {styles.image} source= {Logo} />
               </ImageBackground>
            </View>
         )
      }
   }
}

const styles = StyleSheet.create({
   container: {
      justifyContent: "space-between",
      padding: 20,
    },
    image: {
      width: 225,
      height: 225,
      marginTop: 50,
    },
    imageBar: {
      width: "100%"
    },
    inputButton: {
      backgroundColor: "#ffd11a",
      margin: 8,
      borderRadius: 5,
      width: "50%",
    },
    header: {
      fontWeight: "bold",
      fontSize: 20,
      color: "#4d4d4d"
    },
    buttonContainer: {
      width: "100%",
      alignItems: "center",
    },
    mainTextContainer: {
      minHeight: 250,
      justifyContent: 'space-between',
      width: "100%",
      marginTop: 20,
      marginBottom: 20,
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: "100%",
      marginTop: 3
    },
    textContainerNet: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: "90%",
      marginTop: 3,
      padding: 8,
      paddingTop: 12,
      paddingBottom: 12,
      borderWidth: 1, 
      borderColor: "#999999", 
      borderRadius: 5,
      backgroundColor: "white",
      shadowColor: "#999999",
      shadowOffset: {width: 2 ,height: 2},
      shadowOpacity: 2,
      shadowRadius: 2
    },
    subTextContainer: {
      flexWrap: "wrap",
      width: "60%"
    },
    subTextContainerNet: {
      flexWrap: "wrap",
      width: "70%"
    },
    subTextNumericContainer: {
      width: "40%",
      alignItems: 'center'
    },
    subTextNumericContainerNet: {
      width: "30%",
      alignItems: "center"
    },
    subText: {
      fontSize: 16,
      color: "#4d4d4d",
    },
    subTextNet: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#4d4d4d",
    },
    subTextBold: {
      fontSize: 12,
      fontWeight: "bold",
      color: "#4d4d4d"
    },
    values: {
      fontSize: 16,
      color: "#4d4d4d",
      fontWeight: "bold",
    } 
})

export default compose(
   graphql(getUser, {name: "getUser"})
)(UserOutlook)