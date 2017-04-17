Template.dare.events({
		'click .claim-dare': function () {
			if(confirm("Are you sure?")){
				var dareId = Router.current().params.id

				   Dares.update({
                        _id: dareId
                    }, {
                        $push: {
                            daredTo: {
                                daredTo: Meteor.userId()
                            }
                        }
                    });
				FlashMessages.sendSuccess('Dare Claimed');
				return false;
			}
		}
	});
