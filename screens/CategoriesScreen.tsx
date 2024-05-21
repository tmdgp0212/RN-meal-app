import React from "react";
import { FlatList, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "./../data/dummy-data";
import { RootStackParamList } from "../types/rootStackParams";

type ScreenProps = NativeStackScreenProps<RootStackParamList>;

const CategoriesScreen = ({ navigation }: ScreenProps) => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => <CategoryGridTile item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;