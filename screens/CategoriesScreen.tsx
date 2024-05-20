import React from "react";
import { FlatList, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "./../data/dummy-data";
import { RootStackParamList } from "../types/rootStackParams";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList>;

const CategoriesScreen = ({ navigation }: HomeScreenProps) => {
  const pressTileHandler = () => {
    navigation.navigate("MealsOverview");
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryGridTile
            title={item.title}
            color={item.color}
            onPress={pressTileHandler}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
