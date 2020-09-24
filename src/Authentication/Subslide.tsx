import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {},
});

interface SubslideProps {
  description: string;
  subtitle: string;
  last?: boolean;
  x: Animated.Node<number>;
}

const Subslide = ({ subtitle, description, last, x }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text>{subtitle}</Text>
      <Text>{description}</Text>
    </View>
  );
};
export default Subslide;
