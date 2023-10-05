import 'react-native';
import React from 'react';
import HomeScreen from '../src/HomeScreen';
import { render } from '@testing-library/react-native';


// Note: import explicitly to use the types shiped with jest.
import {it, test} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<HomeScreen navigation={undefined}/>);
});

test('Should render the title of the Home Screen', () => {
  const { getByText } = render(<HomeScreen navigation={undefined}/>);
  const titleText = getByText('Welcome');
  expect(titleText).toBeTruthy();
});

test('Should render the Get contacts button text on the screen', () => {
  const { getByText } = render(<HomeScreen navigation={undefined}/>);
  const getContactsText = getByText('Get contacts');
  expect(getContactsText).toBeTruthy();
});
