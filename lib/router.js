Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){

	this.route('mydares',{
		path:'/',
		template:'mydares'
	}),
		this.route('dares',{
		path:'/dares',
		template:'dares',
		data: function(){
			templateData = {
				departments: Departments.find(),

			};
			return templateData;
		}
	})


})