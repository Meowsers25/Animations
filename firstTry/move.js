$(document).ready(function() {
    $("button").click(function() {
        $(".box").animate ({
            left: '700px',
        }, 'slow');
        $(".box").animate ({
            height: '600px'
        });
        $(".box").css ({
            'background': 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDaSp5KfJlqT7lFB9eLhTK0m_j02OKdOs7IkJvuI96m_LQR6K")' 
        }, 'slow');
        $(".obey").delay(2000).fadeIn();
    });
});