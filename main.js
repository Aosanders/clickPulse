const clickEvents = [];
const runBtn = document.querySelector(".run-btn");

document.addEventListener("click", function(e){
    let clickObj = {
        xCord: e.clientX,
        yCord: e.clientY
    };
    clickEvents.push(clickObj);
});

runBtn.addEventListener("click", function(){
    let bubble = document.createElement("div");
    bubble.classList.add("bubbleElem");
    document.appendchild(bubble);
});