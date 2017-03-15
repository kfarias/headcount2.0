
class DistrictRepository {
  constructor(data){
    this.data = this.dataByLocation(data);
  }

  dataByLocation(data){
    return data.reduce((object, district) => {
      const location = district.Location;
      const timeFrame = district.TimeFrame;
      const objData = district.Data;

      if(!object[location]){
        object[location] = {'location': location, 'data': {} };
      }
      if((typeof objData) === 'number'){
        object[location].data[timeFrame] = Math.round(1000 * objData)/1000
      } else {
        object[location].data[timeFrame] = 0
      }


      return object;
    }, {})
  }

  findByName(input){
    const keys = Object.keys(this.data)
    if(!input) {
      return undefined
    }
    const upperCaseInput = input.toUpperCase();
    const upperCaseKeys = keys.filter((location, index) => {
      if(upperCaseInput === location.toUpperCase()) {
        return keys[index]
      }
    })
    return this.data[upperCaseKeys]
  }

  findAllMatches(input){
    const keys = Object.values(this.data)

    if(!input){
      return keys;
    }

    const upperCaseKeys = keys.filter(object => {
      return object.location.toUpperCase().indexOf(input.toUpperCase()) > -1;
    });
    return upperCaseKeys
  }
}

export default DistrictRepository;
