import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', ()=> {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    const wrapper = shallow(<App/>);
    expect(wrapper.find('div')).to.have.length(2);

  });

});
