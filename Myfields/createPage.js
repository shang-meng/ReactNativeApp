import React from 'react'
import { StyleSheet } from 'react-native';
import { Form, Item, Input, Label, Picker } from 'native-base';
import { Icon, Overlay, CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'

export default class CreatePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenProject: undefined,
            chosenDate: undefined
        }
    }

    setDate = (newDate) => {
        this.setState({ chosenData: newDate })
    }
    choseProject = (value) => {
        this.setState({
            chosenProject: value
        })
    }

    render() {
        return (
            <Overlay isVisible={this.props.isVisible} fullScreen={true}>
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
                            selectedValue={this.state.chosenProject}
                            onValueChange={this.choseProject}
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
        )
    }
}

const styles = StyleSheet.create({
    label: { width: 92 },
    input: { marginLeft: 16 }
})