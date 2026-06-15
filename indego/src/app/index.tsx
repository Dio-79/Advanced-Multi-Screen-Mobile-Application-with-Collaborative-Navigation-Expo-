import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert, ScrollView, Image } from "react-native";


export default function Index() {
  return (
    
    <View style={styles.container}>


    <View style={styles.Header}>
 
  <Text style={{paddingRight:3,color:"#FFFF"}}> Events|</Text>
  <Text style={{paddingRight:3,color:"#FFFF"}}> Gift Cards| </Text>
  <Text style={{paddingRight:3,color:"#FFFF"}}> Plum Rewards| </Text>
  <Text style={{paddingRight:3,color:"#FFFF"}}> Order Status| </Text>
   <Text style={{paddingRight:3,color:"#FFFF"}}>|Français </Text>

    </View>
   
  <View style={styles.navBar}>
  <Text style={{color:"#0000"}}>Indego</Text>

  </View>
    </View>


  
  )}



  const styles = StyleSheet.create({

    container: { marginBottom:1,
                borderWidth:1,
                
                 
                  


    },

    Header:{ 
      flexDirection:"row",
      justifyContent:"flex-end",
      backgroundColor:"#0000"


    },
    navBar:{


    }
  
  })