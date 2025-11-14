 const blurOverlay = document.getElementById("blur-overlay");
  const loginModal = document.getElementById("loginModal");
  const signupModal = document.getElementById("signupModal");
  const userIcon = document.getElementById("userIcon");
    const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.close-btn');
  const openSignupLink = document.getElementById("openSignup");
  const openLoginLink = document.getElementById("openLogin");

  // Function to open modal
  function openModal(modal) {
    blurOverlay.style.display = "block";
    modal.classList.add("show");
  }

  // Function to close modal
  function closeModals() {
    blurOverlay.style.display = "none";
    loginModal.classList.remove("show");
    signupModal.classList.remove("show");
  }

  // Open login modal when clicking user icon in navbar
userIcon.addEventListener("click", () => openModal(loginModal));


  // Switch to signup modal
  openSignupLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.classList.remove("show");
    openModal(signupModal);
  });

  // Switch back to login modal
  openLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    signupModal.classList.remove("show");
    openModal(loginModal);
  });

  // Close modals when clicking outside
  blurOverlay.addEventListener("click", closeModals);
    // Close modal when clicking the X
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Optional: close modal if user clicks outside of it
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
