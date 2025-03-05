import { View, Text } from "react-native";

export default function Budget() {
  return (
    <View>
      <View className="flex-row gap-x-[150px] items-center">
        <Text className="text-[20px] font-semibold">Budgeting</Text>
        <Text className="text-[15px] font-semibold text-[#928383]">View Analytics</Text>
      </View>
    </View>
  );
}
