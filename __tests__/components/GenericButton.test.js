import 'react-native';
import React from 'react';
import {GenericButton} from '../../src/components/';

import renderer from 'react-test-renderer';

it('GenericButton renders correctly across screens', () => {
  const tree = renderer.create(<GenericButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
