var wrapper = document.body;
var data = [
  {
    color:"Red",
    number:0
  },
  {
    color:"Green",
    number:0
  },
  {
    color:"Blue",
    number:0
  }
];
var elements = [];

function counter(color,number) {
  var that=this;
  
  this.color = color;
  this.number = number;
  
  this.ele = document.createElement("div");
  this.colorEle = document.createElement("h1");
  this.numberEle = document.createElement("h3");

  
  this.colorEle.innerHTML = this.color;
 this.numberEle.innerHTML = this.number;
 
  this.ele.appendChild(this.colorEle);
  this.ele.appendChild(this.numberEle);
  this.ele.classList.add("clicker");
  
  if(this.color==="Red")
 this.ele.style.backgroundColor = "red"; 
else if(this.color==="Green")
 this.ele.style.backgroundColor = "Green"; 
  else if(this.color==="Blue")
 this.ele.style.backgroundColor = "Blue";

  this.ele.style.borderRadius = "10px";
  this.ele.style.fontSize="18px"
 
  
  this.ele.addEventListener("click", function(){
    that.changeNumber();
    
  })
  wrapper.appendChild(this.ele);
}

counter.prototype.changeNumber = function () {
  this.numberEle.innerHTML = this.number++
};

for(var i=0; i<data.length;i++){
  elements.push(new counter(data[i].color,data[i].number))
}