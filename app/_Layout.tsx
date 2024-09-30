
import { Stack } from "expo-router";

const RootLayout=()=>{
    return (
    <Stack>
        <Stack.Screen name="(tabs)" options={
            {
                headerShown:false,
            }
        } />
    </Stack>
    )
}

export default RootLayout;

// import { Stack } from "expo-router";

// const RootLayout=()=>{
//     return (
//     <Stack>
//         <Stack.Screen name="index" options={
//             {
//                 headerTitle:"Home Page",
//                 headerStyle:{
//                     backgroundColor:"red",
//                 }
//             }
//         } />
//         <Stack.Screen name="users/[id]"/>
//     </Stack>
//     )
// }

// export default RootLayout;