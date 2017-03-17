import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

=======
import { shallow, mount } from 'enzyme';
>>>>>>> 73f8925a0166e9094148eb6e39a1606e0b4b0a87
import App from './App';
// import { shallow } from 'enzyme';

describe('App component', () => {
  describe('testing App component', () => {

    it.skip('has data in an object', () => {
      const wrapper = shallow(<App/>);
      console.log(wrapper)
      expect(wrapper.props().data).to.be.defined;
      expect(wrapper.props().search).to.be.defined;
    });

<<<<<<< HEAD
  });
=======
describe('App', ()=> {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    const wrapper = shallow(<App/>);
    expect(wrapper.find('div')).to.have.length(2);

  });

>>>>>>> 73f8925a0166e9094148eb6e39a1606e0b4b0a87
});
