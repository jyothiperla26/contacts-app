import 'react-native';
import React from 'react';
import HomeScreen from '../src/HomeScreen';
import { render, fireEvent} from '@testing-library/react-native';

import {it, test} from '@jest/globals';
import renderer from 'react-test-renderer';



describe('Home screen Component', () => {

  test('renders correctly', () => {
    renderer.create(<HomeScreen navigation={{}}/>);
  });

  test('Should render the title of the Home Screen', () => {
    const { getByText } = render(<HomeScreen navigation={{}}/>);
    const titleText = getByText('Welcome');
    expect(titleText).toBeTruthy();
  });

  test('Should render the Get contacts button text on the screen', () => {
    const { getByText } = render(<HomeScreen navigation={{}}/>);
    const getContactsText = getByText('Get contacts');
    expect(getContactsText).toBeTruthy();
  });

  test('handles Get contacts button', () => {
    const { getByText } = render(<HomeScreen navigation={{}} />);
    const getContactsButton = getByText('Get contacts');
    fireEvent.press(getContactsButton);
  });
  
});