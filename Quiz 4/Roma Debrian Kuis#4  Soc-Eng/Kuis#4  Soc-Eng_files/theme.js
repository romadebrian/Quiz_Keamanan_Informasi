jQuery(document).ready(function($){var use_cookie_sidebars=document.cookie.indexOf('mb2cg_sidebars')<0;var sidebarBtn=$('.theme-hide-sidebar');var sidebarBtnShowText=sidebarBtn.data('showtext');var sidebarBtnHideText=sidebarBtn.data('hidetext');if(!use_cookie_sidebars&&!$('body').hasClass('editing'))
{$('body').addClass('hide-sidebars');sidebarBtn.text(sidebarBtnShowText)}
sidebarBtn.click(function(e){if(!$('body').hasClass('editing'))
{if($('body').hasClass('hide-sidebars'))
{setCookie('mb2cg_sidebars',1,0);$('body').removeClass('hide-sidebars');$(this).text(sidebarBtnHideText)}
else{$(this).text(sidebarBtnShowText);$('body').addClass('hide-sidebars');setCookie('mb2cg_sidebars',1,3)}}
e.preventDefault()});if($('body').hasClass('pagelayout-login'))
{$('#login').append($('.potentialidps'))}
$('.potentialidp a').each(function(){var linkTitle=$(this).attr('title');$(this).attr('class','');$(this).addClass('btn btn-'+linkTitle.toLowerCase())});$('.theme-lightbox').each(function(){var lLink=$(this);lLink.nivoLightbox()});$('.search-item').click(function(e){e.preventDefault();$('.theme-searchform').fadeIn(150)});$('.search-close').click(function(e){e.preventDefault();$('.theme-searchform').fadeOut(150)});$('.theme-slider').each(function(){slider=$(this);theme_slider(slider)});$(document).on('click','.moreinfo',function(e){var el=$(this);setTimeout(function(){var parentDiv=el.parent().parent();var courseSlider=parentDiv.find('.course-slider');if(courseSlider.length>0)
{theme_slider(courseSlider)}},700)});function theme_slider(slider)
{isItems=slider.data('items');isMargin=slider.data('margin');isLoop=slider.data('loop')==0?!1:!0;isNav=slider.data('nav')==0?!1:!0;isDots=slider.data('dots')==0?!1:!0;isAutoplay=slider.data('autoplay')==0?!1:!0;isPauseTime=slider.data('pausetime');isAnimTime=slider.data('animtime');var is2res=isItems>2?2:isItems;var is3res=isItems>3?3:isItems;var is4res=isItems>5?5:isItems;isRes={0:{items:1},600:{items:is2res},780:{items:is3res},1000:{items:is4res}};slider.owlCarousel({items:isItems,margin:isMargin,loop:isLoop,nav:isNav,dots:isDots,autoplay:isAutoplay,responsive:isRes,autoplayHoverPause:!0,autoplayTimeout:isPauseTime,smartSpeed:isAnimTime,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']})}
var scrollLink=$('.theme-scrolltt');var scrollSpeed=scrollLink.data('scrollspeed');$(window).on('scroll',function(){if($(this).scrollTop()>500)
{scrollLink.addClass('active')}
else{scrollLink.removeClass('active')}});scrollLink.click(function(e){e.preventDefault();$('html, body').stop().animate({scrollTop:0},scrollSpeed)});if($('body').hasClass('path-admin-setting'))
{$('.mb2tmpl-acc-title').each(function(){var heading=$(this);heading.click(function(e){$(this).toggleClass('active');$(this).parent().find('> div').slideToggle(150)})})}
$('table').wrap('<div class="theme-table-wrap"></div>');$('.generaltable, .forumheaderlist, table.userenrolment').addClass('table table-striped');$('table.collection').addClass('table table-bordered');$('table.preference-table').addClass('table table-bordered');$('table.rolecap').addClass('table table-bordered');$('#categoryquestions').addClass('table table-striped');$('.embed-video-bg').each(function(){var imageEl=$(this);var clickEl=imageEl.parent().find('>i');clickEl.on('click',function(e){var video=imageEl.parent().find('iframe');video.attr('src',imageEl.data('videourl'));$(this).fadeOut(350);imageEl.fadeOut(350);e.preventDefault()})});$('.alert-error').addClass('alert-danger');$('.box.notifyproblem').addClass('alert');$('.box.notifyproblem').addClass('alert-danger');$('.box.notifyproblem').removeClass('notifyproblem');$('.nav-tabs .nav-link').each(function(){if($(this).hasClass('active'))
{$(this).parent().addClass('active')}});$('.block-region').each(function(){var regionName='<span class="region-name">'+$(this).data('blockregion')+'</span>';if($('body').hasClass('editing'))
{$(this).append(regionName)}});$('.theme-ddmenu').each(function(){var menuList=$(this);var animType=menuList.data('animtype');var animSpeed=menuList.data('animspeed');var mobileArr=menuList.find('.mobile-arrow');menuList.superfish({popUpSelector:'ul',hoverClass:'mb2ctm-hover',animation:animType==2?{height:'show'}:{opacity:'show'},speed:animSpeed,speedOut:'fast',cssArrows:!1});menuOnHover(menuList);$(window).on('resize',function(){menuOnHover(menuList)});mobileArr.click(function(e){e.preventDefault();$(this).parent().siblings('ul').slideToggle(250);$(this).toggleClass('active')});function menuOnHover(list){var w=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth);if(w<=768)
{list.removeClass('sf-js-enabled');list.removeClass('desk-menu');list.addClass('mobile-menu')}
else{list.addClass('sf-js-enabled');list.removeClass('mobile-menu');list.addClass('desk-menu');list.find('.mobile-arrow').removeClass('active');list.find('.mobile-arrow').parent().siblings('ul').hide()}}});$(document).on('click','.show-menu',function(e){e.preventDefault();var menuList=$(this).parent().parent().find('.theme-ddmenu');menuList.slideToggle(250)});var clonedUserName=$('.theme-loginform').find('.usertext');var userAvatar=$('.theme-loginform').find('.welcome_userpicture');var userLink=userAvatar.parent();var loginFormDiv=$('.theme-loginform-form');var userMenu=loginFormDiv.find('.usermenu');loginFormDiv.append(userMenu);userLink.append(clonedUserName);$('.login-open').click(function(e){e.preventDefault();if($(this).hasClass('opened'))
{loginOpen($(this))}
else{loginClose($(this))}});function loginOpen(el)
{$('.theme-loginform-inner').fadeOut(150);el.removeClass('opened')}
function loginClose(el)
{el.addClass('opened');$('.theme-loginform-inner').fadeIn(150)}
var use_cookie_fs1=document.cookie.indexOf('mb2cg_fs1')<0;var use_cookie_fs2=document.cookie.indexOf('mb2cg_fs2')<0;var use_cookie_fs3=document.cookie.indexOf('mb2cg_fs3')<0;var use_cookie_hc=document.cookie.indexOf('mb2cg_hc')<0;if(!use_cookie_fs1)
{$('body').addClass('theme-fs1')}
if(!use_cookie_fs2)
{$('body').addClass('theme-fs2')}
if(!use_cookie_fs3)
{$('body').addClass('theme-fs3')}
if(!use_cookie_hc)
{$('body').addClass('theme-hc')}
$('.theme-fontsizer a').each(function(){var fontLink=$(this);var fontSize=fontLink.data('size');fontLink.click(function(e){setCookie('mb2cg_fs1',1,0);setCookie('mb2cg_fs2',1,0);setCookie('mb2cg_fs3',1,0);$('body').removeClass('theme-fs1');$('body').removeClass('theme-fs2');$('body').removeClass('theme-fs3');$('body').addClass('theme-fs'+fontSize);setCookie('mb2cg_fs'+fontSize,1,3);e.preventDefault()})});$('.hc1').click(function(e){e.preventDefault();if($('body').hasClass('theme-hc'))
{setCookie('mb2cg_hc',1,0);$('body').removeClass('theme-hc')}
else{$('body').addClass('theme-hc');setCookie('mb2cg_hc',1,3)}});function setCookie(name,value,days)
{if(days>0)
{var data=new Date();data.setTime(data.getTime()+(days*24*60*60*1000));var expires='; expires='+data.toGMTString()}else{var expires='; expires=Thu, 01 Jan 1970 00:00:01 GMT'}
document.cookie=name+'='+value+expires+'; path=/'}
moveTopMenu();$(window).on('resize',function(){moveTopMenu()});function moveTopMenu()
{var menu=$('.top-menu');var menuLi=menu.find('> li');var mainMenu=$('.main-menu');var menuLiMoved=mainMenu.find('>.movedfromtop');var w=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth);if(w<=768)
{menuLi.addClass('movedfromtop');mainMenu.append(menuLi)}
else{menu.append(menuLiMoved);menuLi.removeClass('movedfromtop')}}
setTimeout(function(){makeFixedNavigation()},10);var lastScrollTop=0;$(window).scroll(function(){st=$(this).scrollTop();if(st<lastScrollTop)
{$('body').removeClass('scroll-down');$('body').addClass('scroll-up')}
else{$('body').removeClass('scroll-up');$('body').addClass('scroll-down')}
lastScrollTop=st;makeFixedNavigation()});function makeFixedNavigation()
{var win=$(window);var offsetEl=$('.sticky-nav-element-offset');if(offsetEl.length!=0&&$('body').hasClass('sticky-nav'))
{var fixedEl=$('#main-navigation');var fixedElWrap=fixedEl.parent();var elOffset=offsetEl.offset().top;var fixElHeight=fixedEl.outerHeight(!0);if(win.scrollTop()>elOffset)
{fixedEl.addClass('sticky-nav-element');offsetEl.css({'height':fixElHeight})}
else{fixedEl.removeClass('sticky-nav-element');offsetEl.css({'height':0})}}}
$('input.mb2color').each(function(){$(this).spectrum({showInput:!0,showButtons:!1,preferredFormat:'rgb',allowEmpty:!0,color:'',showAlpha:!0})});var iconNavHeight=$('#theme-iconnav').height();$('#theme-iconnav').css({'margin-top':Math.ceil((iconNavHeight/2)*-1)});$('#theme-iconnav li').each(function(){var linkEl=$(this).find('a');var textEl=$(this).find('span.iconnavtext');var isRtl=$('body').hasClass('dir-rtl');linkEl.hover(function(){if(isRtl)
{textEl.stop().animate({'left':'100%'},300)}
else{textEl.stop().animate({'right':'100%'},300)}},function(){if(isRtl)
{textEl.stop().animate({'left':-500},150)}
else{textEl.stop().animate({'right':-500},150)}})});$('.toggle-open').each(function(){var panelWidth=$(this).data('width');var panel=$(this).parent();var isRtl=$('body').hasClass('dir-rtl');$(this).click(function(e){e.preventDefault();if(panel.hasClass('closed'))
{if(isRtl)
{panel.stop().animate({left:0},250)}
else{panel.stop().animate({right:0},250)}
panel.removeClass('closed');panel.addClass('opened')}
else{if(isRtl)
{panel.stop().animate({left:-panelWidth},250)}
else{panel.stop().animate({right:-panelWidth},250)}
panel.removeClass('opened');panel.addClass('closed')}})});setOuterHeight();$(window).on('resize',function(){setOuterHeight()});function setOuterHeight()
{$('#page-outer').css({'min-height':$(window).height()})}
function setColumnHeight()
{var section=$('.theme-section');var maxHeight=0;var ww=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth);section.each(function(){var el=$(this).find('.col-inner');$(el).css('height','auto');if(ww>768&&!$('body').hasClass('editing'))
{$(el).each(function(){if($(this).height()>maxHeight)
{maxHeight=$(this).height()}});$(el).height(maxHeight)}})}});(function($){$(window).on('load',function(){var loadingDiv=$('.loading-scr');setTimeout(function(){loadingDiv.fadeOut(150)},loadingDiv.data('hideafter'))})})(jQuery)