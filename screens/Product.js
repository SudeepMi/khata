import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar, Button, Searchbar, TouchableRipple, useTheme } from 'react-native-paper';
import { List } from 'react-native-paper';


const ProductScreen = ({navigation}) => {
    const theme = useTheme();
    const dummy = Array(25).fill(3);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const styles = StyleSheet.create({
        topBarBtns: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        search: {
            marginTop: 15,
            height: 40,
            backgroundColor: theme.colors.surface
        }
    })
    return (
        <View>
            <View style={{ padding: 20, backgroundColor: 'white', justifyContent: 'space-evenly', alignContent: 'center', alignItems: 'stretch' }}>
                <View style={styles.topBarBtns}>
                <TouchableOpacity onPress={()=>navigation.navigate('AddProduct')}>
                    <Button mode='contained-tonal' icon='plus'>Add Product</Button>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('AddCategory')}>
                    <Button mode='contained-tonal' icon='plus'>Add Category</Button>
                </TouchableOpacity>
                </View>
                <View>
                    <Searchbar
                        placeholder="Search Products"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={styles.search}
                    />
                </View>
            </View>
            <ScrollView>
                <View>
                    { dummy.map((d,key)=>
                    <TouchableRipple key={key}  onPress={() => navigation.navigate('ProductDetails')} rippleColor="rgba(0, 0, 0, .32)">
                        <List.Item
                            title="First Item"
                            description="Item description"
                            left={props => <Avatar.Text size={40} label="XD" {...props} color='white' />}
                            style={{marginStart:10}}
                        />
                    </TouchableRipple>
                    ) }
                </View>
            </ScrollView>
        </View>
    );
};

export default ProductScreen;
