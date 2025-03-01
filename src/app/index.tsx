import { useEffect, useState } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import { Redirect } from "expo-router";

export default function Index() {
  const [redirect, setRedirect] = useState(false);
  const opacity = new Animated.Value(0);

  useEffect(() => {
    // Fade in animation
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      // Wait for 1 second after animation and then redirect
      setTimeout(() => setRedirect(true), 1000);
    });
  }, []);

  if (redirect) {
    return <Redirect href="/home" />;
  }

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { opacity }]}>
        Welcome 🚀
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
