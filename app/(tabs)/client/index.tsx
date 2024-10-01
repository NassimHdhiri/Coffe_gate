import { View,Text, StyleSheet } from "react-native"


const ClientPage=()=>{
    return (
        <View style={style.container}>
            <Text>
                Client Page
            </Text>
        </View>
    )
}

export default ClientPage;

const style=StyleSheet.create(
    {
        container:{
            height:'100%',
            backgroundColor:'red',
            flex:1,
        }
    }
)