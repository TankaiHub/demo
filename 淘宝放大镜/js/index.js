var wrap = $('.wrapper');
var sImg = $('.showImg');
var mImg = $('.magImg');
var mView = $('.moveView');
var bView = $('.bgView');
var ul = $('ul');
var li = $('li');
var img = $('img');
var mul = 3;
init();
function init() {
    bindEvent();
    createMove();
}
function bindEvent() {
    getSrc(0);
    ul.on('click', 'li', function (e) {
        var index = $(this).index();
        console.log(index);
        getSrc(index);
    });
    sImg.on('mousemove', function (e) {
        move(e);
    }).on('mouseleave', function () {
        mView.hide();
        bView.hide();
    });
}

function getSrc(i) {
    var src = li.eq(i).find('img').attr('src');
    var img = '<img src="' + src + '">';
    mImg.empty().append(img);
    bView.empty().append(img).find('img').css({
        'width': 500 * mul + 'px',
        'height': 500 * mul + 'px'
    });
}


function createMove() {
    var w = 500 / mul;
    mView.css({
        'width': w + 'px',
        'height': w + 'px'
    });
}
function move(e) {
    var w = mView.width();
    var posX = e.clientX - wrap.offset().left - w / 2;
    var posY = e.clientY - wrap.offset().top - w / 2;
    posX = posX <= 0 ? 0 : posX;
    posY = posY <= 0 ? 0 : posY;
    posX = posX >= (500 - w) ? (500 - w) : posX;
    posY = posY >= (500 - w) ? (500 - w) : posY;
    mView.css({
        top: posY + 'px',
        left: posX + 'px',
        display: 'block'
    });
    bView.css({
        'display': 'block'
    }).find('img').css({
        'margin-top': -posY * mul + 'px',
        'margin-left': -posX * mul + 'px',
    });

}
