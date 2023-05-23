import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';

export const Page2Screen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerBackTitle: ''
        })
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page2Screen</Text>

            <Button
                title="Go to page 3"
                onPress={() => navigation.navigate('Page3Screen')}
            />
        </View>

    )
}
