fetch('https://newsapi.org/v2/everything?q=apple&from=2022-09-21&to=2022-09-21&sortBy=popularity&apiKey=7163775b860f49ffa623434555eb5e5e').then((apidata)=> 
    { 
    // console.log(apidata); 
     return apidata.json(); 

    }).then((Appledata)=>{ 
      console.log(Appledata); 
      display(Appledata.articles);
 
    }) 
    .catch((error)=>{ 
     console.log(error); 

});

function display(data){
    for(var key in data){
        let maindiv=document.getElementById("maindiv")
        let div=document.createElement("div");
        div.setAttribute('class',"card");

        let divcardinfo=document.createElement("div")
        divcardinfo.setAttribute("class","card_info")
        

        let img=document.createElement("img");
        img.src=data[key].urlToImage;
        

        let span=document.createElement("span")
        span.appendChild(document.createTextNode(`Title: ${data[key].title}`))
        span.setAttribute("class","card_category");
        
        let linebreak=document.createElement("br")

        let heading=document.createElement("h3")
        heading.appendChild(document.createTextNode(`Authors: ${data[key].author}`))

        let mydate=new Date(data[key].publishedAt)

        let para=document.createElement("p")
        para.appendChild(document.createTextNode(`Published At: ${mydate.toLocaleDateString()}`))
       
        let link=document.createElement("a");
        link.setAttribute("href", data[key].url);
        link.setAttribute("target","_blank");
        let button=document.createElement("button");
        button.setAttribute("class","btn");
        let buttontext=document.createTextNode("Read More");

        
        button.appendChild(buttontext);
        link.appendChild(button);
        div.appendChild(img);
        div.appendChild(divcardinfo);
        divcardinfo.appendChild(heading);
        divcardinfo.appendChild(para);
        divcardinfo.appendChild(span);
        divcardinfo.appendChild(linebreak);
        divcardinfo.appendChild(link);


        maindiv.appendChild(div)
        // console.log(data[key].title)
    }
}
