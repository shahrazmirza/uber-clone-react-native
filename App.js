import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <Provider store={store}>
      <View className="flex-1 items-center justify-center bg-white">
        <HomeScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
