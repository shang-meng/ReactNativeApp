import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, TextInput } from 'react-native';
import CardView from 'react-native-cardview-wayne';
import { Header, SearchBar, Tooltip, Icon, Button, Divider, Overlay, CheckBox } from 'react-native-elements';
import { Form, Item, Input, Label, Picker, DatePicker} from 'native-base';

export default class AwesomeApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data: [{ key: 'hello' }, { key: 'flatlist' }, { key: 'How' }, { key: 'are' }, { key: 'you' }],
      isVisible: false,
      selected2: undefined
    }
    this.updateIndex = this.updateIndex.bind(this);
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

  updateSearch = search => {
    this.setState({ search });
  };

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }

  create() {
    this.setState({ isVisible: true });
    console.log(this)
  }

  rightComponent() {
    return (
      <Tooltip overlayColor='transparent' height={80} popover={
        <View>
          <Button
            type='clear'
            title='新建'
            titleStyle={{ color: '#fff' }}
            onPress={this.create}
          />
          <Divider style={{ backgroundColor: 'grey', marginLeft: 1 }} />
          <Button
            type='clear'
            title='扫一扫'
            titleStyle={{ color: '#fff' }}
          />
        </View>
      }>
        <Icon name='add' color='#fff'></Icon>
      </Tooltip>
    )
  }

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  render() {
    const { search } = this.state;
    const { data } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Overlay isVisible={this.state.isVisible}>
          <Form>
            <Item>
              <Label style={styles.label}>巡检编号</Label>
              <Input style={styles.Input} />
            </Item>
            <Item>
              <Label style={styles.label}>SN号</Label>
              <Input style={styles.Input} />
            </Item>
            <Item>
              <Label style={styles.label}>RFIDID</Label>
              <Input style={styles.Input} />
            </Item>
            <Item>
              <Label style={styles.label}>巡检人</Label>
              <Input style={styles.Input} />
            </Item>
            <Item>
              <Label style={styles.label}>巡检时间</Label>
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Item>
            <Item>
              <Label style={styles.label}>巡检项目</Label>
              <Picker
                mode="dropdown"
                style={styles.Input}
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="请选择" value="key0" />
                <Picker.Item label="物理网监控设备" value="key1" />
                <Picker.Item label="管网基础设施" value="key2" />
                <Picker.Item label="设施周边情况" value="key3" />
              </Picker>
            </Item>
            <Item>
              <Label style={styles.label}>巡检图片</Label>
              <Input style={styles.Input} />
            </Item>
            <Item>
              <Label style={styles.label}>是否异常</Label>
              <CheckBox title='是' checked={true} />
              <CheckBox title='否' checked={false} />
            </Item>
            <Item>
              <Label style={styles.label}>异常类型</Label>
              <Picker
                mode="dropdown"
                style={styles.Input}
                iosIcon={<Icon name="arrow-down" />}
              >
                <Picker.Item label="请选择" value="key0" />
              </Picker>
            </Item>
            <Item>
              <Label style={styles.label}>异常内容</Label>
              <Input style={styles.Input} />
            </Item>
          </Form>
        </Overlay>

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
            value={search}
            round={true}
            containerStyle={styles.containerStyle}
            inputContainerStyle={{ backgroundColor: '#fff' }}
          />
        </View>

        <FlatList
          style={{ marginTop: 8 }}
          data={data}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
}

const themeColor = '#20A0FF';

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginTop: 3, marginBottom: 3 },
  title: { width: 92, marginLeft: 2, fontWeight: 'bold' },
  content: { marginLeft: 16, marginRight: 16, flex: 1 },
  containerStyle: { backgroundColor: 'transparent', borderBottomColor: themeColor, borderTopColor: themeColor },
  label: { width: 92 },
  input: { marginLeft: 16 }
})


