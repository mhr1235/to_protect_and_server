/*
  
        _   _  ___       _____       _____  ___    ___      
/'\_/`\( ) ( )|  _`\    (  _  )     (___  )(  _`\ (  _`\    
|     || |_| || (_) )   `\  ,/'         | || (_) )| ( (_)   
| (_) ||  _  || ,  /     /'_`\/\     _  | ||  _ <'| |  _    
| | | || | | || |\ \    | (_> ,<`   ( )_| || (_) )| (_( )   
(_) (_)(_) (_)(_) (_)   `\___/\/'   `\___/'(____/'(____/'   
                                                            
                                                            
   __     __      __     __                                 
 /'__`\ /' _`\  /'__`\ /' _`\                               
(_)  ) )| ( ) |(_)  ) )| ( ) |                              
   /' / | | | |   /' / | | | |                              
 /' /( )| (_) | /' /( )| (_) |                              
(_____/'`\___/'(_____/'`\___/'                              
                                                            
                                                            
*/


// don't use new Array(3), just use []
var numImages = 21;

var images = [];

var click_counter = 0;

var random_test;





//var i, images = [];
// use push, don't manually assign the index
/*images.push("images/image_2.jpg");
images.push("images/image_3.jpg");
images.push("images/image_4.jpg");
images.push("images/image_5.jpg");
images.push("images/image_6.jpg");
images.push("images/image_7.jpg");
images.push("images/image_8.jpg");
images.push("images/image_9.jpg");
images.push("images/image_10.jpg");
images.push("images/image_11.jpg");
images.push("images/image_12.jpg");
images.push("images/image_13.jpg");
images.push("images/image_14.jpg");
images.push("images/image_15.jpg");
images.push("images/image_16.jpg");
images.push("images/image_17.jpg");
images.push("images/image_18.jpg");
images.push("images/image_19.jpg");
images.push("images/image_20.jpg");
images.push("images/image_21.jpg");*/

//just add more images to creeate a larger pool


for(let a=1; a<=numImages;a++){
    images.push("images/image_"+a+".jpg");
    //console.log(a);

}


images.sort(function ()
{
    return 0.5 - Math.random();
});



for (var i = 0; i < 9; i++){

document.getElementsByClassName('captcha-image')[i].innerHTML = "<img src='"+images[i]+"'>";
document.getElementsByClassName('captcha-image')[i].addEventListener("click",clicks);


}



 


function clicks(){


	if(!$(this).hasClass("active")){
      //alert("button was clicked");
      click_counter++;
//console.log(click_counter);

	}
	if($(this).hasClass("active")){
      //alert("button was clicked");
      click_counter--;
//console.log(click_counter);

	}
}

   document.getElementById('verify').onclick = function() {

random_test = Math.floor((Math.random() * 8)+ 1);
console.log(random_test);

if(click_counter == random_test){

window.location.href = 'p3.html';


}

if(click_counter == 0 || click_counter != random_test){
location.reload();
}
};


//console.log(counted);














 
