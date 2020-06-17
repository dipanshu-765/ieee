let page=1;
function next(){
    if(page===1){
        e1=document.getElementById("Event1");
        e2=document.getElementById("Event2");
        e3=document.getElementById("Event3");
        e4=document.getElementById("Event4");
        e5=document.getElementById("Event5");
        e1.style.display='none';
        e4.style.display='inline-block';
        page=2;
    }
    else if(page===2){
        e2.style.display='none';
        e5.style.display='inline-block';
        page=3;
    }
    
}
function prev(){
    if(page===2){
        e1.style.display='inline-block';
        e2.style.display='inline-block';
        e3.style.display='inline-block';
        e4.style.display='none';
        e5.style.display='none';
        page=1;
    }
    else if(page===3){
        e2.style.display='inline-block';
        e3.style.display='inline-block';
        e4.style.display='inline-block';
        e1.style.display='none';
        e5.style.display='none';
        page=2;
    }
}