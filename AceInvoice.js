function addUser() 
{
    username = document.getElementById("username_input").value;
    localStorage.setItem("username" , username);
    window.location = "AceInvoice_room.html";
}