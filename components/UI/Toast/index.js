import { BaseToast } from 'react-native-toast-message';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import Colors from '../../Colors';

export const toastConfig = {
    errToast: ({ text1, props }) => (
        <View style={{ height: 60, width: '100%', backgroundColor: Colors.itemBgColor }}>
            <Text style={{ color: Colors.redColor }}>{text1}</Text>
            <Text>{props.uuid}</Text>
        </View>
    )
}