const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const focusTab = button.getAttribute('data-tab');
    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    // Add active class to the clicked button
    button.classList.add('active');
    document.getElementById(focusTab).classList.add('active');
  });
});