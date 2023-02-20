import { Text, View, Button, StyleSheet } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import FirebaseAuth from '../../services/Authentication';
import { useEffect, useState, useCallback } from 'react';
import { ScrollView, RefreshControl } from 'react-native';


export default function VerifyEmail() {
    const navigate = useNavigation()
    const [isVerified, setVerified] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect( async () => {
      if (FirebaseAuth.setUser() != null){
      let ver =  await FirebaseAuth.sendVerificationEmail().catch(e => console.log(e));
      setVerified(ver);
      }
    },[isVerified])

    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);

    return (
   
      <View style={[globalStyles.mainColor, styles.container]}>
        <View style={[globalStyles.circle, globalStyles.subColor]}>
        <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
          <Text style={styles.title}>Confirm Email</Text>
          <Text style={styles.info}>We have sent you a verification email.</Text>
          <Text style={styles.info}>Please check your spam for the email and verify your email.</Text>
            <Text style={styles.info}>Pull down to see RefreshControl indicator</Text>
          </ScrollView>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    title: {
      color: "white",
      alignSelf: "center",
      textAlign: "center",
      fontSize: 45,
      fontWeight: "bold",
    },

    info:{
      color: "white",
      alignSelf: "center",
      textAlign: "center",
      marginTop: 30,
      fontSize: 20,
      width: 300
    },

    button: {
      marginHorizontal: 200,
      alignContent: "center",
      marginTop: 100,
    }
  })