import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
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
        <Image style={{justifyContent:"center", alignSelf:"center"}} source={selectedImage ? selectedImage : require("../assets/placeholder.jpg")}/>
        <View style={styles.button}>
            <Button title="Pick a Picture" onPress={() => pickImageAsync()}/>
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
        marginTop: 50,
    },

    title: {
      color: "white",
      alignSelf: "center",
      textAlign: "center",
      width: 300,
      fontSize: 40,
      fontWeight: "bold",
    },

    info:{
        backgroundColor:"white",
        padding: 10,
        alignSelf: "center",
        marginTop: 30,
        marginBottom: 10,
        fontSize: 20,
        borderRadius: 8,
      width: Dimensions.get("screen").width-70
    },

    button: {
      marginHorizontal: 200,
      alignContent: "center",
      marginTop: 20,
      marginBottom: 200,
    },

    checkbox: {
        flexDirection: "row",
        alignSelf:"center",
        marginLeft: 50,
        justifyContent: "flex-end",
        marginBottom: 10,
    },

    agree: {
    color: "white",
      alignSelf: "center",
      marginLeft: 10,
      marginBottom: 10,
      fontSize: 20,
      width: Dimensions.get("screen").width-30
    }

  })