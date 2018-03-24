$(document).ready(function() {
    $(".button").click(function() {
        $(".box").animate ({
            left: '350px',
        }, (2000));
        $(".box").animate ({
            height: '600px'
        }, (2000));
        $(".box").css ({
            'background-image': 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDaSp5KfJlqT7lFB9eLhTK0m_j02OKdOs7IkJvuI96m_LQR6K")' 
        }, (2000));
        $(".obey").delay(2000).fadeIn();
        $(".box").animate ({
            width: '700px',
        }, (4000));
        $(".obey").animate ({
            'marginTop' : '+=470px'
        }, (4000));
        // $(".obey").css ({
        //     'letter-spacing': '10px'
        // }, (2000));
    });
});