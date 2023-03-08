import { Text, View, StyleSheet } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import FirebaseAuth from '../../services/Authentication';
import { useEffect, useState} from 'react';
import { ScrollView, RefreshControl, Button } from 'react-native';


export default function VerifyEmail() {
    const navigate = useNavigation()
    const [user, setUser] = useState(null)
    const [isVerified, setVerified] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
      async function checkEmail () {
        let reloadUser =  await FirebaseAuth.getUser();
        if (reloadUser != null){
          setUser(reloadUser)
          if(user.emailVerified == false) {
          await FirebaseAuth.sendVerificationEmail();
          }
          setVerified(user.emailVerified);
          }
      }
      checkEmail();
      console.log("Sent email!")
    },[])

    const onRefresh = async () => {
      setRefreshing(true)
      let reloadUser =  await FirebaseAuth.getUser().catch(e => {
        console.log(e)
      });
        setUser(reloadUser)
        if(reloadUser.emailVerified == false) {
        await FirebaseAuth.sendVerificationEmail().catch(e => {
          console.log(e)
        });
        }
        setVerified(user.emailVerified);
      setRefreshing(false)
    }

    return (
   
      <View style={[globalStyles.mainColor, styles.container]}>
        <View style={[globalStyles.circle, globalStyles.subColor]}>
        <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={async () => await onRefresh()} />
      }>
        {isVerified ? 
        <>
             <Text style={styles.title}>Email Confirmed!🎉🎉🎉</Text>
           <Text style={styles.info}>Your email has been verified!</Text>
           <Text style={styles.info}>Please Click the button below to proceed to the next page.</Text>
           <View style={styles.button}>
            <Button title="Terms and conditions" onPress={() => navigate.navigate("AgreeTermsAndConditions")}/>
           </View>
          </>:  <>
           <Text style={styles.title}>Confirm Email</Text>
           <Text style={styles.info}>We have sent you a verification email.</Text>
           <Text style={styles.info}>Please check your spam for the email and verify your email.</Text>
           <Text style={styles.info}>Pull down to refresh page.</Text>
           </>
        }
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
      width: 300,
      fontSize: 40,
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