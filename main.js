

    const clickEvents = [];

    document.addEventListener("click", function(e){
        let clickObj = {
            xCord: e.clientX,
            yCord: e.clientY
        };
        clickEvents.push(clickObj);
            //console.log(runBtn);
            console.log(clickObj.xCord);
    });

document.addEventListener("DOMcontentLoaded",function(){
    const runBtn = document.querySelector(".run-btn");

    runBtn.addEventListener("click", function(){
        let bubble = document.createElement("div");
        bubble.classList.add("bubbleElem");
        document.appendchild(bubble);
    });
});
