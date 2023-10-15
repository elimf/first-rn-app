import { StatusBar } from "expo-status-bar";
import { SafeAreaView, FlatList, StyleSheet, Text, View } from "react-native";

const DetailScreen = ({route}) => {
  const { title, itemId } = route.params;
  return (
    <View style={styles.item}>
      <Text style={styles.title}> {title}</Text>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default DetailScreen;
