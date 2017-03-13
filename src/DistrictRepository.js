
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
       object[location] = {};
     }
     object[location][timeFrame] = objData;
     return object;
   }, {})
 }
}


export default DistrictRepository;
