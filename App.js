/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View} from 'react-native';
import { 
  Provider as PaperProvider,   
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/Home';
import ProductScreen from './screens/Product';
import { colors } from './utils/colors';
import AddProductScreen from './screens/AddProductScreen';
import AddCategoryScreen from './screens/AddCategoryScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import SplashScreen from 'react-native-splash-screen'




const Tab = createBottomTabNavigator();
const ProductStack = createNativeStackNavigator();

const ProductStackScreen = () => (
  <ProductStack.Navigator screenOptions={{headerShown:false}}>
  <ProductStack.Screen name="Home" component={ProductScreen} />
  <ProductStack.Screen name="AddProduct" component={AddProductScreen} />
  <ProductStack.Screen name="AddCategory" component={AddCategoryScreen} />
  <ProductStack.Screen name="ProductDetails" component={ProductDetailScreen} />

</ProductStack.Navigator>
)
const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: colors,
};

export default function App() {
   React.useEffect(()=>{
    SplashScreen.hide();
   },[])
 
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Shop') {
              iconName = focused ? 'apps-sharp' : 'apps';
            } else if (route.name === 'Product') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.onPrimaryContainer,
          headerShown:false,
          lazy:true,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Shop" component={ProductScreen} />
        <Tab.Screen name="Product" component={ProductStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
