let todoinput = document.querySelector(".input");
let todolist = document.querySelector(".todoList");


todoinput.addEventListener("keypress",function(event){
  if(event.key=="Enter"){
      // console.log("enter hit by you");
      let content = event.target.value;
    if(content){
        let li  =  document.createElement("li");//creating tag
        li.classList.add("li");
        li.innerHTML = content;         //sets the Html of li
        // console.log(li);
        li.addEventListener("dblclick",function(e){
            e.target.remove();
          })

        todolist.append(li);
        
        //   event.target.value ="";         //Same work as done by line below
        todoinput.value = "";    
    }else{
           alert("Nothing entered");
    }
  }


});
