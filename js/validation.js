/* =========================================================================
   Switch Theme Validation
   ========================================================================== */
// Check for saved user preference on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'negative') {
    document.querySelector('.toggle-checkbox').checked = true;
    document.documentElement.classList.add('negative'); // Ensures the class is present
}

// Save preference when user toggles
document.querySelector('.toggle-checkbox').addEventListener('change', (e) => {
    if (e.target.checked) {
        localStorage.setItem('theme', 'negative');
        document.documentElement.classList.add('negative');
    } else {
        localStorage.setItem('theme', 'nocturnal');
        document.documentElement.classList.remove('negative');
    }
});