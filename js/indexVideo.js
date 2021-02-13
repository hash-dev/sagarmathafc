// global window scrolling
// togelling navbar
// scrolling fullBody
// When the user scrolls the page, execute myFunction 
window.onscroll = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  // caresoul social links
  const caresoulSocial = document.querySelector('.sg-social-section');
  // social icons show off when user reache 490
  if (winScroll > 490) {
    caresoulSocial.style.display = "none";
  } else {
    caresoulSocial.style.display = "block";
  }
  // navbar section
  const navbar = document.querySelector('.sg-header');
  // video section
  const caresoulVideo = document.querySelector('.sg-video-overlay');
  // for navbar section
  if (winScroll > 0) {
    navbar.style.top = 0;
    caresoulVideo.style.display = 'block';
  } else {
    navbar.style.top = '-100px';
    caresoulVideo.style.display = 'none';
  }

  // new section
  // video blog section
  // const vidoBlogOverlay = document.querySelector('.sg-video-blog-bg-overlay')

  // if(winScroll > 1260) {
  //   const overlayValue = winScroll;
  //   if (overlayValue < 2015 && overlayValue > 1260) {
  //     const percentage = overlayValue / 550;
  //     console.log(overlayValue);
  //     vidoBlogOverlay.style.transform = 'scale(' + percentage + ')';
  //   }else {
  //     vidoBlogOverlay.style.transform = 'scale(1)';
  //   }
  // }
}

// caresoul video section
// trigger video
const indexVideo = document.querySelector('.caresoul-video');
// trigger volume btn
const volumeBtn = document.querySelector('.sg-volume-btn');
// trigger volume icon
const volumeIcon = document.querySelector('.bi-volume-mute-fill');

// change volume and icon after click volume btn
volumeBtn.addEventListener('click', () => {
  indexVideo.muted = !indexVideo.muted;
  indexVideo.volume = 1.0;
  volumeIcon.classList.toggle("bi-volume-up-fill");
});

// new section
// trigger menu
const burgerMenu = document.querySelector('.sg-nav-menu');
// trigger menu list
const navMenuList = document.querySelector('.sg-nav-menu-list');
// body section
const indexBody = document.querySelector('body');

// trigger global node
const fullBody = document.querySelector('.bg-overlay');
// after clicking hamburger menu show menu list
burgerMenu.addEventListener('click', () => {
  if (navMenuList.style.display == 'block') {
    navMenuList.style.display = 'none';
    fullBody.style.display = 'none';
    indexBody.style.overflowY = "scroll";
  }
  else {
    navMenuList.style.display = 'block';
    fullBody.style.display = 'block';
    indexBody.style.overflowY = "hidden";
  }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = (e) => {
  if (e.target == fullBody) {
    navMenuList.style.display = 'none';
    fullBody.style.display = 'none';
    indexBody.style.overflowY = "scroll";
  }
}

// new section
// left side slider menu title
const leftMenu = document.querySelectorAll('.sg-nav-menu-title');
// left side slider menu links
const leftMenuLink = document.querySelectorAll('.sg-nav-menu-desc');

for (let i = 0; i < leftMenu.length; i++) {
  leftMenu[i].addEventListener('click', function () {
    let sibling = this.nextElementSibling;
    if (sibling.style.maxHeight) {
      sibling.style.maxHeight = null;
    } else {
      sibling.style.maxHeight = sibling.scrollHeight + 'px';
    }
  });
}

// // new section 
// // player section

// const playerBox = document.querySelector('.sg-team-player-section .swiper-slide-active');
// playerBox.style.width = '800px';












