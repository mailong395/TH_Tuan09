import { useRef, useState } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

export default function Lab01() {
  const marginLeft = useRef(new Animated.Value(0)).current;
  const marginTop = useRef(new Animated.Value(0)).current;

  const onPress = (event) => {
    const x = event.nativeEvent.locationX - 50;
    const y = event.nativeEvent.locationY - 80;

    Animated.timing(marginLeft, {
      toValue: x,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(marginLeft, {
      toValue: y,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      onStartShouldSetResponder={() => true}
      onResponderGrant={onPress}
      style={styles.container}
    >
      <Animated.Image
        style={[styles.img, { translateX: marginLeft, translateY: marginTop }]}
        source={require("../assets/cat.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#eeeeee",
    paddingTop: 27,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "center",
  },
});
