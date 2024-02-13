// uses markdownit
function loadMessage(md) {
  const message = document.querySelector("#message");

  fetch("message.txt")
    .then((response) => response.text())
    .then((data) => {
      message.innerHTML = md.render(data);
    })
    .catch((error) => {
      message.innerHTML = "An error occurred while fetching the message";
    });
}

document.addEventListener("DOMContentLoaded", function () {
  let tempdata = {
    did_open: false,
  };

  const heart = document.querySelector("#solid-heart");
  const heart_container = document.querySelector(".heart-container");

  const msg_container = document.querySelector("#message-container");

  const md = window.markdownit({ html: true });

  loadMessage(md);

  // Function to toggle the message container
  heart.addEventListener("click", function () {
    if (!tempdata.did_open) {
      // Open the message container
      msg_container.style.display = "block";
      heart_container.style.marginTop = "-1.5%";

      const auto_css_height = msg_container.scrollHeight + 0; // Calculate the height of the content
      msg_container.style.maxHeight = auto_css_height + "px";
      tempdata.did_open = true;
    } else {
      // Close the message container
      msg_container.style.maxHeight = "0"; // Reset max-height to close the message container
      tempdata.did_open = false;
    }
  });
});
