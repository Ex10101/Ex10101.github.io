var mainImage = document.getElementById('main-image');

document.addEventListener('mousemove', function(e) {
    var rect = mainImage.getBoundingClientRect();
    var x = e.clientX - rect.left - rect.width / 2;
    var y = e.clientY - rect.top - rect.height / 2;
    
    mainImage.style.transform = 'translate(' + -x * 0.01 + 'px, ' + -y * 0.01 + 'px)';
});
