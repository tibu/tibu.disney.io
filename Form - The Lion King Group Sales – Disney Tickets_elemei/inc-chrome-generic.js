// Generic Chrome without Cookie banner
// Version 2021-10-27-1
(function () {

  var THIS_SCRIPT_NAME = 'inc-chrome-generic.js'; // temporarily renamed to avoid accidentally overwrite the production version
  var THIS_CSS_NAME = 'inc-chrome-generic.css';

  var params = {
    hide_desktop_menu: 1,
    hide_search: 1,
    lang: 'en',
    nav: 1,
    market_code: "inc-uk",
  };

  var thisScript;
  (function acceptParamOverridesFromURLSearchParams() {
    thisScript = document.currentScript || (function () {
      // Hello, IE! We can't simply pick the last script, as `defer` or `async` scripts might interfere, therefore we look for our file name specifically. This should not be a problem as the Incredibles Chrome must only be present on the page as a singleton.
      var scripts = document.getElementsByTagName('script');
      for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf(THIS_SCRIPT_NAME) > -1) {
          return scripts[i];
        }
      }
    }());
    if (thisScript) {
      var qs = thisScript.src.replace(/[^?]+?\?/, '');
      if (qs) {
        // Not using URLSearchParams interface for maximum compatibility.
        var pairs = qs.split('&');
        for (var i = 0; i < pairs.length; i++) {
          var nv = pairs[i].split('=');
          var paramName = decodeURIComponent(nv[0]);
          var paramValue = decodeURIComponent(nv[1]);
          if (params.hasOwnProperty(paramName)) {
            params[paramName] = paramValue;
          }
        }
      }
    }
  }());

  (function loadDependenciesAndConfigureEnvironment() {
    var getCssUrl = function () {
      var url = document.createElement('a');
      url.href = thisScript.src;
      return url.protocol + '//' + url.host + '/' + url.pathname.replace(/[^/]*?$/, '').replace(/^\//, ''); // IE11 bugfix: ensure pathname starts with `/`
    };
  
    (function ensureMetaViewport() {
      var metas = document.head.getElementsByTagName('meta');
      var viewportFound = false;
      for (var i = 0; i < metas.length; i++) {
        if (metas[i].name && metas[i].name.toLowerCase() === 'viewport') {
          viewportFound = true;
          break;
        }
      }
      if (!viewportFound) {
        var viewportMeta = document.createElement('meta');
        viewportMeta.setAttribute('name', 'viewport');
        viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');
        viewportMeta.setAttribute('data-injected-by', (thisScript && thisScript.src) || THIS_SCRIPT_NAME);
        document.head.appendChild(viewportMeta);
      }
    }());
    (function loadChromeCss() {
      var css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = getCssUrl() + THIS_CSS_NAME;
      document.head.appendChild(css);
    }());
    (function loadChromeScript() {
      var script = document.createElement('script');
      script.src = 'https://a.dilcdn.com/g/' + encodeURIComponent(params.market_code) + '/home/widenoslide.js?nav=' + encodeURIComponent(params.nav) + '&hide_search=' + encodeURIComponent(params.hide_search) + '&hide_desktop_menu=' + encodeURIComponent(params.hide_desktop_menu) + '&lang=' + encodeURIComponent(params.lang);
      document.body.appendChild(script);
    }());
    (function applyFontOverride() {
      var css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = getCssUrl() + 'font-override-noto.css'
      document.head.appendChild(css);
    }());
    (function logoReplace() {
      var checkExist = setInterval(function() {
        logoelement=document.getElementById("goc-logo-replace");
        if(typeof(logoelement) != 'undefined' && logoelement != null){
            var logo=logoelement.getAttribute('data-logo-replace');
            logoelement.style.backgroundImage ="url("+logo+")";
            var logoelementmob=document.getElementById("goc-logo");
            logoelementmob.style.backgroundImage ="url("+logo+")";
            clearInterval(checkExist);
        }
    }, 100);
    }())    
  }());

  
}());
