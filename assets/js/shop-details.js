/*chuyển ảnh ở product details img*/
document.addEventListener("DOMContentLoaded", function () {
    const thumbs = document.querySelectorAll(".thumb-list .thumb-item");
    thumbs.forEach(thumb => {
        thumb.addEventListener("click", function () {
            thumbs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            const targetId = this.getAttribute("data-target");
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                const parent = targetPane.parentElement;
                const siblings = parent.querySelectorAll(".tab-pane");
                siblings.forEach(pane => pane.classList.remove("active", "show"));
                targetPane.classList.add("active", "show");
            }
        });
    });
});

/*details cart*/
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


/*Nav tab*/
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".custom-nav-tabs .custom-nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            navLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
            const targetId = this.getAttribute("data-target");
            const targetPane = document.getElementById(targetId);
            
            if (targetPane) {
                const parent = targetPane.parentElement;
                const siblings = parent.querySelectorAll(".tab-pane");  
                siblings.forEach(pane => {
                    pane.classList.remove("active", "show");
                });
                targetPane.classList.add("active", "show");
            }
        });
    });
});