const btnCon = document.querySelector('.container')
const btnMob_nav = document.querySelector('.mob_nav')
btnCon.addEventListener('click', myFunction)

function myFunction() {
    btnCon.classList.toggle("change");
    btnMob_nav.classList.toggle("vizible");
}





// GALLERY SIDE BUTTON

const slideImages = document.getElementsByClassName('my_slide');
const arBtn = document.querySelector('.ar_btn');
const deBtn = document.querySelector('.de_btn');
const galleryContainer =  document.querySelector('.gallary_container');
const closeBtn = document.querySelector('.close_btn');




const myImage1 = document.querySelector('.my_image1');
const myImage2 = document.querySelector('.my_image2');
const myImage3 = document.querySelector('.my_image3');
const myImage4 = document.querySelector('.my_image4');
const myImage5 = document.querySelector('.my_image5');
const myImage6 = document.querySelector('.my_image6');
const myImage7 = document.querySelector('.my_image7');
const myImage8 = document.querySelector('.my_image8');
const myImage9 = document.querySelector('.my_image9');
const myImage10 = document.querySelector('.my_image10');
const myImage11 = document.querySelector('.my_image11');
const myImage12 = document.querySelector('.my_image12');
const myImage13 = document.querySelector('.my_image13');
const myImage14 = document.querySelector('.my_image14');
const myImage15 = document.querySelector('.my_image15');
const myImage16 = document.querySelector('.my_image16');
const myImage17 = document.querySelector('.my_image17');
const myImage18 = document.querySelector('.my_image18');
const myImage19 = document.querySelector('.my_image19');
const myImage20 = document.querySelector('.my_image20');
const myImage21 = document.querySelector('.my_image21');
const myImage22 = document.querySelector('.my_image22');
const myImage23 = document.querySelector('.my_image23');
const myImage24 = document.querySelector('.my_image24');
const myImage25 = document.querySelector('.my_image25');
const myImage26 = document.querySelector('.my_image26');
const myImage27 = document.querySelector('.my_image27');
const myImage28 = document.querySelector('.my_image28');
const myImage29 = document.querySelector('.my_image29');
const myImage30 = document.querySelector('.my_image30');
const myImage31 = document.querySelector('.my_image31');
const myImage32 = document.querySelector('.my_image32');
const myImage33 = document.querySelector('.my_image33');
const myImage34 = document.querySelector('.my_image34');
const myImage35 = document.querySelector('.my_image35');
const myImage36 = document.querySelector('.my_image36');


let n = 0;
let b = 0;



function clickAr(){
    if ( n<=36 && n>35){
        n=0;
    }
    alaxeA(n);
    b = n-1;
    n = n+1;
    
}
    function alaxeA (m){
        slideImages[m].classList.add("orato");
        if (m===0){
            slideImages[35].classList.remove("orato");
        }else{
            slideImages[m-1].classList.remove("orato");
        }
    }
function clickDe(){
    if ( b===-1){
        b=35;
    }
    alaxeD(b);
    n = b+1;
    b = b-1;
}
    function alaxeD(d){
        slideImages[d].classList.add("orato");
        if (d===35){
            slideImages[0].classList.remove("orato");
        }else{
            slideImages[d+1].classList.remove("orato");
        }
}


function clickImageView(numPage){
    slideImages[numPage].classList.add('orato')
    n = numPage + 1;
    b = numPage - 1;
}
function closeGallery(){
 galleryContainer.classList.remove('active_container');
 for(i=0; i<36; i++){
     slideImages[i].classList.remove('orato')
 }
}

arBtn.addEventListener('click', clickAr);
deBtn.addEventListener('click', clickDe);
closeBtn.addEventListener('click', closeGallery);

myImage1.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(0);
})
myImage2.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(1);
})
myImage3.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(2);
})
myImage4.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(3);
})
myImage5.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(4);
})
myImage6.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(5);
})
myImage7.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(6);
})
myImage8.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(7);
})
myImage9.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(8);
})
myImage10.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(9);
})
myImage11.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(10);
})
myImage12.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(11);
})
myImage13.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(12);
})
myImage14.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(13);
})
myImage15.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(14);
})
myImage16.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(15);
})
myImage17.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(16);
})
myImage18.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(17);
})
myImage19.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(18);
})
myImage20.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(19);
})
myImage21.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(20);
})
myImage22.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(21);
})
myImage23.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(22);
})
myImage24.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(23);
})
myImage25.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(24);
})
myImage26.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(25);
})
myImage27.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(26);
})
myImage28.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(27);
})
myImage29.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(28);
})
myImage30.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(29);
})
myImage31.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(30);
})
myImage32.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(31);
})
myImage33.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(32);
})
myImage34.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(33);
})
myImage35.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(34);
})
myImage36.addEventListener('click', function clickImage(){
    galleryContainer.classList.add('active_container')
    clickImageView(35);
})
// END GALLERY SIDE BUTTON
