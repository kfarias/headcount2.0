import DistrictRepository from '../../src/DistrictRepository.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


describe('DistrictRepository iteration 0', () =>  {

  it('district has data in an object', () => {
    const district = new DistrictRepository(kinderData)
    expect(typeof district.data).toBe('object');
  });

  it('data coming in has no duplicates', () => {
    const district = new DistrictRepository(kinderData);
    console.log(district.data);
    expect(Object.keys(district.data).length).toBe(181);
  });

});
