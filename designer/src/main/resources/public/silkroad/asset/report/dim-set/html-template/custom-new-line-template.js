define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$escape),e="";return e+=' <div class="custom-create-new-dim-box j-custom-relation-box">\n    <div class="custom-create-new-dim-texts">\n        <input type="text"  placeholder="请输入新维度的名称" value=""/>\n        <textarea placeholder="请输入创建维度的逻辑语句" class="j-custom-sql" bodyIndex=',e+=d(b),e+='></textarea>\n        <span class="custom-create-new-dim-texts-wrong"></span>\n    </div>\n    <span class="delete j-custom-delete"></span>\n    <span class="add j-custom-add"></span>\n</div>\n'}return{render:b}});