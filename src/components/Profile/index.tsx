import React from 'react';
import { View, Text } from 'react-native';

import {styles} from '../Profile/styles';
import { Avatar } from '../../components/Avatar';

export function Profile(){
    return(
       <View style={styles.container}>
           <Avatar urlImage="https://github.com/dudamoraes.png" />
           <View>
               <View style={styles.user}>
                   <Text style={styles.greeting}>
                        Olá,
                   </Text>

                   <Text style={styles.username}>
                        Duda
                   </Text>
               </View>
                <Text style={styles.message}>
                    Hoje é dia de derrota.
                </Text>
           </View>
       </View>     
    );
}