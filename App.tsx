import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

import { RootStackParamList } from "./types/rootStackParams";

import { FontAwesome } from "@expo/vector-icons";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        sceneContainerStyle: { backgroundColor: "#D3D5F5" }, // 배경색
        headerStyle: { backgroundColor: "#AAAEEB" }, // 헤더스타일
        drawerContentStyle: { backgroundColor: "#D3D5F5" }, // 드로어 배경색
        drawerActiveBackgroundColor: "#7A81DE", // 활성 메뉴 배경색
        drawerActiveTintColor: "#D3D5F5", // 활성 메뉴 글자색
        drawerInactiveTintColor: "#7A81DE", // 비활성 메뉴 글자색
      }}
    >
      <Drawer.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerLabel: "All Categories",
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <FontAwesome name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#AAAEEB" }, // header색
            contentStyle: { backgroundColor: "#D3D5F5" }, // 배경색
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen name="MealsCategories" component={CategoriesScreen} /> */}
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
