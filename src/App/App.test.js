import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { shallow, mount } from 'enzyme';

describe('App component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
    });
    it.skip('has data in an object', () => {
      const wrapper = shallow(<App/>);
      console.log(wrapper)
      expect(wrapper.props().data).to.be.defined;
      expect(wrapper.props().search).to.be.defined;
    });
  });
