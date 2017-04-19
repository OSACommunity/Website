Template.dares.events({
	'submit .open-dare-form': function (event) {
		var name = event.target.name.value;

		var difficulty = event.target.difficulty.value;
		var gender = event.target.gender.value;
		var message = event.target.message.value;
		var status = 'new';

		Dares.insert({
			 name: name,

			 gender: gender,
			 difficulty: difficulty,
			 message: message,
			 status: status,
			 user: Meteor.userId(),
			 createdAt: new Date()

		});

		$('#openDareModal').modal('hide');
		FlashMessages.sendSuccess('Dare created')
		return false;
	},
		'click .close-ticket': function () {
			if(confirm("Are you sure?")){
				Tickets.remove(this._id);
				FlashMessages.sendSuccess('Dare Closed');
				return false;
			}
		}
	});
