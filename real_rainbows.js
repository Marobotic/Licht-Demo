function changeBackground(color, textcolor, text) {
    $('body').css('background-color', color);
    console.log(color);
    $('#top_p').css('color', textcolor);
    $('#X').css('color', textcolor);
    $("#top_p").html(text);
}
var i = 0;
$(document).ready(function() {
    $("#Button").click(function() {
        //     changeBackground('#FFFFFF');

        i++;
        i < 10;
        $("#X").html('x ' +
            i);

        console.log(i);

        if (i == 1) {
            //red
            changeBackground('#F44336', '#000000', 'Red, the color of blood!');

        } else if (i == 2) {
            changeBackground('#FF9800', '#000000', 'Orange, Orangie, Orangy???');
        } else if (i == 3) {
            changeBackground('#FFEB3B', '#000000', 'AH MY EYES');
        } else if (i == 4) {
            changeBackground('#4CAF50', '#000000', 'Trees are green');
        } else if (i == 5) {
            changeBackground('#2196F3', '#000000', 'There is no color quite like blue!');
        } else if (i == 6) {
            changeBackground('#9C27B0', '#000000', 'POOORPLE AH YAS!');
        } else if (i == 7) {
            changeBackground('#E91E63', '#000000', 'Oh, its pink again...');
        } else if (i == 8) {
            changeBackground('#000000', '#FFFFFF', 'it went too dark didnt it');

            i = 0;

        } else if (i == 9) {

            changeBackground('#FFFFFF');
        }

    });
});
