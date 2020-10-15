$(document).ready(function () {
    var scroll_pos = 0;
    $("#left-panel").scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 210) {
            $("#left-panel").css('background-color', '#1A1A1A');
        } else {
            $("#left-panel").css('background-color', 'red');
        }
        console.log(scroll_pos);
    });
});