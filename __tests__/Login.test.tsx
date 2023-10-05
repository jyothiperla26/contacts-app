
import React from 'react';
import LoginScreen from '../src/LoginScreen';
import { render, fireEvent, screen } from '@testing-library/react-native';


// Note: import explicitly to use the types shiped with jest.
import {it, test} from '@jest/globals';
import renderer from 'react-test-renderer';

// Mock AsyncStorage methods
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
}));

describe('LoginScreen Component', () => {

  test('Renders correctly the Login screen correctly', () => {
    renderer.create(<LoginScreen navigation={{ navigate: jest.fn() }}/>);
  });

  test('Should render the title of the Login screen', () => {
    const { getByText } = render(<LoginScreen navigation={{ navigate: jest.fn() }}/>);
    const titleText = getByText('LOGIN');
    expect(titleText).toBeTruthy();
  });

  test('Should render the Login button text on the screen', () => {
    const { getByText } = render(<LoginScreen navigation={{ navigate: jest.fn() }}/>);
    const loginButtonText = getByText('Login');
    expect(loginButtonText).toBeTruthy();
  });

  test('Should render the Login button text on the screen', () => {
    const { getByText } = render(<LoginScreen navigation={{ navigate: jest.fn() }}/>);
    const forgotPasswordButtonText = getByText('Forgot Password');
    expect(forgotPasswordButtonText).toBeTruthy();
  });

  test('Should render the forgot password button text on the screen', () => {
    const { getByText } = render(<LoginScreen navigation={{ navigate: jest.fn() }}/>);
    const forgotPasswordButtonText = getByText('Forgot Password');
    expect(forgotPasswordButtonText).toBeTruthy();
  });

  test('Should render the placeholder text for the login and forgot password input fields', () => {
    const { getByPlaceholderText } = render(<LoginScreen navigation={{ navigate: jest.fn() }} />);
    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  test('Should handle the login button correctly', () => {
    const { getByText } = render(<LoginScreen navigation={{ navigate: jest.fn() }} />);
    const loginButton = getByText('Login');
    fireEvent.press(loginButton);
  })

  test('Should handle the forgot password button correctly', () => {
    const { getByText } = render(<LoginScreen navigation={{ navigate: jest.fn() }} />);
    const forgotPasswordButton = getByText('Forgot Password');
    fireEvent.press(forgotPasswordButton);
  })

})
