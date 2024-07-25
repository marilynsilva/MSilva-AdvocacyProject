
//Dark-Mode//
document.addEventListener('DOMContentLoaded', function() {
  const themeButton = document.getElementById('theme-button');

  themeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Save user's preference in localStorage
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
  });

  // Check user's preference from localStorage on page load
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});
// Declare count variable globally
let count = 3;
//Form Validation//
document.addEventListener("DOMContentLoaded", function() {
  let count = 3;

  // Event listener for form submission
  document.getElementById("sign-petition").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Get user input values
    const name = document.getElementById("name").value;
    const hometown = document.getElementById("hometown").value;
    const email = document.getElementById("email").value;

    // Reset previous error states
    document.getElementById("name").classList.remove('error');
    document.getElementById("hometown").classList.remove('error');
    document.getElementById("email").classList.remove('error');

    // Check if email contains ".com" and name and hometown have at least 2 characters
    if (email.includes(".com") && name.length >= 2 && hometown.length >= 2) {
      // Create a new paragraph element for the signature
      const newSignature = document.createElement("p");
      newSignature.textContent = `🖊️ ${name} from ${hometown} supports this.`;

      // Append the new signature to the signatures section
      const signaturesSection = document.querySelector(".signatures");
      signaturesSection.appendChild(newSignature);

      // Increment the count and update it on the page
      count++;
      document.getElementById("signature-count").textContent = count;

      // Clear the form fields after valid submission
      document.getElementById("name").value = "";
      document.getElementById("hometown").value = "";
      document.getElementById("email").value = "";
    } else {
      // If the input is invalid, show an error by highlighting the fields in red
      if (name.length < 2) {
        document.getElementById("name").classList.add('error');
      }
      if (hometown.length < 2) {
        document.getElementById("hometown").classList.add('error');
      }
      if (!email.includes(".com")) {
        document.getElementById("email").classList.add('error');
      }
    }
  });
});
// Set the initial signature count when the page loads
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("signature-count").textContent = count;
});
// Sign Now > Trigger Modal
$(document).ready(function() {
  // When the "Sign Now" button is clicked
  $("#sign-now-button").click(function() {
    // Get input values
    var name = $("#name").val();
    var hometown = $("#hometown").val();
    var email = $("#email").val();

    // Check if inputs are filled and email includes ".com"
    if (name && hometown && email && email.includes("@") && email.includes(".com")) {
      // Set modal content dynamically
      $("#modalName").text(name);
      $("#modalNameDisplay").text(name);
      $("#modalHometownDisplay").text(hometown);

      // Trigger the modal using Bootstrap
      $("#staticBackdrop").modal("show");
    } else {
      // If inputs are not filled or email is invalid, show an alert
      alert("Please fill in all the required fields and provide a valid email.");
    }
  });

  // Close modal when the close button inside the modal is clicked
  $("#closeModalBtn").click(function() {
    $("#staticBackdrop").modal("hide");
  });
});


//Animation
document.addEventListener('DOMContentLoaded', function () {
  let animation = {
    revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease',
  };

  // Step 1: Select every element with the class revealable
  let revealableContainers = document.querySelectorAll('.revealable');

  // Step 2: Create a function called reveal
  function reveal() {
    // Get the height of the window
    let windowHeight = window.innerHeight;

    // Loop through each revealableContainer
    for (let i = 0; i < revealableContainers.length; i++) {
      // Get the top position of the revealableContainer
      let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

      // Check if the revealableContainer should be loaded in
      if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
        // Step 3: Add the active class to the revealableContainer's classlist
        revealableContainers[i].classList.add('active');
      } else {
        // Step 4: Remove the active class from the revealableContainer's classlist
        revealableContainers[i].classList.remove('active');
      }
    }
  }

  // Step 5: Add reveal as an event listener to window for the 'scroll' event
  window.addEventListener('scroll', reveal);

  // Step 6: Initial check on page load
  reveal();

  // Reduce Motion Button
  const reduceMotionButton = document.getElementById('reduceMotionButton');
  reduceMotionButton.addEventListener('click', reduceMotion);

  function reduceMotion() {
    console.log('Reduced motion activated!'); // Add this line for testing

    const reducedAnimation = {
      revealDistance: 50,
      transitionDelay: '0.5s',
      transitionDuration: '1s',
      transitionTimingFunction: 'linear',
    };

    Object.assign(animation, reducedAnimation);

    const revealableContainers = document.querySelectorAll('.revealable');
    for (let i = 0; i < revealableContainers.length; i++) {
      revealableContainers[i].style.transitionDelay = animation.transitionDelay;
      revealableContainers[i].style.transitionDuration = animation.transitionDuration;
      revealableContainers[i].style.transitionTimingFunction = animation.transitionTimingFunction;
    }
  }
});

//Animate Object 
let scaleFactor = 1;
const modalImage = document.getElementById('modal-image');

// Create the scaleImage function
function scaleImage() {
  // Toggle the scaleFactor between 1 and 0.8
  scaleFactor = scaleFactor === 1 ? 0.8 : 1;

  // Apply the scaleFactor to the image
  modalImage.style.transform = `scale(${scaleFactor})`;
}

// ToggleModal
function toggleModal(person) {
    const modal = document.getElementById('thanks-modal');
    const modalContent = document.getElementById('thanks-modal-content');
    const modalImage = document.getElementById('modal-image');

    modal.style.display = 'flex';
    modalContent.textContent = `Thank you so much ${person.name}! ${person.hometown} represent!`;

    let intervalId = setInterval(scaleImage, 500);

    setTimeout(function () {
        console.log('Hiding modal');
        modal.style.display = 'none';
        clearInterval(intervalId);
    }, 4000);
}


document.addEventListener('DOMContentLoaded', function () {
  const videoElement = document.getElementById('video1');

  // Add event listener for the 'play' event
  videoElement.addEventListener('play', function () {
    document.querySelector('.play-button').classList.add('playing');
  });

  // Add event listener for the 'pause' event
  videoElement.addEventListener('pause', function () {
    document.querySelector('.play-button').classList.remove('playing');
  });
});

function togglePlayPause() {
  const videoElement = document.getElementById('video1');

  // If the video is paused, play it. If it's playing, pause it.
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
}