const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//duyệt ra 1 nodelist các nút
const btns = $$('.btn');

// click chuyển nút ấn và section
btns.forEach(function(btn,index){
    btn.onclick = function(){
        //chuyển nút ấn
        $('.btn.active-btn').classList.remove('active-btn'); //remove class active-btn
        this.classList.add('active-btn')//add class active btn

        //chuyển section
        var btnActiveId = this.dataset.id; //lấy id của nút đc ấn
        var sectionActive = document.getElementById(btnActiveId);
        $('.sec.active').classList.remove('active');// bỏ class active của section k đc ấn
        sectionActive.classList.add('active');//add class active cho section đc ấn

        //chuyển view đến vùng đc chọn
        const element = document.getElementById(btnActiveId);
        element.scrollIntoView();
    }
})

// progress bar
scroll = function(){
    document.onscroll = function(){
        const bar = $('.progress-bar'); 
        var barWidth = bar.clientWidth; //độ rộng progress bar
        // console.log(barWidth); 
        var scrollValue = (document.documentElement.scrollTop)/1196; // giá trị khi cuộn trang
        var newBarWidth = 1250*scrollValue ; //kích thước mới
        
        bar.style.width = newBarWidth + 'px';
    }
}
scroll();

//toggle menu
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}








