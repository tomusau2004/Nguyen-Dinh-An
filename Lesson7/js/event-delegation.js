$(function () {
    var listItem, itemStatus, eventType;

    $('ul').on(
       'click mouseover',
       ':not(#four)',
        {status: 'important'},
        function (e) {
           listItem = 'iTem: ' + e.target.textContent + '<br />';
           itemStatus = 'Status: ' + e.type;
           $('#notes').html(listItem + itemStatus + eventType);

        }
    );
});
