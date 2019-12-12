import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon = <Icon name="home" size={35} />;

const myCart = <Icon name="coffee" size={35} />

import Cart from "./Screens/Cart";

import Category from "./Screens/Category";
import Categorys from "./Screens/Categorys";
import Orders from "./Screens/Orders";
import Setting from "./Screens/Setting";


const CategoryStack = createStackNavigator({
  Categorys,
  Category,
});
CategoryStack.navigationOptions = {
  tabBarLabel: "Trang chủ",
  tabBarIcon : myIcon
};

const CartStack = createStackNavigator({ Cart });
CartStack.navigationOptions = {
  tabBarLabel: "Giỏ hàng",
  tabBarIcon : myCart
};

const OrderStack = createStackNavigator({ Orders });
OrderStack.navigationOptions = {
  tabBarLabel: "Đơn hàng",
};

const SettingStack = createStackNavigator({ Setting });
SettingStack.navigationOptions = {
  tabBarLabel: "Cài đặt",
};

const AppNavigator = createBottomTabNavigator(
  {
    CategoryStack,
    CartStack,
    OrderStack,
    SettingStack,
  }
);

export default AppNavigator;
