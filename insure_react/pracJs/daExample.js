let car = {
    cname : "sonata",
    ph : 500,
    start: function() {
        console.log("engine start");
    },
    stop: function() {
        console.log("engine stop");
    },

};

let carname = car.cname;
let carph = car.ph;


console.log(carname, carph);

let {cname, ph} = car;
console.log(cname, ph);

console.log("자동차 이름은 : "+ cname + "/ 마력은 : "+ph);
console.log(`자동차의 이름은 : ${cname}/ 마력은 : ${ph}`);  //templete Literals