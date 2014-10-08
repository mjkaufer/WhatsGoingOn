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
		to: "+14155551212",
		from: "+14158675309"
	}, function(err, call) {
		process.stdout.write(call.sid);
	});
		
	}
})