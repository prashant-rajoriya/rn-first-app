import React from "react";
import { withNavigation } from "react-navigation";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import ResultDetails from "./ResultDetails";

const ResultsList = ({ title = "", results = [], navigation }) => {
  return results.length !== 0 ? (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ResultsShow", { id: item.id })}
          >
            <ResultDetails item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  container: {
    marginVertical: 10
  }
});

export default withNavigation(ResultsList);
