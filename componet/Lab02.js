import * as React from "react";
import { View, StyleSheet, Animated, Image } from "react-native";

export default function Lab02() {
  const imgMouse =
    "https://res.cloudinary.com/dpux6zwj3/image/upload/v1667657622/samples/animals/tom_and_jerry_PNG2_vdepbx.png";

  const box1 = React.useRef(
    new Animated.ValueXY({
      x: Math.floor(Math.random() * 200) + 1,
      y: Math.floor(Math.random() * 600) + 1,
    })
  ).current;
  const box2 = React.useRef(
    new Animated.ValueXY({
      x: Math.floor(Math.random() * 200) + 1,
      y: Math.floor(Math.random() * 600) + 1,
    })
  ).current;
  const box3 = React.useRef(
    new Animated.ValueXY({
      x: Math.floor(Math.random() * 200) + 1,
      y: Math.floor(Math.random() * 600) + 1,
    })
  ).current;

  function onPress(evt) {
    Animated.timing(box1, {
      toValue: {
        x: Math.floor(Math.random() * 200) + 1,
        y: Math.floor(Math.random() * 600) + 1,
      },
      useNativeDriver: true,
    }).start();
    Animated.timing(box2, {
      toValue: {
        x: Math.floor(Math.random() * 200) + 1,
        y: Math.floor(Math.random() * 600) + 1,
      },
      useNativeDriver: true,
    }).start();
    Animated.timing(box3, {
      toValue: {
        x: Math.floor(Math.random() * 200) + 1,
        y: Math.floor(Math.random() * 600) + 1,
      },
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={styles.container}>
      <Animated.Image
        onStartShouldSetResponder={() => true}
        onResponderGrant={onPress}
        source={{ uri: imgMouse }}
        style={[
          styles.box,
          {
            transform: [{ translateX: box1.x }, { translateY: box1.y }],
          },
        ]}
      />
      <Animated.Image
        onStartShouldSetResponder={() => true}
        onResponderGrant={onPress}
        source={{ uri: imgMouse }}
        style={[
          styles.box,
          {
            transform: [{ translateX: box2.x }, { translateY: box2.y }],
          },
        ]}
      />
      <Animated.Image
        onStartShouldSetResponder={() => true}
        onResponderGrant={onPress}
        source={{ uri: imgMouse }}
        style={[
          styles.box,
          {
            transform: [{ translateX: box3.x }, { translateY: box3.y }],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    position: "absolute",
    resizeMode: "center",

    width: 100,
    height: 50,

    borderRadius: 10,
  },
});
