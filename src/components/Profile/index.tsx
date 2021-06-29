import React from 'react';
import { View, Text } from 'react-native';

import {styles} from '../Profile/styles';
import { Avatar } from '../../components/Avatar';
import { useAuth } from '../../hooks/auth';

export function Profile(){
    const {user} = useAuth();
    return(
       <View style={styles.container}>
           <Avatar urlImage={user.avatar} />
           <View>
               <View style={styles.user}>
                   <Text style={styles.greeting}>
                        Olá,
                   </Text>
                        {user.firstName}
                   <Text style={styles.username}>
                        
                   </Text>
               </View>
                <Text style={styles.message}>
                    Hoje é dia de derrota.
                </Text>
           </View>
       </View>     
    );
}