
$(function () {
    $(".change-devoured").on("click", function (event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("devoured");
      console.log(newDevoured)
      var newBurgers = {
        devoured: newDevoured
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgers
      }).then(
        function () {
          console.log("changed sleep to", newBurgers);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0
      };
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(".delete-burger").on("click", function (event) {
      var id = $(this).data("id");
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        })
    });
  });