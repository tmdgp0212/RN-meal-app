import React from "react";
import { Pressable } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const FavoriteButton = ({
  isFavorite,
  onPress,
}: {
  isFavorite: boolean;
  onPress: () => void;
}) => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
      onPress={onPress}
    >
      <FontAwesome
        name={isFavorite ? "star" : "star-o"}
        size={22}
        color={"#FF7F27"}
      />
    </Pressable>
  );
};

export default FavoriteButton;
