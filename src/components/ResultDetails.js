import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultDetails = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text>{`${item.rating} rating ${item.review_count} reviews`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 250,
    borderRadius: 5,
    marginBottom: 5
  },
  container: {
    marginLeft: 15
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default ResultDetails;
