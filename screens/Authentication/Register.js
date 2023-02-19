import {Button, Text, View, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';


export default function Register() {
    const navigate = useNavigation()

    return (
      <View style={[globalStyles.mainColor, styles.container]}>
        <View style={[globalStyles.circle, globalStyles.subColor, styles.inputBox]}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.subTitles}>Email:</Text>
          <TextInput style={styles.input} placeholder='Enter Email...'/>
          <Text style={styles.subTitles}>Password:</Text>
          <TextInput style={styles.input} placeholder='Enter Password...'/>
          <Text style={styles.subTitles}>Re-Enter Password:</Text>
          <TextInput style={styles.input} placeholder='Enter Re-enter Password...'/>
          <View style={styles.button}>
            <Button onPress={() => null} title='Submit' color="#1573FE"/>
            </View>
            <TouchableNativeFeedback onPress={() => navigate.navigate("Login")}>
              <Text style={styles.nav}>Already have an account? Click here to sign in.</Text>
            </TouchableNativeFeedback>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    title: {
      color: "white",
      alignSelf: "center",
      textAlign: "center",
      fontSize: 45,
      fontWeight: "bold",
      width: 200,
    },

    subTitles: {
      color: "white",
      alignSelf: "center",
      marginTop: 30,
      marginBottom: 10,
      fontSize: 20,
      fontWeight: "bold",
      width: 200,
      marginLeft: -80,
    },

    input: {
      height: 40,
      width: 250,
      padding: 10,
      backgroundColor: "white",
      borderRadius: 5,
      alignSelf: "center",
      marginLeft: -30,
    },

    button: {
      padding: 10,
      marginTop: 40,
      marginHorizontal: 200,
      alignContent: "center",
      textAlign: "center" 
  },

  nav: {
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    width: 300,
  }
  })