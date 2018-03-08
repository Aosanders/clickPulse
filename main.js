document.addEventListener("DOMContentLoaded", function(){


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
        clickEvents.forEach(function(clickEl){
            setTimeout(function() {console.log("hello");}, 1000);
            //setTimeout(function() {console.log(clickEl);}, 10000);
            //setTimeout(function() {createBubble(clickEl);}, 1000);
        });
    });

    function createBubble(e){
        let bubble = document.createElement("div");
        bubble.classList.add("bubbleElem");
        bubble.style.top = `${e.yCord}` + "px";
        bubble.style.left = `${e.xCord}` + "px";
        document.body.appendChild(bubble);
        bubble.style.opacity = "1";
    }


});
