import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import { Login } from "../screens/Login";
import { Home } from "../screens/Home";
import ChatLOL from "../screens/ChatLOL";
import { Champion } from "../screens/Champion";
import { DarkModeContext } from "../Context/darkModelContext";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={DrawerNavigate} />
    </Stack.Navigator>
  );
};

const DrawerNavigate = () => {
  const { darkMode } = useContext(DarkModeContext);

  const drawerScreenOptions = {
    headerTransparent: true,
    headerTitle: "",
    drawerActiveBackgroundColor: darkMode ? "#FFD700" : "#399fff",
    drawerActiveTintColor: darkMode ? "#000000" : "#FFFFFF",
    drawerInactiveTintColor: darkMode ? "#FFFFFF" : "#399fff",
    drawerStyle: {
      backgroundColor: darkMode ? "#000000" : "#FFFFFF",
    },
  };
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          ...drawerScreenOptions,
          title: "HOME",
        }}
      />
      <Drawer.Screen
        name="ChatLOL"
        component={ChatLOL}
        options={{
          ...drawerScreenOptions,
          title: "CHAT-LOL",
        }}
      />
      <Drawer.Screen
        name="Champion"
        component={Champion}
        options={{
          ...drawerScreenOptions,
          title: "CHAMPION",
        }}
      />
      <Drawer.Screen
        name="Log Out"
        component={Login}
        options={{
          ...drawerScreenOptions,
          headerShown: false,
          title: "LOG OUT",
        }}
      />
    </Drawer.Navigator>
  );
};
