let images=['hormuud.png','hormuud2.png','hormuud3.png','hormuud4.png']
let j=0;
let i = 0
time = 3000
let slide = document.querySelector("#img1")


function change (){

if (j==0)
      j=3
else if(j==1)
      j=j-1

else if (j==2)
      j=j-1
else if(j==3)
      j=j-1
else
      j=0



  slide.src = "images/" +images[j];





}

function changes(){

slide.src = "images/" +images[j];
  if(j==0)
  j=j+1
  else if(j==1)
  j=j+1
else if(j==2)
j=j+1
else
j=0





	setTimeout("changes()", time);


}
function change2(){

  slide.setAttribute('src','images/'+images[j])

  if(j==0)
  j=j+1
  else if(j==1)
  j=j+1
  else if(j==2)
  j=j+1
  else
  j=0




}
window.onload=changes;
