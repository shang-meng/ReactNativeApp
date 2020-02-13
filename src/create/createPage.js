import React from 'react'
import { View} from 'react-native';
import { Icon, CheckBox, Header } from 'react-native-elements';
import CreateForm from '../component/createForm'

const themeColor = '#20A0FF';

export default class CreatePage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={{ backgroundColor: themeColor }}>
                    <Header
                        style={{ borderBottomColor: themeColor }}
                        containerStyle={{ borderBottomColor: themeColor }}
                        backgroundColor='transparent'
                        statusBarProps={{ translucent: true, backgroundColor: 'transparent' }}
                        leftComponent={() => { return (<Icon name='arrow-back' color='#fff' onPress={() => this.props.navigation.goBack()}></Icon>) }}
                        centerComponent={{ text: '新建页面', style: { color: '#fff', fontSize: 20 } }}
                    />
                </View>
                <CreateForm></CreateForm>
            </View>
        )
    }
}


