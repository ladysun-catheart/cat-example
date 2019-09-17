import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../core/store/redux/store';

import MainContent from './main-content';
import Cat from "../../../cat";
import Contact from '../../../contact';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Given the main content...', () => {

  beforeAll(() => {
  });

  test('the Cat component is shown by default', () => {
    const mainContent = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <MainContent/>
      </MemoryRouter>
    </Provider>
    );
    const cat = mainContent.find(Cat);
    const content = mainContent.find(Contact);
    expect(cat).toHaveLength(1);
    expect(content).toHaveLength(0);
  });

});
