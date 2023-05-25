let string ="";
let buttons =document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
     
	button.addEventListener("click",(e)=>{

		if (e.target.innerHTML=="=") {
			string=eval(string);
			 console.log(buttons);
           document.querySelector("input").value=string;
           console.log(string);
		}
		else if (e.target.innerHTML=="c") {
			string="";
			document.querySelector("input").value=string;
		}
		else{
		console.log(e.target.value);

		string=string+e.innerHTML;
		
	    document.querySelector("input").value=string;
	    console.log(string);
		}
		//document.querySelector('input').innerHTML=buttons;
	})


})