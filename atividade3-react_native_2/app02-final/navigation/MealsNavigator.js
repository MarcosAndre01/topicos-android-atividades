import React from 'react';
import { Platform, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Screen'
};

const tabBar = {
  meals: {
    tabBarIcon: tabInfo => {
      return (
        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      );
    },
    tabBarColor: Colors.primaryColor,
    tabBarLabel:
      Platform.OS === 'android' ? (
        <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
      ) : (
        'Meals'
      )
  },
  favorites: {
    tabBarIcon: tabInfo => {
      return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
    },
    tabBarColor: Colors.accentColor,
    tabBarLabel:
      Platform.OS === 'android' ? (
        <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text>
      ) : (
        'Favorites'
      )
  }
}

const MealsNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator options={defaultStackNavOptions}>
      <Stack.Screen name='Categories' component={CategoriesScreen} />
      <Stack.Screen name='CategoryMeals' component={CategoryMealsScreen} />
      <Stack.Screen name='MealDetail' component={MealDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);


const FavNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator options={defaultStackNavOptions}>
      <Stack.Screen name='Favorites' component={FavoritesScreen} />
      <Stack.Screen name='MealDetail' component={MealDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const BottomTabNavigator = () => (
  <Tab.Navigator options={{ 
    tabBarActiveTintColor: Colors.accentColor, 
    tabBarLabelStyle: {
      fontFamily: 'open-sans',
     }
    }} >
    <Tab.Screen name='Meals' component={MealsNavigator} options={tabBar.meals} />
    <Tab.Screen name='Favorites' component={FavNavigator} options={tabBar.favorites} />
  </Tab.Navigator>
);

const MaterialTab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <MaterialTab.Navigator 
      shifting 
      barStyle={ { backgroundColor: Colors.primaryColor } } 
      activeColor='white'
    >
      <MaterialTab.Screen name="Meals" component={MealsNavigator} options={tabBar.meals} />
      <MaterialTab.Screen name="Favorites" component={FavNavigator} options={tabBar.favorites} />
    </MaterialTab.Navigator>
  );
}

const MealsFavTabNavigator = Platform.OS === 'android' ? (<MyTabs />) : (<BottomTabNavigator />);


const FiltersNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator options={defaultStackNavOptions}>
      <Stack.Screen name='Filters' component={FiltersScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const MainNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator options={{
        drawerActiveTintColor: Colors.accentColor,
        drawerLabelStyle: {
          fontFamily: 'open-sans-bold'
        }
      }}>
      <Drawer.Screen name='MealsFavs' component={MealsFavTabNavigator} />
      <Drawer.Screen name='Filters' component={FiltersNavigator} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
