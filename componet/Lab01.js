import { useRef, useState } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

export default function Lab01() {
  // Declaration Image Cat
  const imgaCat =
    "https://res.cloudinary.com/dpux6zwj3/image/upload/v1667657127/samples/animals/tom_and_jerry_PNG63_g6i1o2.png";

  // Random x, y for box
  var numX = Math.floor(Math.random() * 200) + 1;
  var numY = Math.floor(Math.random() * 600) + 1;

  // Set value for box
  const refLocation = useRef(
    new Animated.ValueXY({ x: numX, y: numY })
  ).current;

  // handled onPress
  function onPress(evt) {
    Animated.timing(refLocation, {
      toValue: {
        x: evt.nativeEvent.locationX - 50,
        y: evt.nativeEvent.locationY - 50,
      },
      useNativeDriver: true,
    }).start();
  }

  return (
    <View
      onStartShouldSetResponder={() => true}
      onResponderGrant={onPress}
      style={styles.container}
    >
      <Animated.Image
        source={{ uri: imgaCat }}
        style={[
          styles.box,
          {
            transform: [
              { translateX: refLocation.x },
              { translateY: refLocation.y },
            ],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  box: {
    position: "absolute",
    resizeMode: "center",
    zIndex: 0,

    width: 150,
    height: 100,
  },
});
