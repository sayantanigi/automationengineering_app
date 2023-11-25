import * as React from 'react';
import { StyleSheet} from 'react-native';
import BusinessLayout from './BusinessLayout';
export default function BusinessMyjobs() {
    const [index, setIndex] = React.useState(0)
    return (
        <BusinessLayout isChildren={false}>
           
        </BusinessLayout>
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