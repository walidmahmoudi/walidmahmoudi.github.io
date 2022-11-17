var imgs = ["nice.jpg","happy.png","carrot.jpg","friend.jpg","explosion.jpg"]
var En = ["nice","happy","carrot","friend","explosion"]
var sr = ["Lijepo","Srećan","Šargarepa","Prijatelju","Eksplozija"]
var cmpQ = 0
var cmpG = 0 
var cmpB = 0

document.addEventListener('keydown', function(event) {
if(event.key === 'Enter')
    changeImgs();
});

changeImgs = function() {
    var val = document.getElementById("inputID").value;
    document.getElementById("inputID").value="";
    if(val  == sr[cmpQ])
    {
    cmpG++ ; 
    
    } 
    else
    {
    cmpB++ ; 
    
    }
    
    cmpQ ++;
    document.getElementById("imgID").src = imgs[cmpQ];
    document.getElementById("labelID").innerHTML = En[cmpQ];
    document.getElementById("labelGood").innerHTML = cmpG+"/5";
    document.getElementById("labelBad").innerHTML = cmpB+"/5";
    if(cmpQ  >= imgs.length ) {
        cmpQ = 0;cmpG = 0;cmpB = 0;
 
        document.getElementById("imgID").src = imgs[cmpQ];
        document.getElementById("labelID").innerHTML = En[cmpQ];
        return;
    } 
  
  }