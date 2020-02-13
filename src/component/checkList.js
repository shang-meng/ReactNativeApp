import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import CardView from 'react-native-cardview-wayne';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    renderItem(item) {
        return (
            <View>
                <CardView
                    style={{ marginHorizontal: 12 }}
                    cardElevation={4}
                    maxCardElevation={4}
                    radius={10}
                    backgroundColor={'#ffffff'}>
                    <View style={{ padding: 10, margin: 12 }}>
                        <View style={styles.container}>
                            <Text style={styles.title}>巡检编号</Text>
                            <Text style={styles.content}>{item.key}</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>SN号</Text>
                            <Text style={styles.content}>{item.key}</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>巡检时间</Text>
                            <Text style={styles.content}>{item.key}</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>巡检人</Text>
                            <Text style={styles.content}>{item.key}</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>巡检项目</Text>
                            <Text style={styles.content}>{item.key}</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>巡检图片</Text>
                            <Text style={styles.content}>-</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>是否异常</Text>
                            <Text style={styles.content}>{item.key}</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>异常类型</Text>
                            <Text style={styles.content}>{item.key}</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>异常内容</Text>
                            <Text style={styles.content}>{item.key}</Text>
                        </View>
                    </View>
                </CardView>
            </View>
        )
    }

    render() {
        return (
            <FlatList
                style={{ marginTop: 8 }}
                data={this.props.data}
                renderItem={({ item }) => this.renderItem(item)}
            />
        )
    }
}

const themeColor = '#20A0FF';

const styles = StyleSheet.create({
    container: { flexDirection: 'row', marginTop: 3, marginBottom: 3 },
    title: { width: 92, marginLeft: 2, fontWeight: 'bold' },
    content: { marginLeft: 16, marginRight: 16, flex: 1 },
    containerStyle: { backgroundColor: 'transparent', borderBottomColor: themeColor, borderTopColor: themeColor },
})