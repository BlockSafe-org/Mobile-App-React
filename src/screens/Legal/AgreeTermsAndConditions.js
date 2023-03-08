
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Button } from 'react-native';
import Checkbox from "expo-checkbox";
import { useState } from 'react';
import FirebaseAuth from '../../services/Authentication';
import { addUser } from '../../services/ContractControl';


export default function AgreeTermsAndConditions() {
    const navigate = useNavigation()
    const [isChecked, setChecked] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const agreeHandler = async () => {
      setIsLoading(true);
      //await addUser(FirebaseAuth.getUser().email);
        await new Promise(res => setTimeout(res, 6000))
        setIsLoading(false);
      //navigate.navigate("CreateProfile")
    }


    return (
   
      <View style={[globalStyles.mainColor, styles.container]}>
        <View style={[globalStyles.circle, globalStyles.subColor]}>
        <ScrollView
          style={{marginTop:40}}
      contentContainerStyle={styles.scrollView}>
      
        <Text style={styles.title}>Terms And Conditions</Text>
        <View>
            <Text style={styles.info}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet voluptates sint, 
                rerum id dicta atque enim sed, qui cum voluptas et quibusdam officiis aut nesciunt autem 
                ipsam a non quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt 
                sed molestiae in aspernatur eius, {"\n\n"} 
                et quisquam animi itaque reprehenderit minus alias, eaque illo 
                quibusdam dolorum ea cumque veniam ab nam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia distinctio, et veritatis porro, aliquid ad 
                repudiandae eligendi obcaecati praesentium ex voluptates ullam beatae aliquam. 
                Temporibus ut iure esse minima quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit maiores sequi atque eum. Debitis aliquid enim saepe 
                inventore temporibus maxime veritatis perspiciatis illo 
                laudantium. Fugiat sapiente nam perspiciatis. {"\n\n"}Eaque, ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusamus doloremque incidunt fuga 
                impedit quasi quia nobis tempora possimus, officia veritatis 
                et modi laboriosam aut, provident, quas numquam vitae eos!</Text>
        </View>
        <View style={styles.checkbox}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : "#fff"}
        />
        <Text style={styles.agree}>Agree to the terms and conditions.</Text>
        </View>
        {isLoading ? <Text style={styles.loading}>Creating account Please wait...</Text>: null}
        <View style={styles.button}>
            <Button title={isLoading ? "Loading": "Proceed"} disabled={isChecked ? isLoading ? true: false : true} onPress={async () => await agreeHandler()}/>
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
      fontSize: 25,
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
    },

    loading: {
      color: "white",
      textAlign:"center",
      marginLeft: 10,
      marginBottom: 10,
      fontSize: 20
    }

  })