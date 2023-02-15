import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  circle : {
    padding: 30,
    backgroundColor: "#191970",
    width : Dimensions.get("window").width*1.8,
    height: Dimensions.get("window").width*1.8,
    borderRadius: Dimensions.get("window").width,
    position: "absolute",
    bottom:-Dimensions.get("window").height + Dimensions.get("window").width*1.5
  }
});
