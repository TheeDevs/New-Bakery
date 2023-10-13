// Add this in your script.js
function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'flex' : 'none';
}




 // home
 
 // menu icons
 const menuIcon = document.getElementById("menu-icon");
 const menu = document.getElementById("menu");
 
 //menu API, pressing icon to view menu
 menuIcon.addEventListener("click", () => {
     menu.classList.toggle("active");
 });
 
 //menu API, closing menu
 window.addEventListener("resize", () => {
 if (window.innerWidth > 768) {
     menu.classList.remove("active");
     }
 });



 //orders


 
 document.getElementById("submitBtn").addEventListener("click", function () {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var Cnum = document.getElementById('Cnum').value;
    var email = document.getElementById('email').value;

    // Regular expression for a valid email format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Regular expression for a valid 10-digit cellphone number
    var phonePattern = /^\d{10}$/;

    // Check if the first name is empty
    if (fname === "") {
        alert("First Name must not be empty.");
        return; // Prevent further execution
    }

    // Check if the last name is empty
    if (lname === "") {
        alert("Last Name must not be empty.");
        return; // Prevent further execution
    }

    // Check if the cellphone number is empty or doesn't match the pattern
    if (Cnum === "" || !Cnum.match(phonePattern)) {
        document.getElementById('phoneValidationMessage').innerText = "Please enter a valid 10-digit cellphone number.";
        return; // Prevent further execution
    } else {
        document.getElementById('phoneValidationMessage').innerText = ""; // Clear validation message
    }

    // Check if the email is empty or doesn't match the pattern
    if (email === "" || !email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return; // Prevent further execution
    }

    // Check if at least one order is selected
    var order1 = document.getElementById('order1').checked;
    var order2 = document.getElementById('order2').checked;
    var order3 = document.getElementById('order3').checked;
    var order4 = document.getElementById('order4').checked;

    if (!order1 && !order2 && !order3 && !order4) {
        alert("Please select at least one item to order.");
        return; // Prevent further execution
    }

    // If all validations pass, allow the form to be submitted
    alert("Form submitted"); // Display a pop-up message
    document.getElementById("myForm").submit();
});
    
// const myForm = document.getElementById("myForm");
// const inpFile = document.getElementById("inpFile");

// myForm.addEventListener.getElementById("submit", e => {
//     e.preventDefault();

//     const endpoint = "upload.php";
//     const forData = new formData();

//     formData.apend("inpFile".inpFile.file[0]);

//     fetch(endpoint,{

//         method: "post",
//         body: formData
    
//     }).catch(console.error)
// })

function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (file) {
        const formData = new FormData();
        formData.append("file", file);

        fetch("upload.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            document.getElementById("status").textContent = result;
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
}



//our work slideshow

let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Increment index and reset if necessary
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Set the interval for the slideshow (adjust the time as needed)
    setTimeout(showSlides, 3000); // Change 3000 to the desired time in milliseconds (e.g., 5000 for 5 seconds)
}

        
        

// products

const image = document.getElementById('myImage');

image.addEventListener('click', function() {
    // Add your JavaScript code here
    // For example, you can open a new window, show an alert, etc.
    alert('Image clicked!');
});



//cookie

// Function to show the cookie card after 3 seconds
function showCookieCard() {
    var cookieCard = document.getElementById('cookieCard');
    cookieCard.style.display = 'block';
  }

  // Set a timeout to call the showCookieCard function after 3 seconds
  setTimeout(showCookieCard, 3000);





// Function to hide the cookie card when "Accept" is clicked
function acceptCookies() {
    var cookieCard = document.getElementById('cookieCard');
    cookieCard.style.opacity = '0';
    
  }


      function openModal() {
          document.getElementById('successModal').style.display = 'block';
          document.getElementById('overlay').style.display = 'block';
      }

      function closeModal() {
          document.getElementById('successModal').style.display = 'none';
          document.getElementById('overlay').style.display = 'none';
        // Clear all input fields in the form
    var form = document.querySelector('.form');
    form.reset();
        }

      document.addEventListener('DOMContentLoaded', function () {
          // Add event listener to the form
          document.querySelector('.form').addEventListener('submit', function (event) {
              // Prevent the default form submission
              event.preventDefault();
              // You can perform any additional actions here

              // Open the modal
              openModal();
          });
      });



      
  