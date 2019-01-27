import React, { Component } from 'react';
import MatchCard from './MatchCard.js'
import { View, StyleSheet, TouchableOpacity, Image, Button, ImageBackground, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SlidingBar from '../assets/sliding-scale.png';
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import { CheckBox } from 'react-native-elements'

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
class MatchCard extends Component {
constructor() {
   super() 
      this.state = {
         currentUserid: "",
         currentUserNameFull: ""
   }
}

costOfInstall = () => {
   let costOfInstall = this.props.getUser.user.roof_square_footage * 14.218 * 3.85
   return costOfInstall.toFixed(2)
}

taxITC = () => {
   return (this.costOfInstall() * .3).toFixed(2)
}

bonusDepreciation = () => {
   return ((this.costOfInstall() * .85) * .3).toFixed(2)
}

energySavings = () => {
   return ((((this.props.getUser.user.roof_square_footage * .014198) * 3.5) * .13) * 365).toFixed(2)
}

netSavings = (years) => {
   return (Number(this.costOfInstall()) - ( Number(this.taxITC()) + Number(this.bonusDepreciation()) + (years * Number(this.energySavings())))).toFixed(2)
}

energyPotential = () => {

}

   render() {
      if (!this.props.getUser.loading) {
         return (
            <View style= {styles.inputContainer}>
               <Text></Text>
               <Text></Text>
               <View>
               <View style={styles.inputButton}>
                     <Button color='white' title= "Message"/>
                  </View> 
               </View>
            </View>
         )
      } else {
         return (
            <View>
               <Text>Finding Your Matches</Text>
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
)(MatchCard)