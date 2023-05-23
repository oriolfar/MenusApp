import { StyleSheet } from "react-native";

export const colors = {
    primary: '#5856D6',
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    bigButton: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    bigButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatarContainer: {
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
    },
    menuButton: {
        marginVertical: 10
    },
    menuText: {
        fontSize: 16
    },
    tabIcon: {
        opacity: 0.5,
    },
    tabIconFocusedAndroid: {
        opacity: 1,
        fontWeight: 'bold',
        color: colors.primary,
    },
    tabIconNonFocusedAndroid: {
        opacity: 0.7,
        fontWeight: 'normal',
        color: 'white'
    },
    tabIconFocusedIos: {
        opacity: 1,
        fontWeight: 'bold',
    },
    tabIconNonFocusedIos: {
        opacity: 0.7,
        fontWeight: 'normal',
    },
});