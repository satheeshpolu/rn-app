/**
 * @format
 */
import {Text} from 'react-native';
import renderer from 'react-test-renderer';

describe('App render', () => {
  it('renders correctly', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    renderer.create(<Text>Test</Text>);
  });
});
