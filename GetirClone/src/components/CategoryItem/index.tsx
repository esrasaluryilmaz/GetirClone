import React from "react";
import { TouchableOpacity, Image, Text, Dimensions } from "react-native";
import { Category } from "../../models";
const { width, height } = Dimensions.get("window");
type categoryItemProps = {
  item: Category;
};
function index({ item }: categoryItemProps) {
  return (
    <TouchableOpacity
      style={{
        width: width * 0.25,
        height: width * 0.24,
        marginTop: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Image
        style={{ width: width * 0.18, height: width * 0.18, borderRadius: 10 }}
        source={{ uri: item.src }}
      />
      <Text style={{ fontSize: 12, color: "#616161", fontWeight: "500" }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}
export default index;
