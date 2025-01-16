import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomDrawerContent = (props) => {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{
          backgroundColor: "#dde3fe",
          paddingTop: top,
        }}
      >
        <View>
          <Image
            source={{
              uri: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
            }}
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
            }}
          />
        </View>
        <DrawerItemList {...props} />
        <DrawerItem label={"Log out"} onPress={() => router.replace("/")} />
      </DrawerContentScrollView>
    </View>
  );
};
export default CustomDrawerContent;
