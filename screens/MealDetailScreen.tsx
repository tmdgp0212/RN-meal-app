import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import IconButton from "../components/favoriteButton";

import { MEALS } from "../data/dummy-data";

import { Colors } from "../constants/Colors";
import { StoreStateType } from "../store/store";
import { addFavorite, removeFavorite } from "../store/favorites";

import { RootStackParamList } from "../types/rootStackParams";
import { MealItemType } from "../types/dummyDataType";

import { Entypo } from "@expo/vector-icons";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "MealDetail">;

const MealDetailScreen = ({ route, navigation }: ScreenProps) => {
  const dispatch = useDispatch();

  const favoriteMealIds = useSelector<StoreStateType, string[]>(
    (state) => state.FavoriteReducer.ids
  );

  const meal: MealItemType | undefined = MEALS.find(
    (meal) => meal.id === route.params.mealId
  );

  const [imageHeight, setImageHeight] = useState(300);

  const isFavoriteMeal = favoriteMealIds.includes(route.params.mealId);

  const tags = [
    { label: "GlutenFree", value: meal?.isGlutenFree },
    { label: "LactoseFree", value: meal?.isLactoseFree },
    { label: "Vegan", value: meal?.isVegan },
    { label: "Vegetarian", value: meal?.isVegetarian },
  ].filter((tag) => tag.value);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scollOffsetY = event.nativeEvent.contentOffset.y;
    setImageHeight(300 - scollOffsetY / 2);
  };

  const favoriteHandler = () => {
    if (favoriteMealIds.includes(route.params.mealId)) {
      dispatch(removeFavorite({ id: route.params.mealId }));
    } else {
      dispatch(addFavorite({ id: route.params.mealId }));
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: meal?.title,
      headerRight: () => (
        <IconButton isFavorite={isFavoriteMeal} onPress={favoriteHandler} />
      ),
    });
  }, [navigation, favoriteHandler, isFavoriteMeal]);

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: meal?.imageUrl }}
        style={[styles.image, { height: imageHeight }]}
      />
      <View style={{ flex: 1 }}>
        <ScrollView onScroll={handleScroll}>
          <View style={styles.contentContainer}>
            <View style={styles.badgeContainer}>
              {tags.map((tag) => (
                <View key={tag.label} style={styles.badge}>
                  <Text style={styles.badgeText}>#{tag.label}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.title}>{meal?.title}</Text>
            <Text>
              {meal?.affordability}
              <Entypo name="dot-single" size={16} color="#3e3e3e" />
              {meal?.complexity}
              <Entypo name="dot-single" size={16} color="#3e3e3e" />
              {meal?.duration}m
            </Text>
            <Text style={styles.subTitle}>INGREDIENTS</Text>
            <View style={styles.listContainer}>
              {meal?.ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.ingredient}>
                  {ingredient}
                </Text>
              ))}
            </View>
            <Text style={styles.subTitle}>STEPS</Text>
            <View style={styles.listContainer}>
              {meal?.steps.map((step, index) => (
                <Text key={index}>
                  {index + 1}. {step}
                </Text>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  badgeContainer: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  listContainer: {
    flex: 1,
    gap: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#006500",
    borderRadius: 8,
    backgroundColor: "#CDDF93aa",
  },
  badgeText: {
    fontSize: 12,
    color: "#006500",
  },
  image: {
    width: "100%",
    minHeight: 100,
    maxHeight: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.primary900,
    lineHeight: 36,
  },
  subTitle: {
    width: "100%",
    marginVertical: 16,
    padding: 4,
    color: Colors.primary900,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary900,
  },
  desc: {
    flexDirection: "row",
    paddingVertical: 8,
    gap: 16,
  },
  label: { width: 102, fontWeight: "semibold", color: Colors.primary900 },
  ingredient: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: Colors.primary400,
  },
});

export default MealDetailScreen;
