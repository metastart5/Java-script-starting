//mmediately invoked Function Expressions (IIFE)


(function chai (){
    console.log(`DB CONNECTED`)

})();

( () => {
    console.log(`DB CONNECTED 2`);
} ) ();


( (name) => {
    console.log(`DB CONNECTED ${name}`);
} ) ('akshat')
