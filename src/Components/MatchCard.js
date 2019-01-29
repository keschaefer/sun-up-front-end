import React, { Component } from 'react';
import seeds from '../seedMatches.json';
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, ListItem} from 'react-native-elements';
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
                  console.log(seed.image)
                  return (
                     <View key={seed.name_full} style= {styles.cardContainer}> 
                        <View style= {styles.subIconContainer}>
                           <Image style= {styles.image} source= {{uri: seed.image}}/>
                        </View>   
                        <View style= {styles.subTextContainer}>
                           <Text style= {styles.header}>{seed.org_name}</Text>
                           <Text style= {styles.subText}>{seed.name_full}</Text>
                           <View style= {styles.inputButton}>
                              <Button color="white" title= "Connect" onPress={() => {}}/>
                           </View> 
                        </View>
                     </View>
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
   cardContainer: {
      flexDirection: "row",
      width: "100%",
      minHeight: 100,
      padding: 3, 
      borderWidth: 1, 
      borderColor: "#999999", 
      marginTop: 5,
      borderRadius: 5,
      backgroundColor: "white",
      shadowColor: "#999999",
      shadowOffset: {width: 2 ,height: 2},
      shadowOpacity: 2,
      shadowRadius: 2
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 1, 
      borderColor: "#999999", 
      shadowColor: "#999999",
      shadowOffset: {width: 2 ,height: 2},
      shadowOpacity: 2,
      shadowRadius: 2
    },
    bottomRow: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    inputButton: {
      width: "45%",
      marginTop: 3,
      marginBottom: 3,
      backgroundColor: "#ffd11a",
      borderRadius: 5
    },
    header: {
      fontWeight: "bold",
      fontSize: 18,
      color: "#4d4d4d"
    },
    subTextContainer: {
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: "70%"
    },
    subIconContainer: {
      width: "30%",
      alignItems: "center",
      justifyContent: "center"
    },
    subText: {
      fontSize: 16,
      color: "#4d4d4d",
    },   
})

export default compose(
   graphql(getUser, {name: "getUser"})
)(MatchCard)