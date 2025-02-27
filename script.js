window.onload = function() {
    const savedText = localStorage.getItem('savedText');
    if(savedText) {
        document.getElementById('editor').value = savedText;
    }
}

// Save text to localStorage
function saveText() {
    const text = document.getElementById('editor').value;
    localStorage.setItem('savedText', text);
    alert('Text saved successfully!');
}

// Handle file upload
function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        document.getElementById('editor').value = e.target.result;
    }
    
    reader.readAsText(file);
}

// Download text
function downloadText() {
    const text = document.getElementById('editor').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.txt';
    a.click();
    window.URL.revokeObjectURL(url);
}

// Change font family
function changeFont(font) {
    document.getElementById('editor').style.fontFamily = font;
}

// Change text color
function changeColor(color) {
    document.getElementById('editor').style.color = color;
}