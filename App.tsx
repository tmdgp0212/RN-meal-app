import { Provider } from "react-redux";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { FontAwesome } from "@expo/vector-icons";

import { RootStackParamList } from "./types/rootStackParams";

import { Colors } from "./constants/Colors";
import { store } from "./store/store";

import "react-native-gesture-handler";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        sceneContainerStyle: { backgroundColor: Colors.primary200 }, // 배경색
        headerTintColor: Colors.primary800,
        headerStyle: { backgroundColor: Colors.primary400 }, // 헤더스타일
        drawerContentStyle: { backgroundColor: Colors.primary200 }, // 드로어 배경색
        drawerActiveBackgroundColor: Colors.primary600, // 활성 메뉴 배경색
        drawerActiveTintColor: Colors.primary800, // 활성 메뉴 글자색
        drawerInactiveTintColor: Colors.primary600, // 비활성 메뉴 글자색
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
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: Colors.primary800,
              headerStyle: { backgroundColor: Colors.primary400 }, // header색
              contentStyle: { backgroundColor: Colors.primary200 }, // 배경색
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen name="MealsCategories" component={CategoriesScreen} /> */}
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
