import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Dashboard from '../features/list-product/list-product.screen';
import Profile from '../features/profile/profile.screen';
import ListOrder from '../features/list-order/list-product.screen';

const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: 'red' }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon(props) {
            return <Icon name="house" size={16} color={props.color} />;
          },
        }}
      />
      <Tab.Screen
        name="ListOrder"
        component={ListOrder}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon(props) {
            return <Icon name="box" size={16} color={props.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon(props) {
            return <Icon name="user" size={16} color={props.color} solid />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTab;
