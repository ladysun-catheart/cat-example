import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import TopBar from './core/components/top-bar';
import MainContent from './core/components/main-content';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Given the main page...', () => {

  beforeAll(() => {
  });

  test('there is a top bar', () => {
    const app = shallow(<App />);
    const topBar = app.find(TopBar);
    expect(topBar).toHaveLength(1);
  });

  test('there is a main content section', () => {
    const app = shallow(<App />);
    const mainContent = app.find(MainContent);
    expect(mainContent).toHaveLength(1);
  });

});
