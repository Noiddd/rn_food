import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    gap: 30,
  },
  searchSection: {
    flex: 1,
  },
  searchField: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 7,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 10,
  },
  optionButton: { padding: 10, borderRadius: 50 },
  searchButton: {},
  searchInput: {
    color: Colors.mediumDark,
  },
});
