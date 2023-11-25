import * as React from 'react';
import { StyleSheet, View} from 'react-native';
import ExpertLayout from './ExpertLayout';
export default function ExpertMyjobs() {
    const [index, setIndex] = React.useState(0)
    return (
        <ExpertLayout MessageTextBarHidden isChildren={false} disable={false}>
           <View></View>
        </ExpertLayout>
    );
}
const styles = StyleSheet.create({
    container: {
        // marginTop: StatusBar.currentHeight,
        paddingTop: 0,
        textTransform: 'capitalize',
        // backgroundColor: '#F5F5FA',
    },

});