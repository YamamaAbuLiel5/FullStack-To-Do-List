function addToList(){
    const inputText=document.querySelector(" .TextInput").value;
    if(inputText=="")
    {
        alert("Please Enter Your Task ?!")
    }
    else
    {
        const taskslist=document.createElement('li'); 
        taskslist.innerHTML=
        `
        <input type="checkbox" onclick="CheckBoxCilcked(this)" /> 
        <span>${inputText}</span>
        `;
        const List=document.querySelector("#tasks");
        List.appendChild(taskslist);
        document.querySelector(".TextInput").value = '';

    }

}

 function CheckBoxCilcked(checkbox) 
 {
    const taskElement = checkbox.parentElement;
    const txtTask=taskElement.querySelector( "span" );
    
    if (checkbox.checked==true){
        txtTask.style.textDecoration ='line-through';


 }
 else 
 {
    txtTask.style.textDecoration ='none';
 }
}

addToList();