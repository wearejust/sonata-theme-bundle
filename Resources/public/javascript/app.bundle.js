!function(t){function i(e){if(n[e])return n[e].exports;var o=n[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}var n={};i.m=t,i.c=n,i.p="",i(0)}([function(t,i,n){"use strict";n(1)},function(t,n){"use strict";$(function(){$(".date input").on("click",function(){$(this).next("span").click()});var t=["INPUT","A","BUTTON","SPAN"];$(".box-body table tr:not(.sonata-ba-list-field-header)").each(function(i,n){var e=$(n),o=e.find("a.edit_link");o.length&&e.on("mousedown",function(i){i.preventDefault(),-1===$.inArray($(i.target).prop("tagName"),t)&&(window.location.href=o.attr("href"))})}),$("input").iCheck("uncheck");var n=$(".sonata-ba-list input"),e=$(".box-footer .form-inline");n.on("ifToggled",function(){var t=!1;for(i=0;i<n.length;i++)if($(n[i]).prop("checked")){t=!0;break}e.removeClass("is-visible"),t&&e.addClass("is-visible")})})}]);
//# sourceMappingURL=app.bundle.js.map