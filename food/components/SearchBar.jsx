import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons name="search-outline" size={20} color={Colors.primary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Restaurants, groceries, dishes"
          ></TextInput>
        </View>
      </View>
      <Link href={"/"} asChild>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="options-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  searchSection: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 7,
    flex: 1,
    flexDirection: "row",
    gap: "10",
    paddingHorizontal: "20",
    alignItems: "center",
  },
  searchField: {
    flexDirection: "row",
  },
  optionButton: {
    padding: "10",
    borderRadius: "50",
  },
  searchButton: {},
  searchInput: {},
});

// const styles = StyleSheet.create({
//   searchContainer: {
//     height: 60,
//     backgroundColor: "#fff",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingLeft: 20,
//     paddingRight: 30,
//     gap: 30,
//   },
//   searchSection: {
//     backgroundColor: Colors.lightGrey,
//     padding: 10,
//     borderRadius: 7,
//     flex: 1,
//   },
//   searchField: {
//     alignItems: "center",
//     justifyContent: "flex-start",
//     flexDirection: "row",
//     gap: 10,
//   },
//   optionButton: {},
//   searchButton: {},
//   searchInput: {},
// });
