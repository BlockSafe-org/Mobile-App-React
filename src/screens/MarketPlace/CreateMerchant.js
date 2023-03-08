import { Entypo } from "@expo/vector-icons";
import { AppBar, IconButton } from "@react-native-material/core";
import { View, Button, Text, StyleSheet, FlatList, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../styles/GlobalStyles";
import { Formik } from "formik";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';


export default function CreateMerchant({navigation}) {
    const [isLoading, setIsLoading] = useState(false)


    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        });
        if (!result.canceled) {
            console.log(result.assets[0]);
          } else {
            alert('You did not select any image.');
    }
}

    return (
        <SafeAreaView style={[styles.container, globalStyles.dashboardColorLight]}>
        <AppBar
        style={[globalStyles.dashboardColorLight, {elevation:0}]}
        titleStyle={{color:"#5F9EA0", fontSize:25}}
        leading={<IconButton icon={<Entypo name="menu" size={26} color="black" />} onPress={() => navigation.openDrawer()}/>}
        />
         <ScrollView>
         <Formik 
          initialValues={{email:"", password: "", passwordConfirm: ""}}
          onSubmit={async (values, actions) => {
            actions.resetForm()
            setIsLoading(true);
            let res =  await FirebaseAuth.register(values.email, values.password);
              setIsLoading(false);
              if(res.code == 1) {
                console.log(res.message);
              } else {
                console.log(res.message);
                navigate.navigate("Verify");
              }
          }}>
            {(props) => (
              <View>
                <Text style={styles.title}>Form</Text>
                <Text style={styles.subTitles}>Full names:</Text>
                <TextInput style={styles.input} onChangeText={props.handleChange("email")} value={props.values.email} placeholder='Full Name'/>
                <Text style={styles.error}>{props.errors.email}</Text>
                <Text style={styles.subTitles}>Business Name:</Text>
                <TextInput style={styles.input} onChangeText={props.handleChange("password")} value={props.values.password}  placeholder='Business Name'/>
                <Text style={styles.error}>{props.errors.password}</Text>
                <Text style={styles.subTitles}>Location:</Text>
                <TextInput style={styles.input} onChangeText={props.handleChange("passwordConfirm")} value={props.values.passwordConfirm}  placeholder='Location'/>
                <Text style={[styles.subTitles, {alignSelf:"center", marginLeft:0}]}>Upload your Trading License.</Text>
                <View style={styles.pic}>
                    <Button title="Pick a Picture" onPress={async () => await pickImageAsync()}/>
                </View>
                <Text style={styles.error}>{props.errors.passwordConfirm}</Text>
                <View style={styles.button}>
                  <Button style={styles.disable} onPress={props.handleSubmit} disabled={isLoading ? true : false} title={isLoading ? "Loading" : "Submit"} color="#1573FE"/>
                </View>
              </View>
            )}
          </Formik>
         </ScrollView>
        <FlatList/>
    </SafeAreaView>
        )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },

    title: {
      alignSelf: "center",
      textAlign: "center",
      fontSize: 45,
      fontWeight: "bold",
      width: 200,
      marginBottom: 10,
    },

    subTitles: {
      marginTop: 15,
      marginBottom: 10,
      fontSize: 20,
      marginLeft: 30,
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
      width: 280,
      padding: 10,
      backgroundColor: "white",
      borderRadius: 5,
      alignSelf: "center",
      marginLeft: -30,
      borderWidth: 1,
      borderColor: "#d3d3d3d3"
    },

    button: {
      padding: 10,
      marginTop: 20,
      marginHorizontal: 100,
      alignContent: "center",
      textAlign: "center" 
  },
  
  pic: {
    marginHorizontal: 100,
    alignContent: "center",
    marginBottom: 10,
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