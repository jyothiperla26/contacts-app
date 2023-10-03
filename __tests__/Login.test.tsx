import 'react-native';
import React from 'react';
import App from '../App'
import LoginScreen from '../Login';
import { render } from '@testing-library/react-native';


// Note: import explicitly to use the types shiped with jest.
import {it, test} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<LoginScreen/>);
});

test('Should render the title of the Login screen', () => {
  const { getByText } = render(<LoginScreen/>);
  const titleText = getByText('LOGIN');
  expect(titleText).toBeTruthy();
});