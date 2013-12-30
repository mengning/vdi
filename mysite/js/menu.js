//µØ≥ˆÕ¯“≥Ã·–—¿∏
var notification=function(args){
    alert(args)
}
function showJSON() {    
    var user =    
    {    
    "username":"andy",    
    "age":20,    
    "info": { "tel": "123456", "cellphone": "98765"},    
    "address":    
    [    
    {"city":"beijing","postcode":"222333"},    
    {"city":"newyork","postcode":"555666"}    
    ]    
    }    
    
    alert("Name:"+user.username+"  Age:"+user.age+"  Tel:"+user.info.cellphone+"  Addr:"+user.address[0].city);    
  //  alert(user.age);    
  //  alert(user.info.cellphone);    
  //  alert(user.address[0].city);    
  //  alert(user.address[0].postcode);    
}   
//var show=showJSON();

	