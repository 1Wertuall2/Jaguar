



(() => {
  "use strict";
  let e = !0
    , t = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let o = document.querySelectorAll("[data-lp]");
        setTimeout((() => {
          for (let e = 0; e < o.length; e++) {
            o[e].style.paddingRight = "0px"
          }
          n.style.paddingRight = "0px",
            document.documentElement.classList.remove("lock")
        }
        ), t),
          e = !1,
          setTimeout((function () {
            e = !0
          }
          ), t)
      }
    }
    , n = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let o = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < o.length; e++) {
          o[e].style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px"
        }
        n.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px",
          document.documentElement.classList.add("lock"),
          e = !1,
          setTimeout((function () {
            e = !0
          }
          ), t)
      }
    }
    ;
  let o = !1;
  setTimeout((() => {
    if (o) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", (function (t) {
        document.dispatchEvent(e)
      }
      ))
    }
  }
  ), 0),
    window.FLS = !0,
    function (e) {
      let t = new Image;
      t.onload = t.onerror = function () {
        e(2 == t.height)
      }
        ,
        t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }((function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t)
    }
    )),
    document.querySelector(".header__icon") && document.addEventListener("click", (function (o) {
      e && o.target.closest(".header__icon") && (((e = 500) => {
        document.documentElement.classList.contains("lock") ? t(e) : n(e)
      }
      )(),
        document.documentElement.classList.toggle("menu-open"))
    }
    ))
}
)();

new Swiper('.slide', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})