import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Investment({ setIsClicked, isClicked }) {
  return (
    <View className="h-[187px] w-[166px] rounded-[30px] overflow-hidden ">
      {/* Background with transparency */}
      <View className="absolute inset-0 bg-white/40 rounded-[30px]" />

      {/* Header Content */}
      <View className="flex-row items-center gap-x-20 p-4">
        <Image
          source={require("../../../assets/images/invest-logo.png")}
          className="h-[39px] w-[39px]"
        />
        <TouchableOpacity onPress={() => setIsClicked(!isClicked)}>
          <Fontisto
            name="pinboard"
            size={24}
            style={{ transform: [{ scaleX: -1 }] }}
            color={isClicked ? "black" : "gray"}
          />
        </TouchableOpacity>
      </View>
      {/* Label */}
      <Text className="ml-4 mt-[4px] text-[#747070] text-[16px]">
        Investment
      </Text>
      {/* Financial Stats */}
      <View className="flex-row items-center gap-x-[6px] ml-4 mt-2">
        <Text className="text-[18px] font-bold">$10,232</Text>
        <View className="flex-row items-center gap-x-1 w-[56px] h-[23px] rounded-[10px] bg-[#D9D9D9]">
          <Text className="text-[#02A96C] text-[11px] text-left  ml-1">
            +12%
          </Text>
          <MaterialCommunityIcons name="arrow-top-right" color={"#02A96C"} />
        </View>
      </View>
      {/* Button */}
      <View className="w-[132px] h-[29px] mt-5 ml-4 rounded-[10px] bg-[#DECDC5] ">
        <Text className="text-[12px] font-medium text-center mt-[6px] ">
          Topup
        </Text>
      </View>
    </View>
  );
}
