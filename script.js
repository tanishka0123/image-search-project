const accesskey="4C2iBbnkvaMRWElGit4wWNmRJYuv1E-f0l5XSfAuA9I";

const form1= document.querySelector("form");
const input1= document.getElementById("search");
const result1= document.querySelector(".results");
const show1= document.getElementById("show");

let inputdata= "";
let page=1;

async function searchimages(){
     inputdata= input1.value;
     const url= `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;
     const response=await fetch(url);
     const data= await response.json();

     const results= data.results

     if(page===1){
        result1.innerHTML="";
     }

     results.map((result)=>{
        const imagewrapper= document.createElement("div")
        imagewrapper.classList.add("result")
        const image= document.createElement('img')
        image.src= result.urls.small
        image.alt= result.alt_description 
        const imagelink=document.createElement("a")
        imagelink.href= result.links.html
        imagelink.target= "_blank"
        imagelink.textContent= result.alt_description

       imagewrapper.appendChild(image)
       imagewrapper.appendChild(imagelink)
       result1.appendChild(imagewrapper)

     });
    page++; 
    if(page>1){
        show1.style.display="block"
    }
}

form1.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1;
    searchimages()
})


show1.addEventListener("click",()=>{
   
    searchimages()
})
