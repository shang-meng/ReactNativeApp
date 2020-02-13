import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';
import { Form, Item, Input, Label, Picker } from 'native-base';
import { Icon, CheckBox, Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import ImagePicker from 'react-native-image-crop-picker';
import Textarea from 'react-native-textarea';

export default class CreateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenProject: undefined,
            chosenDate: undefined,
            chosenError: undefined,
            isError: undefined,
            textarea: ''
        }
    }

    setDate = (newDate) => {
        this.setState({
            chosenDate: newDate
        })
    }
    choseProject = (value) => {
        this.setState({
            chosenProject: value
        })
    }
    choseError = (value) => {
        this.setState({
            chosenError: value
        })
    }
    addImg = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            console.log(images);
        });
    }
    changeTextarea = (value) => {
        this.setState({
            textarea: value
        })
    }
    render() {
        return (
            <ScrollView>
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
                            style={{ width: 200 }}
                            date={this.state.chosenDate}
                            mode="datetime"
                            placeholder="请选择"
                            format="YYYY-MM-DD hh:mm:ss"
                            minDate="2016-05-01"
                            maxDate="2026-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(date) => this.setDate(date)} />
                    </Item>
                    <Item>
                        <Label style={styles.label}>巡检项目</Label>
                        <Picker
                            mode="dropdown"
                            style={styles.Input}
                            iosIcon={<Icon name="arrow-down" />}
                            selectedValue={this.state.chosenProject}
                            onValueChange={this.choseProject}>
                            <Picker.Item label="请选择" value="key0" />
                            <Picker.Item label="物理网监控设备" value="key1" />
                            <Picker.Item label="管网基础设施" value="key2" />
                            <Picker.Item label="设施周边情况" value="key3" />
                        </Picker>
                    </Item>
                    <Item>
                        <Label style={styles.label}>巡检图片</Label>
                        <Button title="添加图片" onPress={this.addImg} type="clear" titleStyle={{ color: 'black' }} ></Button>
                    </Item>
                    <Item>
                        <Label style={styles.label}>是否异常</Label>
                        <CheckBox
                            title='是'
                            checkedIcon={<Icon name='check'></Icon>}
                            containerStyle={{ backgroundColor: 'transparent' }}
                            checked={this.state.isError}
                            onPress={() => { this.setState({ isError: true }) }} />
                        <CheckBox
                            title='否'
                            checkedIcon={<Icon name='check'></Icon>}
                            containerStyle={{ backgroundColor: 'transparent' }}
                            checked={!this.state.isError}
                            onPress={() => { this.setState({ isError: false }) }} />
                    </Item>
                    <Item>
                        <Label style={styles.label}>异常类型</Label>
                        <Picker
                            mode="dropdown"
                            style={styles.Input}
                            iosIcon={<Icon name="arrow-down" />}
                            selectedValue={this.state.chosenError}
                            onValueChange={this.choseError}>
                            <Picker.Item label="请选择" value="key0" />
                            <Picker.Item label="河面，河岸保洁" value="key1" />
                            <Picker.Item label="河道观感" value="key2" />
                            <Picker.Item label="排污口" value="key3" />
                            <Picker.Item label="违法，倾倒，占用河道" value="key4" />
                        </Picker>
                    </Item>
                    <Item>
                        <Label style={styles.label}>异常内容</Label>
                        <Textarea
                            style={styles.textarea}
                            onChangeText={this.changeTextarea}
                            defaultValue={this.state.textarea}
                            maxLength={500}
                            underlineColorAndroid={'transparent'}
                        />
                    </Item>
                </Form>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    label: { width: 92 },
    input: { marginLeft: 20 },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        width: 300,
        fontSize: 14,
        color: '#333',
    },
})