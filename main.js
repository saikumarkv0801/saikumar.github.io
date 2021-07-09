var imageSources = ["1.svg","2.svg","3.svg","4.svg"]

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("image_change").src = imageSources[index];
  index++;
} , 5000);

const data_array = ["I am a graduate..","Always facinated to learn new things.."];

function sleep(milliseconds) {  
  return new Promise(resolve => setTimeout(resolve, milliseconds));  
}  

let showing_data = ""
async function fun(){
  for (let j =0; j < data_array.length;j++){
    let data = data_array[j];
    for (let i =0; i < data.length; i++){  
      showing_data += data[i];
      await sleep(220);
      document.getElementById("js_header").style.color = "blue";
      document.getElementById("js_header").innerHTML = showing_data;
      
    }
    if (data == showing_data){
      showing_data = ""
    }
    if (j == data_array.length){
      j = 0;
    }
  }
};

fun();

setInterval(fun,15000);

function mode(){
  let but_value = document.getElementById("mode_change").innerHTML;

  if(but_value == "dark"){
    document.getElementById("mode_change").innerHTML = "light"
    document.getElementById("mode_change").style.color = "white"
    document.body.style.backgroundColor = "black";
    document.body.style.color = "gray";
  }
  else{
    document.getElementById("mode_change").innerHTML = "dark"
    document.getElementById("mode_change").style.color = "black"
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";    
  }

};