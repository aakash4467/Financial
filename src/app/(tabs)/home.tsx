import { View, Text, Image, ScrollView, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRef, useState } from "react";
import Investment from "@/src/components/ui/investment";

export default function HomeScreen() {
  const scrollA = useRef(new Animated.Value(0)).current;
  const [isClicked, setIsClicked] = useState(false);

  // Interpolate height of the last view based on scroll position
  const lastViewHeight = scrollA.interpolate({
    inputRange: [0, 300], // Change 300 to adjust how fast it expands
    outputRange: ["63%", "100%"], // From 63% height to full screen
    extrapolate: "clamp", // Ensures values don’t exceed range
  });

  return (
    <LinearGradient
      colors={["#C7ACD5", "#CEB5D4", "#DDC2D0", "#F9DECE"]}
      locations={[0, 0.11, 0.25, 0.5]}
      style={{ flex: 1 }}
    >
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: false } // Animated height cannot use native driver
        )}
        scrollEventThrottle={16}
      >
        {/* Header */}
        <View className="mt-[28px] ml-[16px] flex-row items-center justify-between">
          <View>
            <Text className="text-[15px]">Hi! How are you?</Text>
            <Text className="text-[24px] font-semibold mt-[4px] ">
              Rojina Bhandari
            </Text>
          </View>
          <Image
            source={require("../../../assets/images/avatar.jpeg")}
            className="w-[45px] h-[45px] mr-[15px] rounded-full"
          />
        </View>

        {/* Horizontal Scroll Section */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20, marginLeft: 8 }}
        >
          <View className="flex-row gap-x-1">
            <Investment isClicked={isClicked} setIsClicked={setIsClicked} />
            <Investment isClicked={isClicked} setIsClicked={setIsClicked} />
            <Investment isClicked={isClicked} setIsClicked={setIsClicked} />
            <Investment isClicked={isClicked} setIsClicked={setIsClicked} />
          </View>
        </ScrollView>

        {/* Last View that expands */}
        <Animated.View
          style={{
            backgroundColor: "white",
            height: lastViewHeight,
            marginHorizontal: 8,
            borderRadius: 20,
          }}
        >
          <Investment isClicked={isClicked} setIsClicked={setIsClicked} />
          <Investment isClicked={isClicked} setIsClicked={setIsClicked} />
          <Investment isClicked={isClicked} setIsClicked={setIsClicked} />
        </Animated.View>
      </Animated.ScrollView>
    </LinearGradient>
  );
}
