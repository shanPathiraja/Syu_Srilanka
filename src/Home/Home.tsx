import React from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Box, Center, Pressable, HStack} from 'native-base';
import NewsFeed from '../NewsFeed/NewsFeed';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faNewspaper, faBell, faUser} from '@fortawesome/free-solid-svg-icons';
import {IRoutes} from './Home.types';
import Notifications from '../Notifications/Notifications';
import Profile from '../Profile/Profile';

const renderScene = SceneMap({
  newsFeed: NewsFeed,
  notifications: Notifications,
  profile: Profile,
});

export const Home = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<IRoutes[]>([
    {
      key: 'newsFeed',
      title: 'NewsFeed',
      customIcon: faNewspaper,
    },
    {
      key: 'notifications',
      title: 'Notifications',
      customIcon: faBell,
    },
    {
      key: 'profile',
      title: 'Profile',
      customIcon: faUser,
    },
  ]);

  const renderTabBar = (props: {navigationState: {routes: IRoutes[]}}) => {
    return (
      <HStack>
        {props.navigationState.routes.map((route, i) => {
          const bgColor = index === i ? '#be123c' : '#374151';
          const borderColor = index === i ? '#be123c' : '#374151';
          return (
            <Box
              key={route.key}
              borderBottomWidth="6"
              borderColor={borderColor}
              // backgroundColor={bgColor}
              flex={1}
              alignItems="center"
              p="3">
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}>
                <FontAwesomeIcon
                  icon={route.customIcon}
                  size={20}
                  color={bgColor}
                />
              </Pressable>
            </Box>
          );
        })}
      </HStack>
    );
  };

  return (
    <TabView
      lazy
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      tabBarPosition="bottom"
      renderTabBar={renderTabBar}
    />
  );
};
