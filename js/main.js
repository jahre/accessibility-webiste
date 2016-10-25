$(document).ready(function(){
    var currentFlyoutGroup;
    //level 1 selection on focus
    $('.level1.flyoutMenu_mainItemLink, .level1.flyoutMenu_arrow').on('focus', function (e) {
        $('.level1.flyoutMenu_item').removeClass('is_selected');
        $(this).closest('.flyoutMenu_item').addClass('is_selected');
    });

    //selection and dropdown on hover
    $('.flyoutMenu_item').on('mouseover', function () {
        $(currentFlyoutGroup).addClass('is_hidden');
        $(currentFlyoutGroup).parents('.flyoutMenu_group').addClass('is_hidden');
        $('.level1.flyoutMenu_item').removeClass('is_selected');
        $(this).addClass('is_selected');
        $(this).children('.flyoutMenu_group').removeClass('is_hidden');
    });

    //contrariwise on mouseleave
    $('.flyoutMenu_item').on('mouseleave', function () {
        $(this).removeClass('is_selected');
        $(this).children('.flyoutMenu_group').addClass('is_hidden');
    });

    //keyboard navigation
    $('.flyoutMenu_arrow').on('keydown click', function (e) {
        if (event.keyCode == 13) {
            if ($(this).closest('.flyoutMenu_item').children('.flyoutMenu_group').hasClass('is_hidden')){
                $(this).closest('.flyoutMenu_item').siblings().find('.flyoutMenu_group').addClass('is_hidden');
                currentFlyoutGroup = $(this).closest('.flyoutMenu_item').children('.flyoutMenu_group');
                $(currentFlyoutGroup).removeClass('is_hidden');

                $('.flyoutMenu_item').removeClass('is_selected');
                $(this).parents('.flyoutMenu_item').addClass('is_selected');
            }else{
                $(this).closest('.flyoutMenu_item').find('.flyoutMenu_group').addClass('is_hidden');
            }  
        }
    });


    //tabs
    $('[role="tab"]').click(function(){
        $('[role="tab"]').attr('aria-selected', 'false');
        $(this).attr('aria-selected', 'true');
        var tabpanId = $(this).attr('aria-controls');
        var tabPanel = $('#' + tabpanId);
        $('[role=tabpanel]').attr('aria-hidden', 'true');
        tabPanel.attr('aria-hidden', 'false');
    });

    $('[role="tab"]').keydown(function(ev){
        if(ev.which == 13){
            $(this).click();
        }

    });

    $('[role="tab"]').keydown(function(ev){
        if(ev.which == 39){
            $(this).next().click().focus();
        } else if(ev.which == 37){
            $(this).prev().click().focus();
        } 

    });

});//end document.ready

