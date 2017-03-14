
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

      object[location].data[timeFrame] = objData

      //need to add "Location" as key and location as value
      //need to add "Data" as key and timeFrame and objData as value
      // object[location][data] = objData;
      return object;
    }, {})
  }

  findByName(filteredData){
    return this.data[filteredData]
  }
}

export default DistrictRepository;
