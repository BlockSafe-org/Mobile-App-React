import {Button, Text, View, StyleSheet, TextInput, TouchableNativeFeedback, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from "yup";
import FirebaseAuth from '../../services/Authentication';


const registerSchema = yup.object({
  email: yup.string().email("Invalid email address!").required("Email is required!"),
  password: yup.string().required("Password is required!").min(4,"Password is too short!").max(16,"Password is too long!"),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], "Passwords don't match!").required('This field is required!')
})


export default function Register() {
    const navigate = useNavigation()
    const [isLoading, setIsLoading] = useState(false)

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[globalStyles.mainColor, styles.container]}>
        <View style={[globalStyles.circle, globalStyles.subColor, styles.inputBox]}>
          <Formik 
          initialValues={{email:"", password: "", passwordConfirm: ""}}
          validationSchema={registerSchema}
          onSubmit={async (values, actions) => {
            actions.resetForm()
            setIsLoading(true);
            let res =  await FirebaseAuth.register(values.email, values.password);
              setIsLoading(false);
              if(res.code == 1) {
                console.log(res.message);
              } else {
                console.log(res.message);
                navigate.navigate("VerifyEmail");
              }
          }}>
            {(props) => (
              <View>
                <Text style={styles.title}>Register</Text>
                <Text style={styles.subTitles}>Email:</Text>
                <TextInput style={styles.input} onChangeText={props.handleChange("email")} value={props.values.email} placeholder='Enter Email...'/>
                <Text style={styles.error}>{props.errors.email}</Text>
                <Text style={styles.subTitles}>Password:</Text>
                <TextInput style={styles.input}  secureTextEntry={true} onChangeText={props.handleChange("password")} value={props.values.password}  placeholder='Enter Password...'/>
                <Text style={styles.error}>{props.errors.password}</Text>
                <Text style={styles.subTitles}>Re-Enter Password:</Text>
                <TextInput style={styles.input} secureTextEntry={true} onChangeText={props.handleChange("passwordConfirm")} value={props.values.passwordConfirm}  placeholder='Enter Re-enter Password...'/>
                <Text style={styles.error}>{props.errors.passwordConfirm}</Text>
                <View style={styles.button}>
                  <Button style={styles.disable} onPress={props.handleSubmit} disabled={isLoading ? true : false} title={isLoading ? "Loading" : "Submit"} color="#1573FE"/>
                </View>
              </View>
            )}
          </Formik>
            <TouchableNativeFeedback onPress={() => navigate.navigate("Login")}>
              <Text style={styles.nav}>Already have an account? Click here to sign in.</Text>
            </TouchableNativeFeedback>
        </View>
      </View>
      </TouchableWithoutFeedback>
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
      marginTop: 15,
      marginBottom: 10,
      fontSize: 20,
      fontWeight: "bold",
      width: 200,
      marginLeft: -80,
    },

    error: {
      color: "red",
      alignSelf: "center",
      fontSize: 15,
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
      marginTop: 20,
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