import 'react-native';
import React from 'react';
import {RecordsListItem} from '../../../src/components/RecordsList';

import renderer from 'react-test-renderer';

it('Single RecordsListItem renders correctly across screens', () => {
  const tree = renderer.create(<RecordsListItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
