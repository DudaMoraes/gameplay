import React from 'react';
import { Image } from 'react-native';
import { theme } from '../../global/styles/theme';
import {LinearGradient} from 'expo-linear-gradient';

import {styles} from '../Avatar/styles';

type Props = {
    urlImage: string
}

export function Avatar({urlImage} : Props) {
    const { secondary40, secondary70} = theme.colors
    return(
        <LinearGradient
        style={styles.container}
        colors={[secondary40, secondary70]}
    >
        <Image 
        source={{uri: urlImage}}
        style={styles.avatar}
        />
    </LinearGradient>
    )
}