var i = 0;

function timedCount() {
  var x = "Please fill the contact form and submit Details to know about the latest promotions.";
  i = i + 1;
  if(i % 2 == 0)
  {
	 x = null;
	   
  }
 
  postMessage(x);
 
  setTimeout("timedCount()",2000);
}

timedCount();