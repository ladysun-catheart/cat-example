import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import MainContent from './main-content';
import Cat from '../../cat';
import Contact from '../../contact';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Given the main content...', () => {

  beforeAll(() => {
  });

  test('the Cat component is shown by default', () => {
    const mainContent = mount(<MemoryRouter initialEntries={[ '/' ]}><MainContent/></MemoryRouter>);
    const cat = mainContent.find(Cat);
    const content = mainContent.find(Contact);
    expect(cat).toHaveLength(1);
    expect(content).toHaveLength(0);
  });

});
