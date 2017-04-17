Template.dare.events({
		'click .claim-dare': function () {
			var dareId = this._id;

			if(confirm("Are you sure?")){


				   Dares.update({
                        _id: this._id
                    }, {
                        $push: {
                            daredTo: {
                                darer: Meteor.userId()
                            }
                        }
                    });
				FlashMessages.sendSuccess('Dare Claimed');
				return false;
			}
		}
	});
