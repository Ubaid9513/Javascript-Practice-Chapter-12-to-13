// var countries = ["Pakistan", "Afghanistan", "Iraq", "Iran", "Saudi Arabia", "Dubai", "Palestine"];
// console.log(countries);

// // ( PUSH METHOD ) Adding element at end
// countries.push ("Kashmir", "Bangladesh");
// console.log(countries);
// console.log(countries[0]);

// // ( POP METHOD ) Removing element from end
// countries.pop();
// console.log(countries);

// // ( SHIFT METHOD ) Removing element from start
// countries.shift();
// console.log(countries);

// // ( UNSHIFT METHOD ) Adding element at start
// countries.unshift("Pakistan");
// console.log(countries);

// //  ( SPLICE METHOD ) First "target", Second "removing" and Third "changing"
// countries.splice( 3,1,"Sri-lanka" );
// console.log(countries);

// //  ( SPLICE METHOD ) First "target", Second "removing" and NOT A "changing"
// countries.splice( 5,1);
// console.log(countries);

// // ( SLICE METHOD ) {Copy Elements} First value is target and Second value is length
// var copyElement = countries.slice ( 5,8);
// console.log(copyElement);



// OBJECT PRACTICE


var player = {
    fname : "Fakhar",
    lname : "Zaman",
    age : 25
}
console.log(player);

var fullname = player.fname + " " + player.lname;
console.log(fullname)