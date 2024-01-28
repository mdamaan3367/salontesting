import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TimeSlotScreen from './screens/TimeSlotScreen';
import BookingScreen from './screens/BookingScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'TimeSlots') {
              iconName = 'time-outline'; 
            } else if (route.name === 'Booking') {
              iconName = 'calendar'; 
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="TimeSlots" component={TimeSlotScreen} />
        <Tab.Screen name="Booking" component={BookingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
