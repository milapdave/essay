!function(a){"use strict";function b(){n.each(function(){var b=a(this);b.hasClass("wp-caption")?(b.css({"margin-left":m.width()/2-a(window).width()/2,"max-width":"none"}),b.add(b.find("img")).css("width",a(window).width())):b.css({"margin-left":m.width()/2-a(window).width()/2,"max-width":"none",width:a(window).width()})})}function c(){l.hasClass("fullscreen")&&(j.hasClass("admin-bar")?l.css({height:a(window).height()-32+"px"}):l.css({height:a(window).height()+"px"}))}function d(){o.each(function(){var b=a(this);b.css({"margin-left":m.width()/4-a(window).width()/4,"margin-right":m.width()/4-a(window).width()/4})})}function e(){a("li.menu-parent-item a").addClass("sub-menu-link"),a(".sub-menu a").removeClass("sub-menu-link"),a("#fullscreen-nav .sub-menu").hide(),a("#fullscreen-nav li a").click(function(b){0!==a(this).next("ul.sub-menu").children().length&&b.preventDefault(),a(this).siblings(".sub-menu").slideToggle(150),a(this).toggleClass("open")})}function f(){if(a("body").hasClass("single")&&a(".site-hero .image-background").hasClass("parallax")&&a(".site-hero .entry-header").length){var b=j.outerHeight(),c=a(".site-hero .entry-header .inner"),d=a(".site-hero .image-background"),e=a(".site-hero .video-background");a(window).on("scroll",function(){var f=1-a(window).scrollTop()/b*2;0>=f&&(f=0),c.css({opacity:f}),d.css({transform:"translate(0, "+.35*a(window).scrollTop()+"px)"}),e.css({transform:"translate(0, "+.35*a(window).scrollTop()+"px)"})})}}function g(){a(".back-to-top, .scroll-more").on("click",function(){if(event.preventDefault(),location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=a(this.hash);if(b=b.length?b:a("[name="+this.hash.slice(1)+"]"),b.length)return a(this).hasClass("scroll-more")?j.animate({scrollTop:b.offset().top-90},1300):j.hasClass("admin-bar")?j.animate({scrollTop:b.offset().top-32},1300):j.animate({scrollTop:b.offset().top},1300),!1}})}function h(){var b=a(".back-to-top");jQuery(window).scrollTop()>500?b.fadeIn(500):b.fadeOut(500)}function i(){a('img.site-logo:not([src^="@2x"])').each(function(){var b=a(this).width()/2,c=a(this).height()/2;a(this).attr("width",b),a(this).attr("height",c)})}var j=a("body"),k=a("#nav-btn"),l=(a("#fullscreen-nav"),a(".site-hero")),m=j.find(".entry-content"),n=m.find(".alignnone"),o=m.find("blockquote"),p=(a(".video-background.embedded iframe"),a("#social-navigation")),q=a(".comments-btn"),r=a(".comment-list"),s=a(".respond-btn"),t=a(".comment-respond"),u=a(".primary-menu"),v=200;a("body").fitVids(),NProgress.configure({minimum:.2,showSpinner:!1}),document.onreadystatechange=function(){"interactive"==document.readyState&&NProgress.start()};var w=setInterval(function(){/loaded|complete/.test(document.readyState)&&(clearInterval(w),setTimeout(function(){NProgress.done()},2e3))},10);setTimeout(function(){j.addClass("loaded")},20),k.on("click",function(a){a.preventDefault(),j.toggleClass("open-nav"),j.hasClass("open-nav")?u.find("li").each(function(a){setTimeout(function(){u.find("li").eq(a).addClass("animate")},55*a)}):u.find("li").removeClass("animate"),j.hasClass("open-nav")?p.find("li").each(function(a){setTimeout(function(){setTimeout(function(){p.find("li").eq(a).addClass("animate")},100*a)},250)}):p.find("li").removeClass("animate")}),a(document).ready(function(){function h(){window.location=k}b(),c(),d(),e(),f(),g(),i(),jQuery().validate&&(jQuery("#commentform").validate(),jQuery(".bean-contact-form").validate()),a("body").hasClass("search-no-results")&&setTimeout(function(){a(".search-field").focus()},20);var k;if(a("a:not(.sub-menu-link)").on("click",function(a){return""==this.href||null==this.href?void a.preventDefault():void(-1==this.href.indexOf("#")&&-1==this.href.indexOf("mailto:")&&-1==this.href.indexOf("javascript:")&&"_blank"!=this.target&&(a.preventDefault(),k=this.href,j.removeClass("loaded"),setTimeout(h,200)))}),q.on("click",function(a){a.preventDefault(),q.hasClass("active")?r.slideUp(v,function(){q.removeClass("active"),r.removeClass("active"),r.fadeOut(v)}):r.slideDown(v,function(){q.addClass("active"),r.addClass("active"),r.fadeIn(v)})}),s.on("click",function(a){a.preventDefault(),s.hasClass("active")?t.slideUp(v,function(){s.removeClass("active"),t.removeClass("active"),t.fadeOut(v)}):t.slideDown(v,function(){s.addClass("active"),t.addClass("active"),t.fadeIn(v)})}),a(".site-hero .image-background").hasClass("blur")){var l=a(".site-hero .image-background").Vague({intensity:7});l.blur()}if(a(".site-hero .video-background").hasClass("blur")){var l=a(".site-hero .video-background").Vague({intensity:7});l.blur()}if(a("body").hasClass("single")&&a(".next-preview").length>0){var m=a(".next-preview .image-background").Vague({intensity:7});m.blur()}}),a(window).resize(function(){b(),c(),d()}),a(window).scroll(function(){h()})}(jQuery);