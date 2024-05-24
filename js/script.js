function toggleMenu() {
    const menuLinks = document.getElementById('menu-links');
    if (menuLinks.classList.contains('show')) {
        menuLinks.classList.remove('show');
    } else {
        menuLinks.classList.add('show');
    }
}

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Payment processing is not yet implemented.');
});
