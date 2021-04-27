import 'react-native';
import React from 'react';
import {RecordsList} from '../../../src/components/RecordsList';
import renderer from 'react-test-renderer';
import {records} from '../../../__mocks__/RecordsList/recordsResponse';

describe('RecordsList test suite', () => {
  it('RecordsList renders correctly across screens', () => {
    const tree = renderer.create(<RecordsList records={records} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
