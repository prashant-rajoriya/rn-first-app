import React, { useState, useEffect } from "react";
import { FlatList, Image, StyleSheet } from "react-native";
import yelp from "../api/index";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  const [errorMessage, setErrorMessage] = useState("");
  const getBusiness = async business => {
    try {
      const response = await yelp.get(`/${business}`);
      setResult(response.data);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    getBusiness(id);
  }, [id]);

  if (!result) {
    return null;
  } else if (errorMessage) {
    return errorMessage;
  }

  return (
    <FlatList
      data={result.photos}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Image source={{ uri: item }} style={styles.image} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    marginBottom: 5
  }
});

export default ResultsShowScreen;
