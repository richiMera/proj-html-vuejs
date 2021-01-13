var app = new Vue ({
  el: "#root",
  data: {
    agencyPhoneNumbers: ["(001) 88451234", "88455438"],
    socialIcons: ["fab fa-facebook-f", "fab fa-twitter", "fab fa-pinterest-p"],
    agencyLogo: "img/cropped-Group-39-2x.png",
    navbarLinks: ["HOME", "ABOUT", "SERVICES", "SHOWCASE", "BLOG", "CONTACT"],
    socialLinks: ["FACEBOOK", "INSTAGRAM", "YOUTUBE", "TWITTER"],
    slider: [
      {
        preTitle: " 17 YEARS OF EXPERIENCE",
        title: "WE ARE A <br> WEB DESIGN <span>AGENCY</span>",
        paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the semantics, a large language ocean. Separated they live in Bookmarksgrove.",
      },
      {
        preTitle: " 17 YEARS OF EXPERIENCE",
        title: "ososososososos",
        paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the semantics, a large language ocean. Separated they live in Bookmarksgrove.",

      },
      {
        preTitle: " 17 YEARS OF EXPERIENCE",
        title: "WE ARE A WEB DESIGN AGENCY",
        paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the semantics, a large language ocean. Separated they live in Bookmarksgrove.",
      }
    ],
    sliderImages: ["img/Group-36-2x.png", "img/Group-35-2x.png", "img/Group-40-2x.png"],
    chooseImageNumbers: ["01", "02", "03"],
    indexImages: 0,
    indexLinks: 0,


  },
  methods: {

    chooseImage: function(index) {
      this.indexImages = index;

      // SLIDER---------------------------------------
    },
    activeLinks: function(index) {
      this.indexLinks = index;
    }
    // activeFucntion: function {
    //
    // }
  }
})
