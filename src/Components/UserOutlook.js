import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Button, ImageBackground, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SlidingBar from '../assets/sliding-scale.png';
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

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
         currentUserid: "5c4b2e95769ad66ee19f2f88",
         currentUserNameFull: "Kate Schaefer",
         // current_year_tax: 200000,
         // current_year_energy_cost: 40000,
         // roof_square_footage: 2500,
         // projected_energy_annual_kW: 35,
   }
}

costOfInstall = () => {
   let costOfInstall = this.props.getUser.user.roof_square_footage * 14.218 * 3.85
   return costOfInstall.toFixed(2)
}

taxITC = () => {
   let taxITC = this.costOfInstall() * .3 
   return taxITC.toFixed(2)
}

bonusDepreciation = () => {
   let bonusDepreciation = (this.costOfInstall() * .85) * .3
   return bonusDepreciation.toFixed(2)
}

energySavings = () => {
   let energySavings = (((this.props.getUser.user.roof_square_footage * .014198) * 3.5) * .13) * 365
   return energySavings.toFixed(2)
}
   render() {
      if (!this.props.getUser.loading) {
         return (
            <View style= {styles.inputContainer}>
               <Text style= {styles.header}>Here's your energy outlook!</Text>
               <Text>*All numbers are estimates.</Text>
               <Text>Cost to Install ${this.costOfInstall()}</Text>
               <Text>One Time Investment Tax Credit 2019 ${this.taxITC()}</Text>
               <Text>One Time Bonus Depreciation for 2019 ${this.bonusDepreciation()}</Text>
               <Text>Energy Bill Savings annually ${this.energySavings()}</Text>
               <Text>Your Net Savings over the next Five Years</Text>
               <Image source= {SlidingBar} style= {styles.image}/>
               <Text >Project not a financial win? Connect with other like-minded buisnesses to take advantage of a "partnership flip" and save on solar together while also saving the planet. Enroll by clicking the button below!</Text>
               <View style= {styles.buttonContainer}>
                  <View style={styles.inputButton}>
                     <Button color='white' title= "Enroll" onPress={() => Actions.useroutlook()}/>
                  </View>
               </View>
            </View>
         )
      } else {
         return (
            <View>
               <Text>Loading...</Text>
            </View>
         )
      }
   }
}

const styles = StyleSheet.create({
   inputContainer: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: "100%",
      backgroundColor: 'white',
      padding: 15,
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

export default compose(
   graphql(getUser, {name: "getUser"})
)(UserOutlook)