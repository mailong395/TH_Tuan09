import { StyleSheet, Text, View } from "react-native";

export default function Lab02() {
  return (
    <View style={styles.container}>
      <Text>Lab02</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
