var data = {};
data = JSON.parse(Assets.getText("credentials.json"));
Acc_SID = data.sid;
Auth_token = data.authToken;
var phoneNumber = data.from;

twilioClient = Twilio(Acc_SID, Auth_token);



Meteor.methods({
	'sendCall':function(number){
		client.calls.create({
			url: "call.xml",
			to: number,
			from: phoneNumber
		}, function(err, call) {
			console.log(call.sid);
		});
		
	}
})