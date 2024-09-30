import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Import vector icons
import { Pressable, View, StyleSheet } from "react-native"; // Import necessary components
import { useRouter } from "expo-router"; // Import useRouter to handle navigation

const TabsLayout = () => {
  const router = useRouter(); // Initialize router for navigation

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          // Top name of header 
          headerTitle: "Home",
          
          // Bottom title 
          title: "Home",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="disc" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="users/[id]"
        options={{
          // Top name of header 
          headerTitle: "User",

          // Bottom title 
          title: "User",

          // Styled back button ("<")
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <View style={styles.backButton}>
                <Ionicons name="arrow-back" size={28} color="#0096c7" />
              </View>
            </Pressable>
          ),

          // Styled tab icon
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="disc" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10, // Add margin to the left
    padding: 5, // Add padding around the icon for better touch area
  },
});

export default TabsLayout;
