
$('#dots1').click(
    function () {
        $('#options1').fadeToggle();
    }
);

$('#dots2').click(
    function () {
        $('#options2').fadeToggle();
    }
);

$('#dots3').click(
    function () {
        $('#options3').fadeToggle();
    }
);

$('#dots4').click(
    function () {
        $('#options4').fadeToggle();
    }
);

$('.mdl_r1_c1_1').mouseover(
    function () {
        $('.mdl_r1_c1_1').css('border', 'none');
        $(this).css('border-bottom', '0.1px solid black');
    }
)

$('.mdl_r1_c1_1').mouseout(
    function () {
        $('.mdl_r1_c1_1').css('border', 'none');
        $('.mdl_r1_c1_1_1').css('border-bottom', '0.1px solid black');
    }
)

$('#location_bar').val('Noida, India')
$('#location').focusin(
    function () {
        $('#location_bar').val('');
        $('.change_loc').attr('src', 'images/Vector copy 9.svg');
    }
)

$('#location').focusout(
    function () {
        $('.change_loc').attr('src', 'images/Vector copy 7.svg');
    }
)

$('.change_loc').click(
    function(){
        var img_loc = $('.change_loc').attr('src');
        
        $('#location_bar').val('');
        if(img_loc == 'images/Vector copy 7.svg'){
            $('.change_loc').attr('src', 'images/Vector copy 9.svg');
        }else{
            $('.change_loc').attr('src', 'images/Vector copy 7.svg');
        }
    }
)

$('.follow').click(
    function () {
        $(this).text('Followed');
        $(this).css(
            {
                'background-color' : 'black',
                'color' : 'white'
            }
        )
    }
);

$('.pass_img').click(
    function(){
        var show_pass_type = $('#show_pass').attr('type');
        if(show_pass_type == 'password'){
            $('#show_pass').attr('type','text');
        }else{
            $('#show_pass').attr('type','password');
        }
    }
)

$('.create_acc').click(
    function(){
        $('.acc_page').css('visibility','visible');
        $('body').css('overflow','hidden');
    }
);

$('.close_signup_page').click(
    function(){
        $('.acc_page').css('visibility','hidden');
        $('body').css('overflow','unset');
    }
);

$('#go_to_create').click(
    function(){
        $('#signup_2').removeClass('d-none');
        $('#signup_3').removeClass('d-none');
        $('#signup_4').addClass('d-none');
        $('#signup_5').addClass('d-none');
    }
);

$('#go_to_sign').click(
    function(){
        $('#signup_2').addClass('d-none');
        $('#signup_3').addClass('d-none');
        $('#signup_4').removeClass('d-none');
        $('#signup_5').removeClass('d-none');
    }
);

$('#join_grp').click(
    function(){
        $('#join_grp').addClass('d-none');
        $('#leave_grp').removeClass('d-none');
    }
);

$('#leave_grp').click(
    function(){
        $('#leave_grp').addClass('d-none');
        $('#join_grp').removeClass('d-none');
    }
);

$('#header_join_grp').click(
    function(){
        $('#header_join_grp').addClass('d-none');
        $('#header_leave_grp').removeClass('d-none');
    }
);

$('#header_leave_grp').click(
    function(){
        $('#header_leave_grp').addClass('d-none');
        $('#header_join_grp').removeClass('d-none');
    }
);

$('#post_mob').click(
    function(){
        $('.mob_acc_page').css('visibility','visible');
        $('body').css('overflow','hidden');
        $('.mob_signup_page').css('bottom','0%');
    }
);

$('#mob_join_grp').click(
    function(){
        $('.mob_acc_page').css('visibility','visible');
        $('body').css('overflow','hidden');
        $('.mob_signup_page').css('bottom','0%');
    }
);

$('#close_mob_sign_1').click(
    function(){
        $('.mob_signup_page').css('bottom','-100%');
        $('.mob_acc_page').css('visibility','hidden');
        $('body').css('overflow','unset');
        $('#header_leave_grp').addClass('d-none');
        $('#header_join_grp').removeClass('d-none');
    }
);

$('#close_mob_sign_2').click(
    function(){
        $('.mob_signup_page').css('bottom','-100%');
        $('.mob_acc_page').css('visibility','hidden');
        $('body').css('overflow','unset');
        $('#header_leave_grp').addClass('d-none');
        $('#header_join_grp').removeClass('d-none');
    }
);

$('#mob_go_to_create').click(
    function(){
        $('#mob_signup_2').removeClass('d-none');
        $('#mob_signup_3').removeClass('d-none');
        $('#mob_signup_4').addClass('d-none');
        $('#mob_signup_5').addClass('d-none');
    }
);

$('#mob_go_to_sign').click(
    function(){
        $('#mob_signup_2').addClass('d-none');
        $('#mob_signup_3').addClass('d-none');
        $('#mob_signup_4').removeClass('d-none');
        $('#mob_signup_5').removeClass('d-none');
    }
);