import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { Platform, Text } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import IconIonicons from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {

    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            labeled={false}
            sceneAnimationEnabled={false}
            barStyle={{
                backgroundColor: colors.primary,
            }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';

                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'library';
                            break;
                        case 'Tab2Screen':
                            iconName = 'md-chatbox-ellipses';
                            break;
                        case 'StackNavigator':
                            iconName = 'file-tray-stacked';
                            break;
                    }

                    const iconStyle = focused
                        ? [styles.tabIcon, styles.tabIconFocusedAndroid]
                        : [styles.tabIcon, styles.tabIconNonFocusedAndroid];

                    return (
                        <IconIonicons name={iconName} size={25} color={colors.primary} style={iconStyle} />
                    );
                },
            })}
        >
            <BottomTabAndroid.Screen
                name="Tab1Screen"
                options={{ title: 'Tab1' }}
                component={Tab1Screen}
            />
            <BottomTabAndroid.Screen
                name="Tab2Screen"
                options={{ title: 'Tab2' }}
                component={TopTabNavigator}
            />
            <BottomTabAndroid.Screen
                name="StackNavigator"
                options={{ title: 'Stack' }}
                component={StackNavigator}
            />
        </BottomTabAndroid.Navigator >
    );
}



const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';

                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'library';
                            break;
                        case 'Tab2Screen':
                            iconName = 'md-chatbox-ellipses';
                            break;
                        case 'StackNavigator':
                            iconName = 'file-tray-stacked';
                            break;
                    }

                    const iconStyle = focused
                        ? [styles.tabIcon, styles.tabIconFocusedIos]
                        : [styles.tabIcon, styles.tabIconNonFocusedIos];

                    return (
                        <IconIonicons name={iconName} size={25} color={color} style={iconStyle} />
                    );
                },
            })}
        >

            <BottomTabIOS.Screen
                name="Tab1Screen"
                options={{ title: 'Tab1' }}
                component={Tab1Screen}
            />
            <BottomTabIOS.Screen
                name="Tab2Screen"
                options={{ title: 'Tab2' }}
                component={TopTabNavigator}
            />
            <BottomTabIOS.Screen
                name="StackNavigator"
                options={{ title: 'Stack' }}
                component={StackNavigator}
            />
        </BottomTabIOS.Navigator>
    );
}