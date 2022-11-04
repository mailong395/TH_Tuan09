import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Lab01 from "./componet/Lab01";
import Lab02 from "./componet/Lab02";
import Lab03 from "./componet/Lab03";

export default function App() {
  const [screen, setScreen] = useState(0);

  // FUNCTION CHANGE SCREEN LAB
  const handleChangeScreen = () => {
    switch (screen) {
      case 0:
        return <Lab01 />;
      case 1:
        return <Lab02 />;
      case 2:
        return <Lab03 />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>{handleChangeScreen()}</View>
      <View style={styles.option}>
        <TouchableOpacity onPress={() => setScreen(0)}>
          <View style={styles.button}>
            <Text style={styles.titleButton}>Lab01</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen(1)}>
          <View style={styles.button}>
            <Text style={styles.titleButton}>Lab02</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen(2)}>
          <View style={styles.button}>
            <Text style={styles.titleButton}>Lab03</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  main: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  option: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,

    borderWidth: 1,
    borderRadius: 10,
  },
  titleButton: {
    fontSize: 18,
    fontWeight: "700",
  },
});
