import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const MainLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            headerTitle: "Home Page",
            drawerIcon: ({}) => <FontAwesome5 name="home" size={18} />,
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            title: "About",
            headerTitle: "About Page",
            drawerIcon: ({}) => <Entypo name="info" size={18} />,
          }}
        />
        <Drawer.Screen
          name="contact"
          options={{
            title: "Contact",
            headerTitle: "Contact Page",
            drawerIcon: ({}) => <MaterialIcons name="contact-page" size={18} />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};
export default MainLayout;
