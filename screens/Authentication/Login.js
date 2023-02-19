import { Text, View, Button, StyleSheet, Dimensions } from 'react-native';
import globalStyles from "../../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const navigate = useNavigation()

    return (
      <View style={[globalStyles.mainColor, styles.container]}>
        <View style={[globalStyles.circle, globalStyles.subColor]}>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
  })