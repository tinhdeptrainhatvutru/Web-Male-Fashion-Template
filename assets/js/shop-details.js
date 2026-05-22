document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.product-details-option-size label').forEach(function(label) {
        label.addEventListener('click', function() {
            document.querySelectorAll('.product-details-option-size label').forEach(function(l) {
                l.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});