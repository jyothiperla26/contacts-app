/* eslint-disable prettier/prettier */
/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

import {it} from '@jest/globals';

import renderer from 'react-test-renderer';
jest. mock('react-native-permissions', () => require('react-native-permissions/mock'), ); 
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('react-native-contacts', () => ({
  getAll: jest.fn(),
}));

const elementMock = { addEventListener: jest.fn() };

it('renders correctly', () => {
  renderer.create(<App />);
});