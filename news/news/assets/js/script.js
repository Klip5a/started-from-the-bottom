$(document).ready(function(){
    $.get('http://data.fixer.io/api/latest',{'access_key': 'c2a0564bdb343f3dc9ae128a0171ca2d'}, 
        function(response){
            $('#rub').text(response.rates.RUB);
            $('#usd').text(response.rates.USD);
    });
    $('.mobile-tab').hide();
    $('#burg').on('click', function(){
        $(this).toggleClass('open');
        $('.mobile-tab').fadeToggle(200);
    });
});