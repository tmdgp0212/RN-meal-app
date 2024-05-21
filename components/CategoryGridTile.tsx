import React from "react";
import {
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types/rootStackParams";
import { CategoryItemType } from "../types/dummyDataType";

const CategoryGridTile = ({ item }: { item: CategoryItemType }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const onPress = () => {
    navigation.navigate("MealsOverview", {
      categoryId: item.id,
      category: item.title,
    });
  };
  return (
    <ImageBackground source={{ uri: item.imageUrl }} style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: `${item.color}9e`,
            opacity: Platform.OS === "ios" && pressed ? 0.8 : 1,
          },
        ]}
        android_ripple={{ color: `${item.color}ae` }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,

    // IOS에서 shadow 속성 사용 시 backgroundColor 지정 필수
    backgroundColor: "white",

    // android_ripple을 위한 hidden. ios에선 필요한 그림자가 가려질 수 있음.
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 16,
  },
});

export default CategoryGridTile;
