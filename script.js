function openDuckDuckGo() {
    var searchTerm = encodeURIComponent(document.getElementById('search-input').value);
    var searchUrl = 'https://duckduckgo.com/?t=h_&q=' + searchTerm + '&ia=web';
    
    // DuckDuckGo'nun sitesine yönlendirme
    window.location.href = searchUrl;
}

function openPopup() {
    document.getElementById('customize-popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('customize-popup').style.display = 'none';
}

function setBackground() {
    var fileInput = document.getElementById('image-upload');
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.body.style.backgroundImage = 'url(' + e.target.result + ')';
        };
        reader.readAsDataURL(file);
    }

    closePopup();
}

function setBackground() {
    var fileInput = document.getElementById('image-upload');
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.body.style.backgroundImage = 'url(' + e.target.result + ')';
            
            // localStorage kullanarak resmi sakla
            localStorage.setItem('backgroundImage', e.target.result);
        };
        reader.readAsDataURL(file);
    }

    closePopup();
}

// Sayfa yüklendiğinde localStorage'da saklanan arka plan resmini kontrol et
window.onload = function() {
    var storedBackgroundImage = localStorage.getItem('backgroundImage');
    if (storedBackgroundImage) {
        document.body.style.backgroundImage = 'url(' + storedBackgroundImage + ')';
    }
};

function resetBackgroundColor() {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'black'; // Arka plan rengini siyah yap
    localStorage.removeItem('backgroundImage');
}


