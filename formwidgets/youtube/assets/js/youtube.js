var YouTubeField = (function(){
  /**
   * arcticModal — jQuery plugin
   * Version: 0.3
   * Author: Sergey Predvoditelev (sergey.predvoditelev@gmail.com)
   * Company: Arctic Laboratory (http://arcticlab.ru/)
     *
   * Docs & Examples: http://arcticlab.ru/arcticmodal/
   */
  (function(d){var g={type:"html",content:"",url:"",ajax:{},ajax_request:null,closeOnEsc:!0,closeOnOverlayClick:!0,clone:!1,overlay:{block:void 0,tpl:'<div class="arcticmodal-overlay"></div>',css:{backgroundColor:"#000",opacity:0.6}},container:{block:void 0,tpl:'<div class="arcticmodal-container"><table class="arcticmodal-container_i"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'},wrap:void 0,body:void 0,errors:{tpl:'<div class="arcticmodal-error arcticmodal-close"></div>',autoclose_delay:2E3,
  ajax_unsuccessful_load:"Error"},openEffect:{type:"fade",speed:400},closeEffect:{type:"fade",speed:400},beforeOpen:d.noop,afterOpen:d.noop,beforeClose:d.noop,afterClose:d.noop,afterLoading:d.noop,afterLoadingOnShow:d.noop,errorLoading:d.noop},j=0,e=d([]),m={isEventOut:function(a,b){var c=!0;d(a).each(function(){d(b.target).get(0)==d(this).get(0)&&(c=!1);0==d(b.target).closest("HTML",d(this).get(0)).length&&(c=!1)});return c}},f={getParentEl:function(a){var b=d(a);return b.data("arcticmodal")?b:(b=
  d(a).closest(".arcticmodal-container").data("arcticmodalParentEl"))?b:!1},transition:function(a,b,c,e){e=void 0==e?d.noop:e;switch(c.type){case "fade":"show"==b?a.fadeIn(c.speed,e):a.fadeOut(c.speed,e);break;case "none":"show"==b?a.show():a.hide(),e()}},prepare_body:function(a,b){d(".arcticmodal-close",a.body).unbind("click.arcticmodal").bind("click.arcticmodal",function(){b.arcticmodal("close");return!1})},init_el:function(a,b){var c=a.data("arcticmodal");if(!c){c=b;j++;c.modalID=j;c.overlay.block=
  d(c.overlay.tpl);c.overlay.block.css(c.overlay.css);c.container.block=d(c.container.tpl);c.body=d(".arcticmodal-container_i2",c.container.block);b.clone?c.body.html(a.clone(!0)):(a.before('<div id="arcticmodalReserve'+c.modalID+'" style="display: none" />'),c.body.html(a));f.prepare_body(c,a);c.closeOnOverlayClick&&c.overlay.block.add(c.container.block).click(function(b){m.isEventOut(d(">*",c.body),b)&&a.arcticmodal("close")});c.container.block.data("arcticmodalParentEl",a);a.data("arcticmodal",c);
  e=d.merge(e,a);d.proxy(h.show,a)();if("html"==c.type)return a;if(void 0!=c.ajax.beforeSend){var k=c.ajax.beforeSend;delete c.ajax.beforeSend}if(void 0!=c.ajax.success){var g=c.ajax.success;delete c.ajax.success}if(void 0!=c.ajax.error){var l=c.ajax.error;delete c.ajax.error}var n=d.extend(!0,{url:c.url,beforeSend:function(){void 0==k?c.body.html('<div class="arcticmodal-loading" />'):k(c,a)},success:function(b){a.trigger("afterLoading");c.afterLoading(c,a,b);void 0==g?c.body.html(b):g(c,a,b);f.prepare_body(c,
  a);a.trigger("afterLoadingOnShow");c.afterLoadingOnShow(c,a,b)},error:function(){a.trigger("errorLoading");c.errorLoading(c,a);void 0==l?(c.body.html(c.errors.tpl),d(".arcticmodal-error",c.body).html(c.errors.ajax_unsuccessful_load),d(".arcticmodal-close",c.body).click(function(){a.arcticmodal("close");return!1}),c.errors.autoclose_delay&&setTimeout(function(){a.arcticmodal("close")},c.errors.autoclose_delay)):l(c,a)}},c.ajax);c.ajax_request=d.ajax(n);a.data("arcticmodal",c)}},init:function(a){a=
  d.extend(!0,{},g,a);if(d.isFunction(this))if(void 0==a)d.error("jquery.arcticmodal: Uncorrect parameters");else if(""==a.type)d.error('jquery.arcticmodal: Don\'t set parameter "type"');else switch(a.type){case "html":if(""==a.content){d.error('jquery.arcticmodal: Don\'t set parameter "content"');break}var b=a.content;a.content="";return f.init_el(d(b),a);case "ajax":if(""==a.url){d.error('jquery.arcticmodal: Don\'t set parameter "url"');break}return f.init_el(d("<div />"),a)}else return this.each(function(){f.init_el(d(this),
  d.extend(!0,{},a))})}},h={show:function(){var a=f.getParentEl(this);if(!1===a)d.error("jquery.arcticmodal: Uncorrect call");else{var b=a.data("arcticmodal");b.overlay.block.hide();b.container.block.hide();d("BODY").append(b.overlay.block);d("BODY").append(b.container.block);b.beforeOpen(b,a);a.trigger("beforeOpen");if("hidden"!=b.wrap.css("overflow")){b.wrap.data("arcticmodalOverflow",b.wrap.css("overflow"));var c=b.wrap.outerWidth(!0);b.wrap.css("overflow","hidden");var g=b.wrap.outerWidth(!0);g!=
  c&&b.wrap.css("marginRight",g-c+"px")}e.not(a).each(function(){d(this).data("arcticmodal").overlay.block.hide()});f.transition(b.overlay.block,"show",1<e.length?{type:"none"}:b.openEffect);f.transition(b.container.block,"show",1<e.length?{type:"none"}:b.openEffect,function(){b.afterOpen(b,a);a.trigger("afterOpen")});return a}},close:function(){if(d.isFunction(this))e.each(function(){d(this).arcticmodal("close")});else return this.each(function(){var a=f.getParentEl(this);if(!1===a)d.error("jquery.arcticmodal: Uncorrect call");
  else{var b=a.data("arcticmodal");!1!==b.beforeClose(b,a)&&(a.trigger("beforeClose"),e.not(a).last().each(function(){d(this).data("arcticmodal").overlay.block.show()}),f.transition(b.overlay.block,"hide",1<e.length?{type:"none"}:b.closeEffect),f.transition(b.container.block,"hide",1<e.length?{type:"none"}:b.closeEffect,function(){b.afterClose(b,a);a.trigger("afterClose");b.clone||d("#arcticmodalReserve"+b.modalID).replaceWith(b.body.find(">*"));b.overlay.block.remove();b.container.block.remove();a.data("arcticmodal",
  null);d(".arcticmodal-container").length||(b.wrap.data("arcticmodalOverflow")&&b.wrap.css("overflow",b.wrap.data("arcticmodalOverflow")),b.wrap.css("marginRight",0))}),"ajax"==b.type&&b.ajax_request.abort(),e=e.not(a))}})},setDefault:function(a){d.extend(!0,g,a)}};d(function(){g.wrap=d(document.all&&!document.querySelector?"html":"body")});d(document).bind("keyup.arcticmodal",function(a){var b=e.last();b.length&&b.data("arcticmodal").closeOnEsc&&27===a.keyCode&&b.arcticmodal("close")});d.arcticmodal=
  d.fn.arcticmodal=function(a){if(h[a])return h[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof a||!a)return f.init.apply(this,arguments);d.error("jquery.arcticmodal: Method "+a+" does not exist")}})(jQuery);

  /**
   * microAjax, https://code.google.com/archive/p/microajax/
   * Copyright (c) 2008 Stefan Lange-Hegermann
   */
  function microAjax(B,A){this.bindFunction=function(E,D){return function(){return E.apply(D,[D])}};this.stateChange=function(D){if(this.request.readyState==4){this.callbackFunction(this.request.responseText)}};this.getRequest=function(){if(window.ActiveXObject){return new ActiveXObject("Microsoft.XMLHTTP")}else{if(window.XMLHttpRequest){return new XMLHttpRequest()}}return false};this.postBody=(arguments[2]||"");this.callbackFunction=A;this.url=B;this.request=this.getRequest();if(this.request){var C=this.request;C.onreadystatechange=this.bindFunction(this.stateChange,this);if(this.postBody!==""){C.open("POST",B,true);C.setRequestHeader("X-Requested-With","XMLHttpRequest");C.setRequestHeader("Content-type","application/x-www-form-urlencoded");C.setRequestHeader("Connection","close")}else{C.open("GET",B,true)}C.send(this.postBody)}};

  var NOEMBED_PROVIDER       = 'http://noembed.com/embed?url='; //https://www.youtube.com/oembed?url=
  var YOUTUBE_PROVIDER       = 'https://www.youtube.com/watch?v=';
  var YOUTUBE_REGEX          = /^((?:(?:https?:\/\/)?(?:www\.)?)?(youtube(?:-nocookie)?\.com|youtu\.be)\/.*?(?:embed|e|v|watch\?.*?v=)?\/?|)([^#\&\?]+)/i;
  var YOUTUBE_REGEX_CODE_POS = 3;
  var YOUTUBE_BLANK_THUMB    = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUDBAcFBwUFBQUGBQgFBgUFBQUIBQUHBQgFBQUJBggJBQUTChwLBwgaCQgFDiEYGh0RHxMfEwsiGCIeGBwSExIBBQUFBwYHBQgIBRIIBQgSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEv/AABEIAFoAeAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQQCAwcGBf/EAD0QAAIBAgMDBwYNBQAAAAAAAAACAQMEBRESBhMhByIxMkFSYRRCcXKS0hVVgYSRlLHBwsPR0/AXUWJks//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDvQAAAAACYgnSBiDLQNAGIMtA0gYgmYIAAAAAAAAAQZqpipYoqASkbloHyNoNq7HBWWjcb2tWaFdrejEM6I3Vms8zCp4cc/A+RPKhar1cKum9Na3X9QPYbgbg8XPKnT83B3+W9SPyzH+qi/E0/Xl/aA9tuDFqB41eVOj52D1f8tN7Sn8uDbHKfaN04ZeJ6Ktq33wB6d6ZpZTTgG0VljUP5Izo9KNT29RVStCdGpeMwy+iS3WUCuAwAAAAAAMkLtouqVKSF+znioHCseuJuLzELhm1TVu7ltXTzVrMi/JpVIKZNSec7d56je08lvBLCcQurWyR4pTdVVpa24qurpnT28IYCmD023mysYFNpKXU3CXW9XnoqVVejplubE5SuTKXLrYbdYT8MeW6qi21O9a33S7ndOsTpWrnnryZfDMDxoPV7C7IRjqXVardzarRqLRVUpK7tVZNebcYyXKVPN4jbTaV7i1aYdrWrVt2deqzUnlJlfDgB9bk/rzRxTDW1aYq1Wt38VrIyZfTKnYLmDiey7acQwyV6VvLT/sp26784Ci5BLkAAAAAAEoXbRuMekowb6T6QOF3KSlWsjdKVaqN60VZifsMabykq6NKMkrKOrZSrLxiVbsnM+3tthNSxu7p2SdzdValxb1oXmStV5eVaexomWg+FqjvQBaxC/uL1lq3t1WunWNCPUqs7KnTkv9oJfErlqC2U3ddrdZ1LazVfcxpbOOZ0ZZ8SpmSBaw/Ermy1+SXde13saau7qsmpezV9JVmf5PFpbtlm7ZIzGqO9AH1Nkk14jhi/7ls3svDz9h2m4Y5dya4VUrXdK+ZJWjabx97K5K9aUlESl3pjVnOX3nS6jAamIEgAAAAAAErJAA2atXNZYaO7KrMeya2trd+va28+tb0Z/CBmBqbDLFuth9m3zWj7pj8EWHxZZ/VqP6G/MZga1wyyXq4fZr80o+6bVt6CdS1t09W3or+EjMZgbJfs7F6qxwWPVXsMJkgAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=';

  var yotubeProvider = {
    getCode: function(string) {
      return string.match(YOUTUBE_REGEX) && string.match(YOUTUBE_REGEX)[YOUTUBE_REGEX_CODE_POS] || '';
    },
    getData: function(code, callback) {
      function getYoutubeThumb(code) {
        return 'http://i.ytimg.com/vi/' + code + '/default.jpg';
      }
      microAjax(NOEMBED_PROVIDER + YOUTUBE_PROVIDER + code, function(data) {
        data = JSON.parse(data);
        data.code = code;
        data.thumbnail_url = getYoutubeThumb(code);
        callback.call(this, data);
      });
    }
  }

  var widget = function($widget) {
    function updateData(data) {
      $widget.find('.data_code').val(data.code);
      $widget.find('.data_title').val(data.title);
      $widget.find('.data_author').val(data.author_name);
      $widget.find('.data_thumb').val(data.thumbnail_url);

      $widget.find('.thumb img').attr('src', data.thumbnail_url);
      $widget.find('.title').text(data.title);
      $widget.find('.author').text(data.author_name);
      $widget.find('a').attr('href', data.url);
    }
    function clearData() {
      updateData({
        code: '',
        title: '',
        author_name: '',
        thumbnail_url: ''
      });
      $widget.find('.thumb img').attr('src', YOUTUBE_BLANK_THUMB);
    }
    return {
      update: function(data) {
        updateData(data);
        $widget.find('.desc').removeClass('hidden').removeClass('fail');
        return this;
      },
      clear: function() {
        clearData();
        $widget.find('.desc').addClass('hidden');
        return this;
      },
      fail: function(error) {
        clearData();
        $widget.find('.desc').removeClass('hidden').addClass('fail');
        $widget.find('.author').text(error);
        return this;
      }
    }
  }

  function showVideo(code) {
    $(
      '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/' +
      code +
      '?feature=oembed&autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>'
    ).arcticmodal();
  }

  function onchanged(input, callback) {
    var el = widget($(input).closest('.pgraf_youtube-field'));
    var code  = yotubeProvider.getCode(input.value);
    if (code === '') {
      el.clear();
    } else {
      yotubeProvider.getData(code, function(data){
        if (data.error) {
          el.fail(data.error);
        } else {
          el.update(data);
        }
        callback && callback.call();
      });
    }
  }

  return {
    change: function(e) {
      if (!$(this).data('lock')) onchanged(this);
    },
    keydown: function(e) {
      if (e.keyCode == 13) {
        e.preventDefault();
        var input = this;
        $(input).data('lock', true).blur();
        onchanged(input, function() {
          $(input).data('lock', false);
          var button = $(input).closest('form').find('[type=submit][data-request]');
          if (button.length) button.request();
        });
      }
    },
    thumbClick: function(e) {
      e.preventDefault();
      var $widget = $(this).closest('.pgraf_youtube-field');
      var code = $widget.find('.data_code').val();
      showVideo(code);
    }
  }

})();
