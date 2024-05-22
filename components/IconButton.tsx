import React from "react";
import { OpaqueColorValue, Pressable } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const IconButton = ({
  name,
  color = "black",
  size = 12,
}: {
  name: string;
  color?: string | OpaqueColorValue | undefined;
  size?: number;
}) => {
  return (
    <Pressable style={({ pressed }) => ({ opacity: pressed ? 0.8 : 1 })}>
      <FontAwesome name="star" size={22} color="#FF7F27" />
    </Pressable>
  );
};

export default IconButton;
