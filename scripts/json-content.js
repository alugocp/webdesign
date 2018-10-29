SiteContent.prototype.getContent=function(){
  return {
    /*"frameworks":[
      this.heading("Technology Used"),
      "Some of the languages and frameworks I'm familiar with:",
      this.twoColumns(this.bulleted([
        "Bootstrap","jQuery","Lodr"
      ]),this.bulleted([
        "Google App Engine","Shiny R","PHP"
      ]))
    ],*/
    "previous":[
      this.heading("Previous Works"),
      this.twoColumns(this.bulleted([
        this.link("Cancer Gene Interactions","https://amagen.shinyapps.io/cancergi/"),
        this.link("Chris Cobbs's website","http://www.chriscobbs.com"),
        "This site (go figure, huh?)"
      ]),this.bulleted([
        this.link("The Hridaya app","https://nishanthnair.shinyapps.io/heartdisease/"),
        this.link("My website","http://alexlugo.net")
      ]))
    ],
    "browsers":[
      this.heading("Supported Browsers"),
      "I guarantee that my sites work on the following browsers:",
      this.br(),this.br(),
      this.browserIcon("Firefox","firefox.png"),
      this.browserIcon("Google Chrome","chrome.png"),
      this.browserIcon("Opera","opera.png"),
      this.browserIcon("Safari","safari.png"),
      this.br(),this.br(),
      "If you want your site guaranteed to work on Internet Explorer or any other browser, you will need to let me know. ",
      "The same goes for browsers on mobile devices."
    ],
    "pricing":[
      this.heading("Pricing"),
      "I'm flexible with pricing. ",
      "The baseline for a standard website is $150, but this can be lowered provided you have a good reason.",
      this.br(),
      "The cost of your site will increase if I have to do any of the following:",
      this.twoColumns(this.bulleted([
        "Build a server","Make a mobile version","Support a browser I don't normally support"
      ]),this.bulleted([
        "Implement lots of front-end scripting","Rub my tummy and pat my head, or vice-versa"
      ]))
    ],
    "contact":[
      this.heading("Contact"),
      "Find me on social media, <a href=\"mailto:alugocp@aim.com\">email me</a> ",
      "or look at my <a href=\"http://alexlugo.net\" target=\"_blank\">resume</a>.",
      this.br(),this.br(),
      this.mediaIcon("Facebook","facebook.png","https://www.facebook.com/alex.lugo.5621"),
      this.mediaIcon("Twitter","twitter.png","https://twitter.com/alugocp"),
      this.mediaIcon("LinkedIn","linkedin.png","https://www.linkedin.com/in/alex-lugo-0938707b/"),
      this.mediaIcon("Instagram","instagram.png","https://www.instagram.com/alugocp1/"),
      this.br(),this.br(),
      "It's best to approach me on Twitter or Facebook. ",
      "I don't check the email given above that often, but if you have a serious request I'll give you my main email."
    ]
  };
}
