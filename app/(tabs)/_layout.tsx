import { Tabs, useRouter } from "expo-router";
import React, { useEffect } from "react";

const TabLayout = () => {
    const router = useRouter();

    useEffect(() => {
        // Set a 5-second delay before navigating to the "admin/index" route
        const timeoutId = setTimeout(() => {
          router.replace("/client");
        }, 3000); // 5000 ms = 5 seconds
    
        // Clean up the timeout if the component unmounts before the 5 seconds are up
        return () => clearTimeout(timeoutId);
      }, []);

return (
    <Tabs>
        <Tabs.Screen name="index"       options={{ title: "Menu",headerShown:false }} />
        <Tabs.Screen name="admin/index" options={{ title: "Admin" }} />
        <Tabs.Screen name="client/index" options={{ title: "Client",headerShown:false,    tabBarStyle: { display: 'none' }}} />
        <Tabs.Screen name="waiter/index" options={{ title: "Waiter" }} />
    </Tabs>
);
};

export default TabLayout;
