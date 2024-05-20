import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";


const CategoryGridTile = ({
  title,
  color,
  onPress,
}: {
  title: string;
  color: string;
  onPress: () => void;
}) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: `${color}dd`,
            opacity: Platform.OS === "ios" && pressed ? 0.8 : 1,
          },
        ]}
        android_ripple={{ color: color }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
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
});

export default CategoryGridTile;
