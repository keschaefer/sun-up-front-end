import React, { Component } from 'react';
import MatchCard from './MatchCard.js'
import { View, StyleSheet, TouchableOpacity, Image, Button, ImageBackground, Text, ScrollView } from 'react-native';
import Backdrop from "../assets/leaves-pattern.png";
/* Background pattern from Toptal Subtle Patterns */
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
         currentUserNameFull: "",
         checked: false,
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

handleCheckBox = () => {
   this.setState({
      checked: !this.state.checked
   })
}

   render() {
      if (!this.props.getUser.loading) {
         return (
            <View>
               <ImageBackground source={Backdrop} style={{width: "100%", height: "100%"}}>
                  <ScrollView contentContainerStyle= {styles.container}>
                     <View style= {{width: "100%", paddingBottom: 10}}>
                        <Text style= {styles.mainHeader}>Here Are Your Matches!</Text>
                        <Text style= {styles.subText}>We've based your matches on your personalized solar estimates</Text>
                     </View>
                     <View style= {{width: "100%", paddingBottom: 10}}>
                        <MatchCard/>
                     </View>
                        <View>
                           <Text style= {styles.subText}>Interested in receiving alerts about new matches? </Text>
                           <CheckBox center title='Click Here!' containerStyle= {{backgroundColor: 'transparent', borderColor: 'transparent'}} checked={this.state.checked} onPress= {() => this.handleCheckBox()}/>
                        </View>
                     </ScrollView>
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
      padding: 20,
      alignItems: "center"
    },
    image: {
      width: 225,
      height: 225,
      marginTop: 50,
    },
    inputContainer: {
      width: "50%",
      backgroundColor: "transparent"
    },
    header: {
      fontWeight: "bold",
      fontSize: 20,
      color: "#4d4d4d"
    },
    mainHeader: {
      fontWeight: "bold",
      fontSize: 24,
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