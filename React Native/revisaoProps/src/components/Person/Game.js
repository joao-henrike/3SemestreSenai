import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native"

const game = ({name, dateTime , Genre}) => {
 
 let[fontsLoades, fontError ] = useFonts({
  Poppins_300Light,
 });
 if (!fontsLoades && !fontError) {
   return null;
}

 return(
      <View style={styles.container}>
        <Text style={styles.Text}>Nome: {name}</Text>
        <Text style={styles.text}>data de lançamento:{dateTime} </Text>
        <text style={styles.text}>Genero:{Genre}</text>
      </View>
    );

};

const styles = StyleSheet.create({
 container: {
    backgroundColor: '00ff00',
    padding:12,
    margin:13,
    borderRadius:15,
 },
 Text: {
  fontFamily:'Poppins_300Light', 
  fontSize:24
 }
})

export default Game;