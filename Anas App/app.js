
const play = () =>{

    
    //frnt page target
    let fntpg = document.querySelector(".frnt-page");
    fntpg.setAttribute("class","hide")
     
    //for random number generate
   let ran = Math.floor(Math.random()*7);

   //array of names
    const imgobj = ["img1","img2","img3","img4","img5","img7","img8"]
    

    let a = document.querySelector(".container");


    //creating new div by dom
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("class","imgdiv")

    img.src =  `${imgobj[ran]}.jpg`;

    div.appendChild(img);
    a.appendChild(div);

    let btn = document.createElement("button");
    let btntxt = document.createTextNode("Next >>");

    //using addEvent listener
    btn.addEventListener("click",()=>{
        let tar = document.querySelector(".imgdiv");
        let ran = Math.floor(Math.random()*7);
        img.src =  `${imgobj[ran]}.jpg`;
        console.log(ran);
    })

    btn.setAttribute("class","nxtbtn")
    btn.appendChild(btntxt);
    div.appendChild(btn);



}

