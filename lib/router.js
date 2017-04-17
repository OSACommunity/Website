Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){

	this.route('mydares',{
		path:'/',
		template:'mydares',
		data: function(){
			templateData = {
				dares: Dares.find({daredTo:{darer: Meteor.userId()}})
			};
			return templateData;
		}
	});
	this.route('dares',{
		path:'/dares',
		template:'dares',
		data: function(){
			templateData = {
				dares: Dares.find(),

			};
			return templateData;
		}
	});
	this.route('dare', {
		path:'/dare/:_id',
		template: 'dare',
		data: function(){
			var currentDare = this.params._id;
			return Dares.findOne({_id:currentDare});
		}
	});
	this.route('mydare', {
		path:'/mydare/:_id',
		template: 'mydare',
		data: function(){
			var currentDare = this.params._id;
			return Dares.findOne({_id:currentDare});
		}
	});


})