import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumDetail = (props) => {
  const { title, releasetime , image } = props.album;
  return (
    <View style={styles.container}>    
        <Image
          style={styles.image}
          source={{
            uri: image
          }}
        />
        <View style={styles.content}>
          <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.releasetime}>{releasetime}</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
  },
  content: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    
  },
  image: {
    height: 300,
    width: 300,
  },
  text: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    color:"#784C24",
  },
  releasetime: {
    fontSize: 14,
    fontWeight: '400',
    color:"#784C24",
  },
});

export default AlbumDetail;