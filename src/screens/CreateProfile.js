import { Text, View, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import globalStyles from "../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Button } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';


export default function CreateProfile() {
    const navigate = useNavigation()
    const [selectedImage, setSelectedImage] = useState(null);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        });
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
          } else {
            alert('You did not select any image.');
    }
}


    return (
   
      <View style={[globalStyles.mainColor, styles.container]}>
        <View style={[globalStyles.circle, globalStyles.subColor]}>
        <ScrollView
      contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Create Profile</Text>
        <Text style={styles.subTitles}>Username</Text>
        <TextInput style={styles.input} placeholder='Enter Username...'/>
        <Image style={{justifyContent:"center", alignSelf:"center"}} source={selectedImage ? {uri:selectedImage,width:200,height:200} : require("../assets/placeholder.jpg")}/>
        <View style={styles.button}>
            <Button title="Pick a Picture" onPress={() => pickImageAsync()}/>
           </View>
           <View style={styles.submit}>
            <Button title="Submit" onPress={() => navigate.navigate("Dashboard")}/>
           </View>
          </ScrollView>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 50
    },

    scrollView: {
        marginTop: 20,
    },

    title: {
      color: "white",
      alignSelf: "center",
      textAlign: "center",
      width: 300,
      fontSize: 40,
      fontWeight: "bold",
    },

    submit:{
        marginHorizontal: 200,
        alignContent: "center",
        marginTop: 20,
        marginBottom: 10,
    },

    input: {
        height: 40,
        width: 250,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 5,
        alignSelf: "center",
        marginBottom: 30
      },
  
    subTitles: {
        color: "white",
        alignSelf: "center",
        textAlign: "center",
        marginTop: 15,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "bold",
        width: 200,
      },
  

    button: {
      marginHorizontal: 230,
      alignContent: "center",
      marginTop: 20,
      marginBottom: 10,
    },

    checkbox: {
        flexDirection: "row",
        alignSelf:"center",
        marginLeft: 50,
        justifyContent: "flex-end",
        marginBottom: 10,
    }

  })