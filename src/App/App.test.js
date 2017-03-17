import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', ()=> {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    const wrapper = shallow(<App/>);
    expect(wrapper.find('div')).to.have.length(2);

  });

});
