function openSearchEngine() {
    var selectedEngine = document.getElementById('browser-select').value;
    var searchTerm = encodeURIComponent(document.getElementById('search-input').value);

    var searchUrls = {
        'duckduckgo': 'https://duckduckgo.com/?t=h_&q=' + searchTerm + '&ia=web',
        'google': 'https://www.google.com/search?q=' + searchTerm,
        'bing': 'https://www.bing.com/search?q=' + searchTerm,
        'yandex': 'https://yandex.com/search/?text=' + searchTerm
    };

    var searchUrl = searchUrls[selectedEngine] || searchUrls['duckduckgo'];

    // Open the selected search engine in a new tab
    window.open(searchUrl, '_blank');
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
