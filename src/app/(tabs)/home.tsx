import { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Investment from "@/src/components/ui/investment";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export default function HomeScreen() {
  const scrollY = useSharedValue(0);
  const [isClicked, setIsClicked] = useState(false);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      zIndex: scrollY.value > 5 ? 2 : 0,
    };
  });

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const scrollAnimatedStyles = useAnimatedStyle(() => {
    const translateY = interpolate(scrollY.value, [0, 400], [0, 0], "clamp");
    return { transform: [{ translateY }] };
  });

  return (
    <LinearGradient
      colors={["#C7ACD5", "#CEB5D4", "#DDC2D0", "#F9DECE"]}
      locations={[0, 0.11, 0.25, 0.5]}
      style={{ flex: 1 }}
    >
      {/* Background Investment Section */}
      <View
        style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 }}
      >
        {/* Header */}
        <View className="mt-[28px] ml-[16px] flex-row items-center justify-between">
          <View>
            <Text className="text-[15px]">Hi! How are you?</Text>
            <Text className="text-[24px] font-semibold mt-[4px]">
              Rojina Bhandari
            </Text>
          </View>
          <Image
            source={require("../../../assets/images/avatar.jpeg")}
            className="w-[45px] h-[45px] mr-[15px] rounded-full"
          />
        </View>

        {/* Horizontal Investments (Prevent Interference with Vertical Scroll) */}
        <View pointerEvents="box-none">
          <ScrollView
            horizontal
            nestedScrollEnabled={true} // Allow vertical scrolling inside
            showsHorizontalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingVertical: 20, marginLeft: 8 }}
          >
            <View className="flex-row gap-x-1">
              <Investment isClicked={isClicked} setIsClicked={setIsClicked} />
              <Investment isClicked={isClicked} setIsClicked={setIsClicked} />
              <Investment isClicked={isClicked} setIsClicked={setIsClicked} />
              <Investment isClicked={isClicked} setIsClicked={setIsClicked} />
            </View>
          </ScrollView>
        </View>
      </View>

      {/* Main Vertical ScrollView */}
      <Animated.ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true} // Ensure smooth nested scrolling
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1, // Ensures content scrolls fully
          paddingTop: 300, // Prevents overlap with the fixed header
          paddingLeft: 8,
          paddingRight: 8,
        }}
        style={[
          animatedContainerStyle,
          {
            flex: 1, // Takes full screen height
            position: "relative",
          },
        ]}
      >
        <Animated.View
          className="bg-white"
          style={[
            scrollAnimatedStyles,
            {
              flex: 1, // Takes full height
              borderRadius: 20,
              padding: 16,
              paddingBottom: 40,
              backgroundColor: "white",
            },
          ]}
        >
        </Animated.View>
      </Animated.ScrollView>
    </LinearGradient>
  );
}
