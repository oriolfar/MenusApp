// import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { colors, styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> {

};

export const Page1Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Text>
                        <Icon name="person-circle" size={40} color={colors.primary} />
                    </Text>
                </TouchableOpacity>
        })
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page1Screen</Text>

            <Button
                title="Go to page 2"
                onPress={() => navigation.navigate('Page2Screen')}
            />

            <Text style={{
                marginVertical: 20,
                fontSize: 20,
                marginLeft: 5,
            }}>
                Navigate with arguments
            </Text>
            <View style={{
                flexDirection: 'row',
                marginTop: 10
            }}>
                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 1,
                        name: 'Pedro'
                    })}
                >
                    <Text style={styles.bigButtonText}>Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#584501'
                    }}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 2,
                        name: 'Mary'
                    })}
                >
                    <Text style={styles.bigButtonText}>Mary</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
