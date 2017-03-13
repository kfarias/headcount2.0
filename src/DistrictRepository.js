
class DistrictRepository {
 constructor(data){
   this.data = data;
 }
 dataByLocation(data){
  const schools = data.reduce((object, district) => {
    let location = district.Location;
     if(!object[location]){
       object[location];
     }
    //  } else {
    //     object[location].push(district)
    //    }
   }, {})
   return schools;
   this.data = schools;
 }
}

export default DistrictRepository;
