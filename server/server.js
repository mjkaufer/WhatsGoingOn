var data = {};
data = JSON.parse(Assets.getText("credentials.json"));

twilioClient = Twilio(Acc_SID, Auth_token);



Meteor.methods({
	'sendCall':function(number){

		var auth = 
	}
})