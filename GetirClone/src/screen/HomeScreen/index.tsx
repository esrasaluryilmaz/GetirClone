import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import Entypo from "@expo/vector-icons/Entypo";

function index() {
  return (
    <View style={styles.headerMain}>
      <View>
        <Image />
        <View>
          <Text></Text>
          <Text></Text>
          <Entypo name="chevron-right" size={24} color="#5D3EBD" />
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default index;
