<!DOCTYPE html>
<html lang='zh-CN'>
<head>
<title>第五天素材/03.代码/vision/public/static/theme/chalk.js · 小强/电商 - Gitee.com</title>
<link href="https://assets.gitee.com/assets/favicon-9007bd527d8a7851c8330e783151df58.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
<link href="https://gitee.com/xiaoqiang001/online-retailers" rel="canonical" />
<meta content='gitee.com/xiaoqiang001/online-retailers git https://gitee.com/xiaoqiang001/online-retailers.git' name='go-import'>
<meta charset='utf-8'>
<meta content='always' name='referrer'>
<meta content='Gitee' property='og:site_name'>
<meta content='Object' property='og:type'>
<meta content='http://gitee.com/xiaoqiang001/online-retailers/blob/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision/public/static/theme/chalk.js' property='og:url'>
<meta content='https://gitee.com/static/images/logo_themecolor.png' itemprop='image' property='og:image'>
<meta content='第五天素材/03.代码/vision/public/static/theme/chalk.js · 小强/电商 - Gitee.com' itemprop='name' property='og:title'>
<meta content='电商数据可视化配套素材' property='og:description'>
<meta content='码云,Gitee,代码托管,Git,Git@OSC,Gitee.com,开源,内源,项目管理,版本控制,开源代码,代码分享,项目协作,开源项目托管,免费代码托管,Git代码托管,Git托管服务' name='Keywords'>
<meta content='电商数据可视化配套素材' itemprop='description' name='Description'>

<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="authenticity_token" name="csrf-param" />
<meta content="mglt0PGXaHTvSEAw4WG1b800ppBlAw15cUJA2K9hssM=" name="csrf-token" />

<link href="https://assets.gitee.com/assets/application-aec31265f49bd9406e12ec4746d87bc0.css" media="all" rel="stylesheet" />
<script>
//<![CDATA[
window.gon = {};gon.locale="zh-CN";gon.sentry_dsn=null;gon.baidu_register_hm_push=null;gon.sensor={"server_url":"https://haveaniceday.gitee.com:3443/sa?project=production"};gon.info={"controller_path":"blob","action_name":"show","current_user":false};gon.tour_env={"current_user":null,"action_name":"show","original_url":"http://gitee.com/xiaoqiang001/online-retailers/blob/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision/public/static/theme/chalk.js","controller_path":"blob"};gon.http_clone="https://gitee.com/xiaoqiang001/online-retailers.git";gon.user_project="xiaoqiang001/online-retailers";gon.manage_branch="管理分支";gon.manage_tag="管理标签";gon.enterprise_id=0;gon.create_reaction_path="/xiaoqiang001/online-retailers/reactions";gon.ref="master";
//]]>
</script>
<script src="https://assets.gitee.com/assets/static/sensor-a8642a734004a5ebe37533e9cd7bc4a4.js"></script>
<script src="https://assets.gitee.com/assets/static/sentry-5.1.0-109ee3d8895a239331efcf947ba7f5d8.js"></script>
<script src="https://assets.gitee.com/assets/application-053b7ffed8801231c1c8420188b0cea6.js"></script>
<script src="https://assets.gitee.com/assets/lib/jquery.timeago.zh-CN-9c36ca7c4899a28168320613879d208a.js"></script>

<link href="https://assets.gitee.com/assets/projects/application-6889ef1b1e62fff81035e0ded3ac9c74.css" media="all" rel="stylesheet" />
<script src="https://assets.gitee.com/assets/projects/app-d0c40e9676434152e880c79509e1ab7d.js"></script>

<script src="//res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script>
  var title = document.title.replace(/( - Gitee| - 码云)$/, '')
      imgUrl = '';
  
  document.addEventListener('DOMContentLoaded', function(event) {
    var imgUrlEl = document.querySelector('.readme-box .markdown-body > img, .readme-box .markdown-body :not(a) > img');
    imgUrl = imgUrlEl && imgUrlEl.getAttribute('src');
  
    if (!imgUrl) {
      imgUrlEl = document.querySelector('meta[itemprop=image]');
      imgUrl = imgUrlEl && imgUrlEl.getAttribute('content'); 
      imgUrl = imgUrl || "https://gitee.com/static/images/logo_themecolor.png";
    }
  
    wx.config({
      debug: false,
      appId: "wxff219d611a159737",
      timestamp: "1609123271",
      nonceStr: "85f5fab380a10dc9c48121f8d7dbb6d5",
      signature: "23c6ae2d004eb32ddb86768fea8782433af00c7d",
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage'
      ]
    });
  
    wx.ready(function () {
      wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: "https://gitee.com/xiaoqiang001/online-retailers/blob/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision/public/static/theme/chalk.js", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl // 分享图标
      });
      wx.onMenuShareAppMessage({
        title: title, // 分享标题
        link: "https://gitee.com/xiaoqiang001/online-retailers/blob/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision/public/static/theme/chalk.js", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        desc: document.querySelector('meta[name=Description]').getAttribute('content'),
        imgUrl: imgUrl // 分享图标
      });
    });
    wx.error(function(res){
      console.error('err', res)
    });
  })
</script>

<script type='text/x-mathjax-config'>
MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [["$$","$$"],["\\[","\\]"]],
    processEscapes: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    ignoreClass: "container|files",
    processClass: "markdown-body"
  }
});
</script>
<script src="https://assets.gitee.com/uploads/resources/MathJax-2.7.2/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

<script>
  (function () {
    var messages = {
      'zh-CN': {
        addResult: '增加 <b>{term}</b>',
        count: '已选择 {count}',
        maxSelections: '最多 {maxCount} 个选择',
        noResults: '未找到结果',
        serverError: '连接服务器时发生错误'
      },
      'zh-TW': {
        addResult: '增加 <b>{term}</b>',
        count: '已選擇 {count}',
        maxSelections: '最多 {maxCount} 個選擇',
        noResults: '未找到結果',
        serverError: '連接服務器時發生錯誤'
      }
    }
  
    if (messages[gon.locale]) {
      $.fn.dropdown.settings.message = messages[gon.locale]
    }
  }());
</script>

<script>
  var userAgent = navigator.userAgent;
  var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  if(isLessIE11){
    var can_access = ""
    if (can_access != "true"){
      window.location.href = "/incompatible.html";
    }
  }
</script>
</head>

<body class='git-project lang-zh-CN large'>
<header class='common-header fixed noborder' id='git-header-nav'>
<div class='ui container'>
<div class='ui menu header-menu'>
<div class='git-nav-expand-bar'>
<i class='iconfont icon-mode-table'></i>
</div>
<div class='gitee-nav__sidebar'>
<div class='gitee-nav__sidebar-container'>
<div class='gitee-nav__sidebar-top'>
<div class='gitee-nav__avatar-box'></div>
<div class='gitee-nav__buttons-box'>
<a class="ui button small fluid orange" href="/login">登录</a>
<a class="ui button small fluid basic is-register" href="/signup">注册</a>
</div>
</div>
<div class='gitee-nav__sidebar-middle'>
<div class='gitee-nav__sidebar-list'>
<ul>
<li class='gitee-nav__sidebar-item'>
<a href="/explore"><i class='iconfont icon-ic-discover'></i>
<span class='gitee-nav__sidebar-name'>开源软件</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/enterprises"><i class='iconfont icon-ic-enterprise'></i>
<span class='gitee-nav__sidebar-name'>企业版</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/education"><i class='iconfont icon-ic-education'></i>
<span class='gitee-nav__sidebar-name'>高校版</span>
</a></li>
<li class='gitee-nav__sidebar-item split-line'></li>
<li class='gitee-nav__sidebar-item'>
<a href="/search"><i class='iconfont icon-ic-search'></i>
<span class='gitee-nav__sidebar-name'>搜索</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/help"><i class='iconfont icon-help-circle'></i>
<span class='gitee-nav__sidebar-name'>帮助中心</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/terms"><i class='iconfont icon-file'></i>
<span class='gitee-nav__sidebar-name'>使用条款</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/about_us"><i class='iconfont icon-issuepx'></i>
<span class='gitee-nav__sidebar-name'>关于我们</span>
</a></li>
</ul>
</div>
</div>
<div class='gitee-nav__sidebar-bottom'>
<div class='gitee-nav__sidebar-close-button'>
<i class='fa fa-angle-double-left'></i>
</div>
</div>
</div>
</div>

<div class='item gitosc-logo'>
<a href="/"><img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline image' height='28' src='/static/images/logo.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='95'>
<img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline black image' height='28' src='/static/images/logo-black.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='95'>
</a></div>
<a class="item " href="/explore" title="开源软件">开源软件
</a><a class="item " href="/enterprises" title="企业版">企业版
<sup class='ui red label'>
特惠
</sup>
</a><a class="item " href="/education" title="高校版">高校版
</a><a class="item" href="https://blog.gitee.com/" id="gitee-blog" target="_blank" title="博客">博客
</a><div class='center responsive-logo'>
<a href="/"><img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline image' height='24' src='/static/images/logo.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='85'>
<img alt='Gitee — 基于 Git 的代码托管和研发协作平台' class='ui inline black image' height='24' src='/static/images/logo-black.svg?t=158106664' title='Gitee — 基于 Git 的代码托管和研发协作平台' width='85'>
</a></div>
<div class='right menu userbar' id='git-nav-user-bar'>
<form accept-charset="UTF-8" action="/search" class="ui item" data-text-filter="搜索格式不正确" data-text-require="搜索关键字不能少于1个" id="navbar-search-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
<input id="navbar-search-type" name="type" type="hidden" />
<input id="fork_filter" name="fork_filter" type="hidden" value="on" />
<div class='ui search'>
<input class="prompt" id="navbar-search-input" name="q" placeholder="搜开源" type="text" value="" />
</div>
</form>

<script>
  var can_search_in_repo = 1,
      repo = "VFZSSmQwOVVRVE5QUkZab1RucFplbHBuUFQxaE56WXpaZz09YTc2M2Y=",
      reponame = "xiaoqiang001/online-retailers";
  
  $(function() {
    var $search = $('#navbar-search-form .ui.search');
    $search.search({
      apiSettings: {
        url: '/search/relative_project?q={query}',
        onResponse: function (res) {
          if (res && res.status === 200 && res.data) {
            var query = htmlSafe($search.search('get value'));
  
            res.data.map(function (item) {
              item.path_ns = '/' + item.path_ns;
              item.icon = 'iconfont icon-project-public';
            });
            res.data.unshift({
              name_ns: "在全站搜索 <b class='hl'>" + query +"</b> 相关项目",
              path_ns: '/search?fork_filter=on&q=' + query,
              icon: 'iconfont icon-search'
            });
            if(can_search_in_repo == 1) {
              res.data.unshift({
                name_ns: "在当前仓库搜索 <b class='hl'>" + query +"</b> 相关代码",
                path_ns: '/search?type=code&q=' + query + '&repo=' + repo + '&reponame=' + reponame,
                icon: 'iconfont icon-search'
              });
            }
            return res;
          } else {
            return { data: [] };
          }
        }
      },
      fields: {
        results: 'data',
        description: 'name_ns',
        url: 'path_ns',
        icon: 'icon'
      },
      minCharacters: 1,
      maxResults: 10,
      searchDelay: 250,
      showNoResults: false,
      transition: 'fade'
    });
  });
</script>

<a class="item git-nav-user__login-item" href="/login" sa_evt="login_show" sa_referrer_action="站导航右上角-登录按钮" sa_referrer_url="">登录
</a><a class="item git-nav-user__register-item" href="/signup" sa_evt="register_show" sa_referrer_action="站导航右上角-注册按钮" sa_referrer_url="">注册
</a><script>
  $('.destroy-user-session').on('click', function() {
    $.cookie('access_token', null, { path: '/' });
  })
</script>

</div>
</div>
</div>
</header>
<script>
  Gitee.initNavbar()
  Gitee.initRepoRemoteWay()
</script>

<script>
  var userAgent = navigator.userAgent;
  var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  if(isLessIE11){
    var can_access = ""
    if (can_access != "true"){
      window.location.href = "/incompatible.html";
    }
  }
</script>

<div class='fixed-notice-infos'>
<div class='all-messages'>
<div class='ui info message' id='git-bulletin'>
<a href=https://gitee.com/features/gitee_go?utm_medium=notice target='_blank'>Gitee  CI/CD工具内测免费用</a>
<i class='icon remove' id='remove-bulletin'></i>
</div>
</div>
<div class='ui container'>
<div class='flash-messages' id='messages-container'></div>
</div>
<script>
  (function() {
    $(function() {
      var $error_box, alertTip, notify_content, notify_options, template;
      template = '<div data-notify="container" class="ui {0} message" role="alert">' + '<i data-notify="dismiss" class="close icon"></i>' + '<span data-notify="message">{2}</span>' + '</div>';
      notify_content = null;
      notify_options = {};
      alertTip = '';
      $error_box = $(".flash_error.flash_error_box");
      if (notify_options.type === 'error' && $error_box.length > 0 && !$.isEmptyObject(notify_content.message)) {
        if (notify_content.message === 'captcha_fail') {
          alertTip = "验证码不正确";
        } else if (notify_content.message === 'captcha_expired') {
          alertTip = "验证码已过期，请点击刷新";
        } else if (notify_content.message === 'not_found_in_database') {
          alertTip = "帐号或者密码错误";
        } else if (notify_content.message === 'not_found_and_show_captcha') {
          alertTip = "帐号或者密码错误";
        } else if (notify_content.message === 'phone_captcha_fail') {
          alertTip = "手机验证码不通过";
        } else {
          alertTip = notify_content.message;
        }
        return $error_box.html(alertTip).show();
      } else if (notify_content) {
        if ("show" === 'third_party_binding') {
          return $('#third_party_binding-message').html(notify_content.message).addClass('ui message red');
        }
        notify_options.delay = 3000;
        notify_options.template = template;
        notify_options.offset = {
          x: 10,
          y: 30
        };
        notify_options.element = '#messages-container';
        return $.notify(notify_content, notify_options);
      }
    });
  
  }).call(this);
</script>

</div>
<script>
  (function() {
    $(function() {
      var setCookie;
      setCookie = function(name, value) {
        $.cookie(name, value, {
          path: '/',
          expires: 365
        });
      };
      $('#remove-bulletin, #remove-bulletin-dashboard').on('click', function() {
        setCookie('remove_bulletin', "gitee-maintain-1608862980");
        $('#git-bulletin').hide();
      });
      $('#remove-member-bulletin').on('click', function() {
        setCookie('remove_member_bulletin', "gitee_member_bulletin");
        $(this).parent().hide();
      });
      return $('#remove-gift-bulletin').on('click', function() {
        setCookie('remove_gift_bulletin', "gitee-gift-bulletin");
        $(this).parent().hide();
      });
    });
  
  }).call(this);
</script>
<script>
  function closeMessageBanner(pthis, type, val) {
    var json = {}
  
    val = typeof val === 'undefined' ? null : val
    $(pthis).parent().remove()
    if (type === 'out_of_enterprise_member') {
      json = {type: type, data: val}
    } else if (type === 'enterprise_overdue') {
      json = {type: type, data: val}
    }
    $.post('/profile/close_flash_tip', json)
  }
</script>

<div class='site-content'>
<div class='git-project-header'>
<div class='fixed-notice-infos'>
<div class='ui info icon floating message green' id='fetch-ok' style='display: none'>
<div class='content'>
<div class='header status-title'>
<i class='info icon status-icon'></i>
代码拉取完成，页面将自动刷新
</div>
</div>
</div>
<div class='ui info icon floating message error' id='fetch-error' style='display: none'>
<div class='content'>
<div class='header status-title'>
<i class='info icon status-icon'></i>
<span class='error_msg'></span>
</div>
</div>
</div>
</div>
<div class='ui container'>

<div class='git-project-header-details'>
<div class='git-project-header-container'>
<div class='git-project-header-actions'>
<div class='ui tiny modal project-donate-modal' id='project-donate-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>捐赠</div>
<div class='content'>
捐赠前请先登录
</div>
<div class='actions'>
<a class='ui blank button cancel'>取消</a>
<a class='ui orange ok button' href='/login'>前往登录</a>
</div>
</div>
<div class='ui small modal wepay-qrcode'>
<i class='iconfont icon-close close'></i>
<div class='header'>
扫描微信二维码支付
<span class='wepay-cash'></span>
</div>
<div class='content weqcode-center'>
<img id='wepay-qrcode' src=''>
</div>
<div class='actions'>
<div class='ui cancel blank button'>取消</div>
<div class='ui ok orange button'>
支付完成
</div>
</div>
</div>
<div class='ui mini modal' id='confirm-alipay-modal'>
<div class='header'>支付提示</div>
<div class='content'>
将跳转至支付宝完成支付
</div>
<div class='actions'>
<div class='ui approve orange button'>
确定
</div>
<div class='ui blank cancel button'>
取消
</div>
</div>
</div>

<span class='ui buttons basic watch-container'>
<div class='ui dropdown button js-project-watch' data-watch-type='unwatch'>
<input type='hidden' value=''>
<i class='iconfont icon-watch'></i>
<div class='text'>
Watch
</div>
<i class='dropdown icon'></i>
<div class='menu'>
<a class="item" data-method="post" data-value="unwatch" href="/xiaoqiang001/online-retailers/unwatch" rel="nofollow" sa_evt="loginInform_show" sa_referrer_action="Watch" sa_referrer_url=""><i class='iconfont icon-msg-read'></i>
不关注
</a><a class="item" data-method="post" data-value="watching" href="/xiaoqiang001/online-retailers/watch" rel="nofollow" sa_evt="loginInform_show" sa_referrer_action="Watch" sa_referrer_url=""><i class='iconfont icon-msg-read'></i>
关注所有动态
</a><a class="disabled item" data-method="post" data-value="releases_only" href="/xiaoqiang001/online-retailers/release_only_watch" rel="nofollow" sa_evt="loginInform_show" sa_referrer_action="Watch" sa_referrer_url=""><i class='iconfont icon-msg-read'></i>
仅关注版本发行动态
</a><a class="item" data-method="post" data-value="ignoring" href="/xiaoqiang001/online-retailers/ignoring_watch" rel="nofollow" sa_evt="loginInform_show" sa_referrer_action="Watch" sa_referrer_url=""><i class='iconfont icon-msg-read'></i>
关注但不提醒动态
</a></div>
</div>
<style>
  .js-project-watch .text .iconfont {
    display: none; }
  .js-project-watch a, .js-project-watch a:hover {
    color: #000; }
  .js-project-watch .item > .iconfont {
    visibility: hidden;
    margin-left: -10px; }
  .js-project-watch .selected .iconfont {
    visibility: visible; }
  .js-project-watch .menu {
    margin-top: 4px !important; }
</style>
<script>
  $('.js-project-watch').dropdown({
    action: 'select',
    onChange: function(value, text, $selectedItem) {
      var type = value === 'unwatch' ? 'Watch' : 'Watching';
      $(this).children('.text').text(type);
      $(this).dropdown('set selected', value)
    }
  });
</script>

<a class="ui button action-social-count" href="/xiaoqiang001/online-retailers/watchers" title="2">2
</a></span>
<span class='basic buttons star-container ui'>
<a class="ui button star" href="/login" sa_evt="loginInform_show" sa_referrer_action="Star" sa_referrer_url=""><i class='iconfont icon-star'></i>
Star
</a><a class="ui button action-social-count " href="/xiaoqiang001/online-retailers/stargazers" title="65">65
</a></span>
<span class='ui basic buttons fork-container' title='无权 Fork 此仓库'>
<a class="ui button fork" href="/login" sa_evt="loginInform_show" sa_referrer_action="Fork" sa_referrer_url="" title="你必须登录后才可以fork一个仓库"><i class='iconfont icon-fork'></i>
Fork
</a><a class="ui button action-social-count disabled-style" href="/xiaoqiang001/online-retailers/members" title="43">43
</a></span>
</div>
<h2 class='git-project-title'>
<span class="project-title"><i class="project-icon iconfont icon-project-public" title="这是一个公开仓库"></i> <a class="author" href="/xiaoqiang001" title="小强">小强</a> / <a class="repository" href="/xiaoqiang001/online-retailers" sa_evt="repoClick" sa_repo_id="12090785" sa_url="" style="padding-bottom: 0px" target="" title="电商">电商</a></span><span class="project-badges"><style>
  .gitee-modal {
    width: 500px !important; }
</style>
</span>
<input id="project_title" name="project_title" type="hidden" value="小强/电商" />
</h2>
</div>
</div>
</div>
<script>
  var title_import_url = "false";
  var title_post_url = "/xiaoqiang001/online-retailers/update_import";
  var title_fork_url = "/xiaoqiang001/online-retailers/sync_fork";
  var title_project_path = "online-retailers";
  var title_p_name = "电商";
  var title_p_id= "12090785";
  var title_description = "电商数据可视化配套素材";
  var title_form_authenticity_token = "mglt0PGXaHTvSEAw4WG1b800ppBlAw15cUJA2K9hssM=";
  var watch_type = "unwatch";
  
  $('.js-project-watch').dropdown('set selected', watch_type);
  $('.checkbox.sync-wiki').checkbox();
</script>
<style>
  i.loading {
    -webkit-animation: icon-loading 1.2s linear infinite;
    animation: icon-loading 1.2s linear infinite;
  }
  .qrcode_cs {
    float: left;
  }
  .check-sync-wiki {
    float: left;
    height: 28px;
    line-height: 28px;
  }
  .sync-wiki-warn {
    color: #e28560;
  }
</style>

<div class='git-project-nav'>
<div class='ui container'>
<div class='ui secondary pointing menu'>
<a class="item active" href="/xiaoqiang001/online-retailers"><i class='iconfont icon-code'></i>
代码
</a><a class="item " href="/xiaoqiang001/online-retailers/issues"><i class='iconfont icon-task'></i>
Issues
<span class='ui mini circular label'>
0
</span>
</a><a class="item big-wide " href="/xiaoqiang001/online-retailers/pulls"><i class='iconfont icon-pull-request'></i>
Pull Requests
<span class='ui mini circular label'>
1
</span>
</a><a class="item " href="/xiaoqiang001/online-retailers/wikis"><i class='iconfont icon-wiki'></i>
Wiki
<span class='ui mini circular label'>
0
</span>
</a><a class="item  " href="/xiaoqiang001/online-retailers/graph/master"><i class='iconfont icon-statistics'></i>
统计
</a><div class='item project-devops-item'>
<div class='ui pointing top right dropdown project-devops-dropdown'>
<div class='text'>
<i class='iconfont icon-devops'></i>
DevOps
</div>
<i class='dropdown icon'></i>
<div class='menu' style='display:none'>
<a class="item" href="/xiaoqiang001/online-retailers/gitee_go"><img alt="Giteego" src="https://assets.gitee.com/assets/giteego-7ec42270742374f05850d0d3ad09e303.png" />
<div class='item-title'>
Gitee Go
</div>
</a><a class="item" href="https://gitee.com/help/articles/4285" target="_blank"><img alt="Baidu efficiency cloud" src="https://assets.gitee.com/assets/baidu_efficiency_cloud-81a98c2eb67fac83b1453ca3d2feb326.svg" />
<div class='item-title'>
百度效率云
</div>
</a><a class="item" href="https://gitee.com/help/articles/4318" target="_blank"><img alt="Cloudbase" src="https://assets.gitee.com/assets/cloudbase-1197b95ea3398aff1df7fe17c65a6d42.png?20200925" />
<div class='item-title'>
腾讯云托管
</div>
</a><a class="item" href="https://gitee.com/help/articles/4330" target="_blank"><img alt="Cloud serverless" src="https://assets.gitee.com/assets/cloud_serverless-686cf926ced5d6d2f1d6e606d270b81e.png" />
<div class='item-title'>
腾讯云 Serverless
</div>
</a><a class="item" href="https://gitee.com/help/articles/4193" target="_blank"><img alt="Jenkins for gitee" src="https://assets.gitee.com/assets/jenkins_for_gitee-554ec65c490d0f1f18de632c48acc4e7.png" />
<div class='item-title'>
Jenkins for Gitee
</div>
</a></div>
</div>
</div>
<div class='item'>
<div class='ui pointing top right dropdown git-project-service'>
<div class='text'>
<i class='iconfont icon-service'></i>
服务
</div>
<i class='dropdown icon'></i>
<div class='menu' style='display:none'>
<a class="item" href="/xiaoqiang001/online-retailers/pages"><img alt="Logo en" src="/static/images/logo-en.svg" />
<div class='item-title'>
Gitee Pages
</div>
</a><a class="item" href="/xiaoqiang001/online-retailers/javadoc"><img alt="Maven" src="https://assets.gitee.com/assets/maven-bd58aee84f266d64d4b8ce5b006a9fcf.png" />
<div class='item-title'>
JavaDoc
</div>
</a><a class="item" href="/xiaoqiang001/online-retailers/phpdoc"><img alt="Phpdoc" src="https://assets.gitee.com/assets/phpdoc-a99f87c2feaa2fd99e5065377a39487e.png" />
<div class='item-title'>
PHPDoc
</div>
</a><a class="item" href="/xiaoqiang001/online-retailers/quality_analyses?platform=sonar_qube"><img alt="Sonar mini" src="https://assets.gitee.com/assets/sonar_mini-5e1b54bb9f6c951d97fb778ef623afea.png" />
<div class='item-title'>
质量分析
</div>
</a><a class="item" href="/xiaoqiang001/online-retailers/quality_analyses?platform=codesafe"><img alt="Codesafe mini" src="https://assets.gitee.com/assets/codesafe_mini-accbe1e555e9864c552620240d10e4de.png" width="100%" />
<div class='item-title'>
奇安信代码卫士
</div>
</a><a class="item" href="/xiaoqiang001/online-retailers/gitee_scans"><img alt="Giteescan" src="https://assets.gitee.com/assets/giteescan-cd9ab4076bd751faf7e30888eb10f782.png" />
<div class='item-title'>Gitee Scan</div>
</a><button class='ui orange basic button quit-button' id='quiting-button'>
我知道了，不再自动展开
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<script>
  $('.git-project-nav .ui.dropdown').dropdown({ action: 'nothing' });
</script>
<style>
  .git-project-nav i.checkmark.icon {
    color: green;
  }
  #quiting-button {
    display: none;
  }
  
  .git-project-nav .dropdown .menu.hidden:after {
    visibility: hidden !important;
  }
</style>
<script>
  isSignIn = false
  isClickGuide = false
  $('#git-versions.dropdown').dropdown();
  $.ajax({
    url:"/xiaoqiang001/online-retailers/access/add_access_log",
    type:"GET"
  });
  $('#quiting-button').on('click',function() {
    $('.git-project-service').click();
    if (isSignIn) {
      $.post("/projects/set_service_guide")
    }
    $.cookie("Serve_State", true, { expires: 3650, path: '/'})
    $('#quiting-button').hide();
  });
  if (!(isClickGuide || $.cookie("Serve_State") == 'true')) {
    $('.git-project-service').click()
    $('#quiting-button').show()
  }
</script>

</div>
<div class='ui container'>
<div class='register-guide'>
<div class='register-container'>
<div class='regist'>
加入 Gitee
</div>
<div class='description'>
与超过 500 万 开发者一起发现、参与优秀开源项目，私有仓库也完全免费 ：）
</div>
<a class="ui orange button free-registion" href="/signup?from=project-guide" sa_evt="register_show" sa_referrer_action="免费加入" sa_referrer_url="">免费加入</a>
<div class='login'>
已有帐号？
<a href="/login?from=project-guide">立即登录</a>
</div>
</div>
</div>

<div class='git-project-content-wrapper'>
<div class='ui grid' id='project-wrapper'>
<div class='sixteen wide column'>
<div class='git-project-content' id='git-project-content'>
<div class='row'>
<div class='git-project-desc-wrapper'>
<div class='ui yellow message no-license' id='user-no-license-message'>
该仓库未指定开源许可证，未经作者的许可，此代码仅用于学习，不能用于其他用途。
<i class='help circle icon'></i>
<div class='ui popup dark'>
项目仓库所选许可证以仓库主分支所使用许可证为准
</div>
<i class='remove icon' id='remove-no-license-message'></i>
</div>
<script>
  if (false) {
    gon.project_new_blob_path = "/xiaoqiang001/online-retailers/new/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision/public/static/theme/chalk.js"
    bindShowModal({
      el: $('.no-license .project-license__create'),
      complete: function(data, modal) {
        if (!data.haveNoChoice && !data.data) {
          Flash.show('请选择一项开源许可证')
        } else {
          location.href = gon.project_new_blob_path + '?license=' + data.data
        }
      },
      skip: function () {
        location.href = gon.project_new_blob_path + '?license'
      }
    });
  }
  
  $('i.help.circle.icon').popup({
    popup: '.no-license .ui.popup',
    position: 'right center'
  });
  
  $('#remove-no-license-message').on('click', function() {
    $.cookie("skip_repo_no_license_message_12090785", 'hide', { expires: 365 });
    $('#user-no-license-message').hide();
    return;
  });
</script>
</div>

</div>
<div class='git-project-bread' id='git-project-bread'>
<div class='ui horizontal list mr-1'>
<div class='item git-project-branch-item'>
<input id="path" name="path" type="hidden" value="第五天素材/03.代码/vision/public/static/theme/chalk.js" />
<div class='ui top left pointing dropdown gradient button dropdown-has-tabs' id='git-project-branch'>
<input id="ref" name="ref" type="hidden" value="master" />
<div class='default text'>
master
</div>
<i class='dropdown icon'></i>
<div class='menu'>
<div class='ui left icon search input'>
<i class='iconfont icon-search'></i>
<input class='search-branch' placeholder='搜索分支' type='text'>
</div>
<div class='tab-menu'>
<div class='tab-menu-action' data-tab='branches'>
<a class="ui link button" href="/xiaoqiang001/online-retailers/branches">管理</a>
</div>
<div class='tab-menu-action' data-tab='tags'>
<a class="ui link button" href="/xiaoqiang001/online-retailers/tags">管理</a>
</div>
<div class='tab-menu-item' data-placeholder='搜索分支' data-tab='branches'>
分支 (1)
</div>
</div>
<div class='tab scrolling menu' data-tab='branches'>
<div class="item" data-value="master"><span>master</span></div>
</div>
</div>
</div>
<style>
  .iconfont.icon-shieldlock {
    color: #8c92a4;
  }
</style>

<script>
  $(function () {
    Gitee.initTabsInDropdown($('#git-project-branch').dropdown({
      fullTextSearch: true,
      selectOnKeydown: true,
      action: function (text,value,el) {
        var oItemOrInitObject = el[0] || el
        var isNotSelect = oItemOrInitObject.dataset.tab && oItemOrInitObject.dataset.tab === 'branches'
        if(isNotSelect){
          console.warn("You didn't choose a branch")
          return
        } 
        var path = $('#path').val();
        var href = ['/xiaoqiang001/online-retailers/tree', encodeURIComponent(value), path].join('/');
        window.location.href = href;
        return true
      },
      onNoResults: function (searchTerm) {
        //未找到结果
        return true
      },
    }));
    $('.protected-branch-popup').popup()
  })
</script>

</div>
</div>
<div class='git-project-right-actions pull-right'>
<div class='ui orange button' id='btn-dl-or-clone'>
克隆/下载
<i class='dropdown icon'></i>
</div>
<div class='git-project-download-panel for-project ui bottom right popup'>
<div class='ui small secondary pointing menu'>
<a class='item active' data-text='' data-type='http' data-url='https://gitee.com/xiaoqiang001/online-retailers.git'>HTTPS</a>
<a class='item' data-text='' data-type='ssh' data-url='git@gitee.com:xiaoqiang001/online-retailers.git'>SSH</a>
<a class='item' data-text="该仓库未启用SVN访问，请仓库管理员前往【&lt;a target='_blank' href=/xiaoqiang001/online-retailers/settings&gt;仓库设置&lt;/a&gt;】开启。" data-type='svn' data-url=''>SVN</a>
<a class='item' data-text="该仓库未启用SVN访问，请仓库管理员前往【&lt;a target='_blank' href=/xiaoqiang001/online-retailers/settings&gt;仓库设置&lt;/a&gt;】开启。" data-type='svn_ssh' data-url=''>SVN+SSH</a>
</div>
<div class='ui fluid right labeled small input download-url-panel'>
<input id="project_clone_url" name="project_clone_url" onclick="focus();select()" readonly="readonly" type="text" value="https://gitee.com/xiaoqiang001/online-retailers.git" />
<div class='ui basic label'>
<div class='ui small basic orange button' data-clipboard-target='#project_clone_url' id='btn-copy-clone-url'>
复制
</div>
</div>
</div>
<div class='ui fluid right labeled warning-text forbid-warning-text'>

</div>
<hr>
<a class="ui fluid download link button" href="javascript:void(0);" sa_evt="loginInform_show" sa_referrer_action="克隆/下载" sa_referrer_url=""><i class='icon download'></i>
下载ZIP
</a><div class='download_repository_zip form modal tiny ui' id='unlanding-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
登录提示
</div>
<div class='container actions'>
<div class='content'>
该操作需登录 Gitee 帐号，请先登录后再操作。
</div>
<div class='ui orange icon large button ok'>
立即登录
</div>
<div class='ui button blank cancel'>
没有帐号，去注册
</div>
</div>
</div>
<script>
  var $elm = $('.download');
  
  $elm.on('click', function() {
    var modals = $("#unlanding-complaint-modal.download_repository_zip");
    if (modals.length > 1) {
      modals.eq(0).modal('show');
    } else {
      modals.modal('show');
    }
  })
  $("#unlanding-complaint-modal.download_repository_zip").modal({
    onDeny: function() {
      window.location.href = "/signup?from=download_repository_zip";
    },
    onApprove: function() {
      window.location.href = "/login?from=download_repository_zip";
    }
  })
</script>

</div>
<script>
  (function() {
    var $btnClone, $btnCopy, $input, $panel;
  
    $btnClone = $('#btn-dl-or-clone');
  
    $panel = $('.git-project-download-panel');
  
    $input = $('#project_clone_url');
  
    $btnCopy = $('#btn-copy-clone-url');
  
    $btnClone.popup({
      on: 'click',
      hoverable: true,
      position: 'bottom center'
    });
  
    $panel.find('.menu > .item').on('click', function(e) {
      var $item, dataUrl;
      $item = $(this).addClass('active');
      $item.siblings().removeClass('active');
      dataUrl = $item.attr('data-url');
      if (dataUrl) {
        $panel.find('.download-url-panel').show();
        $input.val(dataUrl);
        $panel.find('.forbid-warning-text').html('');
      } else {
        $panel.find('.download-url-panel').hide();
        $panel.find('.forbid-warning-text').html($item.attr('data-text') || '');
      }
      return $.cookie('remote_way', $item.attr('data-type'), {
        expires: 365,
        path: '/'
      });
    }).filter('[data-type="http"]').trigger('click');
  
    new Clipboard($btnCopy[0]).on('success', function() {
      $btnCopy.popup({
        content: '已复制',
        position: 'right center',
        onHidden: function() {
          return $btnCopy.popup('destroy');
        }
      });
      return $btnCopy.popup('show');
    });
  
  }).call(this);
</script>

</div>
<div class='d-inline pull-right' id='git-project-root-actions'>
<script>
  $('.disabled-upload-readonly').popup({
    content: "只读目录不允许上传文件",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-folder').popup({
    content: "只读目录不允许创建目录",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-file').popup({
    content: "只读目录不允许创建文件",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-upload-readonly').click(() => {
    return false
  })
  $('.disabled-create-folder').click(() => {
    return false
  })
  $('.disabled-create-file').click(() => {
    return false
  })
</script>
<style>
  .disabled-upload-readonly, .disabled-create-file, .disabled-create-folder {
    background-color: #dcddde !important;
    color: rgba(0, 0, 0, 0.4) !important;
    opacity: 0.3 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important; }
</style>


</div>
<div class='breadcrumb_path path-breadcrumb-contrainer' id='git-project-breadcrumb'>
<div class='ui breadcrumb path project-path-breadcrumb' id='path-breadcrumb'>
<a class="section repo-name" data-direction="back" href="/xiaoqiang001/online-retailers/tree/master" style="font-weight: bold">online-retailers
</a><div class='divider'>
/
</div>
<strong>
<a class="section" data-direction="back" href="/xiaoqiang001/online-retailers/tree/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90"><span class='cblue'>
第五天素材
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
<a class="section" data-direction="back" href="/xiaoqiang001/online-retailers/tree/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81"><span class='cblue'>
03.代码
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
<a class="section" data-direction="back" href="/xiaoqiang001/online-retailers/tree/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision"><span class='cblue'>
vision
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
<a class="section" data-direction="back" href="/xiaoqiang001/online-retailers/tree/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision/public"><span class='cblue'>
public
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
<a class="section" data-direction="back" href="/xiaoqiang001/online-retailers/tree/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision/public/static"><span class='cblue'>
static
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
<a class="section" data-direction="back" href="/xiaoqiang001/online-retailers/tree/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision/public/static/theme"><span class='cblue'>
theme
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
chalk.js
</strong>
</div>


</div>
<div class='ui horizontal list repo-action-list' style='display: none;'>
<div class='item'>
<a class="ui blank button" href="/xiaoqiang001/online-retailers/branches"><i class='iconfont icon-branches'></i>
分支 1
</a></div>
<div class='item mr-3'>
<a class="ui blank button" href="/xiaoqiang001/online-retailers/tags"><i class='iconfont icon-tag'></i>
标签 0
</a></div>
</div>
</div>

<style>
  .ui.dropdown .menu > .header {
    text-transform: none; }
</style>
<script>
  $(function () {
    var $tip = $('#apk-download-tip');
    if (!$tip.length) {
      return;
    }
    $tip.find('.btn-close').on('click', function () {
      $tip.hide();
    });
  });
  (function(){
    function pathAutoRender() {
      var $parent = $('#git-project-bread'),
          $child = $('#git-project-bread').children('.ui.horizontal.list'),
          mainWidth = 0;
      $child.each(function (i,item) {
        mainWidth += $(item).width()
      });
      $('.breadcrumb.path.fork-path').remove();
      if (mainWidth > 995) {
        $('#path-breadcrumb').hide();
        $parent.append('<div class="ui breadcrumb path fork-path">' + $('#path-breadcrumb').html() + '<div/>')
      } else {
        $('#path-breadcrumb').show();
      }
    }
    window.pathAutoRender = pathAutoRender;
    pathAutoRender();
  })();
</script>

<div class='row column tree-holder' id='tree-holder'>
<div class='tree-content-holder' id='tree-content-holder'>
<div class='file_holder'>
<div class='file_title'>
<div class='blob-header-title'>
<div class='blob-description'>
<i class="iconfont icon-file"></i>
<span class='file_name' title='chalk.js'>
chalk.js
</span>
<small>13.88 KB</small>
</div>
<div class='options'><div class='ui mini buttons basic'>
<textarea id="blob_raw" name="blob_raw" style="display:none;">
(function (root, factory) {&#x000A;    if (typeof define === &#39;function&#39; &amp;&amp; define.amd) {&#x000A;        // AMD. Register as an anonymous module.&#x000A;        define([&#39;exports&#39;, &#39;echarts&#39;], factory);&#x000A;    } else if (typeof exports === &#39;object&#39; &amp;&amp; typeof exports.nodeName !== &#39;string&#39;) {&#x000A;        // CommonJS&#x000A;        factory(exports, require(&#39;echarts&#39;));&#x000A;    } else {&#x000A;        // Browser globals&#x000A;        factory({}, root.echarts);&#x000A;    }&#x000A;}(this, function (exports, echarts) {&#x000A;    var log = function (msg) {&#x000A;        if (typeof console !== &#39;undefined&#39;) {&#x000A;            console &amp;&amp; console.error &amp;&amp; console.error(msg);&#x000A;        }&#x000A;    };&#x000A;    if (!echarts) {&#x000A;        log(&#39;ECharts is not Loaded&#39;);&#x000A;        return;&#x000A;    }&#x000A;    echarts.registerTheme(&#39;chalk&#39;, {&#x000A;        &quot;color&quot;: [&#x000A;            &#39;#0ba82c&#39;,&#x000A;            &#39;#2c6eff&#39;,&#x000A;            &#39;#16f2d9&#39;,&#x000A;            &#39;#fe211e&#39;,&#x000A;            &#39;#fa6900&#39;,&#x000A;            &quot;#eedd78&quot;,&#x000A;            &quot;#73a373&quot;,&#x000A;            &quot;#73b9bc&quot;,&#x000A;            &quot;#7289ab&quot;,&#x000A;            &quot;#91ca8c&quot;,&#x000A;            &quot;#f49f42&quot;&#x000A;        ],&#x000A;        &quot;backgroundColor&quot;: &quot;#222733&quot;,&#x000A;        &quot;textStyle&quot;: {},&#x000A;        &quot;title&quot;: {&#x000A;            &quot;textStyle&quot;: {&#x000A;                &quot;color&quot;: &quot;#ffffff&quot;&#x000A;            },&#x000A;            &quot;subtextStyle&quot;: {&#x000A;                &quot;color&quot;: &quot;#dddddd&quot;&#x000A;            }&#x000A;        },&#x000A;        &quot;line&quot;: {&#x000A;            &quot;itemStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;borderWidth&quot;: &quot;4&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;lineStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;width&quot;: &quot;3&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;symbolSize&quot;: &quot;0&quot;,&#x000A;            &quot;symbol&quot;: &quot;circle&quot;,&#x000A;            &quot;smooth&quot;: true&#x000A;        },&#x000A;        &quot;radar&quot;: {&#x000A;            &quot;itemStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;borderWidth&quot;: &quot;4&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;lineStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;width&quot;: &quot;3&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;symbolSize&quot;: &quot;0&quot;,&#x000A;            &quot;symbol&quot;: &quot;circle&quot;,&#x000A;            &quot;smooth&quot;: true&#x000A;        },&#x000A;        &quot;bar&quot;: {&#x000A;            &quot;itemStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;barBorderWidth&quot;: 0,&#x000A;                    &quot;barBorderColor&quot;: &quot;#ccc&quot;&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;barBorderWidth&quot;: 0,&#x000A;                    &quot;barBorderColor&quot;: &quot;#ccc&quot;&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;pie&quot;: {&#x000A;            &quot;itemStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;borderWidth&quot;: 0,&#x000A;                    &quot;borderColor&quot;: &quot;#ccc&quot;&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;borderWidth&quot;: 0,&#x000A;                    &quot;borderColor&quot;: &quot;#ccc&quot;&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;scatter&quot;: {&#x000A;            &quot;itemStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;borderWidth&quot;: 0,&#x000A;                    &quot;borderColor&quot;: &quot;#ccc&quot;&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;borderWidth&quot;: 0,&#x000A;                    &quot;borderColor&quot;: &quot;#ccc&quot;&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;boxplot&quot;: {&#x000A;            &quot;itemStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;borderWidth&quot;: 0,&#x000A;                    &quot;borderColor&quot;: &quot;#ccc&quot;&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;borderWidth&quot;: 0,&#x000A;                    &quot;borderColor&quot;: &quot;#ccc&quot;&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;parallel&quot;: {&#x000A;            &quot;itemStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;borderWidth&quot;: 0,&#x000A;                    &quot;borderColor&quot;: &quot;#ccc&quot;&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;borderWidth&quot;: 0,&#x000A;                    &quot;borderColor&quot;: &quot;#ccc&quot;&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;sankey&quot;: {&#x000A;            &quot;itemStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;borderWidth&quot;: 0,&#x000A;                    &quot;borderColor&quot;: &quot;#ccc&quot;&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;borderWidth&quot;: 0,&#x000A;                    &quot;borderColor&quot;: &quot;#ccc&quot;&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;funnel&quot;: {&#x000A;            &quot;itemStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;borderWidth&quot;: 0,&#x000A;                    &quot;borderColor&quot;: &quot;#ccc&quot;&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;borderWidth&quot;: 0,&#x000A;                    &quot;borderColor&quot;: &quot;#ccc&quot;&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;gauge&quot;: {&#x000A;            &quot;itemStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;borderWidth&quot;: 0,&#x000A;                    &quot;borderColor&quot;: &quot;#ccc&quot;&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;borderWidth&quot;: 0,&#x000A;                    &quot;borderColor&quot;: &quot;#ccc&quot;&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;candlestick&quot;: {&#x000A;            &quot;itemStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;color&quot;: &quot;#fc97af&quot;,&#x000A;                    &quot;color0&quot;: &quot;transparent&quot;,&#x000A;                    &quot;borderColor&quot;: &quot;#fc97af&quot;,&#x000A;                    &quot;borderColor0&quot;: &quot;#87f7cf&quot;,&#x000A;                    &quot;borderWidth&quot;: &quot;2&quot;&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;graph&quot;: {&#x000A;            &quot;itemStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;borderWidth&quot;: 0,&#x000A;                    &quot;borderColor&quot;: &quot;#ccc&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;lineStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;width&quot;: &quot;1&quot;,&#x000A;                    &quot;color&quot;: &quot;#ffffff&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;symbolSize&quot;: &quot;0&quot;,&#x000A;            &quot;symbol&quot;: &quot;circle&quot;,&#x000A;            &quot;smooth&quot;: true,&#x000A;            &quot;color&quot;: [&#x000A;                &quot;#759aa0&quot;,&#x000A;                &quot;#dd6b66&quot;,&#x000A;                &quot;#e69d87&quot;,&#x000A;                &quot;#8dc1a9&quot;,&#x000A;                &quot;#ea7e53&quot;,&#x000A;                &quot;#eedd78&quot;,&#x000A;                &quot;#73a373&quot;,&#x000A;                &quot;#73b9bc&quot;,&#x000A;                &quot;#7289ab&quot;,&#x000A;                &quot;#91ca8c&quot;,&#x000A;                &quot;#f49f42&quot;&#x000A;            ],&#x000A;            &quot;label&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;textStyle&quot;: {&#x000A;                        &quot;color&quot;: &quot;#293441&quot;&#x000A;                    }&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;map&quot;: {&#x000A;            &quot;itemStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;areaColor&quot;: &quot;#f3f3f3&quot;,&#x000A;                    &quot;borderColor&quot;: &quot;#999999&quot;,&#x000A;                    &quot;borderWidth&quot;: 0.5&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;areaColor&quot;: &quot;rgba(255,178,72,1)&quot;,&#x000A;                    &quot;borderColor&quot;: &quot;#eb8146&quot;,&#x000A;                    &quot;borderWidth&quot;: 1&#x000A;                }&#x000A;            },&#x000A;            &quot;label&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;textStyle&quot;: {&#x000A;                        &quot;color&quot;: &quot;#893448&quot;&#x000A;                    }&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;textStyle&quot;: {&#x000A;                        &quot;color&quot;: &quot;rgb(137,52,72)&quot;&#x000A;                    }&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;geo&quot;: {&#x000A;            &quot;itemStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;areaColor&quot;: &quot;#f3f3f3&quot;,&#x000A;                    &quot;borderColor&quot;: &quot;#999999&quot;,&#x000A;                    &quot;borderWidth&quot;: 0.5&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;areaColor&quot;: &quot;rgba(255,178,72,1)&quot;,&#x000A;                    &quot;borderColor&quot;: &quot;#eb8146&quot;,&#x000A;                    &quot;borderWidth&quot;: 1&#x000A;                }&#x000A;            },&#x000A;            &quot;label&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;textStyle&quot;: {&#x000A;                        &quot;color&quot;: &quot;#893448&quot;&#x000A;                    }&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;textStyle&quot;: {&#x000A;                        &quot;color&quot;: &quot;rgb(137,52,72)&quot;&#x000A;                    }&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;categoryAxis&quot;: {&#x000A;            &quot;axisLine&quot;: {&#x000A;                &quot;show&quot;: true,&#x000A;                &quot;lineStyle&quot;: {&#x000A;                    &quot;color&quot;: &quot;#666666&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;axisTick&quot;: {&#x000A;                &quot;show&quot;: false,&#x000A;                &quot;lineStyle&quot;: {&#x000A;                    &quot;color&quot;: &quot;#333&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;axisLabel&quot;: {&#x000A;                &quot;show&quot;: true,&#x000A;                &quot;textStyle&quot;: {&#x000A;                    &quot;color&quot;: &quot;#aaaaaa&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;splitLine&quot;: {&#x000A;                &quot;show&quot;: false,&#x000A;                &quot;lineStyle&quot;: {&#x000A;                    &quot;color&quot;: [&#x000A;                        &quot;#e6e6e6&quot;&#x000A;                    ]&#x000A;                }&#x000A;            },&#x000A;            &quot;splitArea&quot;: {&#x000A;                &quot;show&quot;: false,&#x000A;                &quot;areaStyle&quot;: {&#x000A;                    &quot;color&quot;: [&#x000A;                        &quot;rgba(250,250,250,0.05)&quot;,&#x000A;                        &quot;rgba(200,200,200,0.02)&quot;&#x000A;                    ]&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;valueAxis&quot;: {&#x000A;            &quot;axisLine&quot;: {&#x000A;                &quot;show&quot;: true,&#x000A;                &quot;lineStyle&quot;: {&#x000A;                    &quot;color&quot;: &quot;#666666&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;axisTick&quot;: {&#x000A;                &quot;show&quot;: false,&#x000A;                &quot;lineStyle&quot;: {&#x000A;                    &quot;color&quot;: &quot;#333&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;axisLabel&quot;: {&#x000A;                &quot;show&quot;: true,&#x000A;                &quot;textStyle&quot;: {&#x000A;                    &quot;color&quot;: &quot;#aaaaaa&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;splitLine&quot;: {&#x000A;                &quot;show&quot;: false,&#x000A;                &quot;lineStyle&quot;: {&#x000A;                    &quot;color&quot;: [&#x000A;                        &quot;#e6e6e6&quot;&#x000A;                    ]&#x000A;                }&#x000A;            },&#x000A;            &quot;splitArea&quot;: {&#x000A;                &quot;show&quot;: false,&#x000A;                &quot;areaStyle&quot;: {&#x000A;                    &quot;color&quot;: [&#x000A;                        &quot;rgba(250,250,250,0.05)&quot;,&#x000A;                        &quot;rgba(200,200,200,0.02)&quot;&#x000A;                    ]&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;logAxis&quot;: {&#x000A;            &quot;axisLine&quot;: {&#x000A;                &quot;show&quot;: true,&#x000A;                &quot;lineStyle&quot;: {&#x000A;                    &quot;color&quot;: &quot;#666666&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;axisTick&quot;: {&#x000A;                &quot;show&quot;: false,&#x000A;                &quot;lineStyle&quot;: {&#x000A;                    &quot;color&quot;: &quot;#333&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;axisLabel&quot;: {&#x000A;                &quot;show&quot;: true,&#x000A;                &quot;textStyle&quot;: {&#x000A;                    &quot;color&quot;: &quot;#aaaaaa&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;splitLine&quot;: {&#x000A;                &quot;show&quot;: false,&#x000A;                &quot;lineStyle&quot;: {&#x000A;                    &quot;color&quot;: [&#x000A;                        &quot;#e6e6e6&quot;&#x000A;                    ]&#x000A;                }&#x000A;            },&#x000A;            &quot;splitArea&quot;: {&#x000A;                &quot;show&quot;: false,&#x000A;                &quot;areaStyle&quot;: {&#x000A;                    &quot;color&quot;: [&#x000A;                        &quot;rgba(250,250,250,0.05)&quot;,&#x000A;                        &quot;rgba(200,200,200,0.02)&quot;&#x000A;                    ]&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;timeAxis&quot;: {&#x000A;            &quot;axisLine&quot;: {&#x000A;                &quot;show&quot;: true,&#x000A;                &quot;lineStyle&quot;: {&#x000A;                    &quot;color&quot;: &quot;#666666&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;axisTick&quot;: {&#x000A;                &quot;show&quot;: false,&#x000A;                &quot;lineStyle&quot;: {&#x000A;                    &quot;color&quot;: &quot;#333&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;axisLabel&quot;: {&#x000A;                &quot;show&quot;: true,&#x000A;                &quot;textStyle&quot;: {&#x000A;                    &quot;color&quot;: &quot;#aaaaaa&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;splitLine&quot;: {&#x000A;                &quot;show&quot;: false,&#x000A;                &quot;lineStyle&quot;: {&#x000A;                    &quot;color&quot;: [&#x000A;                        &quot;#e6e6e6&quot;&#x000A;                    ]&#x000A;                }&#x000A;            },&#x000A;            &quot;splitArea&quot;: {&#x000A;                &quot;show&quot;: false,&#x000A;                &quot;areaStyle&quot;: {&#x000A;                    &quot;color&quot;: [&#x000A;                        &quot;rgba(250,250,250,0.05)&quot;,&#x000A;                        &quot;rgba(200,200,200,0.02)&quot;&#x000A;                    ]&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;toolbox&quot;: {&#x000A;            &quot;iconStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;borderColor&quot;: &quot;#999999&quot;&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;borderColor&quot;: &quot;#666666&quot;&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;legend&quot;: {&#x000A;            &quot;textStyle&quot;: {&#x000A;                &quot;color&quot;: &quot;#999999&quot;&#x000A;            }&#x000A;        },&#x000A;        &quot;tooltip&quot;: {&#x000A;            &quot;axisPointer&quot;: {&#x000A;                &quot;lineStyle&quot;: {&#x000A;                    &quot;color&quot;: &quot;#cccccc&quot;,&#x000A;                    &quot;width&quot;: 1&#x000A;                },&#x000A;                &quot;crossStyle&quot;: {&#x000A;                    &quot;color&quot;: &quot;#cccccc&quot;,&#x000A;                    &quot;width&quot;: 1&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;timeline&quot;: {&#x000A;            &quot;lineStyle&quot;: {&#x000A;                &quot;color&quot;: &quot;#87f7cf&quot;,&#x000A;                &quot;width&quot;: 1&#x000A;            },&#x000A;            &quot;itemStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;color&quot;: &quot;#87f7cf&quot;,&#x000A;                    &quot;borderWidth&quot;: 1&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;color&quot;: &quot;#f7f494&quot;&#x000A;                }&#x000A;            },&#x000A;            &quot;controlStyle&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;color&quot;: &quot;#87f7cf&quot;,&#x000A;                    &quot;borderColor&quot;: &quot;#87f7cf&quot;,&#x000A;                    &quot;borderWidth&quot;: 0.5&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;color&quot;: &quot;#87f7cf&quot;,&#x000A;                    &quot;borderColor&quot;: &quot;#87f7cf&quot;,&#x000A;                    &quot;borderWidth&quot;: 0.5&#x000A;                }&#x000A;            },&#x000A;            &quot;checkpointStyle&quot;: {&#x000A;                &quot;color&quot;: &quot;#fc97af&quot;,&#x000A;                &quot;borderColor&quot;: &quot;rgba(252,151,175,0.3)&quot;&#x000A;            },&#x000A;            &quot;label&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;textStyle&quot;: {&#x000A;                        &quot;color&quot;: &quot;#87f7cf&quot;&#x000A;                    }&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;textStyle&quot;: {&#x000A;                        &quot;color&quot;: &quot;#87f7cf&quot;&#x000A;                    }&#x000A;                }&#x000A;            }&#x000A;        },&#x000A;        &quot;visualMap&quot;: {&#x000A;            &quot;color&quot;: [&#x000A;                &quot;#fc97af&quot;,&#x000A;                &quot;#87f7cf&quot;&#x000A;            ]&#x000A;        },&#x000A;        &quot;dataZoom&quot;: {&#x000A;            &quot;backgroundColor&quot;: &quot;rgba(255,255,255,0)&quot;,&#x000A;            &quot;dataBackgroundColor&quot;: &quot;rgba(114,204,255,1)&quot;,&#x000A;            &quot;fillerColor&quot;: &quot;rgba(114,204,255,0.2)&quot;,&#x000A;            &quot;handleColor&quot;: &quot;#72ccff&quot;,&#x000A;            &quot;handleSize&quot;: &quot;100%&quot;,&#x000A;            &quot;textStyle&quot;: {&#x000A;                &quot;color&quot;: &quot;#333333&quot;&#x000A;            }&#x000A;        },&#x000A;        &quot;markPoint&quot;: {&#x000A;            &quot;label&quot;: {&#x000A;                &quot;normal&quot;: {&#x000A;                    &quot;textStyle&quot;: {&#x000A;                        &quot;color&quot;: &quot;#293441&quot;&#x000A;                    }&#x000A;                },&#x000A;                &quot;emphasis&quot;: {&#x000A;                    &quot;textStyle&quot;: {&#x000A;                        &quot;color&quot;: &quot;#293441&quot;&#x000A;                    }&#x000A;                }&#x000A;            }&#x000A;        }&#x000A;    });&#x000A;}));&#x000A;</textarea>
<a class="ui button" href="#" id="copy-text" style="border-left: none;">一键复制</a>
<a class="ui button edit-blob" href="/xiaoqiang001/online-retailers/edit/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision/public/static/theme/chalk.js" title="只有登陆后才可以编辑">编辑</a>
<a class="ui button web-ide" href="/-/ide/project/xiaoqiang001/online-retailers/edit/master/-/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision/public/static/theme/chalk.js" target="_blank">Web IDE</a>
<a class="ui button edit-raw" href="/xiaoqiang001/online-retailers/raw/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision/public/static/theme/chalk.js" target="_blank">原始数据</a>
<a class="ui button edit-blame" href="/xiaoqiang001/online-retailers/blame/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision/public/static/theme/chalk.js">按行查看</a>
<a class="ui button edit-history" href="/xiaoqiang001/online-retailers/commits/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision/public/static/theme/chalk.js">历史</a>
</div>
<script>
  "use strict";
  try {
    if((gon.wait_fork!=undefined && gon.wait_fork==true) || (gon.wait_fetch!=undefined && gon.wait_fetch==true)){
      $('.edit-blob').popup({content:"当前仓库正在后台处理中,暂时无法编辑", on: 'hover', delay: { show: 200, hide: 200 }});
      $('.edit-blob').click(function(e){
        e.preventDefault();
      })
    }
  
    var setUrl = function() {
      var params = window.location.search
      if (params==undefined || $.trim(params).length==0) return;
      $('span.options').children('.basic').find('a').each(function(index,ele){
        var origin_href = $(ele).attr('href');
        if (origin_href!="#" && origin_href.indexOf('?') == -1){
          $(ele).attr('href',origin_href+params);
        }
      });
    }
  
    setUrl();
  
    var clipboard = null,
        $btncopy  = $("#copy-text");
  
    clipboard = new Clipboard("#copy-text", {
      text: function(trigger) {
        return $("#blob_raw").val();
      }
    })
  
    clipboard.on('success', function(e) {
      $btncopy.popup('hide');
      $btncopy.popup('destroy');
      $btncopy.popup({content: '已复制', position: 'bottom center'});
      $btncopy.popup('show');
    })
  
    clipboard.on('error', function(e) {
      var giteeModal = new GiteeModalHelper({okText: '确定'});
      giteeModal.alert("一键复制", '复制失败，请手动复制');
    })
  
    $(function() {
      $btncopy.popup({
        content: '点击复制',
        position: 'bottom center'
      })
    })
  
  } catch (error) {
    console.log('blob/action error:' + error);
  }
  
  $('.disabled-edit-readonly').popup({
    content: "只读文件不可编辑",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-edit-readonly').click(() => {
    return false
  })
</script>
<style>
  .disabled-edit-readonly {
    background-color: #dcddde !important;
    color: rgba(0, 0, 0, 0.4) !important;
    opacity: 0.3 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important; }
</style>
</div>
</div>
<div class='contributor-description'><span class='recent-commit' style='margin-top: 0.7rem'>
<a class="commit-author-link  js-popover-card " data-username="xiaoqiang001" href="/xiaoqiang001">小强</a>
<span>提交于</span>
<span class='timeago commit-date' title='2020-10-10 16:39:41 +0800'>
2020-10-10 16:39
</span>
.
<a href="/xiaoqiang001/online-retailers/commit/8226c661b3c1bda9253c3c3bfe9665d3bcfe88e5">更新电商数据可视化素材</a>
</span>
</div>
</div>
<div class='clearfix'></div>
<div class='file_content code'>
<div class='lines white'>
<div class='line-numbers'><a href='#L1' id='L1'>1</a><a href='#L2' id='L2'>2</a><a href='#L3' id='L3'>3</a><a href='#L4' id='L4'>4</a><a href='#L5' id='L5'>5</a><a href='#L6' id='L6'>6</a><a href='#L7' id='L7'>7</a><a href='#L8' id='L8'>8</a><a href='#L9' id='L9'>9</a><a href='#L10' id='L10'>10</a><a href='#L11' id='L11'>11</a><a href='#L12' id='L12'>12</a><a href='#L13' id='L13'>13</a><a href='#L14' id='L14'>14</a><a href='#L15' id='L15'>15</a><a href='#L16' id='L16'>16</a><a href='#L17' id='L17'>17</a><a href='#L18' id='L18'>18</a><a href='#L19' id='L19'>19</a><a href='#L20' id='L20'>20</a><a href='#L21' id='L21'>21</a><a href='#L22' id='L22'>22</a><a href='#L23' id='L23'>23</a><a href='#L24' id='L24'>24</a><a href='#L25' id='L25'>25</a><a href='#L26' id='L26'>26</a><a href='#L27' id='L27'>27</a><a href='#L28' id='L28'>28</a><a href='#L29' id='L29'>29</a><a href='#L30' id='L30'>30</a><a href='#L31' id='L31'>31</a><a href='#L32' id='L32'>32</a><a href='#L33' id='L33'>33</a><a href='#L34' id='L34'>34</a><a href='#L35' id='L35'>35</a><a href='#L36' id='L36'>36</a><a href='#L37' id='L37'>37</a><a href='#L38' id='L38'>38</a><a href='#L39' id='L39'>39</a><a href='#L40' id='L40'>40</a><a href='#L41' id='L41'>41</a><a href='#L42' id='L42'>42</a><a href='#L43' id='L43'>43</a><a href='#L44' id='L44'>44</a><a href='#L45' id='L45'>45</a><a href='#L46' id='L46'>46</a><a href='#L47' id='L47'>47</a><a href='#L48' id='L48'>48</a><a href='#L49' id='L49'>49</a><a href='#L50' id='L50'>50</a><a href='#L51' id='L51'>51</a><a href='#L52' id='L52'>52</a><a href='#L53' id='L53'>53</a><a href='#L54' id='L54'>54</a><a href='#L55' id='L55'>55</a><a href='#L56' id='L56'>56</a><a href='#L57' id='L57'>57</a><a href='#L58' id='L58'>58</a><a href='#L59' id='L59'>59</a><a href='#L60' id='L60'>60</a><a href='#L61' id='L61'>61</a><a href='#L62' id='L62'>62</a><a href='#L63' id='L63'>63</a><a href='#L64' id='L64'>64</a><a href='#L65' id='L65'>65</a><a href='#L66' id='L66'>66</a><a href='#L67' id='L67'>67</a><a href='#L68' id='L68'>68</a><a href='#L69' id='L69'>69</a><a href='#L70' id='L70'>70</a><a href='#L71' id='L71'>71</a><a href='#L72' id='L72'>72</a><a href='#L73' id='L73'>73</a><a href='#L74' id='L74'>74</a><a href='#L75' id='L75'>75</a><a href='#L76' id='L76'>76</a><a href='#L77' id='L77'>77</a><a href='#L78' id='L78'>78</a><a href='#L79' id='L79'>79</a><a href='#L80' id='L80'>80</a><a href='#L81' id='L81'>81</a><a href='#L82' id='L82'>82</a><a href='#L83' id='L83'>83</a><a href='#L84' id='L84'>84</a><a href='#L85' id='L85'>85</a><a href='#L86' id='L86'>86</a><a href='#L87' id='L87'>87</a><a href='#L88' id='L88'>88</a><a href='#L89' id='L89'>89</a><a href='#L90' id='L90'>90</a><a href='#L91' id='L91'>91</a><a href='#L92' id='L92'>92</a><a href='#L93' id='L93'>93</a><a href='#L94' id='L94'>94</a><a href='#L95' id='L95'>95</a><a href='#L96' id='L96'>96</a><a href='#L97' id='L97'>97</a><a href='#L98' id='L98'>98</a><a href='#L99' id='L99'>99</a><a href='#L100' id='L100'>100</a><a href='#L101' id='L101'>101</a><a href='#L102' id='L102'>102</a><a href='#L103' id='L103'>103</a><a href='#L104' id='L104'>104</a><a href='#L105' id='L105'>105</a><a href='#L106' id='L106'>106</a><a href='#L107' id='L107'>107</a><a href='#L108' id='L108'>108</a><a href='#L109' id='L109'>109</a><a href='#L110' id='L110'>110</a><a href='#L111' id='L111'>111</a><a href='#L112' id='L112'>112</a><a href='#L113' id='L113'>113</a><a href='#L114' id='L114'>114</a><a href='#L115' id='L115'>115</a><a href='#L116' id='L116'>116</a><a href='#L117' id='L117'>117</a><a href='#L118' id='L118'>118</a><a href='#L119' id='L119'>119</a><a href='#L120' id='L120'>120</a><a href='#L121' id='L121'>121</a><a href='#L122' id='L122'>122</a><a href='#L123' id='L123'>123</a><a href='#L124' id='L124'>124</a><a href='#L125' id='L125'>125</a><a href='#L126' id='L126'>126</a><a href='#L127' id='L127'>127</a><a href='#L128' id='L128'>128</a><a href='#L129' id='L129'>129</a><a href='#L130' id='L130'>130</a><a href='#L131' id='L131'>131</a><a href='#L132' id='L132'>132</a><a href='#L133' id='L133'>133</a><a href='#L134' id='L134'>134</a><a href='#L135' id='L135'>135</a><a href='#L136' id='L136'>136</a><a href='#L137' id='L137'>137</a><a href='#L138' id='L138'>138</a><a href='#L139' id='L139'>139</a><a href='#L140' id='L140'>140</a><a href='#L141' id='L141'>141</a><a href='#L142' id='L142'>142</a><a href='#L143' id='L143'>143</a><a href='#L144' id='L144'>144</a><a href='#L145' id='L145'>145</a><a href='#L146' id='L146'>146</a><a href='#L147' id='L147'>147</a><a href='#L148' id='L148'>148</a><a href='#L149' id='L149'>149</a><a href='#L150' id='L150'>150</a><a href='#L151' id='L151'>151</a><a href='#L152' id='L152'>152</a><a href='#L153' id='L153'>153</a><a href='#L154' id='L154'>154</a><a href='#L155' id='L155'>155</a><a href='#L156' id='L156'>156</a><a href='#L157' id='L157'>157</a><a href='#L158' id='L158'>158</a><a href='#L159' id='L159'>159</a><a href='#L160' id='L160'>160</a><a href='#L161' id='L161'>161</a><a href='#L162' id='L162'>162</a><a href='#L163' id='L163'>163</a><a href='#L164' id='L164'>164</a><a href='#L165' id='L165'>165</a><a href='#L166' id='L166'>166</a><a href='#L167' id='L167'>167</a><a href='#L168' id='L168'>168</a><a href='#L169' id='L169'>169</a><a href='#L170' id='L170'>170</a><a href='#L171' id='L171'>171</a><a href='#L172' id='L172'>172</a><a href='#L173' id='L173'>173</a><a href='#L174' id='L174'>174</a><a href='#L175' id='L175'>175</a><a href='#L176' id='L176'>176</a><a href='#L177' id='L177'>177</a><a href='#L178' id='L178'>178</a><a href='#L179' id='L179'>179</a><a href='#L180' id='L180'>180</a><a href='#L181' id='L181'>181</a><a href='#L182' id='L182'>182</a><a href='#L183' id='L183'>183</a><a href='#L184' id='L184'>184</a><a href='#L185' id='L185'>185</a><a href='#L186' id='L186'>186</a><a href='#L187' id='L187'>187</a><a href='#L188' id='L188'>188</a><a href='#L189' id='L189'>189</a><a href='#L190' id='L190'>190</a><a href='#L191' id='L191'>191</a><a href='#L192' id='L192'>192</a><a href='#L193' id='L193'>193</a><a href='#L194' id='L194'>194</a><a href='#L195' id='L195'>195</a><a href='#L196' id='L196'>196</a><a href='#L197' id='L197'>197</a><a href='#L198' id='L198'>198</a><a href='#L199' id='L199'>199</a><a href='#L200' id='L200'>200</a><a href='#L201' id='L201'>201</a><a href='#L202' id='L202'>202</a><a href='#L203' id='L203'>203</a><a href='#L204' id='L204'>204</a><a href='#L205' id='L205'>205</a><a href='#L206' id='L206'>206</a><a href='#L207' id='L207'>207</a><a href='#L208' id='L208'>208</a><a href='#L209' id='L209'>209</a><a href='#L210' id='L210'>210</a><a href='#L211' id='L211'>211</a><a href='#L212' id='L212'>212</a><a href='#L213' id='L213'>213</a><a href='#L214' id='L214'>214</a><a href='#L215' id='L215'>215</a><a href='#L216' id='L216'>216</a><a href='#L217' id='L217'>217</a><a href='#L218' id='L218'>218</a><a href='#L219' id='L219'>219</a><a href='#L220' id='L220'>220</a><a href='#L221' id='L221'>221</a><a href='#L222' id='L222'>222</a><a href='#L223' id='L223'>223</a><a href='#L224' id='L224'>224</a><a href='#L225' id='L225'>225</a><a href='#L226' id='L226'>226</a><a href='#L227' id='L227'>227</a><a href='#L228' id='L228'>228</a><a href='#L229' id='L229'>229</a><a href='#L230' id='L230'>230</a><a href='#L231' id='L231'>231</a><a href='#L232' id='L232'>232</a><a href='#L233' id='L233'>233</a><a href='#L234' id='L234'>234</a><a href='#L235' id='L235'>235</a><a href='#L236' id='L236'>236</a><a href='#L237' id='L237'>237</a><a href='#L238' id='L238'>238</a><a href='#L239' id='L239'>239</a><a href='#L240' id='L240'>240</a><a href='#L241' id='L241'>241</a><a href='#L242' id='L242'>242</a><a href='#L243' id='L243'>243</a><a href='#L244' id='L244'>244</a><a href='#L245' id='L245'>245</a><a href='#L246' id='L246'>246</a><a href='#L247' id='L247'>247</a><a href='#L248' id='L248'>248</a><a href='#L249' id='L249'>249</a><a href='#L250' id='L250'>250</a><a href='#L251' id='L251'>251</a><a href='#L252' id='L252'>252</a><a href='#L253' id='L253'>253</a><a href='#L254' id='L254'>254</a><a href='#L255' id='L255'>255</a><a href='#L256' id='L256'>256</a><a href='#L257' id='L257'>257</a><a href='#L258' id='L258'>258</a><a href='#L259' id='L259'>259</a><a href='#L260' id='L260'>260</a><a href='#L261' id='L261'>261</a><a href='#L262' id='L262'>262</a><a href='#L263' id='L263'>263</a><a href='#L264' id='L264'>264</a><a href='#L265' id='L265'>265</a><a href='#L266' id='L266'>266</a><a href='#L267' id='L267'>267</a><a href='#L268' id='L268'>268</a><a href='#L269' id='L269'>269</a><a href='#L270' id='L270'>270</a><a href='#L271' id='L271'>271</a><a href='#L272' id='L272'>272</a><a href='#L273' id='L273'>273</a><a href='#L274' id='L274'>274</a><a href='#L275' id='L275'>275</a><a href='#L276' id='L276'>276</a><a href='#L277' id='L277'>277</a><a href='#L278' id='L278'>278</a><a href='#L279' id='L279'>279</a><a href='#L280' id='L280'>280</a><a href='#L281' id='L281'>281</a><a href='#L282' id='L282'>282</a><a href='#L283' id='L283'>283</a><a href='#L284' id='L284'>284</a><a href='#L285' id='L285'>285</a><a href='#L286' id='L286'>286</a><a href='#L287' id='L287'>287</a><a href='#L288' id='L288'>288</a><a href='#L289' id='L289'>289</a><a href='#L290' id='L290'>290</a><a href='#L291' id='L291'>291</a><a href='#L292' id='L292'>292</a><a href='#L293' id='L293'>293</a><a href='#L294' id='L294'>294</a><a href='#L295' id='L295'>295</a><a href='#L296' id='L296'>296</a><a href='#L297' id='L297'>297</a><a href='#L298' id='L298'>298</a><a href='#L299' id='L299'>299</a><a href='#L300' id='L300'>300</a><a href='#L301' id='L301'>301</a><a href='#L302' id='L302'>302</a><a href='#L303' id='L303'>303</a><a href='#L304' id='L304'>304</a><a href='#L305' id='L305'>305</a><a href='#L306' id='L306'>306</a><a href='#L307' id='L307'>307</a><a href='#L308' id='L308'>308</a><a href='#L309' id='L309'>309</a><a href='#L310' id='L310'>310</a><a href='#L311' id='L311'>311</a><a href='#L312' id='L312'>312</a><a href='#L313' id='L313'>313</a><a href='#L314' id='L314'>314</a><a href='#L315' id='L315'>315</a><a href='#L316' id='L316'>316</a><a href='#L317' id='L317'>317</a><a href='#L318' id='L318'>318</a><a href='#L319' id='L319'>319</a><a href='#L320' id='L320'>320</a><a href='#L321' id='L321'>321</a><a href='#L322' id='L322'>322</a><a href='#L323' id='L323'>323</a><a href='#L324' id='L324'>324</a><a href='#L325' id='L325'>325</a><a href='#L326' id='L326'>326</a><a href='#L327' id='L327'>327</a><a href='#L328' id='L328'>328</a><a href='#L329' id='L329'>329</a><a href='#L330' id='L330'>330</a><a href='#L331' id='L331'>331</a><a href='#L332' id='L332'>332</a><a href='#L333' id='L333'>333</a><a href='#L334' id='L334'>334</a><a href='#L335' id='L335'>335</a><a href='#L336' id='L336'>336</a><a href='#L337' id='L337'>337</a><a href='#L338' id='L338'>338</a><a href='#L339' id='L339'>339</a><a href='#L340' id='L340'>340</a><a href='#L341' id='L341'>341</a><a href='#L342' id='L342'>342</a><a href='#L343' id='L343'>343</a><a href='#L344' id='L344'>344</a><a href='#L345' id='L345'>345</a><a href='#L346' id='L346'>346</a><a href='#L347' id='L347'>347</a><a href='#L348' id='L348'>348</a><a href='#L349' id='L349'>349</a><a href='#L350' id='L350'>350</a><a href='#L351' id='L351'>351</a><a href='#L352' id='L352'>352</a><a href='#L353' id='L353'>353</a><a href='#L354' id='L354'>354</a><a href='#L355' id='L355'>355</a><a href='#L356' id='L356'>356</a><a href='#L357' id='L357'>357</a><a href='#L358' id='L358'>358</a><a href='#L359' id='L359'>359</a><a href='#L360' id='L360'>360</a><a href='#L361' id='L361'>361</a><a href='#L362' id='L362'>362</a><a href='#L363' id='L363'>363</a><a href='#L364' id='L364'>364</a><a href='#L365' id='L365'>365</a><a href='#L366' id='L366'>366</a><a href='#L367' id='L367'>367</a><a href='#L368' id='L368'>368</a><a href='#L369' id='L369'>369</a><a href='#L370' id='L370'>370</a><a href='#L371' id='L371'>371</a><a href='#L372' id='L372'>372</a><a href='#L373' id='L373'>373</a><a href='#L374' id='L374'>374</a><a href='#L375' id='L375'>375</a><a href='#L376' id='L376'>376</a><a href='#L377' id='L377'>377</a><a href='#L378' id='L378'>378</a><a href='#L379' id='L379'>379</a><a href='#L380' id='L380'>380</a><a href='#L381' id='L381'>381</a><a href='#L382' id='L382'>382</a><a href='#L383' id='L383'>383</a><a href='#L384' id='L384'>384</a><a href='#L385' id='L385'>385</a><a href='#L386' id='L386'>386</a><a href='#L387' id='L387'>387</a><a href='#L388' id='L388'>388</a><a href='#L389' id='L389'>389</a><a href='#L390' id='L390'>390</a><a href='#L391' id='L391'>391</a><a href='#L392' id='L392'>392</a><a href='#L393' id='L393'>393</a><a href='#L394' id='L394'>394</a><a href='#L395' id='L395'>395</a><a href='#L396' id='L396'>396</a><a href='#L397' id='L397'>397</a><a href='#L398' id='L398'>398</a><a href='#L399' id='L399'>399</a><a href='#L400' id='L400'>400</a><a href='#L401' id='L401'>401</a><a href='#L402' id='L402'>402</a><a href='#L403' id='L403'>403</a><a href='#L404' id='L404'>404</a><a href='#L405' id='L405'>405</a><a href='#L406' id='L406'>406</a><a href='#L407' id='L407'>407</a><a href='#L408' id='L408'>408</a><a href='#L409' id='L409'>409</a><a href='#L410' id='L410'>410</a><a href='#L411' id='L411'>411</a><a href='#L412' id='L412'>412</a><a href='#L413' id='L413'>413</a><a href='#L414' id='L414'>414</a><a href='#L415' id='L415'>415</a><a href='#L416' id='L416'>416</a><a href='#L417' id='L417'>417</a><a href='#L418' id='L418'>418</a><a href='#L419' id='L419'>419</a><a href='#L420' id='L420'>420</a><a href='#L421' id='L421'>421</a><a href='#L422' id='L422'>422</a><a href='#L423' id='L423'>423</a><a href='#L424' id='L424'>424</a><a href='#L425' id='L425'>425</a><a href='#L426' id='L426'>426</a><a href='#L427' id='L427'>427</a><a href='#L428' id='L428'>428</a><a href='#L429' id='L429'>429</a><a href='#L430' id='L430'>430</a><a href='#L431' id='L431'>431</a><a href='#L432' id='L432'>432</a><a href='#L433' id='L433'>433</a><a href='#L434' id='L434'>434</a><a href='#L435' id='L435'>435</a><a href='#L436' id='L436'>436</a><a href='#L437' id='L437'>437</a><a href='#L438' id='L438'>438</a><a href='#L439' id='L439'>439</a><a href='#L440' id='L440'>440</a><a href='#L441' id='L441'>441</a><a href='#L442' id='L442'>442</a><a href='#L443' id='L443'>443</a><a href='#L444' id='L444'>444</a><a href='#L445' id='L445'>445</a><a href='#L446' id='L446'>446</a><a href='#L447' id='L447'>447</a><a href='#L448' id='L448'>448</a><a href='#L449' id='L449'>449</a><a href='#L450' id='L450'>450</a><a href='#L451' id='L451'>451</a><a href='#L452' id='L452'>452</a><a href='#L453' id='L453'>453</a><a href='#L454' id='L454'>454</a><a href='#L455' id='L455'>455</a><a href='#L456' id='L456'>456</a><a href='#L457' id='L457'>457</a><a href='#L458' id='L458'>458</a><a href='#L459' id='L459'>459</a><a href='#L460' id='L460'>460</a><a href='#L461' id='L461'>461</a><a href='#L462' id='L462'>462</a><a href='#L463' id='L463'>463</a><a href='#L464' id='L464'>464</a><a href='#L465' id='L465'>465</a><a href='#L466' id='L466'>466</a><a href='#L467' id='L467'>467</a><a href='#L468' id='L468'>468</a><a href='#L469' id='L469'>469</a><a href='#L470' id='L470'>470</a><a href='#L471' id='L471'>471</a><a href='#L472' id='L472'>472</a><a href='#L473' id='L473'>473</a><a href='#L474' id='L474'>474</a><a href='#L475' id='L475'>475</a><a href='#L476' id='L476'>476</a><a href='#L477' id='L477'>477</a><a href='#L478' id='L478'>478</a><a href='#L479' id='L479'>479</a><a href='#L480' id='L480'>480</a><a href='#L481' id='L481'>481</a><a href='#L482' id='L482'>482</a><a href='#L483' id='L483'>483</a><a href='#L484' id='L484'>484</a><a href='#L485' id='L485'>485</a><a href='#L486' id='L486'>486</a><a href='#L487' id='L487'>487</a><a href='#L488' id='L488'>488</a><a href='#L489' id='L489'>489</a><a href='#L490' id='L490'>490</a><a href='#L491' id='L491'>491</a><a href='#L492' id='L492'>492</a><a href='#L493' id='L493'>493</a><a href='#L494' id='L494'>494</a><a href='#L495' id='L495'>495</a><a href='#L496' id='L496'>496</a><a href='#L497' id='L497'>497</a><a href='#L498' id='L498'>498</a><a href='#L499' id='L499'>499</a><a href='#L500' id='L500'>500</a><a href='#L501' id='L501'>501</a><a href='#L502' id='L502'>502</a><a href='#L503' id='L503'>503</a><a href='#L504' id='L504'>504</a><a href='#L505' id='L505'>505</a><a href='#L506' id='L506'>506</a><a href='#L507' id='L507'>507</a><a href='#L508' id='L508'>508</a><a href='#L509' id='L509'>509</a><a href='#L510' id='L510'>510</a><a href='#L511' id='L511'>511</a><a href='#L512' id='L512'>512</a><a href='#L513' id='L513'>513</a><a href='#L514' id='L514'>514</a><a href='#L515' id='L515'>515</a><a href='#L516' id='L516'>516</a><a href='#L517' id='L517'>517</a><a href='#L518' id='L518'>518</a><a href='#L519' id='L519'>519</a><a href='#L520' id='L520'>520</a><a href='#L521' id='L521'>521</a></div><div class="highlight"><pre class=""><div class='line' id='LC1'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">root</span><span class="p">,</span> <span class="nx">factory</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC2'>    <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">function</span><span class="dl">'</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC3'>        <span class="c1">// AMD. Register as an anonymous module.</span>&#x000A;</div><div class='line' id='LC4'>        <span class="nx">define</span><span class="p">([</span><span class="dl">'</span><span class="s1">exports</span><span class="dl">'</span><span class="p">,</span> <span class="dl">'</span><span class="s1">echarts</span><span class="dl">'</span><span class="p">],</span> <span class="nx">factory</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC5'>    <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">===</span> <span class="dl">'</span><span class="s1">object</span><span class="dl">'</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">exports</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">!==</span> <span class="dl">'</span><span class="s1">string</span><span class="dl">'</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC6'>        <span class="c1">// CommonJS</span>&#x000A;</div><div class='line' id='LC7'>        <span class="nx">factory</span><span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">(</span><span class="dl">'</span><span class="s1">echarts</span><span class="dl">'</span><span class="p">));</span>&#x000A;</div><div class='line' id='LC8'>    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC9'>        <span class="c1">// Browser globals</span>&#x000A;</div><div class='line' id='LC10'>        <span class="nx">factory</span><span class="p">({},</span> <span class="nx">root</span><span class="p">.</span><span class="nx">echarts</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC11'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC12'><span class="p">}(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">echarts</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC13'>    <span class="kd">var</span> <span class="nx">log</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">msg</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC14'>        <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">console</span> <span class="o">!==</span> <span class="dl">'</span><span class="s1">undefined</span><span class="dl">'</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC15'>            <span class="nx">console</span> <span class="o">&amp;&amp;</span> <span class="nx">console</span><span class="p">.</span><span class="nx">error</span> <span class="o">&amp;&amp;</span> <span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">msg</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC16'>        <span class="p">}</span>&#x000A;</div><div class='line' id='LC17'>    <span class="p">};</span>&#x000A;</div><div class='line' id='LC18'>    <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">echarts</span><span class="p">)</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC19'>        <span class="nx">log</span><span class="p">(</span><span class="dl">'</span><span class="s1">ECharts is not Loaded</span><span class="dl">'</span><span class="p">);</span>&#x000A;</div><div class='line' id='LC20'>        <span class="k">return</span><span class="p">;</span>&#x000A;</div><div class='line' id='LC21'>    <span class="p">}</span>&#x000A;</div><div class='line' id='LC22'>    <span class="nx">echarts</span><span class="p">.</span><span class="nx">registerTheme</span><span class="p">(</span><span class="dl">'</span><span class="s1">chalk</span><span class="dl">'</span><span class="p">,</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC23'>        <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="p">[</span>&#x000A;</div><div class='line' id='LC24'>            <span class="dl">'</span><span class="s1">#0ba82c</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC25'>            <span class="dl">'</span><span class="s1">#2c6eff</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC26'>            <span class="dl">'</span><span class="s1">#16f2d9</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC27'>            <span class="dl">'</span><span class="s1">#fe211e</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC28'>            <span class="dl">'</span><span class="s1">#fa6900</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC29'>            <span class="dl">"</span><span class="s2">#eedd78</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC30'>            <span class="dl">"</span><span class="s2">#73a373</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC31'>            <span class="dl">"</span><span class="s2">#73b9bc</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC32'>            <span class="dl">"</span><span class="s2">#7289ab</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC33'>            <span class="dl">"</span><span class="s2">#91ca8c</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC34'>            <span class="dl">"</span><span class="s2">#f49f42</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC35'>        <span class="p">],</span>&#x000A;</div><div class='line' id='LC36'>        <span class="dl">"</span><span class="s2">backgroundColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#222733</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC37'>        <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{},</span>&#x000A;</div><div class='line' id='LC38'>        <span class="dl">"</span><span class="s2">title</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC39'>            <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC40'>                <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ffffff</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC41'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC42'>            <span class="dl">"</span><span class="s2">subtextStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC43'>                <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#dddddd</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC44'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC45'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC46'>        <span class="dl">"</span><span class="s2">line</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC47'>            <span class="dl">"</span><span class="s2">itemStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC48'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC49'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">4</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC50'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC51'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC52'>            <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC53'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC54'>                    <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">3</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC55'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC56'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC57'>            <span class="dl">"</span><span class="s2">symbolSize</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">0</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC58'>            <span class="dl">"</span><span class="s2">symbol</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">circle</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC59'>            <span class="dl">"</span><span class="s2">smooth</span><span class="dl">"</span><span class="p">:</span> <span class="kc">true</span>&#x000A;</div><div class='line' id='LC60'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC61'>        <span class="dl">"</span><span class="s2">radar</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC62'>            <span class="dl">"</span><span class="s2">itemStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC63'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC64'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">4</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC65'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC66'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC67'>            <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC68'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC69'>                    <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">3</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC70'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC71'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC72'>            <span class="dl">"</span><span class="s2">symbolSize</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">0</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC73'>            <span class="dl">"</span><span class="s2">symbol</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">circle</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC74'>            <span class="dl">"</span><span class="s2">smooth</span><span class="dl">"</span><span class="p">:</span> <span class="kc">true</span>&#x000A;</div><div class='line' id='LC75'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC76'>        <span class="dl">"</span><span class="s2">bar</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC77'>            <span class="dl">"</span><span class="s2">itemStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC78'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC79'>                    <span class="dl">"</span><span class="s2">barBorderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC80'>                    <span class="dl">"</span><span class="s2">barBorderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC81'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC82'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC83'>                    <span class="dl">"</span><span class="s2">barBorderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC84'>                    <span class="dl">"</span><span class="s2">barBorderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC85'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC86'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC87'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC88'>        <span class="dl">"</span><span class="s2">pie</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC89'>            <span class="dl">"</span><span class="s2">itemStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC90'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC91'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC92'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC93'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC94'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC95'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC96'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC97'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC98'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC99'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC100'>        <span class="dl">"</span><span class="s2">scatter</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC101'>            <span class="dl">"</span><span class="s2">itemStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC102'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC103'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC104'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC105'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC106'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC107'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC108'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC109'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC110'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC111'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC112'>        <span class="dl">"</span><span class="s2">boxplot</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC113'>            <span class="dl">"</span><span class="s2">itemStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC114'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC115'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC116'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC117'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC118'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC119'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC120'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC121'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC122'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC123'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC124'>        <span class="dl">"</span><span class="s2">parallel</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC125'>            <span class="dl">"</span><span class="s2">itemStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC126'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC127'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC128'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC129'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC130'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC131'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC132'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC133'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC134'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC135'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC136'>        <span class="dl">"</span><span class="s2">sankey</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC137'>            <span class="dl">"</span><span class="s2">itemStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC138'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC139'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC140'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC141'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC142'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC143'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC144'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC145'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC146'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC147'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC148'>        <span class="dl">"</span><span class="s2">funnel</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC149'>            <span class="dl">"</span><span class="s2">itemStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC150'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC151'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC152'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC153'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC154'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC155'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC156'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC157'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC158'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC159'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC160'>        <span class="dl">"</span><span class="s2">gauge</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC161'>            <span class="dl">"</span><span class="s2">itemStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC162'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC163'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC164'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC165'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC166'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC167'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC168'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC169'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC170'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC171'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC172'>        <span class="dl">"</span><span class="s2">candlestick</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC173'>            <span class="dl">"</span><span class="s2">itemStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC174'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC175'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#fc97af</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC176'>                    <span class="dl">"</span><span class="s2">color0</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">transparent</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC177'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#fc97af</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC178'>                    <span class="dl">"</span><span class="s2">borderColor0</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#87f7cf</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC179'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC180'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC181'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC182'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC183'>        <span class="dl">"</span><span class="s2">graph</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC184'>            <span class="dl">"</span><span class="s2">itemStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC185'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC186'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC187'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ccc</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC188'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC189'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC190'>            <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC191'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC192'>                    <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">1</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC193'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#ffffff</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC194'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC195'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC196'>            <span class="dl">"</span><span class="s2">symbolSize</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">0</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC197'>            <span class="dl">"</span><span class="s2">symbol</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">circle</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC198'>            <span class="dl">"</span><span class="s2">smooth</span><span class="dl">"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC199'>            <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="p">[</span>&#x000A;</div><div class='line' id='LC200'>                <span class="dl">"</span><span class="s2">#759aa0</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC201'>                <span class="dl">"</span><span class="s2">#dd6b66</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC202'>                <span class="dl">"</span><span class="s2">#e69d87</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC203'>                <span class="dl">"</span><span class="s2">#8dc1a9</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC204'>                <span class="dl">"</span><span class="s2">#ea7e53</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC205'>                <span class="dl">"</span><span class="s2">#eedd78</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC206'>                <span class="dl">"</span><span class="s2">#73a373</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC207'>                <span class="dl">"</span><span class="s2">#73b9bc</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC208'>                <span class="dl">"</span><span class="s2">#7289ab</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC209'>                <span class="dl">"</span><span class="s2">#91ca8c</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC210'>                <span class="dl">"</span><span class="s2">#f49f42</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC211'>            <span class="p">],</span>&#x000A;</div><div class='line' id='LC212'>            <span class="dl">"</span><span class="s2">label</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC213'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC214'>                    <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC215'>                        <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#293441</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC216'>                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC217'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC218'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC219'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC220'>        <span class="dl">"</span><span class="s2">map</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC221'>            <span class="dl">"</span><span class="s2">itemStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC222'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC223'>                    <span class="dl">"</span><span class="s2">areaColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#f3f3f3</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC224'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#999999</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC225'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mf">0.5</span>&#x000A;</div><div class='line' id='LC226'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC227'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC228'>                    <span class="dl">"</span><span class="s2">areaColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">rgba(255,178,72,1)</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC229'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#eb8146</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC230'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">1</span>&#x000A;</div><div class='line' id='LC231'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC232'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC233'>            <span class="dl">"</span><span class="s2">label</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC234'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC235'>                    <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC236'>                        <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#893448</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC237'>                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC238'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC239'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC240'>                    <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC241'>                        <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">rgb(137,52,72)</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC242'>                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC243'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC244'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC245'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC246'>        <span class="dl">"</span><span class="s2">geo</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC247'>            <span class="dl">"</span><span class="s2">itemStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC248'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC249'>                    <span class="dl">"</span><span class="s2">areaColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#f3f3f3</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC250'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#999999</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC251'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mf">0.5</span>&#x000A;</div><div class='line' id='LC252'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC253'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC254'>                    <span class="dl">"</span><span class="s2">areaColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">rgba(255,178,72,1)</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC255'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#eb8146</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC256'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">1</span>&#x000A;</div><div class='line' id='LC257'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC258'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC259'>            <span class="dl">"</span><span class="s2">label</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC260'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC261'>                    <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC262'>                        <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#893448</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC263'>                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC264'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC265'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC266'>                    <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC267'>                        <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">rgb(137,52,72)</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC268'>                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC269'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC270'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC271'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC272'>        <span class="dl">"</span><span class="s2">categoryAxis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC273'>            <span class="dl">"</span><span class="s2">axisLine</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC274'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC275'>                <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC276'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#666666</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC277'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC278'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC279'>            <span class="dl">"</span><span class="s2">axisTick</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC280'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC281'>                <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC282'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#333</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC283'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC284'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC285'>            <span class="dl">"</span><span class="s2">axisLabel</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC286'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC287'>                <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC288'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#aaaaaa</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC289'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC290'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC291'>            <span class="dl">"</span><span class="s2">splitLine</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC292'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC293'>                <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC294'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="p">[</span>&#x000A;</div><div class='line' id='LC295'>                        <span class="dl">"</span><span class="s2">#e6e6e6</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC296'>                    <span class="p">]</span>&#x000A;</div><div class='line' id='LC297'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC298'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC299'>            <span class="dl">"</span><span class="s2">splitArea</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC300'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC301'>                <span class="dl">"</span><span class="s2">areaStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC302'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="p">[</span>&#x000A;</div><div class='line' id='LC303'>                        <span class="dl">"</span><span class="s2">rgba(250,250,250,0.05)</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC304'>                        <span class="dl">"</span><span class="s2">rgba(200,200,200,0.02)</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC305'>                    <span class="p">]</span>&#x000A;</div><div class='line' id='LC306'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC307'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC308'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC309'>        <span class="dl">"</span><span class="s2">valueAxis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC310'>            <span class="dl">"</span><span class="s2">axisLine</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC311'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC312'>                <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC313'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#666666</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC314'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC315'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC316'>            <span class="dl">"</span><span class="s2">axisTick</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC317'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC318'>                <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC319'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#333</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC320'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC321'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC322'>            <span class="dl">"</span><span class="s2">axisLabel</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC323'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC324'>                <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC325'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#aaaaaa</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC326'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC327'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC328'>            <span class="dl">"</span><span class="s2">splitLine</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC329'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC330'>                <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC331'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="p">[</span>&#x000A;</div><div class='line' id='LC332'>                        <span class="dl">"</span><span class="s2">#e6e6e6</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC333'>                    <span class="p">]</span>&#x000A;</div><div class='line' id='LC334'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC335'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC336'>            <span class="dl">"</span><span class="s2">splitArea</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC337'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC338'>                <span class="dl">"</span><span class="s2">areaStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC339'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="p">[</span>&#x000A;</div><div class='line' id='LC340'>                        <span class="dl">"</span><span class="s2">rgba(250,250,250,0.05)</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC341'>                        <span class="dl">"</span><span class="s2">rgba(200,200,200,0.02)</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC342'>                    <span class="p">]</span>&#x000A;</div><div class='line' id='LC343'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC344'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC345'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC346'>        <span class="dl">"</span><span class="s2">logAxis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC347'>            <span class="dl">"</span><span class="s2">axisLine</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC348'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC349'>                <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC350'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#666666</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC351'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC352'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC353'>            <span class="dl">"</span><span class="s2">axisTick</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC354'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC355'>                <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC356'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#333</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC357'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC358'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC359'>            <span class="dl">"</span><span class="s2">axisLabel</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC360'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC361'>                <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC362'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#aaaaaa</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC363'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC364'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC365'>            <span class="dl">"</span><span class="s2">splitLine</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC366'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC367'>                <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC368'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="p">[</span>&#x000A;</div><div class='line' id='LC369'>                        <span class="dl">"</span><span class="s2">#e6e6e6</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC370'>                    <span class="p">]</span>&#x000A;</div><div class='line' id='LC371'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC372'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC373'>            <span class="dl">"</span><span class="s2">splitArea</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC374'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC375'>                <span class="dl">"</span><span class="s2">areaStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC376'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="p">[</span>&#x000A;</div><div class='line' id='LC377'>                        <span class="dl">"</span><span class="s2">rgba(250,250,250,0.05)</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC378'>                        <span class="dl">"</span><span class="s2">rgba(200,200,200,0.02)</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC379'>                    <span class="p">]</span>&#x000A;</div><div class='line' id='LC380'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC381'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC382'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC383'>        <span class="dl">"</span><span class="s2">timeAxis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC384'>            <span class="dl">"</span><span class="s2">axisLine</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC385'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC386'>                <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC387'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#666666</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC388'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC389'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC390'>            <span class="dl">"</span><span class="s2">axisTick</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC391'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC392'>                <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC393'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#333</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC394'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC395'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC396'>            <span class="dl">"</span><span class="s2">axisLabel</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC397'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC398'>                <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC399'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#aaaaaa</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC400'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC401'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC402'>            <span class="dl">"</span><span class="s2">splitLine</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC403'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC404'>                <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC405'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="p">[</span>&#x000A;</div><div class='line' id='LC406'>                        <span class="dl">"</span><span class="s2">#e6e6e6</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC407'>                    <span class="p">]</span>&#x000A;</div><div class='line' id='LC408'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC409'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC410'>            <span class="dl">"</span><span class="s2">splitArea</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC411'>                <span class="dl">"</span><span class="s2">show</span><span class="dl">"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC412'>                <span class="dl">"</span><span class="s2">areaStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC413'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="p">[</span>&#x000A;</div><div class='line' id='LC414'>                        <span class="dl">"</span><span class="s2">rgba(250,250,250,0.05)</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC415'>                        <span class="dl">"</span><span class="s2">rgba(200,200,200,0.02)</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC416'>                    <span class="p">]</span>&#x000A;</div><div class='line' id='LC417'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC418'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC419'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC420'>        <span class="dl">"</span><span class="s2">toolbox</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC421'>            <span class="dl">"</span><span class="s2">iconStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC422'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC423'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#999999</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC424'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC425'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC426'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#666666</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC427'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC428'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC429'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC430'>        <span class="dl">"</span><span class="s2">legend</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC431'>            <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC432'>                <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#999999</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC433'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC434'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC435'>        <span class="dl">"</span><span class="s2">tooltip</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC436'>            <span class="dl">"</span><span class="s2">axisPointer</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC437'>                <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC438'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#cccccc</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC439'>                    <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">:</span> <span class="mi">1</span>&#x000A;</div><div class='line' id='LC440'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC441'>                <span class="dl">"</span><span class="s2">crossStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC442'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#cccccc</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC443'>                    <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">:</span> <span class="mi">1</span>&#x000A;</div><div class='line' id='LC444'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC445'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC446'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC447'>        <span class="dl">"</span><span class="s2">timeline</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC448'>            <span class="dl">"</span><span class="s2">lineStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC449'>                <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#87f7cf</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC450'>                <span class="dl">"</span><span class="s2">width</span><span class="dl">"</span><span class="p">:</span> <span class="mi">1</span>&#x000A;</div><div class='line' id='LC451'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC452'>            <span class="dl">"</span><span class="s2">itemStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC453'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC454'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#87f7cf</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC455'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mi">1</span>&#x000A;</div><div class='line' id='LC456'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC457'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC458'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#f7f494</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC459'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC460'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC461'>            <span class="dl">"</span><span class="s2">controlStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC462'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC463'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#87f7cf</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC464'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#87f7cf</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC465'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mf">0.5</span>&#x000A;</div><div class='line' id='LC466'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC467'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC468'>                    <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#87f7cf</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC469'>                    <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#87f7cf</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC470'>                    <span class="dl">"</span><span class="s2">borderWidth</span><span class="dl">"</span><span class="p">:</span> <span class="mf">0.5</span>&#x000A;</div><div class='line' id='LC471'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC472'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC473'>            <span class="dl">"</span><span class="s2">checkpointStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC474'>                <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#fc97af</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC475'>                <span class="dl">"</span><span class="s2">borderColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">rgba(252,151,175,0.3)</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC476'>            <span class="p">},</span>&#x000A;</div><div class='line' id='LC477'>            <span class="dl">"</span><span class="s2">label</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC478'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC479'>                    <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC480'>                        <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#87f7cf</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC481'>                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC482'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC483'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC484'>                    <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC485'>                        <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#87f7cf</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC486'>                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC487'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC488'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC489'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC490'>        <span class="dl">"</span><span class="s2">visualMap</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC491'>            <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="p">[</span>&#x000A;</div><div class='line' id='LC492'>                <span class="dl">"</span><span class="s2">#fc97af</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC493'>                <span class="dl">"</span><span class="s2">#87f7cf</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC494'>            <span class="p">]</span>&#x000A;</div><div class='line' id='LC495'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC496'>        <span class="dl">"</span><span class="s2">dataZoom</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC497'>            <span class="dl">"</span><span class="s2">backgroundColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">rgba(255,255,255,0)</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC498'>            <span class="dl">"</span><span class="s2">dataBackgroundColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">rgba(114,204,255,1)</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC499'>            <span class="dl">"</span><span class="s2">fillerColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">rgba(114,204,255,0.2)</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC500'>            <span class="dl">"</span><span class="s2">handleColor</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#72ccff</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC501'>            <span class="dl">"</span><span class="s2">handleSize</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">100%</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC502'>            <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC503'>                <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#333333</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC504'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC505'>        <span class="p">},</span>&#x000A;</div><div class='line' id='LC506'>        <span class="dl">"</span><span class="s2">markPoint</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC507'>            <span class="dl">"</span><span class="s2">label</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC508'>                <span class="dl">"</span><span class="s2">normal</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC509'>                    <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC510'>                        <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#293441</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC511'>                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC512'>                <span class="p">},</span>&#x000A;</div><div class='line' id='LC513'>                <span class="dl">"</span><span class="s2">emphasis</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC514'>                    <span class="dl">"</span><span class="s2">textStyle</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC515'>                        <span class="dl">"</span><span class="s2">color</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">#293441</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC516'>                    <span class="p">}</span>&#x000A;</div><div class='line' id='LC517'>                <span class="p">}</span>&#x000A;</div><div class='line' id='LC518'>            <span class="p">}</span>&#x000A;</div><div class='line' id='LC519'>        <span class="p">}</span>&#x000A;</div><div class='line' id='LC520'>    <span class="p">});</span>&#x000A;</div><div class='line' id='LC521'><span class="p">}));</span>&#x000A;</div></pre></div></div>
</div>
<script>
  toMathMlCode('','markdown-body');
</script>

</div>
</div>
<div class='tree_progress'></div>
<div class='ui small modal' id='modal-linejump'>
<div class='ui custom form content'>
<div class='field'>
<div class='ui right action input'>
<input placeholder='跳转至某一行...' type='number'>
<div class='ui orange button'>
跳转
</div>
</div>
</div>
</div>
</div>

<div class='row column inner-comment' id='blob-comment'>
<input id="comment_path" name="comment_path" type="hidden" value="第五天素材/03.代码/vision/public/static/theme/chalk.js" />
<div class='tree-comments'>
<h3 id='tree_comm_title'>
评论
(
<span class='comments-count'>
0
</span>
)
</h3>
<div class='ui threaded comments middle aligned' id='notes-list'></div>
<input id="ajax_add_note_id" name="ajax_add_note_id" type="hidden" />
<div class='text-center'>
<div class='tip-loading' style='display: none'>
<div class='ui active mini inline loader'></div>
正在加载...
</div>
</div>
</div>
<script>
  "use strict";
  $(function(){
    var page = 1
    var commentsCount = 0
    var $container = $('.tree-comments')
    var $comments = $container.find('.ui.comments')
    var $tipLoading = $container.find('.tip-loading')
    var $btnLoad = $container.find('.btn-load-more')
    var noteAnchor = new Gitee.NoteAnchor({ defaultAnchor: '#tree_comm_title' })
  
    if (commentsCount < 1) {
      return;
    }
  
    var path;
    if ($('#comment_path').val() === '') {
      path = '/';
    } else {
      path = $('#comment_path').val();
    }
  
    function loadComments () {
      $btnLoad.hide();
      $tipLoading.show();
      $.ajax({
        url: '/xiaoqiang001/online-retailers/comment_list',
        data: {
          page: page,
          path: path
        },
        success: function(data) {
          var err;
          try {
            $tipLoading.hide();
            $btnLoad.show();
            if (data.status !== 0) {
              $btnLoad.text('无更多评论')
              return $btnLoad.prop('disabled', true).addClass('disabled');
            } else {
              TreeComment.CommentListHandler(data);
              page += 1;
              if (data.comments_count < 10) {
                $('#ajax_add_note_id').val('');
                $btnLoad.text('无更多评论')
                $btnLoad.prop('disabled', true).addClass('disabled');
              }
              // osctree can not load script
              $comments.find('.timeago').timeago();
              $comments.find('.commenter-role-label').popup();
              noteAnchor.locate();
              toMathMlCode('', 'comments');
              return $('.markdown-body pre code').each(function(i, block) {
                return hljs.highlightBlock(block);
              });
            }
          } catch (error) {
            err = error;
            return console.log('loadComments error:' + err);
          }
        }
      });
    };
  
  
    function checkLoad () {
      var listTop, top;
      top = $(window).scrollTop();
      listTop = $container.offset().top;
      if (listTop >= top && listTop < top + $(window).height()) {
        $(window).off('scroll', checkLoad);
        return loadComments();
      }
    };
  
    $btnLoad.on('click', loadComments);
    loadComments()
  })
</script>

</div>
<div class='inner-comment-box' id='comment-box'>
<p>
你可以在<a href="/login">登录</a>后，发表评论
</p>

</div>

<div class='complaint'>
<div class='ui modal small form' id='landing-comments-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
举报
</div>
<div class='content'>
<div class='appeal-success-tip hide'>
<i class='iconfont icon-ic_msg_success'></i>
<div class='appeal-success-text'>
举报成功
</div>
<span>
我们将于2个工作日内通过站内信反馈结果给你！
</span>
</div>
<div class='appeal-tip'>
请认真填写举报原因，尽可能描述详细。
</div>
<div class='ui form appeal-form'>
<div class='inline field'>
<label class='left-part appeal-type-wrap'>
举报类型
</label>
<div class='ui dropdown selection' id='appeal-comments-types'>
<div class='text default'>
请选择举报类型
</div>
<i class='dropdown icon'></i>
<div class='menu'></div>
</div>
</div>
<div class='inline field'>
<label class='left-part'>
举报原因
</label>
<textarea class='appeal-reason' id='appeal-comment-reason' name='msg' placeholder='请说明举报原因' rows='3'></textarea>
</div>
<div class='ui message callback-msg hide'></div>
<div class='ui small error text message exceeded-size-tip'></div>
</div>
</div>
<div class='actions'>
<div class='ui button blank cancel'>
取消
</div>
<div class='ui orange icon button disabled ok' id='complaint-comment-confirm'>
发送
</div>
</div>
</div>
<script>
  var $complaintCommentsModal = $('#landing-comments-complaint-modal'),
      $complainCommentType = $complaintCommentsModal.find('#appeal-comments-types'),
      $complaintModalTip = $complaintCommentsModal.find('.callback-msg'),
      $complaintCommentsContent = $complaintCommentsModal.find('.appeal-reason'),
      $complaintCommentBtn = $complaintCommentsModal.find('#complaint-comment-confirm'),
      complaintSending = false,
      initedCommentsType = false;
  
  function initCommentsTypeList() {
    if (!initedCommentsType) {
      $.ajax({
        url: "/appeals/fetch_types",
        method: 'get',
        data: {'type': 'comment'},
        success: function (data) {
          var result = '';
          for (var i = 0; i < data.length; i++) {
            result = result + "<div class='item' data-value='" + data[i].id + "'>" + data[i].name + "</div>";
          }
          $complainCommentType.find('.menu').html(result);
        }
      });
      $complainCommentType.dropdown({showOnFocus: false});
      initedCommentsType = true;
    }
  }
  $complainCommentType.on('click', function() {
    $complaintCommentsModal.modal({
      autofocus: false,
      onApprove: function() {
        return false;
      },
      onHidden: function() {
        restoreCommonentDefault();
      }
    }).modal('show');
  });
  
  $complaintCommentsContent.on('change keyup', function(e) {
    var content = $(this).val();
    if ($.trim(content).length > 0 && $complainCommentType.dropdown('get value').length > 0 ) {
      $complaintCommentBtn.removeClass('disabled');
      return;
    }
    $complaintCommentBtn.addClass('disabled');
  });
  
  
  $complainCommentType.dropdown({
    showOnFocus: false,
    onChange: function(value, text, $selectedItem) {
      if (value.length > 0 && $.trim($complaintCommentsContent.val()).length > 0) {
        $complaintCommentBtn.removeClass('disabled');
        return
      }
      $complaintCommentBtn.addClass('disabled');
    }
  });
  
  function restoreCommonentDefault() {
    $complainCommentType.dropdown('restore defaults');
    $complaintCommentsContent.val('');
    $('.exceeded-size-tip').text('').hide();
    $complaintModalTip.text('').hide();
    setTimeout(function() {
      setCommentSendTip(false);
    }, 1500);
  }
  
  $complaintCommentBtn.on('click',function(e){
    var reason = $complaintCommentsContent.val();
    var appealableId = $('#landing-comments-complaint-modal').attr('data-id');
    if (complaintSending) {
      return;
    }
    var appealType = $complainCommentType.dropdown('get value');
    var formData = new FormData();
    formData.append('appeal_type_id', appealType);
    formData.append('reason', reason);
    formData.append('appeal_type','Note');
    formData.append('target_id',appealableId);
    $.ajax({
      type: 'POST',
      url: "/appeals",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      beforeSend: function() {
        setCommentSendStatus(true);
      },
      success: function(res) {
        if (res.status == 200) {
          setCommentSendTip(true);
          setTimeout(function() {
            $complaintCommentsModal.modal('hide');
            restoreCommonentDefault();
          }, 3000);
        }
        setCommentSendStatus(false);
      },
      error: function(err) {
        showCommonTips(err.responseJSON.message, 'error');
        setCommentSendStatus(false);
      }
    })
  });
  
  function showCommonTips(text, type) {
    $complaintModalTip.text(text).show();
    if (type == 'error') {
      $complaintModalTip.removeClass('success').addClass('error');
    } else {
      $complaintModalTip.removeClass('error').addClass('success');
    }
  }
  
  function setCommentSendStatus(value) {
    complaintSending = value;
    if (complaintSending) {
      $complaintCommentBtn.addClass('loading');
      $complaintCommentsContent.attr('readonly', true);
      $complainCommentType.attr('readonly', true);
    } else {
      $complaintCommentBtn.removeClass('loading');
      $complaintCommentsContent.attr('readonly', false);
      $complainCommentType.attr('readonly', false);
    }
  }
  
  function setCommentSendTip(value) {
    if (value) {
      $('.appeal-success-tip').removeClass('hide');
      $('.appeal-tip').addClass('hide');
      $('.appeal-form').addClass('hide');
      $('#landing-comments-complaint-modal .actions').addClass('hide');
    } else {
      $('.appeal-success-tip').addClass('hide');
      $('.appeal-tip').removeClass('hide');
      $('.appeal-form').removeClass('hide');
      $('#landing-comments-complaint-modal .actions').removeClass('hide');
    }
  }
</script>

</div>
<script>
  "use strict";
  $('.js-check-star').checkbox('set unchecked')
</script>

</div>
</div>
</div>
<div class='four wide column' style='display: none;'>
<div class='project__right-side'>
<div class='side-item intro'>
<div class='header'>
<h4>简介</h4>
</div>
<div class='content intro-info'>
<span class='git-project-desc-text'>电商数据可视化配套素材</span>
<a class='hide spread' href='javascript:void(0);'>
展开
<i class='caret down icon'></i>
</a>
<a class='retract hide' href='javascript:void(0);'>
收起
<i class='caret up icon'></i>
</a>
<div class='intro-list'>
<div class='hide item'>
<i class='iconfont icon-link'></i>
<span class='git-project-homepage'>
<a href="/xiaoqiang001/online-retailers/blob/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision/public/static/theme/chalk.js" id="homepage" rel="nofollow" target="_blank">/xiaoqiang001/online-retailers/blob/master/%E7%AC%AC%E4%BA%94%E5%A4%A9%E7%B4%A0%E6%9D%90/03.%E4%BB%A3%E7%A0%81/vision/public/static/theme/chalk.js</a>
</span>
</div>

</div>
</div>
<div class='content intro-form'>
<div class='ui small input'>
<textarea name='project[description]' placeholder='描述' rows='5'></textarea>
</div>
<div class='ui small input'>
<input data-regex-value='(^$)|(^(http|https):\/\/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).*)|(^(http|https):\/\/[a-zA-Z0-9]+([_\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,10}(:[0-9]{1,10})?(\?.*)?(\/.*)?$)' name='project[homepage]' placeholder='主页(eg: https://gitee.com)' type='text' value='电商数据可视化配套素材'>
</div>
<button class='ui orange button mt-1 btn-save'>
保存更改
</button>
<div class='ui blank button btn-cancel-edit'>
取消
</div>
</div>
</div>
<div class='side-item release'>
<div class='header'>
<h4>发行版</h4>
</div>
<div class='content'>
<span class='text-muted'>
暂无发行版
</span>
</div>
</div>
<div class='side-item contrib' data-url='/xiaoqiang001/online-retailers/contributors_count?ref=master' id='contributor'>
<div class='header'>
<h4>
贡献者
<span class='text-muted' id='contributor-count'></span>
</h4>
<a class="ui link button pull-right" href="/xiaoqiang001/online-retailers/contributors?ref=master">全部</a>
</div>
<div class='content' id='contributor-list'></div>
<div class='ui active centered inline loader' id='contributor-loader'></div>
</div>
<div class='side-item events' data-url='/xiaoqiang001/online-retailers/events.json' id='events'>
<div class='header'>
<h4>近期动态</h4>
</div>
<div class='content'>
<div class='ui comments' id='event-list'></div>
<a class="loadmore hide" href="javascript:void(0);">加载更多
<i class='icon dropdown'></i>
</a><center>
<div class='text-muted nomore hide'>不能加载更多了</div>
<div class='ui inline loader active'></div>
</center>
</div>
</div>
</div>
<script>
  window.gon.projectRightSide = {
    homepage: null,
    description: "电商数据可视化配套素材",
    url: "/xiaoqiang001/online-retailers/update_description"
  }
  
  $('#license-popup').popup({ position: 'bottom center', lastResort: 'bottom center' })
</script>

</div>
</div>
</div>
<script>
  (function() {
    $(function() {
      Tree.init();
      return TreeCommentActions.init();
    });
  
  }).call(this);
</script>

</div>
<script>
  (function() {
    var donateModal;
  
    Gitee.modalHelper = new GiteeModalHelper({
      alertText: '提示',
      okText: '确定'
    });
  
    donateModal = new ProjectDonateModal({
      el: '#project-donate-modal',
      alipayUrl: '/xiaoqiang001/online-retailers/alipay',
      wepayUrl: '/xiaoqiang001/online-retailers/wepay',
      nameIsBlank: '名称不能为空',
      nameTooLong: '名称过长（最多为 36 个字符）',
      modalHelper: Gitee.modalHelper
    });
  
    if (null === 'true') {
      donateModal.show();
    }
  
    $('#project-donate').on('click', function() {
      return donateModal.show();
    });
  
  }).call(this);
</script>
<script>
  Tree.initHighlightTheme('white')
</script>


</div>
<div class='gitee-project-extension'>
<div class='extension public'>1</div>
<div class='extension https'>https://gitee.com/xiaoqiang001/online-retailers.git</div>
<div class='extension ssh'>git@gitee.com:xiaoqiang001/online-retailers.git</div>
<div class='extension namespace'>xiaoqiang001</div>
<div class='extension repo'>online-retailers</div>
<div class='extension name'>电商</div>
<div class='extension branch'>master</div>
</div>

<script>
  $(function() {
    GitLab.GfmAutoComplete.dataSource = "/xiaoqiang001/online-retailers/autocomplete_sources"
    GitLab.GfmAutoComplete.Emoji.assetBase = '/assets/emoji'
    GitLab.GfmAutoComplete.setup();
  });
</script>

<footer id='git-footer-main'>
<div class='ui container'>
<div class='logo-row'>
<img class='logo-img' src='/static/images/logo-black.svg?t=158106666'>
</div>
<div class='name-important'>
深圳市奥思网络科技有限公司版权所有
</div>
<div class='ui two column grid d-flex-center'>
<div class='nine wide column git-footer-left'>
<div class='ui four column grid' id='footer-left'>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/about_us">关于我们</a>
</div>
<div class='item'>
<a class="item" href="/terms">使用条款</a>
</div>
<div class='item'>
<a class="item" href="/oschina/git-osc/issues">意见建议</a>
</div>
<div class='item'>
<a class="item" href="/links.html">合作伙伴</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/all-about-git">Git 大全</a>
</div>
<div class='item'>
<a class="item" href="https://oschina.gitee.io/learn-git-branching/">Git 命令学习</a>
</div>
<div class='item'>
<a class="item" href="https://copycat.gitee.com/">代码克隆检测</a>
</div>
<div class='item'>
<a class="item" href="/appclient">APP与插件下载</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/gitee-stars">Gitee 封面人物</a>
</div>
<div class='item'>
<a class="item" href="/gvp">GVP 项目</a>
</div>
<div class='item'>
<a class="item" href="https://blog.gitee.com/">Gitee 博客</a>
</div>
<div class='item'>
<a class="item" href="/enterprises#nonprofit-plan">Gitee 公益计划</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/api/v5/swagger">OpenAPI</a>
</div>
<div class='item'>
<a class="item" href="/help">帮助文档</a>
</div>
<div class='item'>
<a class="item" href="/self_services">在线自助服务</a>
</div>
<div class='item'>
<a class="item" href="/git-osc">更新日志</a>
</div>
</div>
</div>
</div>
</div>
<div class='seven wide column right aligned followus git-footer-right'>
<div class='qrcode weixin'>
<img alt="Qrcode weixin" src="https://assets.gitee.com/assets/qrcode-weixin-9e7cfb27165143d2b8e8b268a52ea822.jpg" />
<p class='weixin-text'>微信服务号</p>
</div>
<div class='phone-and-qq column'>
<div class='ui list official-support-container'>
<div class='item'>
<a class="icon-popup" href="//shang.qq.com/wpa/qunwpa?idkey=df785aa7af71f7d74149ab062742d761b845464350ecba25eb440357a3e573b7" title="点击加入 Gitee 官方群"><i class='iconfont icon-logo-qq'></i>
<span>官方技术交流QQ群：1050025484</span>
</a></div>
<div class='item mail-and-zhihu'>
<a href="mailto: git@oschina.cn"><i class='iconfont icon-msg-mail'></i>
<span id='git-footer-email'>git#oschina.cn</span>
</a></div>
<div class='item mail-and-zhihu'>
<a href="https://www.zhihu.com/org/ma-yun-osc/" target="_blank"><i class='iconfont icon-zhihu'></i>
<span>Gitee</span>
</a></div>
<div class='item tel'>
<a>
<i class='iconfont icon-tel'></i>
<span>售前及售后使用咨询：400-606-0201</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class='bottombar'>
<div class='ui container'>
<div class='ui d-flex d-flex-between'>
<div class='seven wide column partner d-flex'>
<div class='open-atom d-flex-center'>
<img alt="Logo openatom" class="logo-openatom mr-1" src="https://assets.gitee.com/assets/logo-openatom-d083391cc8a54e283529f3fc11cc38ca.svg" />
<a href="https://www.openatom.org/" target="_blank">开放原子开源基金会</a>
<div class='sub-title ml-1'>认证代码托管平台</div>
</div>
<div class='report-12377 d-flex-center ml-3'>
<img alt="12377@2x" class="report-12377__logo mr-1" src="https://assets.gitee.com/assets/12377@2x-1aa42ed2d2256f82a61ecf57be1ec244.png" />
<a href="https://12377.cn" target="_blank">违法和不良信息举报中心</a>
</div>
<div class='copyright ml-3'>
<a href="http://www.beian.miit.gov.cn/">粤ICP备12009483号</a>
</div>
</div>
<div class='nine wide column right aligned'>
<i class='icon world'></i>
<a href="/language/zh-CN">简 体</a>
/
<a href="/language/zh-TW">繁 體</a>
/
<a href="/language/en">English</a>
</div>
</div>
</div>
</div>
</footer>
<script>
  var officialEmail = $('#git-footer-email').text()
  $('#git-footer-main .icon-popup').popup({ position: 'bottom center' })
  $('#git-footer-email').text(officialEmail.replace('#', '@'))
  window.gon.popover_card_locale = {
    follow:"关注",
    unfollow:"已关注",
    gvp_title: "GVP - Gitee 最有价值开源项目",
    project: "项目",
    org: "开源组织",
    member: "",
    author: "作者",
    user_blocked: "该用户已被屏蔽或已注销",
    net_error: "网络错误",
    unknown_exception: "未知异常"
  }
</script>
<script src="https://assets.gitee.com/webpacks/popover_card-f8f6dbb28615dcff05a9.bundle.js"></script>


<div class='side-toolbar'>
<div class='button toolbar-help'>
<i class='iconfont icon-help'></i>
</div>
<div class='ui popup left center dark'>点此查找更多帮助</div>
<div class='toolbar-help-dialog'>
<div class='toolbar-dialog-header'>
<h3 class='toolbar-dialog-title'>搜索帮助</h3>
<form accept-charset="UTF-8" action="/help/load_keywords_data" class="toolbar-help-search-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
<div class='ui icon input fluid toolbar-help-search'>
<input name='keywords' placeholder='请输入产品名称或问题' type='text'>
<i class='icon search'></i>
</div>
</form>

<i class='iconfont icon-close toolbar-dialog-close-icon'></i>
</div>
<div class='toolbar-dialog-content'>
<div class='toolbar-help-hot-search'>
<div class='toolbar-roll'>
<a class="init active" href="https://oschina.gitee.io/learn-git-branching/?utm_source==gitee-help-widget" title="Git 命令在线学习"><i class='Blue icon icon-command iconfont'></i>
<span>Git 命令在线学习</span>
</a><a class="init " href="https://gitee.com/help/articles/4261?utm_source==gitee-help-widget" title="如何在 Gitee 导入 GitHub 仓库"><i class='icon icon-clipboard iconfont orange'></i>
<span>如何在 Gitee 导入 GitHub 仓库</span>
</a></div>
<div class='toolbar-list'>
<div class='toolbar-list-item'>
<a href="/help/articles/4114">Git 仓库基础操作</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4166">企业版和社区版功能对比</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4191">SSH 公钥设置</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4194">如何处理代码冲突</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4232">仓库体积过大，如何减小？</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4279">如何找回被删除的仓库数据</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4283">Gitee 产品配额说明</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4284">GitHub仓库快速导入Gitee及同步更新</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4328">什么是 Release（发行版）</a>
</div>
</div>
</div>
<div class='toolbar-help-search-reseult'>
<div class='toolbar-help-flex-column'>
<div class='ui centered inline loader toolbar-help-loader'></div>
<div class='toolbar-list'></div>
<div class='toolbar-help-link-to-help'>
<a href="" target="_blank">查看更多搜索结果</a>
</div>
</div>
</div>
</div>
</div>
<script>
  var opt = { position: 'left center'};
  var $helpSideToolbar = $('.button.toolbar-help');
  var $toolbarRoll = $('.toolbar-roll');
  
  $(function() {
    if (false) {
      $helpSideToolbar.popup(opt).popup({lastResort:'left center'})
    } else {
      $helpSideToolbar.popup({lastResort:'left center'}).popup('show', opt);
      setTimeout(function() {
        $helpSideToolbar.popup('hide', opt);
      }, 3000);
    }
  
    if ($toolbarRoll.length) {
      setInterval(function() {
        var $nextActiveLink = $toolbarRoll.find('a.active').next();
        if (!$nextActiveLink.length) {
          $nextActiveLink = $toolbarRoll.find('a:first-child');
        }
        $nextActiveLink.attr('class', 'active').siblings().removeClass('active init');
      }, 5000);
    }
  })
</script>

<div class='button share-link'>
<i class='iconfont icon-share'></i>
</div>
<div class='ui popup dark'>
<div class='header'>
分享到
</div>
<div class='bdsharebuttonbox' style='display: flex'>
<a class='iconfont icon-home-service-wechat' data-cmd='weixin' title='分享到微信'></a>
<a class='iconfont icon-weibo' data-cmd='tsina' title='分享到新浪微博'></a>
<a class='iconfont icon-qq' data-cmd='sqq' title='分享到QQ好友'></a>
<a class='iconfont icon-qzone' data-cmd='qzone' title='分享到QQ空间'></a>
</div>
</div>
<div class='popup button' id='home-comment'>
<i class='iconfont icon-comment'></i>
</div>
<div class='ui popup dark'>评论</div>
<div class='toolbar-appeal popup button'>
<i class='iconfont icon-report'></i>
</div>
<div class='ui popup dark'>
仓库举报
</div>
<script>
  $('.toolbar-appeal').popup({ position: 'left center' });
</script>

<div class='button gotop popup' id='gotop'>
<i class='iconfont icon-top'></i>
</div>
<div class='ui popup dark'>回到顶部</div>
</div>
<div class='form modal normal-modal tiny ui' id='unlanding-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
登录提示
</div>
<div class='container actions'>
<div class='content'>
该操作需登录 Gitee 帐号，请先登录后再操作。
</div>
<div class='ui orange icon large button ok'>
立即登录
</div>
<div class='ui button blank cancel'>
没有帐号，去注册
</div>
</div>
</div>
<script>
  var $elm = $('.toolbar-appeal');
  
  $elm.on('click', function() {
    var modals = $("#unlanding-complaint-modal.normal-modal");
    if (modals.length > 1) {
      modals.eq(0).modal('show');
    } else {
      modals.modal('show');
    }
  })
  $("#unlanding-complaint-modal.normal-modal").modal({
    onDeny: function() {
      window.location.href = "/signup?from=";
    },
    onApprove: function() {
      window.location.href = "/login?from=";
    }
  })
</script>

<style>
  .side-toolbar .bdsharebuttonbox a {
    font-size: 24px;
    color: white !important;
    opacity: 0.9;
    margin: 6px 6px 0px 6px;
    background-image: none;
    text-indent: 0;
    height: auto;
    width: auto;
  }
  
  #enterprises-index #udesk_btn a{
    margin: 0px 20px 217px 0px !important;
  }
</style>
<script>
  (function() {
    $('#project-user-message').popup({
      position: 'left center'
    });
  
  }).call(this);
</script>
<script>
  Gitee.initSideToolbar({
    hasComment: true,
    commentUrl: '/xiaoqiang001/online-retailers#tree_comm_title'
  })
</script>
<script>
  window._bd_share_config = {
    "common": {
      "bdSnsKey": {},
      "bdText": document.title,
      "bdMini": "1",
      "bdMiniList": ["bdxc","tqf","douban","bdhome","sqq","thx","ibaidu","meilishuo","mogujie","diandian","huaban","duitang","hx","fx","youdao","sdo","qingbiji","people","xinhua","mail","isohu","yaolan","wealink","ty","iguba","fbook","twi","linkedin","h163","evernotecn","copy","print"],
      "bdPic": "",
      "bdStyle": "1",
      "bdSize": "32"
    },
    "share": {}
  }
</script>
<script src="/bd_share/static/api/js/share.js"></script>



<style>
  .gitee-stars-main-widget {
    display: none;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 106; }
    .gitee-stars-main-widget .close-icon {
      width: 20px;
      right: 0px;
      position: absolute;
      top: 0px;
      cursor: pointer; }
    .gitee-stars-main-widget .people-image {
      width: 200px;
      margin: 0 10px; }
  
  .gitee-stars-main-widget.gitee-stars-widget .close-icon {
    left: 20px; }
</style>
<div class='gitee-stars-main-widget pendan-widget'>
<a href="https://gitee.com/features/gitee_go?utm_medium=gj " target="_blank"><img alt="134604 c058fc9e 1899542" class="people-image" src="https://images.gitee.com/uploads/images/2020/1224/134604_c058fc9e_1899542.png" />
<img alt="170601 95c65a7f 1899542" class="close-icon" src="https://images.gitee.com/uploads/images/2020/1216/170601_95c65a7f_1899542.png" />
</a></div>
<script>
  $(function () {
    var $giteeStarsWidget = $('.gitee-stars-main-widget')
    var cookieKey = "visit-gitee--2020-12-28 10:06:52 +0800"
  
    if ($.cookie(cookieKey) == 1) {
      $giteeStarsWidget.hide()
    } else {
      $giteeStarsWidget.show()
    }
  
    $giteeStarsWidget.on('click', '.close-icon', function (e) {
      e.preventDefault()
      $.cookie(cookieKey, 1, {path: '/', expires: 60})
      $giteeStarsWidget.hide()
    })
  })
</script>


<script>
  (function() {
    this.__gac = {
      domain: 'www.oschina.net'
    };
  
  }).call(this);
</script>
<script defer src='//www.oschina.net/public/javascripts/cjl/ga.js?t=20160926' type='text/javascript'></script>

</body>
</html>
