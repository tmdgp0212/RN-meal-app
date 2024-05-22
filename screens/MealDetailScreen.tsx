import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RootStackParamList } from "../types/rootStackParams";
import { MEALS } from "../data/dummy-data";
import { MealItemType } from "../types/dummyDataType";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "MealDetail">;

const MealDetailScreen = ({ route, navigation }: ScreenProps) => {
  const meal: MealItemType | undefined = MEALS.find(
    (meal) => meal.id === route.params.mealId
  );

  const [imageHeight, setImageHeight] = useState(300);

  const tags = [
    { label: "GlutenFree", value: meal?.isGlutenFree },
    { label: "LactoseFree", value: meal?.isLactoseFree },
    { label: "Vegan", value: meal?.isVegan },
    { label: "Vegetarian", value: meal?.isVegetarian },
  ].filter((tag) => tag.value);

  const descList = [
    { label: "affordability", value: <Text>{meal?.affordability}</Text> },
    { label: "complexity", value: <Text>{meal?.complexity}</Text> },
    { label: "duration", value: <Text>{meal?.duration}m</Text> },
    {
      label: "ingredients",
      value: (
        <View style={{ flex: 1 }}>
          {meal?.ingredients.map((ingredient, index) => (
            <Text key={index}>{ingredient}</Text>
          ))}
        </View>
      ),
    },
    {
      label: "steps",
      value: (
        <View style={{ flex: 1, gap: 4 }}>
          {meal?.steps.map((step, index) => (
            <Text key={index}>
              {index + 1}. {step}
            </Text>
          ))}
        </View>
      ),
    },
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scollOffsetY = event.nativeEvent.contentOffset.y;
    setImageHeight(300 - scollOffsetY / 2);
  };

  useEffect(() => {
    navigation.setOptions({ title: meal?.title });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: meal?.imageUrl }}
        style={[styles.image, { height: imageHeight }]}
      />
      <View style={{ flex: 1 }}>
        <ScrollView onScroll={handleScroll} style={styles.contentContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.badgeContainer}>
              {tags.map((tag) => (
                <View key={tag.label} style={styles.badge}>
                  <Text style={styles.badgeText}>#{tag.label}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.title}>{meal?.title}</Text>
            {descList.map((desc) => (
              <View style={styles.desc} key={desc.label}>
                <Text style={styles.label}>{desc.label.toUpperCase()}</Text>
                {desc.value}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: { paddingHorizontal: 8 },
  badgeContainer: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  badge: {
    paddingHorizontal: 8,
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
    marginBottom: 16,
  },
  desc: {
    flexDirection: "row",
    paddingVertical: 8,
    gap: 16,
  },
  label: { width: 104, fontWeight: "semibold" },
});

export default MealDetailScreen;
