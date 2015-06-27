Template.Home.helpers({
    feelings: function() {
		var feeling = Session.get("feed-feeling");
        return [{feeling : "Happy"},
                {feeling : "Sad"},
                {feeling : "Mad"}];
	}
});

Template.Home.events({
    'click .feeling-button': function (event) {
        console.log("You clicked " + event.currentTarget.innerText);
        Router.go('/stream/' + event.currentTarget.innerText);
    }
});

Template.Stream.helpers({
	elements: function() {
		var feeling = Session.get("feed-feeling");
        return [{content : "https://www.youtube.com/embed/O1KW3ZkLtuo", type: "video"}, {content : "ok", type: "text"}];
		//return Feelings.find()
	}
});

Template.element.helpers({
  isText: function(type){
    return type == "text"
  },
  isImage: function(type){
    return type == "image"
  },
  isVideo: function(type){
    return type == "video"
  }
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/create');
Router.route('/stream/:_feeling', function () {
    console.log("stream page routing...");
    Session.set("feed-feeling", this.params._feeling);
    this.render('Stream');
});