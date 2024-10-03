import React, { useState } from "react"
import {SearchBar} from 'react-native-elements'
import {Text,StyleSheet,View} from 'react-native'

const SearchTopBar=()=>{
    const [search, setSearch] = useState('');

    // Update search input
    const updateSearch = (searchValue) => {
      setSearch(searchValue);
    };
  
    return(
        <View style={{width:'100%'}}>
            <Text style={{fontSize:34,padding:20,paddingTop:0}}>{"Good Morning \nMohamed Nassim"}</Text>
            <SearchBar
            placeholder="Search your meals"
            onChangeText={updateSearch} // Update search state on text change
            value={search} // Controlled component
            containerStyle={styles.searchBarContainer} // Custom container style
            inputContainerStyle={styles.searchBarInput} // Custom input style
            searchIcon={{ size: 24 }} // Custom search icon size
            />
            
        </View>
        
    )
}

export default SearchTopBar;

const styles=StyleSheet.create(
    {
        searchBarContainer: {
            width: '100%', // Make the search bar container take the full width
            backgroundColor: '#ecf0f1', // Background color for the container
            borderWidth: 0,
            borderRadius: 3,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            paddingTop:10,
            paddingBottom:20
        },
        searchBarInput: {
            backgroundColor: '#fff', // Background color for the input
            borderRadius:10,
        },
    }
)