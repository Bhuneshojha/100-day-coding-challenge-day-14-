
//          100 days of coding challenge ( DAY 14 )

//   Question 01    
function make_album(artist: String,tittle:String, tracks?:number){
  let album = {artist , tittle, tracks};
  if (tracks) {
      album ['tracks'] = tracks;
  }
  return album;

}
console.log(make_album("Vijay Soni","Har Har Shambhu",7.8));
console.log(make_album("Alia Bhat","Love you Zindagi",1.6));
console.log(make_album("Arjit Singh","Lut Put Gya",15));
    
//   Question 02
let magicians:string[] = ["Chanchal Lahiri","Gopinath Muthukad","Shri Jadugar Anand"]
function show_magicians(magicians:string[]){
         magicians.forEach(magicians =>{
          console.log(magicians);
         });
}
show_magicians(magicians);

//   Question 03
function make_great(magicians:string[]){
  for (let i = 0; i < magicians.length; i++){
    magicians[i] = magicians[i] + "the great";
  }
}
make_great(magicians); // Modifies the orginal array
show_magicians(magicians); // Shows modifined names