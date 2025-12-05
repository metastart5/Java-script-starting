const mv =["thor","ironman","spiderman"];
const dc =["batman","flash","superman"]

// mv.push(dc)
console.log(mv + dc)
 
const nmv = mv.concat(dc)

//console.log(nmv)

const nmv1 = [...mv,...dc]
//console.log(nmv1)

console.log(Array.isArray("akshat"));
console.log(Array.from("akshat"));