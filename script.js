//your code here
function bootForm(){
	const firstName = document.getElementById("first-name-input");
	const lastName = document.getElementById("last-name-input");
    const email = document.getElementById("email-input");
	const college = document.getElementById("college-input");
	
	const rollNo = document.getElementById("roll-no-input");
	const checkBox = document.getElementById("conditions-checkbox");
     const submit = document.getElementById("end");
	
let	firstValue = firstName.value;
let	lastValue = lastName.value;
let	emailValue = email.value;
let	collegeValue = college.value;

let	rollValue = rollNo.value;
let	boxValue = checkBox.value;

          submit.addEventListener("submit",function(){


			  if(firstValue === "")
			  {
				document.getElementById("first-name-error").textContent="First Name Required!" ; 
			  }
			  else{
				  document.getElementById("first-name-error").textContent="" ; 
			  }

			    if(lastValue === "")
			  {
				document.getElementById("last-name-error").textContent="Last Name Required!" ; 
			  }
			  else{
				  document.getElementById("last-name-error").textContent="" ; 
			  }

			    if(emailValue === "")
			  {
				document.getElementById("email-error").textContent="Email Required!" ; 
			  }
			  else{
				  document.getElementById("email-error").textContent="" ; 
			  }

			    if(collegeValue === "")
			  {
				document.getElementById("college-error").textContent="Please provide a valid college" ; 
			  }
			  else{
				  document.getElementById("college-error").textContent="" ; 
			  }

			    if(let gradValue === "")
			  {
				document.getElementById("grad-error").textContent="Please select a valid Graduation year" ; 
			  }
			  else{
				  document.getElementById("grad-error").textContent="" ; 
			  }

			    if(rollValue === "")
			  {
				document.getElementById("roll-no-error").textContent="please provide a valid Roll No." ; 
			  }
			  else{
				  document.getElementById("roll-no-error").textContent="" ; 
			  }
			    if(boxValue === "")
			  {
				document.getElementById("checkbox-error").textContent="You must agree before submitting" ; 
			  }
			  else{
				  document.getElementById("checkbox-error").textContent="" ; 
			  }

			  bootform();
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  });









	

}