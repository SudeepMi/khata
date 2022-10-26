import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { TextInput, Appbar, Button, Headline, List, Avatar } from 'react-native-paper';

const AddCategoryScreen = ({navigation}) => {

    const [text, setText] = React.useState("");
    const dummy = Array(25).fill(10);
    const height =Dimensions.get('window').height
    const styles = StyleSheet.create({
        wrapper: {
            padding: 20,
            height:height * 0.7
        }
    })
    return (
        <View>
            <Appbar>
                <View>
                    <Button icon="keyboard-backspace" onPress={()=>navigation.goBack()}>Back</Button>
                </View>
            </Appbar>
            <View style={styles.wrapper}>
                <View>
                <TextInput
                    label="Category Name"
                    value={text}
                    onChangeText={text => setText(text)}
                    mode='outlined'
                />
                <TouchableOpacity style={{ marginVertical: 10 }}>
                    <Button mode='contained'>Add</Button>
                </TouchableOpacity>
                </View>
                <View>
                    <Headline>All Category</Headline>
                    <ScrollView>
                    { dummy.map((d,key)=>
                        <List.Item
                            key={key}
                            title={"Category"+(key+1)}
                            description="30 Items"
                            left={props => <Avatar.Text size={40} label="XD" {...props} color='white' />}
                            style={{marginStart:10}}
                        />
                    ) }
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default AddCategoryScreen