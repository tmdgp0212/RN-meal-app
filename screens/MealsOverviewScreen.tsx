import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { MEALS } from "../data/dummy-data";
import { RootStackParamList } from "../types/rootStackParams";
import MealItem from "../components/MealItem";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

const MealsOverviewScreen = ({ navigation, route }: ScreenProps) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useEffect(() => {
    navigation.setOptions({ title: route.params.category });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(mealItem) => <MealItem meal={mealItem.item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
