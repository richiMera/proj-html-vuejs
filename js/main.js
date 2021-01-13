var app = new Vue ({
  el: "#root",
  data: {
    // HEADER
    agencyPhoneNumbers: ["(001) 88451234", "88455438"],
    socialIcons: ["fab fa-facebook-f", "fab fa-twitter", "fab fa-pinterest-p"],
    agencyLogo: "img/cropped-Group-39-2x.png",
    navbarLinks: ["HOME", "ABOUT", "SERVICES", "SHOWCASE", "BLOG", "CONTACT"],
    // HEADER
    // MAIN
    // MAIN-FIRST-PAGE
    socialLinks: ["FACEBOOK", "INSTAGRAM", "YOUTUBE", "TWITTER"],
    slider: [
      {
        preTitle: " 17 YEARS OF EXPERIENCE",
        title: "We Are a <br> Web Design <span>Agency</span>",
        paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the semantics, a large language ocean. Separated they live in Bookmarksgrove.",
      },
      {
        preTitle: " 17 YEARS OF EXPERIENCE",
        title: "Focus on Your <br> <span>Business</span>",
        paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the semantics, a large language ocean. Separated they live in Bookmarksgrove.",

      },
      {
        preTitle: " 17 YEARS OF EXPERIENCE",
        title: "A Group of <br> Expert <span>Planners</span>",
        paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the semantics, a large language ocean. Separated they live in Bookmarksgrove.",
      }
    ],
    sliderImages: ["img/Group-36-2x.png", "img/Group-35-2x.png", "img/Group-40-2x.png"],
    chooseImageNumbers: ["01", "02", "03"],
    indexImages: 0,
    indexLinks: 0,
    // MAIN-FIRST-PAGE

    // MAIN-SECOND-PAGE
    secondMainPageSlogan: "We Are Here To <br> Make Your <span>Website</span> <br> Look More <span>Elegant</span> <br>And Stylish!",
    schede: [
      {
        icon: "fas fa-tachometer-alt",
        title: "Speed Optimization",
        content: "Far far away, behind the word mountains, far from the countries Vokalia...",

      },
      {
        icon: "fas fa-cloud",
        title: "Cloud Solutions",
        content: "Far far away, behind the word mountains, far from the countries Vokalia...",

      },
      {
        icon: "fas fa-mobile-alt",
        title: "Website Design",
        content: "Far far away, behind the word mountains, far from the countries Vokalia...",

      },
      {
        icon: "fas fa-stopwatch",
        title: "Online Marketing",
        content: "Far far away, behind the word mountains, far from the countries Vokalia...",

      }
    ]


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
