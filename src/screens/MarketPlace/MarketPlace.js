import {Button, Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';
import globalStyles from "../../styles/GlobalStyles"
import { AppBar, IconButton } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Carousel from 'react-native-reanimated-carousel';

export default function MarketPlace({navigation}) {
    const width = Dimensions.get('window').width-40;
    return(
        <TouchableWithoutFeedback onPress={() => navigation.closeDrawer()}>
        <ScrollView style={[styles.container, globalStyles.dashboardColorLight]}>
            <Image style={{resizeMode:"contain",width:Dimensions.get("screen").width-50, alignSelf:"center"}} source={require("../../assets/blockly.png")}/>
            <AppBar
            style={[globalStyles.dashboardColorLight, {elevation:0, marginTop:-30}]}
            titleStyle={{color:"#5F9EA0", fontSize:25}}
            leading={<IconButton icon={<Entypo name="menu" size={26} color="black" />} onPress={() => navigation.openDrawer()}/>}
            trailing={<IconButton icon={<AntDesign name="search1" size={26} color="black" />} onPress={() => navigation.navigate("Search")}/>}
            />
            <Carousel
            style={{alignSelf:"center" , justifyContent:"center"}}
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(3).keys()]}
                scrollAnimationDuration={3000}
                mode="parallax"
                modeConfig={{
                  parallaxScrollingScale: 0.9,
                  parallaxScrollingOffset: 50,
                }}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            backgroundColor:"lightblue",
                            marginHorizontal:10,
                            borderRadius:8
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
            <View style={{flexDirection:"row"}}>
                <Text style={styles.subTitles}>Categories:</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Categories")}>
                <Text style={styles.subTitlesRight}>See more:</Text>
                </TouchableWithoutFeedback>
            </View>
        </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
    },

    subTitles: {
        flex:3,
        color: "#5F9EA0",
        marginVertical: 15,
        fontSize: 20,
        marginLeft:10
      },
      subTitlesRight: {
        flex:1,
        color: "#5F9EA0",
        marginVertical: 15,
        textDecorationLine:"underline",
        fontSize: 19,
        marginRight:10
      },
})