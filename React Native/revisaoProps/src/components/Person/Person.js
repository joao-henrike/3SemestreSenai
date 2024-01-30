import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native"

const Person = ({name, age}) => {
 
 let[fontsLoades, fontError ] = useFonts({
  Poppins_300Light,
 });
 if (!fontsLoades && !fontError) {
   return null;
}

  return(
      <View style={styles.container}>
        <Text style={styles.Text}>Nome: {name}</Text>
        <Text>Idade: {age}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
 container: {
    backgroundColor: '000',
    padding:10,
    margin:10,
    borderRadius:10,
 },
 Text: {
  fontFamily:'Poppins_300Light' 
 }
})

export default Person;