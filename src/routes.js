import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Main from './pages/Main';

const  Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Super Hero',
            },
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: 'red',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: 'black',
                // backgroundColor: '#7D40E7',
            }
        }
    })
);


{/* <Icon name="home" size={18} color="#999" /> */}

export default Routes;