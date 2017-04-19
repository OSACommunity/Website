Template.createDare.events({
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
        Router.go('/dares');
		FlashMessages.sendSuccess('Dare created')
		return false;
	},
	 "change .tag-field": function(event) {
        var controlSelectionFields = ['addType', 'addMaterial', 'addLocation', 'addSize', 'removeType', 'removeMaterial', 'removeLocation', 'removeSize'];


        if (controlSelectionFields.indexOf(event.target.value) == -1)
            $('#description').tagsinput('add', $(event.target).val());

    },
});

