$(document).ready(function() {
    $("button").click(function() {
        $(".box").animate ({
            left: '700px',
        }, (2000));
        $(".box").animate ({
            height: '600px'
        }, (2000));
        
        $(".box").css ({
            'background-image': 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDaSp5KfJlqT7lFB9eLhTK0m_j02OKdOs7IkJvuI96m_LQR6K")' 
        }, 'slow');
        $(".obey").delay(3000).fadeIn();
    });
});