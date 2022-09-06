
//******************************************XHR*****************************************************//
// var httprequest=new XMLHttpRequest()
// httprequest.open('GET','https://breakingbadapi.com/api/episodes')
// httprequest.send()
// var allEpisodes=[]
// httprequest.addEventListener('readystatechange',function(){
//     if(httprequest.readyState==4)
//     {
//         allEpisodes=JSON.parse(httprequest.response)
//     }

// })


//******************************************Fetch*****************************************************//
var allEpisodes=[]
async function getData()
{
    let data=await fetch('https://breakingbadapi.com/api/episodes') 
    let convert=await data.json()
    allEpisodes=convert
}


//******************************************Display Season Function*****************************************************//
function displaySeason(){
    box2=``
    for(let j=0;j<allEpisodes.length;j++)
    {
        if(allEpisodes[j].season==number)
        {
            box2+=`
            <div class="col-md-4 mt-5">
              <div id="bgcard" class="episode card p-3">
                <h3>Title is:-${allEpisodes[j].title}</h3>
                <h5>Season Number:-${allEpisodes[j].season}</h5>
                <h5>Episode Number:-${allEpisodes[j].episode}</h5>
                <p>Characters are:-${allEpisodes[j].characters}</p>
            </div>
           </div>
            `
            console.log(allEpisodes[j])
     
        }
        document.getElementById('certien').innerHTML=box2
    }
}


//******************************************Search Function*****************************************************//
function search(input)
{
   var box3=``
  for(var i=0;i<allEpisodes.length;i++)
  {
   all=allEpisodes[i]
   for(const [key,value] of Object.entries(all))
   {
    if(value==input)
    {
        box3+=`
        <div class="col-md-4 mt-5">
          <div id="bgcard" class="episode card p-3">
            <h3>Title is:-${allEpisodes[i].title}</h3>
            <h5>Season Number:-${allEpisodes[i].season}</h5>
            <h5>Episode Number:-${allEpisodes[i].episode}</h5>
            <p>Characters are:-${allEpisodes[i].characters}</p>
        </div>
       </div>
        `
    break
    }
   } 
}
  console.log(box3)
  document.getElementById('certien').innerHTML=box3
}



//******************************************Display Function*****************************************************//
function display(){
    var box=``
    for(var i=0;i<allEpisodes.length;i++)
    {
        box+=`
        <div class="col-md-4 mt-5">
            <div id="bgcard" class="episode card p-3">
                <h3>Title is:-${allEpisodes[i].title}</h3>
                <h5>Season Number:-${allEpisodes[i].season}</h5>
                <h5>Episode Number:-${allEpisodes[i].episode}</h5>
                <p>Characters are:-${allEpisodes[i].characters}</p>
            </div>
        </div>
        `
    }
    document.getElementById('certien').innerHTML=box
}

getData()


//******************************************LightMode Function*****************************************************//
function changetolight()
{
   console.log(document.getElementById('bgcard'))
   document.getElementById('body').style.backgroundColor="rgb(200,200,200)"
   document.getElementById('body').style.backgroundImage="linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(img/il_fullxfull.1352719089_ofrh.webp)"
   document.getElementById('body').style.backgroundAttachment="fixed"
   document.getElementById('body').style.backgroundPositionX="center"
   document.getElementById('body').style.backgroundPositionY="center"
   document.getElementById('body').style.backgroundRepeat="no-repeat"
   document.getElementById('body').style.backgroundSize="20% 35%"
   document.getElementById('mode').style.color="rgb(85, 101, 209)"
   document.getElementById('modebtn').style.color="black"
   document.getElementById('modebtn1').style.border="2px solid black"
   document.getElementById('modebtn1').style.color="black"
   document.getElementById('header').style.color="rgb(85, 101, 209)"
   document.getElementById('search').style.backgroundColor="white"
   document.getElementById('menu').style.backgroundColor="transparent"
   document.getElementById('menu').style.color="black"
   document.getElementById('seasonbtn').style.color="rgb(44, 58, 152)"
   document.getElementById('seasonbtn').style.border="2px solid black"
   document.getElementById('seasonbtn').style.backgroundColor="transparent"
   document.getElementById('drop').style.backgroundColor="white"
   document.getElementById('dropdown-item1').style.color="black"
   document.getElementById('dropdown-item2').style.color="black"
   document.getElementById('dropdown-item3').style.color="black"
   document.getElementById('dropdown-item4').style.color="black"
   document.getElementById('dropdown-item5').style.color="black"
   var r = document.querySelector(':root');
   r.style.setProperty('--light-bg', 'rgb(233, 231, 231)');
   r.style.setProperty('--light-color','black')
   r.style.setProperty('--button-hover','rgba(116, 115, 115,0.5)')
   r.style.setProperty('--dropdown-hover','rgb(85, 101, 209)')
   
}






