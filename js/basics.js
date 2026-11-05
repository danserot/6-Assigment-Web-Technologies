
$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#change-id").on("click", function () {
    $("#id-example").text("The ID selector changed this text.");
  });

  $("#change-class").on("click", function () {
    $("#selector-demo .class-example").html(
      "The <em>class selector</em> changed this HTML.",
    );
  });

  $("#change-tag").on("click", function () {
    $("#selector-demo strong").css({ color: "#b54224", fontSize: "1.15rem" });
  });

  $("#reset-selectors").on("click", function () {
    $("#id-example").text("This paragraph has an ID.");
    $("#selector-demo .class-example")
      .first()
      .text("This paragraph has a class.");
    $("#selector-demo .class-example")
      .last()
      .text("This one has the same class.");
    $("#selector-demo strong").css({ color: "", fontSize: "" });
  });
});
