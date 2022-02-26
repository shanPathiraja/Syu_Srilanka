import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {Route} from 'react-native-tab-view';

export interface IRoutes extends Route {
  key: string;
  title: string;
  customIcon: IconDefinition;
}
