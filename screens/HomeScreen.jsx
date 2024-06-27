import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../assets/icons/uber-logo.png")}
          className="w-20 h-20 object-contain pt-1 pb-5"
        />
        <Text className="text-red-700">HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
