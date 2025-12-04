window.onload = function() {
    var buttons = document.getElementsByClassName('btn');
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onmouseover = function() {
            this.style.transform = 'scale(1.1)';
        };
        
        buttons[i].onmouseout = function() {
            this.style.transform = 'scale(1)';
        };
    }
};