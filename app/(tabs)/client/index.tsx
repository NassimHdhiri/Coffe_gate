import React from 'react'
import {Text,StyleSheet,View} from 'react-native'
import { Header, Icon } from 'react-native-elements';


const SingleMenuItem=()=>{
    return(
        <View style={styles.container}>
            <Header
                // style={styles.headerStyle}
                leftComponent={
                    <Icon 
                        name='disc'
                        type='materiel'
                        size={20}
                    />
                }
            />

            {/* Container Image */}
            <View style={styles.containerImage}>

            </View>
        </View>
    )
}

export default SingleMenuItem;

const styles=StyleSheet.create(
    {
        container:{
            // padding:40
        },
        headerStyle:{
            width:'100%',
            padding:40
        },
        containerImage:{
            height:300,
            backgroundColor:'black'
        }
    }
)





