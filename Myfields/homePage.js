import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import CardView from 'react-native-cardview-wayne';
import { Header, SearchBar, Tooltip, Icon, Button, Divider } from 'react-native-elements';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            data: [{ key: 'hello' }, { key: 'flatlist' }, { key: 'How' }, { key: 'are' }, { key: 'you' }],
        }
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

    updateSearch = (search) => {
        this.setState({ search: search });
    };

    rightComponent = () => {
        const tooltipRef = React.createRef();
        return (
            <Tooltip overlayColor='transparent' height={80} ref={tooltipRef} popover={
                <View>
                    <Button
                        type='clear'
                        title='新建'
                        titleStyle={{ color: '#fff', width: 120 }}
                        onPress={() => {tooltipRef.current.toggleTooltip();  this.props.navigation.push('CreatePage'); }}
                    />
                    <Divider style={{ backgroundColor: 'grey', marginLeft: 1 }} />
                    <Button
                        type='clear'
                        title='扫一扫'
                        titleStyle={{ color: '#fff', width: 120 }}
                    />
                </View>
            }>
                <Icon name='add-circle-outline' color='#fff'></Icon>
            </Tooltip>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: themeColor }}>
                    <Header
                        containerStyle={{ borderBottomColor: themeColor }}
                        backgroundColor='transparent'
                        statusBarProps={{ translucent: true, backgroundColor: 'transparent' }}
                        leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: '巡检页面', style: { color: '#fff', fontSize: 20 } }}
                        rightComponent={this.rightComponent} />

                    <SearchBar
                        placeholder="Search"
                        onChangeText={this.updateSearch}
                        value={this.state.search}
                        round={true}
                        containerStyle={styles.containerStyle}
                        inputContainerStyle={{ backgroundColor: '#fff' }}
                    />
                </View>

                <FlatList
                    style={{ marginTop: 8 }}
                    data={this.state.data}
                    renderItem={({ item }) => this.renderItem(item)}
                />
            </View>
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