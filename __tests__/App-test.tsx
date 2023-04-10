/**
 * @format
 */
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

describe('App render', () => {
  it('renders correctly', () => {
    renderer.create(<Text>Test</Text>);
  });
});
