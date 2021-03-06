define(['template'], function (template) {
    function anonymous($data,$filename) {
        'use strict';
        $data=$data||{};
        var $utils=template.utils,$helpers=$utils.$helpers,$out='';$out+='<div class="callback-form-box">\n    <div class="callback-form">\n        <div class="callback-name">\n            <div>回调指标名称:</div>\n            <div>显示名称:</div>\n            <div>回调地址:</div>\n            <div>请求超时时间:</div>\n        </div>\n        <div class="callback-text">\n            <input class="call-name call-text" placeholder="由数字,字母,下划线组成并以数字开头"/>\n            <input class="call-caption call-text" placeholder="由数字,字母,汉字组成"/>\n            <input class="call-url call-text" placeholder="回调地址"/>\n            <input class="call-timeout call-text" placeholder="由整数组成" />\n        </div>\n    </div>\n    <div class="close-retractable j-callback-close" title="删除">×</div>\n    <div class="close-retractable j-callback-retractable " title="收进">-</div>\n    <div class="callback-title"><div></div><div></div></div>\n</div>';
        return $out;
    }
    return { render: anonymous };
});