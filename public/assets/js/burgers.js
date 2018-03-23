$(function(){
	$(".change-devoured").on("click", function(event){
		var id = $(this).data("id");
		var newDevour = $(this).data("newdevour");

		var newDevourState = {
			devoured: true
		};

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newDevourState
		}).then(
			function(){
				console.log("changed devoured to", newDevour);
				location.reload();
			});
	});

	$("#br-btn").on("click", function(event){
		event.preventDefault();

		var newBurger = {
			name: $("#br").val().trim(),
			devoured: false
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		})then(
			function(){
				console.log("created new burger");
				location.reload();
			});
	});


});