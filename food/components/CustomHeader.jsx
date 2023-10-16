import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import SearchBar from "./SearchBar";

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.bike}
            source={require("../assets/icons/fast-delivery.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title}>Delivery Now</Text>
          <View style={styles.locationName}>
            <Text style={styles.subTitle}>Singapore</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  bike: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  locationName: {
    flexDirection: "row",
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
});

export default CustomHeader;
