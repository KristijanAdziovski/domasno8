let paragraph = document.getElementById("first");
let newParagraph = document.createElement("div");
paragraph.appendChild(newParagraph);
newParagraph.setAttribute("id" , "zoo");
newParagraph.innerHTML=`Name <input type = "text"> Type<input type ="text">Age <input type ="text"><button>Add</button>`;
let paragraphNew=document.getElementById("zoo");
let paragraphNewNew=document.createElement("div");
paragraphNew.appendChild(paragraphNewNew);
paragraphNewNew.setAttribute("id","list");
paragraphNewNew.innerHTML ='<h3>Animals:</h3><ul></ul>';
function zoo(name, type,age){
  this.animalName=name;
  this.animalType=type;
  this.animalAge=age;
}
let animals = []; 
function animal(arr,element){ 
  element.innerHTML = "";
  for (let list of arr) { 
    element.innerHTML += `<li>Name: ${list.animalName},
    Type: ${list.animalType}, 
    Age: ${list.animalAge}</li>`;
  }
}
newParagraph.children[3].addEventListener("click",function(){
      let name = newParagraph.children[0].value;
      let type =newParagraph.children[1].value;
      let age=newParagraph.children[2].value;

      let zooAnimals = new zoo(name,type,age);
      animals.push(zooAnimals);
      animal(animals,paragraphNewNew.children[1]);
})