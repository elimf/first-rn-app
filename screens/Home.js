import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
const DATA = require("../data.json");
function Item({ title, id, navigation }) {
  const onPress = () => {
    navigation.navigate("Details", { itemId: id, title });
  };
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item {...item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
      <StatusBar
        animated={true}
        style={{ height: "200px" }}
        backgroundColor="red"
        barStyle="light-content"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: "white",
  },
});
