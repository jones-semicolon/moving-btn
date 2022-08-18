function mouseOver(){
    var arr = Array(50,0,-50);
      let elem = document.getElementById("no");
      let pos = elem.getBoundingClientRect();
        let top = Math.floor(Math.random() * (screen.height-100)) -1;
        let left = Math.floor(Math.random() * (screen.width-100)) -1;
        elem.style.top = top + "px";
        elem.style.left = left + "px";
      console.log("left: " + pos.left);
      console.log("top: " + pos.top);
}
