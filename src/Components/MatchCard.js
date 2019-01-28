import React, { Component } from 'react';
import seeds from '../seedMatches.json';
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, ListItem, Button } from 'react-native-elements';
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
                        {/* <Image style= {styles.image} source= {{uri: "https://www.whitehouse.gov/wp-content/uploads/2017/12/44_barack_obama1.jpg"}} /> */}
                           <Image style= {styles.image} source={require('../assets/Dane.jpeg')} />
                        </View>   
                        <View style= {styles.subTextContainer}>
                           <Text style= {styles.header}>{seed.org_name}</Text>
                           <Text style= {styles.subText}>{seed.name_full}</Text>
                           <View style= {styles.buttonContainer}>
                              <Button style= {styles.inputButton} title= "Connect"></Button>
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
      padding: 3, 
      borderWidth: 1, 
      borderColor: "#999999", 
      width: "100%",
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
      borderRadius: 50,
    },
    buttonContainer: {
      width: "50%",
      marginTop: 3,
      marginBottom: 3
    },
    header: {
      fontWeight: "bold",
      fontSize: 20,
      color: "#4d4d4d"
    },
    subTextContainer: {
      flexWrap: "wrap",
      width: "75%"
    },
    subIconContainer: {
      width: "25%"
    },
    subText: {
      fontSize: 16,
      color: "#4d4d4d",
    },
   //  mainTextContainer: {
   //    minHeight: 250,
   //    justifyContent: 'space-between',
   //    width: "100%",
   //    marginTop: 20,
   //    marginBottom: 20,
   //  },
    //  iconContainer: {
   //    flexDirection: 'row',
   //    justifyContent: 'space-between',
   //    width: "100%",
   //    marginTop: 3
   //  },    
})

export default compose(
   graphql(getUser, {name: "getUser"})
)(MatchCard)