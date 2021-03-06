var app = new Vue ({
  el: "#root",
  data: {
    // HEADER
    agencyPhoneNumbers: ["(001) 88451234", "88455438"],
    socialIcons: [
      {
        social: "facebook",
        icon: "fab fa-facebook-f",
        socialLink: ""
      },
      {
        social: "twitter",
        icon: "fab fa-twitter",
        socialLink: ""
      },
      {
        social: "pinterest",
        icon: "fab fa-pinterest-p",
        socialLink: ""
      }
    ],
    agencyLogo: {
      logo: "img/cropped-Group-39-2x.png",
      logoLink: "https://demo.phlox.pro/business-2/"
    },
    navbarLinks: [
      {
        page: "HOME",
        navLink: "https://demo.phlox.pro/business-2/"
      },
      {
        page: "ABOUT",
        navLink: "https://demo.phlox.pro/business-2/about/"
      },
      {
        page: "SERVICES",
        navLink: "https://demo.phlox.pro/business-2/services/"
      },
      {
        page: "SHOWCASE",
        navLink: "https://demo.phlox.pro/business-2/showcase/"
      },
      {
        page: "BLOG",
        navLink: "https://demo.phlox.pro/business-2/blog/"
      },
      {
        page: "CONTACT",
        navLink: "https://demo.phlox.pro/business-2/contact-page/"
      }
  ],
    copyright: " 2020 PHLOX BUSINESS THEME.",
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
    ],
    // MAIN-SECOND-PAGE

    // MAIN-THIRD-PAGE
    thirdPageContent: {
      slogan:"learn more about <br> our <span> missions</span>",
      paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove."
    },
    // MAIN-THIRD-PAGE

    // MAIN-FOURTH-PAGE
    fourthPageContent: {
      slogan: "Our recent <span>web designs</span> & <br>some examples of<br> past <span>projects</span>",
      paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
    },

    fourthPageImages: [
      {
        image: "img/ina-soulis-227104-unsplash-1024x1024.jpg",
        title: "The Basket of Flowers",
        arguments: [
          {
            argument: "BRANDING",
            argumentLink: "https://demo.phlox.pro/business-2/portfolio-cat/branding/"
          },
          {
            argument: "MARKETING",
            argumentLink: "https://demo.phlox.pro/business-2/portfolio-cat/marketing/"
          }
        ],
        imageLink: "https://demo.phlox.pro/business-2/portfolio/portfolio-item-08/"
      },
      {
        image: "img/sunisa-misa-531163-unsplash-1024x1024.jpg",
        title: "A Famous Ferris Wheel",
        arguments: [
          {
            argument: "MARKETING",
            argumentLink: "https://demo.phlox.pro/business-2/portfolio-cat/marketing/"
          },
        ],
        imageLink: "https://demo.phlox.pro/business-2/portfolio/portfolio-item-07/"
      },
      {
        image: "img/355H-1024x1024.jpg",
        title: "Complementary Colors",
        arguments: [
          {
            argument: "BRANDING",
            argumentLink: "https://demo.phlox.pro/business-2/portfolio-cat/branding/"
          },
          {
            argument: "MARKETING",
            argumentLink: "https://demo.phlox.pro/business-2/portfolio-cat/marketing/"
          }
        ],
        imageLink: "https://demo.phlox.pro/business-2/portfolio/portfolio-item-06/"
      },
      {
        image: "img/photo-1448932252197-d19750584e56-1024x1024.jpg",
        title: "Business Prestige",
        arguments: [
          {
            argument: "BRANDING",
            argumentLink: "https://demo.phlox.pro/business-2/portfolio-cat/branding/"
          },
        ],
        imageLink: "https://demo.phlox.pro/business-2/portfolio/portfolio-item-05/"
      },
      {
        image: "img/business-competition-PB366D8-1024x1024.jpg",
        title: "Colorful Origami Boats",
        arguments: [
          {
            argument: "BRANDING",
            argumentLink: "https://demo.phlox.pro/business-2/portfolio-cat/branding/"
          },
          {
            argument: "MARKETING",
            argumentLink: "https://demo.phlox.pro/business-2/portfolio-cat/marketing/"
          }
        ],
        imageLink: "https://demo.phlox.pro/business-2/portfolio/portfolio-item-04/"
      },
      {
        image: "img/cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg",
        title: "Modern Couch",
        arguments: [
          {
            argument: "MARKETING",
            argumentLink: "https://demo.phlox.pro/business-2/portfolio-cat/marketing/"
          }
        ],
        imageLink: "https://demo.phlox.pro/business-2/portfolio/portfolio-item-03/"
      },
      {
        image: "img/aa9a4539-PQGJ7HU-1024x1024.jpg",
        title: "Hot Air Balloons",
        arguments: [
          {
            argument: "BRANDING",
            argumentLink: "https://demo.phlox.pro/business-2/portfolio-cat/branding/"
          },
          {
            argument: "MARKETING",
            argumentLink: "https://demo.phlox.pro/business-2/portfolio-cat/marketing/"
          }
        ],
        imageLink: "https://demo.phlox.pro/business-2/portfolio/portfolio-item-02/"
      },
      {
        image: "img/cody-davis-253928-unsplash-1024x1024.jpg",
        title: "Make Difference",
        arguments: [
          {
            argument: "BRANDING",
            argumentLink: "https://demo.phlox.pro/business-2/portfolio-cat/branding/"
          },
        ],
        imageLink: "https://demo.phlox.pro/business-2/portfolio/portfolio-item-01/"
      }
    ],

    // MAIN-FOURTH-PAGE

    // MAIN-FIFTH-PAGE
    fifthPageContent:
      {
        icon: "fas fa-quote-left",
        backgroundImage: "img/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg",
        mantra: "When it comes to barbequing, there are two main schools of thought for the techniques that you can use. Freshly scrambled eggs with applewood smoked bacon - are amazing!",
        avatarImage: "img/businesswoman-analysing-document-P8WSNMC-1024x820.jpg",
        avatarName: "LISSA DURBIN",
        avatarRole: "Client"
      },

    // MAIN-FIFTH-PAGE

    //MAIN-SIXTH-PAGE
    sixthPageContent: {
      slogan: "Latest News & Our <span>Blog</span>",
      cards: [
        {
          cardImage: "img/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg",
          projectYears: "May 24, 2018",
          projectAuthor: "Alex",
          projectName: "Marketing Ideas",
          cardLink: "https://demo.phlox.pro/business-2/2018/05/24/post-01/",
        },
        {
          cardImage: "img/Businessman-at-the-desk-in-his-office-resting--1024x768.jpg",
          projectYears: "May 24, 2018",
          projectAuthor: "Alex",
          projectName: "Rest During Working Hours",
          cardLink: "https://demo.phlox.pro/business-2/2018/05/24/post-02/",
        },
        {
          cardImage: "img/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg",
          projectYears: "May 24, 2018",
          projectAuthor: "Alex",
          projectName: "Develop Your Startup Idea",
          cardLink: "https://demo.phlox.pro/business-2/2018/05/24/post-03/",
        }
      ]
    },
    //MAIN-SIXTH-PAGE
    // MAIN-SEVENTH-PAGE
    sponsors: [
      {
        sponsorName:"Avangarde",
        logo:"img/client-1-2x.png",
        sponsorLink: ""
      },
      {
        sponsorName:"Fastlane",
        logo:"img/client-9-2x.png",
        sponsorLink: ""
      },
      {
        sponsorName:"Ron Jones",
        logo:"img/client-7-2x.png",
        sponsorLink: ""
      },
      {
        sponsorName:"Chippy's",
        logo:"img/client-3-2x.png",
        sponsorLink: ""
      },
      {
        sponsorName:"Bullseye",
        logo:"img/client-4-2x.png",
        sponsorLink: ""
      },
      {
        sponsorName:"Mighty Fornitures",
        logo:"img/client-5-2x.png",
        sponsorLink: ""
      },
    ],
    // MAIN-SEVENTH-PAGE

    // FOOTER__________________________________
    // FOOTER_TOP
    footerInformations: {
      footerLogo: "img/cropped-Group-39-2x.png",
      footerSlogan: "While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.While the lovely valley teems with vapour around me.",
      footerLinks: [
        {
          info: "Careers",
          infoLink: "https://demo.phlox.pro/business-2/#"
        },
        {
          info: "News",
          infoLink: "https://demo.phlox.pro/business-2/#"
        },
        {
          info: "Terms of use",
          infoLink: "https://demo.phlox.pro/business-2/#"
        },
        {
          info: "Privacy Projects",
          infoLink: "https://demo.phlox.pro/business-2/#"
        },
        {
          info: "About",
          infoLink: "https://demo.phlox.pro/business-2/#"
        },
        {
          info: "Contact",
          infoLink: "https://demo.phlox.pro/business-2/#"
        },
      ],
      footerContacts: {
        address: "Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051",
        email: "info@yourdomain.com",
        phoneNumber: "+99 (0) 101 0000 888"
      },
      locationMap: "img/map.png"
    }
    // FOOTER_TOP
    // FOOTER__________________________________


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
