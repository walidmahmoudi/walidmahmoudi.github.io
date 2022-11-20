var imgs = ["nice.jpg","happy.PNG","carrot.jpg","friend.jpg","explosion.jpg","Fear.jpg","Soldier.jpg","realtivity.jpg","Speed-limit.jpg","Earth.jpg","book.jpg","cars.jpg"]
var En = ["Nice","Happy","Carrot","Friend","Explosion","Fear","Soldier","Relativity","Speed limit","Earth","Book","Car"]
var sr = ["lijepo","srećan","Šargarepa","prijatelju","eksplozija","strah","vojnik","relativnost","ograničenje brzine","zemjla","knjiga","auto"]
var cmpQ = 0
var cmpG = 0 
var cmpB = 0

document.addEventListener('keyboardpress', function(event) {
if(event.code === 'Enter')
    
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
    document.getElementById("labelGood").innerHTML = cmpG+"/12";
    document.getElementById("labelBad").innerHTML = cmpB+"/12";
    if(cmpQ  >= imgs.length ) {
        cmpQ = 0;cmpG = 0;cmpB = 0;
 
        document.getElementById("imgID").src = imgs[cmpQ];
        document.getElementById("labelID").innerHTML = En[cmpQ];
        return;
    } 
  
  }