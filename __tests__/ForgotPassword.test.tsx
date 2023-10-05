import 'react-native';
import React from 'react';
import ForgotPasswordScreen from '../src/ForgotPasswordScreen';
import { render } from '@testing-library/react-native';


// Note: import explicitly to use the types shiped with jest.
import {it, test} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


describe('Forgot Password screen', () => {

  it('renders correctly', () => {
    renderer.create(<ForgotPasswordScreen navigation={undefined}/>);
  });
  
  test('Should render the title of the Forgot Password Screen', () => {
    const { getByText } = render(<ForgotPasswordScreen navigation={undefined}/>);
    const titleText = getByText('Under construction');
    expect(titleText).toBeTruthy();
  });
  
  test('Should render the Go back button text on the screen', () => {
      const { getByText } = render(<ForgotPasswordScreen navigation={undefined}/>);
      const goBackButtonText = getByText('Go back');
      expect(goBackButtonText).toBeTruthy();
  });

});