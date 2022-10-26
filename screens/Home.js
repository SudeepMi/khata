/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, useTheme, Text, Headline } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { dateOption } from '../utils/date';
import { SegmentedButtons } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';

const locale = 'en';

function HomeScreen() {
    const [value, setValue] = React.useState('');
    const [dateTime, setDateTime] = React.useState('');

    useEffect(() => {
      const _date = new Date(Date.now()).toLocaleString(locale, dateOption);
      setDateTime(_date);
    }, [])
    

    const theme = useTheme();
    const styles = StyleSheet.create({
        welcome: {
            fontSize: 30,
            marginVertical: 20,
            color: theme.colors.primary,
            fontWeight: "bold"
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        cardBody: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        count: {
            fontSize: 40,
            color: theme.colors.secondary,
            fontWeight: '700'
        },
        card: {
            minHeight: 50,
            display: 'flex',
            alignContent: 'center',
            marginVertical: 10
        },
        smallCard: {
            minHeight: 50,
            display: 'flex',
            alignContent: 'center',
            marginVertical: 10,
            borderColor: theme.colors.error,
            borderWidth: .3,
            padding: 10,
            width: '46%'
        },
        groupBtn: {
            height: 30,
            justifyContent: 'center',
        },
        statSectionHeader: {
            paddingVertical: 5,
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center'
        },
        smallCards: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
        }
    })

    return (
        <ScrollView>
        <View style={{ flex: 1, padding: 10 }}>
            <View style={styles.header}>
                <Title style={styles.welcome}>Welcome !</Title>
                <Text>
                    <Ionicons name='ios-time-outline' />
                    {dateTime}
                </Text>
            </View>
            <Card mode='elevated' elevation={1} style={styles.card}>
                <Card.Content>
                    <View style={styles.cardBody}>
                        <Title>Total Products</Title>
                        <Text style={styles.count}>40</Text>
                    </View>
                </Card.Content>
            </Card>
            <Card mode='elevated' elevation={1} style={styles.card}>
                <Card.Content>
                    <View style={styles.cardBody}>
                        <Title>Today Sell</Title>
                        <View style={{ justifyContent: 'center', 'alignItems': 'center' }}>
                            <Text style={{ margin: -7, }}>NPR</Text>
                            <Text style={styles.count}>1000</Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>
            <Card mode='elevated' elevation={1} style={styles.card}>
                <Card.Content>
                    <View style={styles.cardBody}>
                        <Title>Profit</Title>
                        <View style={{ justifyContent: 'center', 'alignItems': 'center' }}>
                            <Text style={{ margin: -7, }}>This Month</Text>
                            <Text style={styles.count}>3000</Text>
                            <Text style={{ margin: -7, color: theme.colors.success }}>10%
                                <Ionicons name='arrow-up' />
                            </Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>
            <View style={{ marginVertical: 10 }}>
                <View style={styles.statSectionHeader}>
                    <Headline style={{ fontSize: 20, textTransform: 'uppercase' }}>Statistics</Headline>
                    <SegmentedButtons
                        density='small'
                        value={value}
                        onValueChange={setValue}
                        buttons={[
                            {
                                value: 'week',
                                label: 'Week',
                                
                            },
                            {
                                value: 'month',
                                label: 'Month',
                            },
                            // {
                            //     value: 'year',
                            //     label: 'Year',
                            // },
                        ]}
                        style={styles.groupBtn}
                    />
                </View>
                <View style={styles.smallCards}>
                    <View style={styles.smallCard}>
                        <Text style={{ fontSize: 15, fontWeight: '800' }}>Least Selling Product</Text>
                        <Text>Flexon</Text>
                    </View>
                    <View style={styles.smallCard}>
                        <Text style={{ fontSize: 15, fontWeight: '800' }}>Most Selling Product</Text>
                        <Text>Flexon</Text>
                    </View>
                    <View style={styles.smallCard}>
                        <Text style={{ fontSize: 15, fontWeight: '800' }}>Day With Highest Sell</Text>
                        <Text>26 Oct 2022</Text>
                    </View>
                    <View style={styles.smallCard}>
                        <Text style={{ fontSize: 15, fontWeight: '800' }}>Month Estimated Earning</Text>
                        <Text>20000</Text>
                    </View>
                </View>
                <View>
                    <Text style={{textAlign:'center'}}>Yearly Sell Chart</Text>
                    <LineChart
                        data={{
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width - 20} // from react-native
                        height={180}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 13,
                            },
                            propsForDots: {
                                r: "5",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 6,
                            borderRadius: 10,
                        }}
                    />
                   
                </View>
            </View>
        </View>
        </ScrollView>
    );

}


export default HomeScreen;
