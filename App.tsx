// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import ClientMenu from './app/(tabs)/client/index';
// import Cart from './app/(tabs)/client/Cart';

// import SingleMenuItem from './app/(tabs)/client/SingleMenuItem';
// import React from 'react';

// // Import other client screens
// // import AdminIndex from '../admin/index';
// // import Dashboard from '../admin/dashboard';

// // Import other admin screens
// // import WaiterOrders from '../waiter/orders';
// // Import other waiter screens

// // Custom drawer components
// // import ClientDrawer from '../components/ClientDrawer';
// // import AdminDrawer from '../components/AdminDrawer';
// // import WaiterDrawer from '../components/WaiterDrawer';

// const ClientDrawerNavigator = createDrawerNavigator();
// const AdminDrawerNavigator = createDrawerNavigator();
// const WaiterDrawerNavigator = createDrawerNavigator();

// function ClientDrawerRoutes() {
//   return (
//     <ClientDrawerNavigator.Navigator drawerContent={(props) => <ClientMenu />}>
//       <ClientDrawerNavigator.Screen name="ClientIndex" component={ClientMenu} />
//       <ClientDrawerNavigator.Screen name="Cart" component={Cart} />
//       <ClientDrawerNavigator.Screen name="SingleMenuItem" component={SingleMenuItem} />
//     </ClientDrawerNavigator.Navigator>
//   );
// }

// // function AdminDrawerRoutes() {
// //   return (
// //     <AdminDrawerNavigator.Navigator drawerContent={(props) => <AdminDrawer {...props} />}>
// //       <AdminDrawerNavigator.Screen name="AdminIndex" component={AdminIndex} />
// //       <AdminDrawerNavigator.Screen name="Dashboard" component={Dashboard} />
// //       {/* Add other admin routes */}
// //     </AdminDrawerNavigator.Navigator>
// //   );
// // }

// // function WaiterDrawerRoutes() {
// //   return (
// //     <WaiterDrawerNavigator.Navigator drawerContent={(props) => <WaiterDrawer {...props} />}>
// //       <WaiterDrawerNavigator.Screen name="Orders" component={WaiterOrders} />
// //       {/* Add other waiter routes */}
// //     </WaiterDrawerNavigator.Navigator>
// //   );
// // }


// export default function App() {
//   return (
//     <NavigationContainer>
//       <ClientDrawerRoutes/>
//     </NavigationContainer>
//   );
// }


import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import Component from "./components/MyComponent";
import './gesture-handler';

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
}
