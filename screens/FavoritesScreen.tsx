import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";
import { StoreStateType } from "../store/store";

const FavoritesScreen = () => {
  const favoriteMealIds = useSelector<StoreStateType, string[]>(
    (state) => state.FavoriteReducer.ids
  );

  const displayedMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

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
export default FavoritesScreen;
