

function nightMode(){
    let paragraph = document.getElementsByClassName('card');
    if(document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "rgb(20, 21, 27)";
        document.body.style.color = "#ccc";
        paragraph.style.color = "#ccc";
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#333";
        
    }
    //document.body.style.backgroundColor = "red";
    
}