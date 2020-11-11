import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps171741Navigator from '../features/Maps171741/navigator';
import Additem171740Navigator from '../features/Additem171740/navigator';
import Maps171736Navigator from '../features/Maps171736/navigator';
import UserProfile171732Navigator from '../features/UserProfile171732/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps171741: { screen: Maps171741Navigator },
Additem171740: { screen: Additem171740Navigator },
Maps171736: { screen: Maps171736Navigator },
UserProfile171732: { screen: UserProfile171732Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
