import React from 'react';
import ReactDOM from 'react-dom';

import Cat from './cat';
import CatInfo from './cat-info';
import CatList from './cat-list';
import CatActions from './cat-actions';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Given the main page...', () => {

  beforeAll(() => {
  });

  test('there are a CatInfo, CatList and CatAction components', () => {
    const cat = shallow(<Cat />);
    const catInfo = cat.find(CatInfo);
    const catList = cat.find(CatList);
    const catActions = cat.find(CatActions);
    expect(catInfo).toHaveLength(1);
    expect(catList).toHaveLength(1);
    expect(catActions).toHaveLength(1);
  });

});
