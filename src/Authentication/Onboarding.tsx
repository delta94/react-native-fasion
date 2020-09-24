import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import { interpolateColor, onScrollEvent, useValue } from "react-native-redash";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";

const BORDER_RADIUS = 75;
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    // backgroundColor: "cyan",
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

export const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don’t worry! Find the best outfit here!",
    color: "#BFEAF5",
    // picture: {
    //   src: require("../assets/1.png"),
    //   width: 2513,
    //   height: 3583,
    // },
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
    // picture: {
    //   src: require("../assets/2.png"),
    //   width: 2791,
    //   height: 3744,
    // },
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      " Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    // picture: {
    //   src: require("../assets/3.png"),
    //   width: 2738,
    //   height: 3244,
    // },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    // picture: {
    //   src: require("../assets/4.png"),
    //   width: 1757,
    //   height: 2551,
    // },
  },
];

const Onboarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ label }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ label }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={styles.footerContainer}>
          {slides.map(({ subtitle, description }, index) => {
            <Subslide
              key={index}
              last={!!(index === slides.length - 1)}
              {...{ subtitle, description }}
            />;
          })}
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
