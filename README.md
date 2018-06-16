# Barber
Barber is a minimal blog theme built for Ghost. The blog theme features a masonry grid, endless scrolling, and page transitions. 💈 Barber is also available for [Jekyll](https://github.com/samesies/barber-jekyll).

![Barber](https://github.com/samesies/barber-ghost/blob/master/barber.jpg "Barber")

## Initial Setup
* [Installation](#installation)
* [Enable Beta Features](#enable-beta-features)
* [Update Settings](#update-settings)
* [Create Static Pages](#create-static-pages)
* [Create Navigation](#create-navigation)

## Customization
* [Contact Form](#contact-form)
* [Social Media Links](#social-media-links)
* [Disqus Comments](#disqus-comments)

## Additional Development
* [Source Code](#source-code)
* [Donations](#donations)
* [Support](#support)

### Installation
Ghost requires the theme to be uploaded in a ````.zip```` file. You will need to do this whenever you make any edit to the source code. You can run ````gulp zip```` in your command line to generate this file without all the extra folders Ghost does not need (see [Source Code](#source-code) for more information about Gulp).

![Installation](http://samesies.io/assets/images/barber/doc/framed-installation.jpg "Installation")

### Enable Beta Features
Barber uses a couple of features that are still in beta testing. You must activate the Public API and the Subscribers features. These features make tag pages, endless scrolling, and a subscription list possible.

![Enable Beta Features](http://samesies.io/assets/images/barber/doc/framed-beta-features.jpg "Enable Beta Features")

### Update Settings
![Update Settings](http://samesies.io/assets/images/barber/doc/framed-update-settings.jpg "Update Settings")

### Create Static Pages
Creating a static page is the same as creating a story. The only difference is before the story is published it is turned into a page by selecting the checkbox at the very bottom of the post settings.

![Static Pages](http://samesies.io/assets/images/barber/doc/framed-static-pages.jpg "Static Pages")

### Create Navigation
You can create a navigation under the Design Settings. Visitors can be linked directly to static pages right on the top of your website.

***

### Contact Form
The form uses [Formcarry](https://formcarry.com/) to send submitted messages straight to your inbox. The image on the popup is the Publication Cover (see [Update Settings](#update-settings)).

![Contact Form](http://samesies.io/assets/images/barber/doc/framed-contact-form.jpg "Contact Form")

You do have to set the URL where you want to receive the form. This file can be found in ````partials/formcarry.hbs````. After everything is set you will need to submit a message yourself to confirm the setup is correct.

### Social Media Links
[Font Awesome](http://fontawesome.io/) is used for the social media icons. The icons in the theme can be found in ````partials/share.hbs```` and ````partials/social.hbs````. The icons in ````partials/share.hbs```` do not need to be edited unless you want to remove a certain website; however, the ones in ````partials/social.hbs```` do have to be changed. You can follow the template that has been provided for you to link to all of your social media accounts. The naming convention has not changed from the instructions provided on Font Awesome.

### Disqus Comments
Comments can be enabled on every blog post in three steps. The first step is to register your website with [Disqus](https://disqus.com/). Disqus will provide you with a shortname that you need for the next step. Once you have that the second step is to open ````partials/disqus.hbs````, remove all the instructions, and paste in your shortcode where the placeholder one currently is. The third step is to visit a blog post and verify that your comments are there.

***

### Source Code
The source code is broken down to make finding what you need as easy as possible. Almost everything runs through ````gulpfile.js````, so you will need to run ````npm install```` on your command line before doing any additional development. You can then run ````gulp```` or ````npm start```` to compile everything.

```
.
├── assets
    └── js
├── partials
|   ├── contact.hbs
|   ├── disqus.hbs
|   ├── footer.hbs
|   ├── formcarry.hbs
|   ├── head.hbs
|   ├── header.hbs
|   ├── navigation.hbs
|   ├── pagination.hbs
|   ├── post-card.hbs
|   ├── share.hbs
|   ├── social.hbs
|   ├── styles-amp.hbs
|   ├── styles-app.hbs
|   └── subscribe_form.hbs
├── src
|   ├── js
|       ├── components
|       ├── vendor
|       └── _init.js
|   └── scss
|       ├── base
|       ├── components
|       ├── fonts
|       ├── regions
|       ├── tools
|       ├── utils
|       ├── vendor
|       ├── amp.scss
|       └── app.scss
├── .eslintrc
├── .gitignore
├── .stylelintrc
├── amp.hbs
├── author.hbs
├── default.hbs
├── error-404.hbs
├── error.hbs
├── gulpfile.js
├── index.hbs
├── package.json
├── page.hbs
├── post.hbs
├── README.md
├── subscribe.hbs
└── tag.hbs
```

The CSS is written in Sass and compiled in two different files. One for the whole website and one for Google AMP pages. The JavaScript is written in ES6, so your code is up to date with the newest standards.

### Donations
Barber has been released for free. Similar themes cost around $39 on [ThemeForest](https://themeforest.net/category/blogging/ghost-themes). Any donations would be greatly appreciated after the work that went into releasing Barber.

* PayPal – <https://www.paypal.me/samesies>
* Bitcoin – 1PSzNmcfAFJY1PtBK5u9R5bTGfF7KAuLcq
* Ethereum – 0x392F7116e4171F1D740397B6000EadD2e4bb9670
* Litecoin – LSH9AnjcUTV5T7PUxXQuxPqb9W5aSR9GEP

### Support
Email <okay@samesies.io> if you need any additional support with Barber.
