import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}> 
      <Image
      style={styles.imageStyle}
      source={{
            uri:"https://i.pinimg.com/originals/e9/70/70/e9707065738da8b2fe1ee353233f9ebe.jpg"
       }}  
      /> 
            <Text style={styles.textStyle}>Shawn Mendes's Albums </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#A7DDF4",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 4,
    marginBottom:20
  },
  textStyle: {
    fontSize: 20,
    marginTop:5,
    color:"#114F87",
  },
  imageStyle:{
    marginTop:10,
   height:50,
   width:50,
  },
});

export default Header;