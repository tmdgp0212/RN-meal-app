import React from "react";
import { Pressable } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const IconButton = () => {
  return (
    <Pressable style={({ pressed }) => ({ opacity: pressed ? 0.8 : 1 })}>
      <FontAwesome name="star" size={22} color="#FF7F27" />
    </Pressable>
  );
};

export default IconButton;
