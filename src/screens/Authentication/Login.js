import { Text, View, Button, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import * as yup from "yup";
import { Formik } from 'formik';
import { useState } from 'react';
import FirebaseAuth from '../../services/Authentication';


const loginSchema = yup.object({
  email: yup.string().email("Invalid email address!").required("Email is required!"),
  password: yup.string().required("Password is required!").min(4,"Password is too short!").max(16,"Password is too long!")
})


export default function Login() {
    const navigate = useNavigation()
    const [isLoading, setIsLoading] = useState(false)

    return (
      <View style={[globalStyles.mainColor, styles.container]}>
        <View style={[globalStyles.circle, globalStyles.subColor]}>
        <Formik 
          initialValues={{email:"", password: "", passwordConfirm: ""}}
          validationSchema={loginSchema}
          onSubmit={async (values, actions) => {
            //actions.resetForm()
            setIsLoading(true);
            let res = await FirebaseAuth.signIn(values.email, values.password);
            setIsLoading(false)
            if(res.code == 1) {
              console.log(res.message);
            } else {
              console.log(res.message);
              navigate.navigate("VerifyEmail");
            }
          }}>
             {(props) => (
              <View>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subTitles}>Email:</Text>
                <TextInput onChangeText={props.handleChange("email")} value={props.values.email} style={styles.input} placeholder='Enter Email...'/>
                <Text style={styles.error}>{props.errors.email}</Text>
                <Text style={styles.subTitles}>Password:</Text>
                <TextInput  secureTextEntry={true} onChangeText={props.handleChange("password")} value={props.values.password} style={styles.input} placeholder='Enter Password...'/>
                <Text style={styles.error}>{props.errors.password}</Text>
                <View style={styles.button}>
                <Button onPress={props.handleSubmit} disabled={isLoading ? true : false} title={isLoading ? "Loading" : "Submit"} color="#1573FE"/>
                </View>
            <TouchableNativeFeedback onPress={() => navigate.navigate("Register")}>
              <Text style={styles.nav}>Don't have an account? Click here to register.</Text>
            </TouchableNativeFeedback>
            </View>
              )}
            </Formik>
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
},
error: {
  color: "red",
  alignSelf: "center",
  fontSize: 15,
  fontWeight: "bold",
  width: 200,
  marginLeft: -80,
}
})