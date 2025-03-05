import { View, Text } from "react-native";
import Chart from "./Chart";

export default function Budget() {
  return (
    <View className="gap-5">
      <View className="flex-row gap-x-[150px] items-center">
        <Text className="text-[20px] font-semibold">Budgeting</Text>
        <Text className="text-[15px] font-semibold text-[#928383]">View Analytics</Text>
      </View>
      <Chart />
    </View>
  );
}
