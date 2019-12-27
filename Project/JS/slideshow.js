		// JavaScript Document
		<!-- SLIDESHOW -->
		var t;
		var currentIndex=1;
		
		function next() {
			clearInterval(t);
			if(currentIndex<5) {
				currentIndex++;
				document.getElementById("slideimages").src = "images/" + currentIndex + ".jpg";
			} else {
				currentIndex=1;
				document.getElementById("slideimages").src = "images/" + currentIndex + ".jpg";
			}
			t=setInterval("next()", 3000);
		}
		
		function back() {
			clearInterval(t);
			if(currentIndex>1) {
				currentIndex--;
				document.getElementById("slideimages").src = "images/" + currentIndex + ".jpg";
			} else {
				currentIndex=5;
				document.getElementById("slideimages").src = "images/" + currentIndex + ".jpg";
			}
			t=setInterval("next()", 3000);
		}
		
		t=setInterval("next()", 2000);
		<!-- /////////////////////////////////////////////////////////////////////////////////////////////////// -->
		<!-- BACK TO TOP -->
		window.onscroll = function() {scrollFunction()};
		function scrollFunction() {
    		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        		document.getElementById("top").style.display = "block";
    		} else {
        		document.getElementById("top").style.display = "none";
    		}
		}
		
		function gototop() {
    		var y = window.scrollY;
			y = y - 200;
			window.scrollTo(0,y);
			
			if (y > 0) {
				t = setTimeout("gototop()",10);
			} else {
				clearTimeout(t);
			}
		}
		<!--///////////////////////////////////////////////////////////////////////////////////////////////////-->
		function validate() {
			var x = document.forms["myForm"]["fname"].value;
			var y = document.forms["myForm"]["subject"].value;
			if (x == "" || y == "") {
				window.alert("You haven't entered anything!!");
				return false;
			} else {
				window.alert("We will contact with you soon !!");
				return true;
			}
		}