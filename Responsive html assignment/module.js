// import {gh} from "./add.js";

// console.log(gh);


const eligi=new Promise((resolve,reject)=>{
    let age=8;
    if (age>=20){
        resolve()
    }
    else{
        reject()
    }

})

eligi.then(sucss)
eligi.then()
.catch(fai)

function sucss(){
    console.log("you are eligible for vote");
}
function fai(){
    console.log("you are NOT eligible for vote");
}

function fins(){
    console.log('thnaks for ');
}

