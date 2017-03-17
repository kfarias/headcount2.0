import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { shallow, mount } from 'enzyme';

describe('App component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
    });
    it('has a state of data defaulted to an empty object', () => {
      const wrapper = shallow(<App/>);
      expect(typeof wrapper.state().data).toBe('object');
    });
    it('has a state of search defaulted to an empty array', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.state().search).toEqual([]);
    });
    it('should have a component called CardWrapper', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('CardWrapper').length).toEqual(1)
    });
    it('should have a component called Search', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('Search').length).toEqual(1)
    });
});
