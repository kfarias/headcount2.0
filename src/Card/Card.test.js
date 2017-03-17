import DistrictRepository from '../../src/DistrictRepository.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

// import { shallow, mount } from 'enzyme';

describe('Card', () => {

  it.skip('has  one div', () => {
    const wrapper = shallow(
      <Card />
    );

    expect(wrapper.find('div').length).toEqual(1);
  });
})
