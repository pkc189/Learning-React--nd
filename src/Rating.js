import React, { useState, useEffect } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList.js";
import { FaStar } from "react-icons/fa";

export default function StarRating() {
  const [colors, setColors] = useState(colorData);

  return (
    <ColorList
      colors={colors}
      onRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
      }}
    />
  );
}
