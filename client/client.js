Meteor.methods({
	'callback':function(message,worked){
		if(worked)//call went through without errors
			alert("Your call to " + message + " has been completed!");
		else
			alert("Call didn't go through - some error");
	}
});
window.onload = function(){
	document.getElementById('button').onclick = function(){
		var number = document.getElementById('number').value;
		alert("Sending call to " + number)
		Meteor.call('sendCall',number);
	}	
}
