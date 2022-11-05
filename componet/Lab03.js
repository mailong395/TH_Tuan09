import * as React from "react";
import {
  View,
  StyleSheet,
  Animated,
  Image,
  Text,
  Modal,
  Pressable,
} from "react-native";

const randomNum = Math.floor(Math.random() * 7) + 1;

export default function Lab03() {
  // Set data image
  const imgMouse =
    "https://res.cloudinary.com/dpux6zwj3/image/upload/v1667657622/samples/animals/tom_and_jerry_PNG2_vdepbx.png";
  const imgCat =
    "https://res.cloudinary.com/dpux6zwj3/image/upload/v1667657127/samples/animals/tom_and_jerry_PNG63_g6i1o2.png";

  // Show modal
  const [modalVisible, setModalVisible] = React.useState(false);

  // create count licked
  const [countClicked, setCountClicked] = React.useState(0);

  // create location image
  const box = React.useRef(
    new Animated.ValueXY({
      x: Math.floor(Math.random() * 200) + 1,
      y: Math.floor(Math.random() * 600) + 1,
    })
  ).current;
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

  // handled box
  function onPress(evt) {
    if (countClicked < randomNum) {
      setCountClicked(countClicked + 1);
      Animated.sequence([
        Animated.timing(box, {
          toValue: {
            x: evt.nativeEvent.pageX - 75,
            y: evt.nativeEvent.pageY - 25,
          },
          useNativeDriver: true,
        }),
        Animated.timing(box1, {
          toValue: {
            x: Math.floor(Math.random() * 200) + 1,
            y: Math.floor(Math.random() * 600) + 1,
          },
          useNativeDriver: true,
        }),
        Animated.timing(box2, {
          toValue: {
            x: Math.floor(Math.random() * 200) + 1,
            y: Math.floor(Math.random() * 600) + 1,
          },
          useNativeDriver: true,
        }),
        Animated.timing(box3, {
          toValue: {
            x: Math.floor(Math.random() * 200) + 1,
            y: Math.floor(Math.random() * 600) + 1,
          },
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      setModalVisible(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.CountClick}>
        <Text> Random Count limit: {randomNum}</Text>
        <Text> Count lick: {countClicked}</Text>
      </View>

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
      <Animated.Image
        source={{ uri: imgCat }}
        style={[
          styles.box,
          {
            transform: [{ translateX: box.x }, { translateY: box.y }],
          },
        ]}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>End Game!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 28,
  },
  box: {
    position: "absolute",
    resizeMode: "center",

    width: 100,
    height: 50,

    borderRadius: 10,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
