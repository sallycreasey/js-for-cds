function showHide() {
    var x = document.getElementById('x');
    var y = document.getElementById('toggle-button')
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.innerHtml = "Click again to make paragraph x reappear";
    } else {
        x.style.display = 'none';
        y.innerHtml = "Click to make paragraph x disappear";
    }
}
