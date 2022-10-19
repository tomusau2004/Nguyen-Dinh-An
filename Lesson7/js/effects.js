$(function () {

        $('h2').hide().slideDown();
        var $li = $('li');
        $li.hide().each(function (index) {
            $(this).delay(700 * 700).fadeIn(700);
        });
            $li.on('click', function () {
                $(this).fadeOut(700);

            });
});
