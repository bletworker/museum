let headerSearch = document.querySelector('.header_inner-right .fa-search');
let headerInput = document.querySelector('.search_input');
let headerInputClose = document.querySelector('.search_input span');
let secondLinks = document.querySelectorAll('.menu_second-link>a');
let mobMenuLinks = document.querySelectorAll('.nav_mobile-content>ul>li>a');
let navMobileContent = document.querySelector('.nav_mobile-content');
let mobMenudBack = document.querySelector('.menu_close-wrapper span');
let menu = document.querySelector('.menu');
let menuThirds = document.querySelectorAll('.menu_third');
let windowWrapper = document.querySelector('.window_wrapper');
let navMobile = document.querySelector('.nav_mobile');
let menuClose = document.querySelector('.menu_close');
let desktopLinks = document.querySelectorAll('.nav ul li');
let body = document.querySelector('body');
let header = document.querySelector('.header');
let thirdLinks = document.querySelectorAll('.menu_third ul li a');
let menuSeconds = document.querySelectorAll('.menu_second');
let headerBottom = document.querySelector('.header_bottom');
let headerBottomInner = document.querySelector('.header_bottom-inner');
let mobMenuSeconds = document.querySelectorAll('.mob_menu-second');
let mobSecondLinks = document.querySelectorAll('.mob_menu-second-link-wrapper>li>a');
let mobThirdLinks = document.querySelectorAll('.mob_menu-third ul li a');


// //////////////////////////////////////////////////////////////
window.onscroll = () => {
    if (pageYOffset > 80) {
        header.classList.add('fixed');
        headerBottomInner.classList.add('container-lg');
        header.style.opacity = '1';
        headerBottom.classList.add('fixed');
        Array.from(menuSeconds).forEach(menuSecond => {
            menuSecond.classList.add('fixed');
        })
        menuThirds.forEach(menuThird => {
            menuThird.classList.add('fixed')
        })
    } else {
        header.classList.remove('fixed')
        headerBottomInner.classList.remove('container-lg');
        header.style.opacity = 'background .7';
        headerBottom.classList.remove('fixed');
        menuSeconds.forEach(menuSecond => {
            menuSecond.classList.remove('fixed');
        })
        menuThirds.forEach(menuThird => {
            menuThird.classList.remove('fixed')
        })
    }
}
// ////////////////////////////////////////////////////////////////
headerSearch.addEventListener('click', () => {
    headerInput.classList.toggle('active')
})
headerInput.addEventListener('mouseleave', () => {
    headerInput.classList.remove('active')
})
headerInputClose.addEventListener('click', () => {
    headerInput.classList.remove('active')
})
// ////////////////////////////////////////////////////////////////
secondLinks.forEach(secondLink => {
    secondLink.addEventListener('mouseover', () => {
        const currentlyActiveMenuThird = document.querySelector('.menu_third.active')
        if (currentlyActiveMenuThird && currentlyActiveMenuThird !== secondLink) {
            currentlyActiveMenuThird.classList.remove('active')
        }
        secondLink.nextElementSibling.classList.add('active')
    })
})
Array.from(menuThirds).forEach(menu => {
    menu.addEventListener('mouseleave', removeActiveClass)
})
function removeActiveClass() {
    this.classList.remove('active')
}
// ////////////////////////////////////////////////////
mobMenuLinks.forEach(mobMenuLink => {
    mobMenuLink.addEventListener('click', () => {
        navMobileContent.classList.add('half_right');
        mobMenudBack.classList.add('active')
        mobMenuLink.nextElementSibling.classList.add('active')
    })
})
// /////////////////////////////////////////////////////
mobMenudBack.addEventListener('click', () => {
    const navMobContentFullRight = document.querySelector('.nav_mobile-content.half_right.full_right');
    if (navMobContentFullRight) {
        navMobContentFullRight.classList.remove('full_right')
        const mobMenuThirdActive = document.querySelector('.mob_menu-third.active')
        mobMenuThirdActive.classList.remove('active')
    } else {
        navMobileContent.classList.remove('half_right')
        mobMenudBack.classList.remove('active')
        const mobMenuSecondActive = document.querySelector('.mob_menu-second.active');
        mobMenuSecondActive.classList.remove('active')

    }
})
// //////////////////////////////////////////////////
menu.addEventListener('click', () => {
    navMobile.classList.add('active');
    windowWrapper.style.display = 'block';
    body.style.overflow = 'hidden';
})
menuClose.addEventListener('click', () => {
    navMobile.classList.remove('active');
    windowWrapper.style.display = 'none';
    body.style.overflow = 'visible';
    const navMobContentFullRight = document.querySelector('.nav_mobile-content.half_right.full_right');
    const navMobContentHalfRight = document.querySelector('.nav_mobile-content.half_right');
    setTimeout(function () {
        if (navMobContentFullRight || navMobContentHalfRight) {
            navMobileContent.classList.remove('half_right', 'full_right')
            mobMenudBack.classList.remove('active')
        }
    }, 500)
})
windowWrapper.addEventListener('click', () => {
    navMobile.classList.remove('active');
    windowWrapper.style.display = 'none';
    body.style.overflow = 'visible';
    const navMobContentFullRight = document.querySelector('.nav_mobile-content.half_right.full_right');
    const navMobContentHalfRight = document.querySelector('.nav_mobile-content.half_right');
    setTimeout(function () {
        if (navMobContentFullRight || navMobContentHalfRight) {
            navMobileContent.classList.remove('half_right', 'full_right')
            mobMenudBack.classList.remove('active')
        }
    }, 500)
})
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
Array.from(desktopLinks).forEach(link => {
    link.addEventListener('mouseover', () => {
        header.classList.add('active')
        body.style.overflow = 'hidden'
    })
    link.addEventListener('mouseleave', () => {
        header.classList.remove('active')
        body.style.overflow = 'visible'
    })
})
// ////////////////////////////////////////////////////////////////
mobSecondLinks.forEach(mobSecondLink => {
    mobSecondLink.addEventListener('click', () => {
        navMobileContent.classList.add('full_right');
        mobSecondLink.nextElementSibling.classList.add('active');
    })
})
// //////////////////////////////////////////////////////
Array.from(mobThirdLinks).forEach(mobThirdLink => {
    mobThirdLink.addEventListener('click', () => {
        navMobile.classList.remove('active');
        windowWrapper.style.display = 'none';
        body.style.overflow = 'visible';
        const navMobContentFullRight = document.querySelector('.nav_mobile-content.half_right.full_right');
        const navMobContentHalfRight = document.querySelector('.nav_mobile-content.half_right');
        setTimeout(function () {
            if (navMobContentFullRight || navMobContentHalfRight) {
                navMobileContent.classList.remove('half_right', 'full_right')
                mobMenudBack.classList.remove('active')
            }
        }, 500)
    })
})
// /////////////////////////////////////////////////////////
var swiper = new Swiper('.intro .swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.intro .swiper-button-next',
        prevEl: '.intro .swiper-button-prev',
    },
    pagination: {
        el: '.intro .swiper-pagination'
    },
});

// /////////////////////////////////////////
var swiper = new Swiper('.gallery .swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.gallery .swiper-button-next',
        prevEl: '.gallery .swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            spaceBetween: 5,
        }
    }
});
var swiper = new Swiper('.ourpartners .swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 70,
    loop: true,
    navigation: {
        nextEl: '.ourpartners .swiper-button-next',
        prevEl: '.ourpartners .swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            spaceBetween: 20,
        },
        540: {
            spaceBetween: 15,
        }
    }
});
// //////////////////////////////////////////////////
var initPhotoSwipeFromDOM = function (gallerySelector) {
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for (var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if (figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };

            if (figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function (el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }

            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if (index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};

        if (hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function (index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            }

        };

        // PhotoSwipe opened from URL
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }

        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

// execute above function
initPhotoSwipeFromDOM('.gallery .my-gallery');
// /////////////////////////////////////////////