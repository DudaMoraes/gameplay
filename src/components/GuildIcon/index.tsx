import React from 'react';
import { Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';


export function GuildIcon(){
    const uri = 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-0-2048x2048.png';
     
    return(
        <Image 
            source={{uri}}
            style={styles.image}
            resizeMode='cover'
        />
    );
}