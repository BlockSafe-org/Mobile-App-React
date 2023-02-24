
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { ScrollView} from 'react-native';
import { AppBar, IconButton } from '@react-native-material/core';
import { AntDesign } from '@expo/vector-icons';


export default function TermsAndConditions() {
    const navigate = useNavigation()

    return (
   
      <View style={[globalStyles.mainColor, styles.container]}>
             <AppBar
            style={[globalStyles.mainColor, {elevation:0, alignSelf:"flex-start", marginLeft:20}]}
            leading={() => (
                <IconButton icon={<AntDesign name="back" size={40} color="black" />} onPress={() => navigate.goBack()}/>
            )}
            />
        <View style={[globalStyles.circle, globalStyles.subColor]}>
        <ScrollView
          style={{marginTop:20, marginBottom:130}}
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
        marginBottom: 50,
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
    }

  })