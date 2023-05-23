import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native'
import { colors, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('Tab1Screen effect');
    }, [])


    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: top + 10
        }}>
            <Text style={styles.title}>ICONS</Text>
            <Text>
                <Icon name="airplane-outline" size={50} color={colors.primary} />
                <Icon name="airplane-outline" size={50} color={colors.primary} />
                <Icon name="airplane-outline" size={50} color={colors.primary} />
            </Text>
        </View>
    )
}


