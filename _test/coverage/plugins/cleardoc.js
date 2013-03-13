/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['plugins/cleardoc.js']) {
  _$jscoverage['plugins/cleardoc.js'] = [];
  _$jscoverage['plugins/cleardoc.js'][13] = 0;
  _$jscoverage['plugins/cleardoc.js'][15] = 0;
  _$jscoverage['plugins/cleardoc.js'][18] = 0;
  _$jscoverage['plugins/cleardoc.js'][19] = 0;
  _$jscoverage['plugins/cleardoc.js'][20] = 0;
  _$jscoverage['plugins/cleardoc.js'][22] = 0;
  _$jscoverage['plugins/cleardoc.js'][23] = 0;
  _$jscoverage['plugins/cleardoc.js'][25] = 0;
  _$jscoverage['plugins/cleardoc.js'][26] = 0;
}
_$jscoverage['plugins/cleardoc.js'].source = ["<span class=\"c\">///import core</span>","<span class=\"c\">///commands &#28165;&#31354;&#25991;&#26723;</span>","<span class=\"c\">///commandsName  ClearDoc</span>","<span class=\"c\">///commandsTitle  &#28165;&#31354;&#25991;&#26723;</span>","<span class=\"c\">/**</span>","<span class=\"c\"> *</span>","<span class=\"c\"> * &#28165;&#31354;&#25991;&#26723;</span>","<span class=\"c\"> * @function</span>","<span class=\"c\"> * @name baidu.editor.execCommand</span>","<span class=\"c\"> * @param   {String}   cmdName     cleardoc&#28165;&#31354;&#25991;&#26723;</span>","<span class=\"c\"> */</span>","","UE<span class=\"k\">.</span>commands<span class=\"k\">[</span><span class=\"s\">'cleardoc'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">{</span>","    execCommand <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span> cmdName<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">,</span>","            enterTag <span class=\"k\">=</span> me<span class=\"k\">.</span>options<span class=\"k\">.</span>enterTag<span class=\"k\">,</span>","            range <span class=\"k\">=</span> me<span class=\"k\">.</span>selection<span class=\"k\">.</span>getRange<span class=\"k\">();</span>","        <span class=\"k\">if</span><span class=\"k\">(</span>enterTag <span class=\"k\">==</span> <span class=\"s\">\"br\"</span><span class=\"k\">)</span><span class=\"k\">{</span>","            me<span class=\"k\">.</span>body<span class=\"k\">.</span>innerHTML <span class=\"k\">=</span> <span class=\"s\">\"&lt;br/&gt;\"</span><span class=\"k\">;</span>","            range<span class=\"k\">.</span>setStart<span class=\"k\">(</span>me<span class=\"k\">.</span>body<span class=\"k\">,</span><span class=\"s\">0</span><span class=\"k\">).</span>setCursor<span class=\"k\">();</span>","        <span class=\"k\">}</span><span class=\"k\">else</span><span class=\"k\">{</span>","            me<span class=\"k\">.</span>body<span class=\"k\">.</span>innerHTML <span class=\"k\">=</span> <span class=\"s\">\"&lt;p&gt;\"</span><span class=\"k\">+(</span>ie <span class=\"k\">?</span> <span class=\"s\">\"\"</span> <span class=\"k\">:</span> <span class=\"s\">\"&lt;br/&gt;\"</span><span class=\"k\">)+</span><span class=\"s\">\"&lt;/p&gt;\"</span><span class=\"k\">;</span>","            range<span class=\"k\">.</span>setStart<span class=\"k\">(</span>me<span class=\"k\">.</span>body<span class=\"k\">.</span>firstChild<span class=\"k\">,</span><span class=\"s\">0</span><span class=\"k\">).</span>setCursor<span class=\"k\">(</span><span class=\"k\">false</span><span class=\"k\">,</span><span class=\"k\">true</span><span class=\"k\">);</span>","        <span class=\"k\">}</span>","        setTimeout<span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","            me<span class=\"k\">.</span>fireEvent<span class=\"k\">(</span><span class=\"s\">\"clearDoc\"</span><span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span><span class=\"s\">0</span><span class=\"k\">);</span>","","    <span class=\"k\">}</span>","<span class=\"k\">}</span><span class=\"k\">;</span>",""];
_$jscoverage['plugins/cleardoc.js'][13]++;
UE.commands.cleardoc = {execCommand: (function (cmdName) {
  _$jscoverage['plugins/cleardoc.js'][15]++;
  var me = this, enterTag = me.options.enterTag, range = me.selection.getRange();
  _$jscoverage['plugins/cleardoc.js'][18]++;
  if ((enterTag == "br")) {
    _$jscoverage['plugins/cleardoc.js'][19]++;
    me.body.innerHTML = "<br/>";
    _$jscoverage['plugins/cleardoc.js'][20]++;
    range.setStart(me.body, 0).setCursor();
  }
  else {
    _$jscoverage['plugins/cleardoc.js'][22]++;
    me.body.innerHTML = ("<p>" + (ie? "": "<br/>") + "</p>");
    _$jscoverage['plugins/cleardoc.js'][23]++;
    range.setStart(me.body.firstChild, 0).setCursor(false, true);
  }
  _$jscoverage['plugins/cleardoc.js'][25]++;
  setTimeout((function () {
  _$jscoverage['plugins/cleardoc.js'][26]++;
  me.fireEvent("clearDoc");
}), 0);
})};