// console.log("hello world");
// let a = "12"
// let b = 99
// console.log(typeof a);
// console.log(typeof b);

// let s = function(str = "hello"){
//     console.log("hi function is "+str);
// }
// s();
// function summation(a,b,c = 12){
//     return a+b+c;
// }
// console.log(summation(1,8,89));

// function ccomplier(){
//   return "c selected";
// }

// function cppcomplier(){
//     return "cpp selected";
// }


// function javacomplier(){
//     return "java selected";
// }
// function selectedlanguage(clbk)
// {
//     console.log("hi ,you have selected"  +clbk);
// }
// selectedlanguage(javacomplier());

// function callback(callb,calla)
// {
//     console.log(callb + calla);
// }
// callback(ccomplier(), cppcomplier());
 console.log(document);
 const div = document.getElementsByClassName("container");
// console.log(div);
// div[0].innerText="aayush kumar";
// div[0].innerHTML = "<h1 style = color:red>hellooooooooo</h1>";
// const h1 = document.createElement("h1");
// h1.innerText="element is created by dom element";
// h1.style.backgroundColor = " yellow";
// h1.style.color = "green";
// div[0].appendChild(h1);
// console.log(h1);

// const img = document.createElement('img');
// img.src='panda.jpg';
// //img.style.justifyContent="center";
// img.setAttribute("height","200px");
// console.log(img);
// div[0].appendChild(img);

// const button = document.getElementById("btn");
// console.log(button);
// const display = document.getElementById("disp");
// console.log(display);
// function getData(){
//     console.log("calling getData function");
//     display.innerHTML ="<h1 style = color:red>my dear panda </h1>";
// }

// button.addEventListener("click",getData);

// const promise = new Promise(
//     (resolve,reject)=>{
//         let a= Math.random()*1000;
//         console.log(a);
//         if(a>=100 && a <=200){
//             resolve("value a  is resolved");
//         }
//         else{
//             reject(" a is rejected");
//         }
//     }
// );
// promise
// .then((msg)=>console.log(msg))
// .catch((error)=>console.log(error))
// .finally(()=>console.log("all resources have been closed"));

const response = fetch("https://dummyjson.com/products");
response
    .then(data=>{ 
        console.log(data);
       data.json().then(res =>{
       for(let i = 0; i < 30; i++){
         console.log(res.products[i].id + " "+ res.products[i].title);
        const h2 = document.createElement("h2");
        h2.innerText = res.products[i].id + " "+ res.products[i].title
        div[0].append(h2);
       }
    })
})
