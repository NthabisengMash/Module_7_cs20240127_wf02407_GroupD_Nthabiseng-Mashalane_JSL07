document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName');

      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput.value;

      if (studentName.trim() === '' || personalMessage.trim() === '' || courseName.trim() === '') {
          alert('Please fill in all fields');
          return;
      }

      // Generate certificate content with block elements
      certificateContent.innerHTML = `
          <div class="certificate-section">
              <h1>Certificate of Achievement</h1>
              <p>This is to certify that</p>
              <h3><strong>${studentName}</strong></h3>
              <p>has almost completed the</p>
              <h3><strong>${courseName}</strong></h3>
              <p>${personalMessage}🏅</p>
              <img src="/logo.png" alt="Logo" class="certificate-logo">
              <p>I am thee greatest 😸</p>
          </div>
      `;

      // Display the modal
      modal.style.display = 'block';

      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      courseNameInput.value = '';
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  });

  // Close the modal if the user clicks outside the modal content
  window.addEventListener('click', function (e) {
      if (e.target == modal) {
          modal.style.display = 'none';
      }
  });
});
