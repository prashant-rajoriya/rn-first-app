import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, setTerm, getResults }) => {
  return (
    <View style={styles.SearchBarContainer}>
      <Feather name="search" style={styles.SearchIcon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="search"
        style={styles.SearchText}
        value={term}
        onChangeText={setTerm}
        onEndEditing={getResults}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBarContainer: {
    margin: 15,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    flexDirection: "row"
  },
  SearchIcon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  },
  SearchText: {
    fontSize: 18,
    flex: 1
  }
});

export default SearchBar;
