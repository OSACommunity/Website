Template.registerHelper('isCurrentRoute', function (route) {
  return Router.current().route.getName() === route;
});

Template.registerHelper('findUser',function(id) {
    return Meteor.users.find({ _id: id });
});
