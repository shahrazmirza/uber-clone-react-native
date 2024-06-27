import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-red-700">Apple</Text>
        {/* <Image
          className="w-10 h-10"
          source={require("../assets/icons/uber-logo.png")}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
