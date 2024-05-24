import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 24 }}>MY NAME IS</Text>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>NHYIRABA!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
