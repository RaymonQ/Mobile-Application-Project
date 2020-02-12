import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Homescreen from '../screens/Homescreen';
import Signup from '../screens/Signup'; 
import Cardview from '../screens/Cardview';
import Walletview from '../screens/Walletview';
import Login from '../screens/Login test';

import SCREEN_NAMES from './screen-names';

const StackNavigator = createStackNavigator({
    
    [SCREEN_NAMES.home]: {
        screen: Homescreen,
        navigationOptions: {headerShown: false}
    },
    [SCREEN_NAMES.signup]: {
        screen: Signup
    },
    [SCREEN_NAMES.card]: {
        screen: Cardview
    },
    [SCREEN_NAMES.wallet]: {
        screen: Walletview,        
    },
    [SCREEN_NAMES.login]: {
        screen: Login
    },

});

export default createAppContainer(StackNavigator);