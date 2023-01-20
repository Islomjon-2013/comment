let form = document.querySelector(`[data-form]`);
let myList = document.querySelector('[data-mylist]');
let input = document.querySelector(`[data-input]`);
let commentArr =[]
form.addEventListener(`submit`, (e) => {
e.preventDefault()
let id = Math.random()*100000
let comment = new Comment(id, input.value)
commentArr=[...commentArr,comment]
UI.displayData()
UI.clearInput()
UI.removeComment()
}  )

class UI{
    static displayData(){
        let displayData = commentArr.map((item) =>{

return `
<div class="myCard">
            <p>${item.comment}</p>
            <button class="btn btn-danger remove">Del</button>
          </div>`


        } )
myList.innerHTML=(displayData).join(" ")

    }
    static clearInput(){
input.value=""
    }
    static removeComment(){
        myList.addEventListener(`click`,(e) => {
            if(e.target.classList.contains(`remove`)){
               e.target.parentElement.remove();
            }
        })
    }
}




class Comment{
    constructor(id, comment){
        this.id = id;
        this.comment=comment;
    }
}


