//smooth scroll
var posY = 0;
var jarak =  20;

function smoothScroll(id){
  var target = document.getElementById(id).offsetTop; //jarak antara atas dan divnya

  var scrollAnimate = setTimeout(function(){
                                    smoothScroll(id);
                                  }, 5 );//fungsi, waktu

posY = posY + jarak;

//berhenti pada bagian tertentu
  if(posY >= target){
    clearTimeout(scrollAnimate);
    posY = 0;
  }else {
    window.scroll(0, posY) //x dan y
  }


  return false;
}

//fungsi untuk validasi formula
function validasi(form){
  var lolos     = true;
  var errorText ='';

  for(i=0;i<3; i++){
    if(form[i].value.trim().length<=0){

      switch (i) {
        case 0 : errorText = 'Nama'; break;
        case 1 : errorText = 'Email'; break;
        case 2 : errorText = 'Pesan'; break;
        default:
      }

      if(form[i].nextElementSibling.className != 'error'){
        form[i].style.borderColor ='red';
        form[i].insertAdjacentHTML('afterend', "<div class='error'>" + errorText + " tidak boleh kosong</div>");
      }
        lolos = false;

    }else{
        //sebelumnya sudah ada error, hapus error
        if (form[i].nextElementSibling.className == 'error') {
          form[i].style.borderColor = '#0074b9';
          form[i].nextElementSibling.remove();
        }
      }
    }//end for
    return lolos;
  }

  //fungsi untuk galery gambar

  var target_gambar = document.getElementById('target_gambar');
  var array_gambar = document.getElementById('karya_lain').children;
  var no_sekarang = 0;

  function ganti_gambar(gambar){
    target_gambar.src = gambar.getAttribute('src');
    no_sekarang = gambar.className;
  }

  function ganti_sebelum(){
    no_sekarang = no_sekarang - 1;
    if(no_sekarang < 0 ) no_sekarang = 2;
    target_gambar.src = array_gambar[no_sekarang].getAttribute('src');
  }

  function ganti_berikut(){
    no_sekarang = no_sekarang + 1;
    if(no_sekarang > 2) no_sekarang = 0;
    target_gambar.src = array_gambar[no_sekarang].getAttribute('src');
  }

  //-----------nav RESPONSIVE--------

  function toggleMenu(){
    var menu = document.getElementById('menu_3');
    menu.classList.toggle('menu-open');
  }
