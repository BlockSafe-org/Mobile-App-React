import {Button, Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, FlatList } from 'react-native';
import globalStyles from "../../styles/GlobalStyles"
import { AppBar, IconButton } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Carousel from 'react-native-reanimated-carousel';
import ItemCard from '../../models/ItemCard';

export default function MarketPlace({navigation}) {
    const width = Dimensions.get('window').width-40;

    let data = [
        {name:"Duslang Bag", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07u8PtKXxwI9PxxUeNuXmddXUd7KxZ-sSv9Ix34RN&s", prices: {crypto: 25000, fiat: 40000}},
        {name:"Rolex Watch Silver & Gold", img:"https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m228238-0061.png?impolicy=v6-upright&imwidth=270", prices:{crypto:55000, fiat:85000 }},
        {name:"Turtle neck Sweater", img:"https://m.media-amazon.com/images/I/71mDDeJQUnL._UY550_.jpg", prices:{crypto:35000, fiat:45000}},
    ]
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
                width={width}
                height={width / 2}
                autoPlay={false}
                data={[...new Array(1).keys()]}
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
                <Text style={styles.subTitles}>Top Picks</Text>
            </View>
            <FlatList data={data} contentContainerStyle={{justifyContent:"space-evenly", alignSelf:"center"}} renderItem={({item}) =>{
                return(
                    <ItemCard item={item}/>
                )
            }}/>
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
        marginLeft:20
      },
      subTitlesRight: {
        flex:1,
        color: "#5F9EA0",
        marginVertical: 15,
        textDecorationLine:"underline",
        fontSize: 14
      },
})