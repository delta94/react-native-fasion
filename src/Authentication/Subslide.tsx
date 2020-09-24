import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Button } from "../components";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    fontFamily: "SFProDisplay-Semibold",
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: "#0C0D34",
    textAlign: "center",
  },
  description: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 16,
    color: "#0C0D34",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 40,
  },
});

interface SubSlideProps {
  description: string;
  subtitle: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlide = ({ subtitle, description, last, onPress }: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        {...{ onPress }}
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
      />
    </View>
  );
};
export default SubSlide;
