let car = {
    name : "sonata",
    ph : 500,
    start: function() {
        console.log("engine start");
    },
    stop: function() {
        console.log("engine stop");
    },

};


let cars= ["bmw" ,"saab" , "ford" ];

for(let index =0; index <cars.length; index++){
    const c = cars[index];
    console.log(c);
}

for(car of cars){
    console.log(car);
}

cars.map((car)=> {
    console.log(car);
});

let arr = [1,2,3,4,5];

arr.map((a)=>{
    console.log(a*a);
});
