import { Tabs } from "expo-router";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { TouchableWithoutFeedback, View } from "react-native";
import { useColorScheme } from "nativewind"; // Hook for dark mode support
import { LinearGradient } from "expo-linear-gradient";

export default function TabLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          padding: 8,
          transform: [{ translateX: 0.25 * 268 }], // Shift back by half the width
          width: 280, // Fixed width (or keep "70%")
          height: 60,
          backgroundColor: colorScheme === "dark" ? "#222" : "#F2F2F2",
          borderRadius: 30,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarButton: (props) => (
            <TouchableWithoutFeedback {...props}>
              <View className="items-center mt-[5px]">{props.children}</View>
            </TouchableWithoutFeedback>
          ),
          tabBarIcon: ({ focused }) => (
            <View className="relative justify-center items-center h-[47px] w-[47px] rounded-full overflow-hidden mt-6">
              {focused && (
                <LinearGradient
                  colors={["#262326", "#523952"]}
                  locations={[0, 0.8]}
                  style={{ position: "absolute", inset: 0 }}
                />
              )}
              {!focused && (
                <View className="absolute inset-0 bg-white rounded-full" />
              )}

              <FontAwesome
                size={22}
                name="envelope-open"
                color={focused ? "white" : "black"}
              />
            </View>
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarButton: (props) => (
            <TouchableWithoutFeedback {...props}>
              <View className="items-center mt-[5px]">{props.children}</View>
            </TouchableWithoutFeedback>
          ),
          tabBarIcon: ({ focused }) => (
            <View className="relative justify-center items-center -ml-3 h-[47px] w-[47px] rounded-full overflow-hidden mt-6">
              {focused && (
                <LinearGradient
                  colors={["#262326", "#523952"]}
                  locations={[0, 0.8]}
                  style={{ position: "absolute", inset: 0 }}
                />
              )}
              {!focused && (
                <View className="absolute inset-0 bg-white rounded-full" />
              )}

              <MaterialCommunityIcons
                name="star-four-points-outline"
                size={28}
                color={focused ? "white" : "black"}
              />
            </View>
          ),
        }}
      />

      {/* Explore Tab */}
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarButton: (props) => (
            <TouchableWithoutFeedback {...props}>
              <View className="items-center mt-[5px]">{props.children}</View>
            </TouchableWithoutFeedback>
          ),
          tabBarIcon: ({ focused }) => (
            <View className="relative justify-center items-center h-[70px] w-[70px] rounded-full overflow-hidden mt-6">
              {focused && (
                <LinearGradient
                  colors={["#262326", "#523952"]}
                  locations={[0, 0.8]}
                  style={{ position: "absolute", inset: 0 }}
                />
              )}
              {!focused && (
                <LinearGradient
                  colors={["#262326", "#523952"]}
                  locations={[0, 0.8]}
                  style={{ position: "absolute", inset: 0 }}
                />
              )}

              <MaterialCommunityIcons name="plus" size={36} color={"white"} />
            </View>
          ),
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarButton: (props) => (
            <TouchableWithoutFeedback {...props}>
              <View className="items-center mt-[5px]">{props.children}</View>
            </TouchableWithoutFeedback>
          ),
          tabBarIcon: ({ focused }) => (
            <View className="relative justify-center items-center -mr-3 h-[47px] w-[47px] rounded-full overflow-hidden mt-6">
              {focused && (
                <LinearGradient
                  colors={["#262326", "#523952"]}
                  locations={[0, 0.8]}
                  style={{ position: "absolute", inset: 0 }}
                />
              )}
              {!focused && (
                <View className="absolute inset-0 bg-white rounded-full" />
              )}

              <MaterialCommunityIcons
                name="chart-box"
                size={28}
                color={focused ? "white" : "black"}
              />
            </View>
          ),
        }}
      />

      {/* Add Tab */}
      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
          tabBarButton: (props) => (
            <TouchableWithoutFeedback {...props}>
              <View className="items-center mt-[5px]">{props.children}</View>
            </TouchableWithoutFeedback>
          ),
          tabBarIcon: ({ focused }) => (
            <View className="relative justify-center items-center h-[47px] w-[47px] rounded-full overflow-hidden mt-6">
              {focused && (
                <LinearGradient
                  colors={["#262326", "#523952"]}
                  locations={[0, 0.8]}
                  style={{ position: "absolute", inset: 0 }}
                />
              )}
              {!focused && (
                <View className="absolute inset-0 bg-white rounded-full" />
              )}

              <Ionicons
                name="settings-sharp"
                size={28}
                color={focused ? "white" : "black"}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
