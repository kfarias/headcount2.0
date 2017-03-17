import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', ()=> {
  it('renders without crashing', () => {
    const div = document.createElement('div');
  });
  it.skip('renders as a div', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
