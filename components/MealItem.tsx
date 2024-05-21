import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Entypo } from "@expo/vector-icons";

import { MealItemType } from "../types/dummyDataType";

const MealItem = ({ meal }: { meal: MealItemType }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        Platform.OS === "ios"
          ? [styles.cardContainer, { opacity: pressed ? 0.8 : 1 }]
          : styles.cardContainer
      }
      android_ripple={{ color: "#eee" }}
    >
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.mealInfoContainer}>
        <Text style={styles.title}>{meal.title}</Text>
        <Text style={styles.tags}>
          {meal.affordability}
          <Entypo name="dot-single" size={16} color="#3e3e3e" />
          {meal.complexity}
          <Entypo name="dot-single" size={16} color="#3e3e3e" />
          {meal.duration}m
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  mealInfoContainer: {
    padding: 8,
  },
  image: {
    width: "100%",
    height: 150,
    flex: 1,
  },
  title: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: "bold",
  },
  tags: {
    justifyContent: "center",
    alignItems: "center",
    color: "#3e3e3e",
  },
});

export default MealItem;
