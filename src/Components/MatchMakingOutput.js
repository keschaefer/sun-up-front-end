import React, { Component } from 'react';
import MatchCard from './MatchCard.js'
import { View, StyleSheet, TouchableOpacity, Image, Button, ImageBackground, Text } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import Backdrop from "../assets/leaves-pattern.png";
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
class MatchMakingOutput extends Component {
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
            <View>
               <ImageBackground source={Backdrop} style={{width: "100%", height: "100%"}}>
                  <View style= {styles.container}>
                     <View>
                        <Text style= {styles.header}>It's time to find a Match!</Text>
                        <Text>We've based your matches on your personalized estimates</Text>
                     </View>
                     <View>
                        <MatchCard/>
                     </View>
                        <View style= {styles.inputContainer}>
                           <CheckBox center title='Click Here'checked={this.state.checked} />
                        </View>
                     </View>
            </ImageBackground>
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
   container: {
      justifyContent: "space-between",
      height: "100%",
      padding: 20,
      alignItems: "center"
    },
    image: {
      width: 225,
      height: 225,
      marginTop: 50,
    },
    imageBar: {
      width: "100%"
    },
    inputContainer: {
      width: "50%",
    },
    header: {
      fontWeight: "bold",
      fontSize: 20,
      color: "#4d4d4d"
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
    subTextContainer: {
      flexWrap: "wrap",
      width: "58%"
    },
    subTextNumericContainer: {
      width: "38%"
    },
    subText: {
      fontSize: 16,
      color: "#4d4d4d",
    },
    values: {
      fontSize: 16,
      color: "#4d4d4d",
      fontWeight: "bold",
    } 
})

export default compose(
   graphql(getUser, {name: "getUser"})
)(MatchMakingOutput)