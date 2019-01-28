import React, { Component } from 'react';
import seeds from '../seedMatches.json';
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
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
class MatchCard extends Component {
constructor() {
   super() 
      this.state = {
         currentUserid: "",
         currentUserNameFull: ""
   }
}

// costOfInstall = () => {
//    let costOfInstall = this.props.getUser.user.roof_square_footage * 14.218 * 3.85
//    return costOfInstall.toFixed(2)
// }

// taxITC = () => {
//    return (this.costOfInstall() * .3).toFixed(2)
// }

// bonusDepreciation = () => {
//    return ((this.costOfInstall() * .85) * .3).toFixed(2)
// }

// energySavings = () => {
//    return ((((this.props.getUser.user.roof_square_footage * .014198) * 3.5) * .13) * 365).toFixed(2)
// }

// netSavings = (years) => {
//    return (Number(this.costOfInstall()) - ( Number(this.taxITC()) + Number(this.bonusDepreciation()) + (years * Number(this.energySavings())))).toFixed(2)
// }

// energyPotential = () => {

// }

// sendMessage = () =>{
//    console.log("Hi")
// }

   render() {
      if (!this.props.getUser.loading) {
            return (
               seeds.map((seed) => {
                  return (
                     <Card containerStyle={{padding: 3, borderWidth: 1, borderColor: "black", width: "100%"}}> 
                        <View>
                           <ListItem key={seed.id} style={styles.header}/>
                           <Text style={styles.header}>{seed.org_name}</Text>
                           <Text style= {styles.subText}>{seed.name_full}</Text>
                           <View style= {styles.buttonContainer}>
                              <Button style= {styles.inputButton} title= "Connect"></Button>
                           </View>
                        </View>
                     </Card>
                  );
               })
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
    inputButton: {
      width: "45%",
      backgroundColor: '#0098F7',
      borderRadius: 5,
    },
    buttonContainer: {
      // flexDirection: 'row',
      // justifyContent: 'flex-end'
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
    }
    
})

export default compose(
   graphql(getUser, {name: "getUser"})
)(MatchCard)