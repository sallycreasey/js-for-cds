function showHide() {
    var x = document.getElementById('x')
    var y = document.getElementById('toggle-button')
    if (x.style.display === 'none') {
        x.style.display = 'block'
        y.innerHTML = 'Click to make paragraph x disappear'
    } else {
        x.style.display = 'none'
        y.innerHTML = 'Click again to make paragraph x reappear'
    }
}
