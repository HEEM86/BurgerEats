//Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function(event) {
    console.log(event);
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        var newDevouredState = {
          devoured: newDevoured
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
          function() {
            console.log("changed devoured to", newDevoured);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
      $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log( "line 25 burger.js inout value= " + $("#ca").val())
        var newBurger = {
          burger_name: $("#ca").val().trim(),
          devoured: $("[burger_name=devoured]:checked").val().trim()
        };
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
      $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    });

// Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function () {
//     $(".change-devoured").on("click", function (event) {
//       var id = $(this).data("id");
//       var newDevoured = $(this).data("devoured");
//       console.log(newDevoured)
//       var newBurgers = {
//         devoured: newDevoured
//       };
//       // Send the PUT request.
//       $.ajax("/api/burgers/" + id, {
//         type: "PUT",
//         data: newBurgers
//       }).then(
//         function () {
//           console.log("changed sleep to", newBurgers);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
//     $(".create-form").on("submit", function (event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
//       var newBurger = {
//         burger_name: $("#ca").val().trim(),
//         devoured: 0
//       };
//       // Send the POST request.
//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function () {
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
//     $(".delete-burger").on("click", function (event) {
//       var id = $(this).data("id");
//       // Send the DELETE request.
//       $.ajax("/api/burgers/" + id, {
//         type: "DELETE"
//       }).then(
//         function () {
//           console.log("deleted burger", id);
//           // Reload the page to get the updated list
//           location.reload();
//         })
//     });
//   });