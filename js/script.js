$(function () {








    // Slider code start here

    $('.big_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        infinite: false,
        focusOnSelect: true,
        // asNavFor:'.small_slider'
    });
    $('.small_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        focusOnSelect: true,
        asNavFor:'.big_slider'
    });


    // genjam er slider start
    let bigslider = document.querySelector(".big_slider")
    doMyAction($(".big_slider").slick('slickCurrentSlide'));
    $(".big_slider").on('swipe', function (event, slick, direction) {
        doMyAction($(".big_slider").slick('slickCurrentSlide'));
    });
    $(".small_slider").on('click', function (event, slick, direction) {
        doMyAction($(".big_slider").slick('slickCurrentSlide'));
    });
    function doMyAction(currentSlick) {
        let slickcenter = document.querySelectorAll(".slider_img_up")
        let arr = Array.from(slickcenter)
        arr.map((item, index) => {
            if (currentSlick == arr.length - 1) {
                if (currentSlick == index) {
                 bigslider.firstElementChild.classList.add("pad")
                }
            } else {
                bigslider.firstElementChild.classList.remove("pad")

            }
        })
    }
    function getActiveSlickLength() {
        return $('.slick-active').length;
    }
    function getActiveSlickIndexList() {
        var indexes = [];
        $.each($('.slick-active'), function (key, value) {
            indexes[key] = $(value).data('slick-index');
        });
        return indexes;
    }
// genjam er slider end
});