import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert, ScrollView, Image } from "react-native";


export default function Index() {
  return (
    <View style={styles.wrapper}>

    <View style={styles.container}>


    <View style={styles.Header}>
 
  <Text style={{paddingRight:3,color:"#ffffff"}}> Events |</Text>
  <Text style={{paddingRight:3,color:"#ffffff"}}> Gift Cards | </Text>
  <Text style={{paddingRight:3,color:"#ffffff"}}> Plum Rewards | </Text>
  <Text style={{paddingRight:3,color:"#ffffff"}}> Order Status </Text>
   <Text style={{paddingRight:3,color:"#ffffff"}}>| Français </Text>
 </View>
</View>

   
  <View style={styles.navBar}>
  <View style={styles.title}>
  <Text style={{color:"#000000",fontSize:23}}>Indego</Text>
</View>
  </View>
    </View>


  
  )}



  const styles = StyleSheet.create({
    wrapper:{},

    container: { marginBottom:15,
                borderWidth:1,
                
                 
                  


    },

    Header:{ 
      flexDirection:"row",
      justifyContent:"flex-end",
      backgroundColor:"#000000"


    },
    navBar:{


    },

    title:{paddingTop:13,
      
          
           

    }
  
  })