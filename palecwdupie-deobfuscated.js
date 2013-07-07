;
if(!PluginDetect){
var PluginDetect={
getNum:function (_0x777ax2,_0x777ax3){
if(!this["num"](_0x777ax2)){
return null;
} ;
var _0x777ax4;
if( typeof _0x777ax3=="undefined"){
_0x777ax4=/[\d][\d\.\_,-]*/["exec"](_0x777ax2);
} else {
_0x777ax4=( new RegExp(_0x777ax3))["exec"](_0x777ax2);
} ;
return _0x777ax4?_0x777ax4[0]["replace"](/[\.\_-]/g,","):null;
} ,hasMimeType:function (_0x777ax3){
if(PluginDetect["isIE"]){
return null;
} ;
var _0x777ax2,_0x777ax4,_0x777ax5,_0x777ax6=_0x777ax3["constructor"]==String?[_0x777ax3]:_0x777ax3;
for(_0x777ax5=0;
_0x777ax5<_0x777ax6["length"];
_0x777ax5++){
_0x777ax2=navigator["mimeTypes"][_0x777ax6[_0x777ax5]];
if(_0x777ax2&&_0x777ax2["enabledPlugin"]){
_0x777ax4=_0x777ax2["enabledPlugin"];
if(_0x777ax4["name"]||_0x777ax4["description"]){
return _0x777ax2;
} ;
} ;
} ;
return null;
} ,findNavPlugin:function (_0x777ax7,_0x777ax5){
var _0x777ax4=_0x777ax7["constructor"]==String?_0x777ax7:_0x777ax7["join"](".*"),_0x777ax6=_0x777ax5===false?"":"\d",_0x777ax2,_0x777ax3= new RegExp(_0x777ax4+".*"+_0x777ax6+"|"+_0x777ax6+".*"+_0x777ax4,"i"),_0x777ax8=navigator["plugins"];
for(_0x777ax2=0;
_0x777ax2<_0x777ax8["length"];
_0x777ax2++){
if(_0x777ax3["test"](_0x777ax8[_0x777ax2]["description"])||_0x777ax3["test"](_0x777ax8[_0x777ax2]["name"])){
return _0x777ax8[_0x777ax2];
} ;
} ;
return null;
} ,AXO:window["ActiveXObject"],getAXO:function (_0x777ax2,_0x777ax4){
var _0x777ax8=null,_0x777ax5,_0x777ax3=false;
try{
_0x777ax8= new this.AXO(_0x777ax2);
_0x777ax3=true;
} catch(_0x777ax5){
} ;
if( typeof _0x777ax4!="undefined"){
delete _0x777ax8;
return _0x777ax3;
} ;
return _0x777ax8;
} ,num:function (_0x777ax4){
return ( typeof _0x777ax4!="string"?false:(/\d/)["test"](_0x777ax4));
} ,compareNums:function (_0x777ax7,_0x777ax6){
var _0x777ax5=this,_0x777ax3,_0x777ax2,_0x777ax4,_0x777ax8=window["parseInt"];
if(!_0x777ax5["num"](_0x777ax7)||!_0x777ax5["num"](_0x777ax6)){
return 0;
} ;
if(_0x777ax5["plugin"]&&_0x777ax5["plugin"]["compareNums"]){
return _0x777ax5["plugin"]["compareNums"](_0x777ax7,_0x777ax6);
} ;
_0x777ax3=_0x777ax7["split"](",");
_0x777ax2=_0x777ax6["split"](",");
for(_0x777ax4=0;
_0x777ax4<Math["min"](_0x777ax3["length"],_0x777ax2["length"]);
_0x777ax4++){
if(_0x777ax8(_0x777ax3[_0x777ax4],10)>_0x777ax8(_0x777ax2[_0x777ax4],10)){
return 1;
} ;
if(_0x777ax8(_0x777ax3[_0x777ax4],10)<_0x777ax8(_0x777ax2[_0x777ax4],10)){
return -1;
} ;
} ;
return 0;
} ,formatNum:function (_0x777ax2){
if(!this["num"](_0x777ax2)){
return null;
} ;
var _0x777ax4,_0x777ax3=_0x777ax2["replace"](/\s/g,"")["replace"](/[\.\_]/g,",")["split"](",")["concat"](["0","0","0","0"]);
for(_0x777ax4=0;
_0x777ax4<4;
_0x777ax4++){
if(/^(0+)(.+)$/["test"](_0x777ax3[_0x777ax4])){
_0x777ax3[_0x777ax4]=RegExp["$2"];
} ;
} ;
if(!(/\d/)["test"](_0x777ax3[0])){
_0x777ax3[0]="0";
} ;
return _0x777ax3[0]+","+_0x777ax3[1]+","+_0x777ax3[2]+","+_0x777ax3[3];
} ,initScript:function (){
var _0x777ax9=this,_0x777axa=navigator["userAgent"];
_0x777ax9["isIE"]=false;
_0x777ax9["IEver"]=_0x777ax9["isIE"]&&((/MSIE\s*(\d\.?\d*)/i)["exec"](_0x777axa))?parseFloat(RegExp.$1,10):-1;
_0x777ax9["ActiveXEnabled"]=false;
if(_0x777ax9["isIE"]){
var _0x777axb,_0x777axc=["Msxml2.XMLHTTP","Msxml2.DOMDocument","Microsoft.XMLDOM","ShockwaveFlash.ShockwaveFlash","TDCCtl.TDCCtl","Shell.UIHelper","Scripting.Dictionary","wmplayer.ocx"];
for(_0x777axb=0;
_0x777axb<_0x777axc["length"];
_0x777axb++){
if(_0x777ax9["getAXO"](_0x777axc[_0x777axb],1)){
_0x777ax9["ActiveXEnabled"]=true;
break ;
} ;
} ;
_0x777ax9["head"]= typeof document["getElementsByTagName"]!="undefined"?document["getElementsByTagName"]("head")[0]:null;
} ;
_0x777ax9["isGecko"]=!_0x777ax9["isIE"]&& typeof navigator["product"]=="string"&&(/Gecko/i)["test"](navigator["product"])&&(/Gecko\s*\/\s*\d/i)["test"](_0x777axa)?true:false;
_0x777ax9["GeckoRV"]=_0x777ax9["isGecko"]?_0x777ax9["formatNum"]((/rv\s*\:\s*([\.\,\d]+)/i)["test"](_0x777axa)?RegExp["$1"]:"0.9"):null;
_0x777ax9["isSafari"]=!_0x777ax9["isIE"]&&(/Safari\s*\/\s*\d/i)["test"](_0x777axa)?true:false;
_0x777ax9["isChrome"]=(/Chrome\s*\/\s*\d/i)["test"](_0x777axa)?true:false;
_0x777ax9["onWindowLoaded"](0);
} ,init:function (_0x777ax3,_0x777ax4){
if( typeof _0x777ax3!="string"){
return -3;
} ;
_0x777ax3=_0x777ax3["toLowerCase"]()["replace"](/\s/g,"");
var _0x777ax2=this,_0x777ax5;
if( typeof _0x777ax2[_0x777ax3]=="undefined"){
return -3;
} ;
_0x777ax5=_0x777ax2[_0x777ax3];
_0x777ax2["plugin"]=_0x777ax5;
if( typeof _0x777ax5["installed"]=="undefined"||_0x777ax4==true){
_0x777ax5["installed"]=null;
_0x777ax5["version"]=null;
_0x777ax5["version0"]=null;
_0x777ax5["getVersionDone"]=null;
_0x777ax5["$"]=_0x777ax2;
} ;
_0x777ax2["garbage"]=false;
if(_0x777ax2["isIE"]&&!_0x777ax2["ActiveXEnabled"]){
if(_0x777ax2["plugin"]!=_0x777ax2["java"]){
return -2;
} ;
} ;
return 1;
} ,isMinVersion:function (_0x777ax7,_0x777ax6,_0x777ax3,_0x777ax2){
return -3;
} ,getVersion:function (_0x777ax6,_0x777ax2,_0x777ax4){
var _0x777ax5=PluginDetect,_0x777ax3=_0x777ax5["init"](_0x777ax6),_0x777ax8;
if(_0x777ax3<0){
return null;
} ;
_0x777ax8=_0x777ax5["plugin"];
if(_0x777ax8["getVersionDone"]!=1){
_0x777ax8["getVersion"](_0x777ax2,_0x777ax4);
if(_0x777ax8["getVersionDone"]===null){
_0x777ax8["getVersionDone"]=1;
} ;
} ;
_0x777ax5["cleanup"]();
return (_0x777ax8["version"]||_0x777ax8["version0"]);
;
;
return null;
} ,getInfo:function (_0x777ax8,_0x777ax3,_0x777ax2){
var _0x777ax4={
};
;
;
var _0x777ax6=PluginDetect,_0x777ax5=_0x777ax6["init"](_0x777ax8),_0x777ax7;
if(_0x777ax5<0){
return _0x777ax4;
} ;
_0x777ax7=_0x777ax6["plugin"];
if( typeof _0x777ax7["getInfo"]!="undefined"){
if(_0x777ax7["getVersionDone"]===null){
_0x777ax6["getVersion"](_0x777ax8,_0x777ax3,_0x777ax2);
} ;
_0x777ax4=_0x777ax7["getInfo"]();
} ;
return _0x777ax4;
} ,cleanup:function (){
var _0x777ax4=this;
if(_0x777ax4["garbage"]&& typeof window["CollectGarbage"]!="undefined"){
window.CollectGarbage();
} ;
} ,isActiveXObject:function (_0x777ax2){
var _0x777ax5=this,_0x777ax4,_0x777ax7,_0x777ax8="/",_0x777ax3="<object width="1" height="1" style="display:none" "+_0x777ax5["plugin"]["getCodeBaseVersion"](_0x777ax2)+">"+_0x777ax5["plugin"]["HTML"]+"<"+_0x777ax8+"object>";
if(_0x777ax5["head"]["firstChild"]){
_0x777ax5["head"]["insertBefore"](document["createElement"]("object"),_0x777ax5["head"]["firstChild"]);
} else {
_0x777ax5["head"]["appendChild"](document["createElement"]("object"));
} ;
_0x777ax5["head"]["firstChild"]["outerHTML"]=_0x777ax3;
try{
_0x777ax5["head"]["firstChild"]["classid"]=_0x777ax5["plugin"]["classID"];
} catch(_0x777ax7){
} ;
_0x777ax4=false;
try{
if(_0x777ax5["head"]["firstChild"]["object"]){
_0x777ax4=true;
} ;
} catch(_0x777ax7){
} ;
try{
if(_0x777ax4&&_0x777ax5["head"]["firstChild"]["readyState"]<4){
_0x777ax5["garbage"]=true;
} ;
} catch(_0x777ax7){
} ;
_0x777ax5["head"]["removeChild"](_0x777ax5["head"]["firstChild"]);
return _0x777ax4;
} ,codebaseSearch:function (_0x777ax3){
var _0x777ax6=this;
if(!_0x777ax6["ActiveXEnabled"]){
return null;
} ;
if( typeof _0x777ax3!="undefined"){
return _0x777ax6["isActiveXObject"](_0x777ax3);
} ;
var _0x777axd=[0,0,0,0],_0x777ax7,_0x777ax8,_0x777ax2=_0x777ax6["plugin"]["digits"],_0x777axe=function (_0x777axf,_0x777ax10){
var _0x777ax11=(_0x777axf==0?_0x777ax10:_0x777axd[0])+","+(_0x777axf==1?_0x777ax10:_0x777axd[1])+","+(_0x777axf==2?_0x777ax10:_0x777axd[2])+","+(_0x777axf==3?_0x777ax10:_0x777axd[3]);
return _0x777ax6["isActiveXObject"](_0x777ax11);
} ;
var _0x777ax12,_0x777ax5,_0x777ax4=false;
for(_0x777ax7=0;
_0x777ax7<_0x777ax2["length"];
_0x777ax7++){
_0x777ax12=_0x777ax2[_0x777ax7]*2;
_0x777axd[_0x777ax7]=0;
for(_0x777ax8=0;
_0x777ax8<20;
_0x777ax8++){
if(_0x777ax12==1&&_0x777ax7>0&&_0x777ax4){
break ;
} ;
if(_0x777ax12-_0x777axd[_0x777ax7]>1){
_0x777ax5=Math["round"]((_0x777ax12+_0x777axd[_0x777ax7])/2);
if(_0x777axe(_0x777ax7,_0x777ax5)){
_0x777axd[_0x777ax7]=_0x777ax5;
_0x777ax4=true;
} else {
_0x777ax12=_0x777ax5;
} ;
} else {
if(_0x777ax12-_0x777axd[_0x777ax7]==1){
_0x777ax12--;
if(!_0x777ax4&&_0x777axe(_0x777ax7,_0x777ax12)){
_0x777ax4=true;
} ;
break ;
} else {
if(!_0x777ax4&&_0x777axe(_0x777ax7,_0x777ax12)){
_0x777ax4=true;
} ;
break ;
} ;
} ;
} ;
if(!_0x777ax4){
return null;
} ;
} ;
return _0x777axd["join"](",");
} ,dummy1:0};
} ;
PluginDetect["onDetectionDone"]=function (_0x777ax7,_0x777ax6,_0x777ax5,_0x777ax4){
return -1;
} ;
PluginDetect["onWindowLoaded"]=function (_0x777ax3){
var _0x777ax2=PluginDetect,_0x777ax4=window;
if(_0x777ax2["EventWinLoad"]===true){
} else {
_0x777ax2["winLoaded"]=false;
_0x777ax2["EventWinLoad"]=true;
if( typeof _0x777ax4["addEventListener"]!="undefined"){
_0x777ax4["addEventListener"]("load",_0x777ax2["runFuncs"],false);
} else {
if( typeof _0x777ax4["attachEvent"]!="undefined"){
_0x777ax4["attachEvent"]("onload",_0x777ax2["runFuncs"]);
} else {
if( typeof _0x777ax4["onload"]=="function"){
_0x777ax2["funcs"][_0x777ax2["funcs"]["length"]]=_0x777ax4["onload"];
} ;
_0x777ax4["onload"]=_0x777ax2["runFuncs"];
} ;
} ;
} ;
if( typeof _0x777ax3=="function"){
_0x777ax2["funcs"][_0x777ax2["funcs"]["length"]]=_0x777ax3;
} ;
} ;
;
;
PluginDetect["funcs"]=[0];
PluginDetect["runFuncs"]=function (){
var _0x777ax2=PluginDetect,_0x777ax4;
_0x777ax2["winLoaded"]=true;
for(_0x777ax4=0;
_0x777ax4<_0x777ax2["funcs"]["length"];
_0x777ax4++){
if( typeof _0x777ax2["funcs"][_0x777ax4]=="function"){
_0x777ax2["funcs"][_0x777ax4](_0x777ax2);
_0x777ax2["funcs"][_0x777ax4]=null;
} ;
} ;
} ;
;
;
PluginDetect["quicktime"]={
mimeType:["video/quicktime","application/x-quicktimeplayer","image/x-macpaint","image/x-quicktime"],progID:"QuickTimeCheckObject.QuickTimeCheck.1",progID0:"QuickTime.QuickTime",classID:"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",minIEver:7,HTML:"<param name="src" value="A14999.mov" /><param name="controller" value="false" />",getCodeBaseVersion:function (_0x777ax4){
return "codebase="#version="+_0x777ax4+""";
} ,digits:[8,64,16,0],clipTo3digits:function (_0x777ax8){
if(_0x777ax8===null|| typeof _0x777ax8=="undefined"){
return null;
} ;
var _0x777ax6,_0x777ax5,_0x777ax12,_0x777ax7=this["$"];
_0x777ax6=_0x777ax8["split"](",");
if(_0x777ax7["compareNums"](_0x777ax8,"7,60,0,0")<0&&_0x777ax7["compareNums"](_0x777ax8,"7,50,0,0")>=0){
_0x777ax5=_0x777ax6[0]+","+_0x777ax6[1]["charAt"](0)+","+_0x777ax6[1]["charAt"](1)+","+_0x777ax6[2];
} else {
_0x777ax5=_0x777ax6[0]+","+_0x777ax6[1]+","+_0x777ax6[2]+","+_0x777ax6[3];
} ;
_0x777ax12=_0x777ax5["split"](",");
return _0x777ax12[0]+","+_0x777ax12[1]+","+_0x777ax12[2]+",0";
} ,getVersion:function (){
var _0x777ax4=null,_0x777ax5,_0x777ax2=this["$"],_0x777ax6=true;
if(!_0x777ax2["isIE"]){
if(navigator["platform"]&&(/linux/i)["test"](navigator["platform"])){
_0x777ax6=false;
} ;
if(_0x777ax6){
_0x777ax5=_0x777ax2["findNavPlugin"](["QuickTime","(Plug-in|Plugin)"]);
if(_0x777ax5&&_0x777ax5["name"]&&_0x777ax2["hasMimeType"](this["mimeType"])){
_0x777ax4=_0x777ax2["getNum"](_0x777ax5["name"]);
} ;
} ;
this["installed"]=_0x777ax4?1:-1;
} else {
var _0x777ax3;
if(_0x777ax2["IEver"]>=this["minIEver"]&&_0x777ax2["getAXO"](this["progID0"],1)){
_0x777ax4=_0x777ax2["codebaseSearch"]();
} else {
_0x777ax3=_0x777ax2["getAXO"](this["progID"]);
if(_0x777ax3&&_0x777ax3["QuickTimeVersion"]){
_0x777ax4=_0x777ax3["QuickTimeVersion"].toString(16);
_0x777ax4=_0x777ax4["charAt"](0)+"."+_0x777ax4["charAt"](1)+"."+_0x777ax4["charAt"](2);
} ;
} ;
this["installed"]=_0x777ax4?1:(_0x777ax2["getAXO"](this["progID0"],1)?0:-1);
} ;
this["version"]=this["clipTo3digits"](_0x777ax2["formatNum"](_0x777ax4));
} };
;
;
PluginDetect["java"]={
mimeType:"application/x-java-applet",classID:"clsid:8AD9C840-044E-11D1-B3E9-00805F499D93",DTKclassID:"clsid:CAFEEFAC-DEC7-0000-0000-ABCDEFFEDCBA",DTKmimeType:"application/npruntime-scriptable-plugin;DeploymentToolkit",JavaVersions:[[1,9,2,25],[1,8,2,25],[1,7,2,25],[1,6,2,25],[1,5,2,25],[1,4,2,25],[1,3,1,25]],searchJavaPluginAXO:function (){
var _0x777ax12=null,_0x777ax4=this,_0x777ax3=_0x777ax4["$"],_0x777ax7=[],_0x777axd=[1,5,0,14],_0x777axe=[1,6,0,2],_0x777ax8=[1,3,1,0],_0x777ax6=[1,4,2,0],_0x777ax5=[1,5,0,7],_0x777ax2=false;
if(!_0x777ax3["ActiveXEnabled"]){
return null;
} ;
_0x777ax2=true;
;
;
if(_0x777ax3["IEver"]>=_0x777ax4["minIEver"]){
_0x777ax7=_0x777ax4["searchJavaAXO"](_0x777axe,_0x777axe,_0x777ax2);
if(_0x777ax7["length"]>0&&_0x777ax2){
_0x777ax7=_0x777ax4["searchJavaAXO"](_0x777axd,_0x777axd,_0x777ax2);
} ;
} else {
if(_0x777ax2){
_0x777ax7=_0x777ax4["searchJavaAXO"](_0x777ax5,_0x777ax5,true);
} ;
if(_0x777ax7["length"]==0){
_0x777ax7=_0x777ax4["searchJavaAXO"](_0x777ax8,_0x777ax6,false);
} ;
} ;
if(_0x777ax7["length"]>0){
_0x777ax12=_0x777ax7[0];
} ;
_0x777ax4["JavaPlugin_versions"]=[]["concat"](_0x777ax7);
return _0x777ax12;
} ,searchJavaAXO:function (_0x777ax11,_0x777axe,_0x777ax10){
var _0x777ax13,_0x777ax8,_0x777ax12=this["$"],_0x777ax14,_0x777axf,_0x777ax4,_0x777ax6,_0x777ax7,_0x777axd,_0x777ax2,_0x777ax15=[];
if(_0x777ax12["compareNums"](_0x777ax11["join"](","),_0x777axe["join"](","))>0){
_0x777axe=_0x777ax11;
} ;
_0x777axe=_0x777ax12["formatNum"](_0x777axe["join"](","));
var _0x777ax16,_0x777ax5="1,4,2,0",_0x777ax3="JavaPlugin."+_0x777ax11[0]+""+_0x777ax11[1]+""+_0x777ax11[2]+""+(_0x777ax11[3]>0?("_"+(_0x777ax11[3]<10?"0":"")+_0x777ax11[3]):"");
for(_0x777ax13=0;
_0x777ax13<this["JavaVersions"]["length"];
_0x777ax13++){
_0x777ax8=this["JavaVersions"][_0x777ax13];
_0x777ax14="JavaPlugin."+_0x777ax8[0]+""+_0x777ax8[1];
_0x777ax7=_0x777ax8[0]+"."+_0x777ax8[1]+".";
for(_0x777ax4=_0x777ax8[2];
_0x777ax4>=0;
_0x777ax4--){
_0x777ax2="JavaWebStart.isInstalled."+_0x777ax7+_0x777ax4+".0";
if(_0x777ax12["compareNums"](_0x777ax8[0]+","+_0x777ax8[1]+","+_0x777ax4+",0",_0x777axe)>=0&&!_0x777ax12["getAXO"](_0x777ax2,1)){
continue ;
} ;
_0x777ax16=_0x777ax12["compareNums"](_0x777ax8[0]+","+_0x777ax8[1]+","+_0x777ax4+",0",_0x777ax5)<0?true:false;
for(_0x777ax6=_0x777ax8[3];
_0x777ax6>=0;
_0x777ax6--){
_0x777axf=_0x777ax4+"_"+(_0x777ax6<10?"0"+_0x777ax6:_0x777ax6);
_0x777axd=_0x777ax14+_0x777axf;
if(_0x777ax12["getAXO"](_0x777axd,1)&&(_0x777ax16||_0x777ax12["getAXO"](_0x777ax2,1))){
_0x777ax15[_0x777ax15["length"]]=_0x777ax7+_0x777axf;
if(!_0x777ax10){
return _0x777ax15;
} ;
} ;
if(_0x777axd==_0x777ax3){
return _0x777ax15;
} ;
} ;
if(_0x777ax12["getAXO"](_0x777ax14+_0x777ax4,1)&&(_0x777ax16||_0x777ax12["getAXO"](_0x777ax2,1))){
_0x777ax15[_0x777ax15["length"]]=_0x777ax7+_0x777ax4;
if(!_0x777ax10){
return _0x777ax15;
} ;
} ;
if(_0x777ax14+_0x777ax4==_0x777ax3){
return _0x777ax15;
} ;
} ;
} ;
return _0x777ax15;
} ,minIEver:7,getFromMimeType:function (_0x777ax4){
var _0x777ax12,_0x777ax8,_0x777ax3=this["$"],_0x777axd= new RegExp(_0x777ax4),_0x777ax5,_0x777axf,_0x777axe={
},_0x777ax6=0,_0x777ax2,_0x777ax7=[""];
for(_0x777ax12=0;
_0x777ax12<navigator["mimeTypes"]["length"];
_0x777ax12++){
_0x777axf=navigator["mimeTypes"][_0x777ax12];
if(_0x777axd["test"](_0x777axf["type"])&&_0x777axf["enabledPlugin"]){
_0x777axf=_0x777axf["type"]["substring"](_0x777axf["type"]["indexOf"]("=")+1,_0x777axf["type"]["length"]);
_0x777ax5="a"+_0x777ax3["formatNum"](_0x777axf);
if( typeof _0x777axe[_0x777ax5]=="undefined"){
_0x777axe[_0x777ax5]=_0x777axf;
_0x777ax6++;
} ;
} ;
} ;
for(_0x777ax8=0;
_0x777ax8<_0x777ax6;
_0x777ax8++){
_0x777ax2="0,0,0,0";
for(_0x777ax12 in _0x777axe){
if(_0x777axe[_0x777ax12]){
_0x777ax5=_0x777ax12["substring"](1,_0x777ax12["length"]);
if(_0x777ax3["compareNums"](_0x777ax5,_0x777ax2)>0){
_0x777ax2=_0x777ax5;
} ;
} ;
} ;
_0x777ax7[_0x777ax8]=_0x777axe["a"+_0x777ax2];
_0x777axe["a"+_0x777ax2]=null;
} ;
if(!(/windows|macintosh/i)["test"](navigator["userAgent"])){
_0x777ax7=[_0x777ax7[0]];
} ;
return _0x777ax7;
} ,queryJavaHandler:function (){
var _0x777ax2=PluginDetect["java"],_0x777ax4=window["java"],_0x777ax3;
_0x777ax2["hasRun"]=true;
try{
if( typeof _0x777ax4["lang"]!="undefined"&& typeof _0x777ax4["lang"]["System"]!="undefined"){
_0x777ax2["value"]=[_0x777ax4["lang"]["System"]["getProperty"]("java.version")+" ",_0x777ax4["lang"]["System"]["getProperty"]("java.vendor")+" "];
} ;
} catch(_0x777ax3){
} ;
} ,queryJava:function (){
var _0x777ax3=this,_0x777ax5=_0x777ax3["$"],_0x777ax2=navigator["userAgent"],_0x777ax8;
if( typeof window["java"]!="undefined"&&navigator["javaEnabled"]()&&!_0x777ax3["hasRun"]){
if(_0x777ax5["isGecko"]){
if(_0x777ax5["hasMimeType"]("application/x-java-vm")){
try{
var _0x777ax7=document["createElement"]("div"),_0x777ax4=document["createEvent"]("HTMLEvents");
_0x777ax4["initEvent"]("focus",false,true);
_0x777ax7["addEventListener"]("focus",_0x777ax3["queryJavaHandler"],false);
_0x777ax7["dispatchEvent"](_0x777ax4);
} catch(_0x777ax8){
} ;
if(!_0x777ax3["hasRun"]){
_0x777ax3["queryJavaHandler"]();
} ;
} ;
} else {
if((/opera.9\.(0|1)/i)["test"](_0x777ax2)&&(/mac/i)["test"](_0x777ax2)){
} else {
if(!_0x777ax3["hasRun"]){
_0x777ax3["queryJavaHandler"]();
} ;
} ;
} ;
} ;
return _0x777ax3["value"];
} ,forceVerifyTag:[],jar:[],VENDORS:["Sun Microsystems Inc.","Apple Computer, Inc."],init:function (){
var _0x777ax4=this,_0x777ax2=_0x777ax4["$"];
if( typeof _0x777ax4["app"]!="undefined"){
_0x777ax4["delJavaApplets"](_0x777ax2);
} ;
_0x777ax4["hasRun"]=false;
_0x777ax4["value"]=[null,null];
_0x777ax4["useTag"]=[2,2,2];
_0x777ax4["app"]=[0,0,0,0,0,0];
_0x777ax4["appi"]=3;
_0x777ax4["queryDTKresult"]=null;
_0x777ax4["OTF"]=0;
_0x777ax4["BridgeResult"]=[[null,null],[null,null],[null,null]];
_0x777ax4["JavaActive"]=[0,0,0];
_0x777ax4["All_versions"]=[];
_0x777ax4["DeployTK_versions"]=[];
_0x777ax4["MimeType_versions"]=[];
_0x777ax4["JavaPlugin_versions"]=[];
_0x777ax4["funcs"]=[];
var _0x777ax3=_0x777ax4["NOTF"];
if(_0x777ax3){
_0x777ax3["$"]=_0x777ax2;
if(_0x777ax3["javaInterval"]){
clearInterval(_0x777ax3["javaInterval"]);
} ;
_0x777ax3["EventJavaReady"]=null;
_0x777ax3["javaInterval"]=null;
_0x777ax3["count"]=0;
_0x777ax3["intervalLength"]=250;
_0x777ax3["countMax"]=40;
} ;
_0x777ax4["lateDetection"]=_0x777ax2["winLoaded"];
if(!_0x777ax4["lateDetection"]){
_0x777ax2["onWindowLoaded"](_0x777ax4["delJavaApplets"]);
} ;
} ,getVersion:function (_0x777ax8,_0x777ax11){
var _0x777ax12,_0x777ax5=this,_0x777ax7=_0x777ax5["$"],_0x777axd=null,_0x777ax13=null,_0x777ax6=null,_0x777ax3=navigator["javaEnabled"]();
if(_0x777ax5["getVersionDone"]===null){
_0x777ax5["init"]();
} ;
var _0x777axf;
if( typeof _0x777ax11!="undefined"&&_0x777ax11["constructor"]==Array){
for(_0x777axf=0;
_0x777axf<_0x777ax5["useTag"]["length"];
_0x777axf++){
if( typeof _0x777ax11[_0x777axf]=="number"){
_0x777ax5["useTag"][_0x777axf]=_0x777ax11[_0x777axf];
} ;
} ;
} ;
for(_0x777axf=0;
_0x777axf<_0x777ax5["forceVerifyTag"]["length"];
_0x777axf++){
_0x777ax5["useTag"][_0x777axf]=_0x777ax5["forceVerifyTag"][_0x777axf];
} ;
if( typeof _0x777ax8!="undefined"){
_0x777ax5["jar"][_0x777ax5["jar"]["length"]]=_0x777ax8;
} ;
if(_0x777ax5["getVersionDone"]==0){
if(!_0x777ax5["version"]||_0x777ax5["useAnyTag"]()){
_0x777ax12=_0x777ax5["queryExternalApplet"](_0x777ax8);
if(_0x777ax12[0]){
_0x777ax6=_0x777ax12[0];
_0x777ax13=_0x777ax12[1];
} ;
} ;
_0x777ax5.EndGetVersion(_0x777ax6,_0x777ax13);
return ;
} ;
var _0x777axe=_0x777ax5["queryDeploymentToolKit"]();
if( typeof _0x777axe=="string"&&_0x777axe["length"]>0){
_0x777axd=_0x777axe;
_0x777ax13=_0x777ax5["VENDORS"][0];
} ;
if(!_0x777ax7["isIE"]){
var _0x777ax15,_0x777ax10,_0x777ax2,_0x777ax16,_0x777ax4;
_0x777ax4=_0x777ax7["hasMimeType"](_0x777ax5["mimeType"]);
_0x777ax16=(_0x777ax4&&_0x777ax3)?true:false;
if(_0x777ax5["MimeType_versions"]["length"]==0&&_0x777ax4){
_0x777ax12=_0x777ax5["getFromMimeType"]("application/x-java-applet.*jpi-version.*=");
if(_0x777ax12[0]!=""){
if(!_0x777axd){
_0x777axd=_0x777ax12[0];
} ;
_0x777ax5["MimeType_versions"]=_0x777ax12;
} ;
} ;
if(!_0x777axd&&_0x777ax4){
_0x777ax12="Java[^\d]*Plug-in";
_0x777ax2=_0x777ax7["findNavPlugin"](_0x777ax12);
if(_0x777ax2){
_0x777ax12= new RegExp(_0x777ax12,"i");
_0x777ax15=_0x777ax12["test"](_0x777ax2["description"])?_0x777ax7["getNum"](_0x777ax2["description"]):null;
_0x777ax10=_0x777ax12["test"](_0x777ax2["name"])?_0x777ax7["getNum"](_0x777ax2["name"]):null;
if(_0x777ax15&&_0x777ax10){
_0x777axd=(_0x777ax7["compareNums"](_0x777ax7["formatNum"](_0x777ax15),_0x777ax7["formatNum"](_0x777ax10))>=0)?_0x777ax15:_0x777ax10;
} else {
_0x777axd=_0x777ax15||_0x777ax10;
} ;
} ;
} ;
if(!_0x777axd&&_0x777ax4&&(/macintosh.*safari/i)["test"](navigator["userAgent"])){
_0x777ax2=_0x777ax7["findNavPlugin"]("Java.*\d.*Plug-in.*Cocoa",false);
if(_0x777ax2){
_0x777ax15=_0x777ax7["getNum"](_0x777ax2["description"]);
if(_0x777ax15){
_0x777axd=_0x777ax15;
} ;
} ;
} ;
if(_0x777axd){
_0x777ax5["version0"]=_0x777axd;
if(_0x777ax3){
_0x777ax6=_0x777axd;
} ;
} ;
if(!_0x777ax6||_0x777ax5["useAnyTag"]()){
_0x777ax2=_0x777ax5["queryExternalApplet"](_0x777ax8);
if(_0x777ax2[0]){
_0x777ax6=_0x777ax2[0];
_0x777ax13=_0x777ax2[1];
} ;
} ;
if(!_0x777ax6){
_0x777ax2=_0x777ax5["queryJava"]();
if(_0x777ax2[0]){
_0x777ax5["version0"]=_0x777ax2[0];
_0x777ax6=_0x777ax2[0];
_0x777ax13=_0x777ax2[1];
if(_0x777ax5["installed"]==-0.5){
_0x777ax5["installed"]=0.5;
} ;
} ;
} ;
if(_0x777ax5["installed"]===null&&!_0x777ax6&&_0x777ax16&&!(/macintosh.*ppc/i)["test"](navigator["userAgent"])){
_0x777ax12=_0x777ax5["getFromMimeType"]("application/x-java-applet.*version.*=");
if(_0x777ax12[0]!=""){
_0x777ax6=_0x777ax12[0];
} ;
} ;
if(!_0x777ax6&&_0x777ax16){
if(/macintosh.*safari/i["test"](navigator["userAgent"])){
if(_0x777ax5["installed"]===null){
_0x777ax5["installed"]=0;
} else {
if(_0x777ax5["installed"]==-0.5){
_0x777ax5["installed"]=0.5;
} ;
} ;
} ;
} ;
} else {
if(!_0x777axd&&_0x777axe!=-1){
_0x777axd=_0x777ax5["searchJavaPluginAXO"]();
if(_0x777axd){
_0x777ax13=_0x777ax5["VENDORS"][0];
} ;
} ;
if(!_0x777axd){
_0x777ax5.JavaFix();
} ;
if(_0x777axd){
_0x777ax5["version0"]=_0x777axd;
if(_0x777ax3&&_0x777ax7["ActiveXEnabled"]){
_0x777ax6=_0x777axd;
} ;
} ;
if(!_0x777ax6||_0x777ax5["useAnyTag"]()){
_0x777ax12=_0x777ax5["queryExternalApplet"](_0x777ax8);
if(_0x777ax12[0]){
_0x777ax6=_0x777ax12[0];
_0x777ax13=_0x777ax12[1];
} ;
} ;
} ;
if(_0x777ax5["installed"]===null){
_0x777ax5["installed"]=_0x777ax6?1:(_0x777axd?-0.2:-1);
} ;
_0x777ax5.EndGetVersion(_0x777ax6,_0x777ax13);
} ,EndGetVersion:function (_0x777ax2,_0x777ax5){
var _0x777ax4=this,_0x777ax3=_0x777ax4["$"];
if(_0x777ax4["version0"]){
_0x777ax4["version0"]=_0x777ax3["formatNum"](_0x777ax3["getNum"](_0x777ax4["version0"]));
} ;
if(_0x777ax2){
_0x777ax4["version"]=_0x777ax3["formatNum"](_0x777ax3["getNum"](_0x777ax2));
_0x777ax4["vendor"]=( typeof _0x777ax5=="string"?_0x777ax5:"");
} ;
if(_0x777ax4["getVersionDone"]!=1){
_0x777ax4["getVersionDone"]=0;
} ;
} ,queryDeploymentToolKit:function (){
var _0x777ax5=this,_0x777ax7=_0x777ax5["$"],_0x777axe,_0x777ax2,_0x777ax12=null,_0x777ax4=null;
if((_0x777ax7["isGecko"]&&_0x777ax7["compareNums"](_0x777ax7.GeckoRV,_0x777ax7["formatNum"]("1.6"))<=0)||_0x777ax7["isSafari"]||(_0x777ax7["isIE"]&&!_0x777ax7["ActiveXEnabled"])){
_0x777ax5["queryDTKresult"]=0;
} ;
if(_0x777ax5["queryDTKresult"]!==null){
return _0x777ax5["queryDTKresult"];
} ;
if(_0x777ax7["isIE"]&&_0x777ax7["IEver"]>=6){
_0x777ax5["app"][0]=_0x777ax7["instantiate"]("object",[],[]);
_0x777ax12=_0x777ax7["getObject"](_0x777ax5["app"][0]);
} else {
if(!_0x777ax7["isIE"]&&_0x777ax7["hasMimeType"](_0x777ax5.DTKmimeType)){
_0x777ax5["app"][0]=_0x777ax7["instantiate"]("object",["type",_0x777ax5["DTKmimeType"]],[]);
_0x777ax12=_0x777ax7["getObject"](_0x777ax5["app"][0]);
} ;
} ;
if(_0x777ax12){
if(_0x777ax7["isIE"]&&_0x777ax7["IEver"]>=6){
try{
_0x777ax12["classid"]=_0x777ax5["DTKclassID"];
} catch(_0x777axe){
} ;
} ;
try{
var _0x777ax3,_0x777ax8=_0x777ax12["jvms"];
if(_0x777ax8){
_0x777ax4=_0x777ax8["getLength"]();
if( typeof _0x777ax4=="number"){
for(_0x777ax2=0;
_0x777ax2<_0x777ax4;
_0x777ax2++){
_0x777ax3=_0x777ax8["get"](_0x777ax4-1-_0x777ax2);
if(_0x777ax3){
_0x777ax3=_0x777ax3["version"];
if(_0x777ax7["getNum"](_0x777ax3)){
_0x777ax5["DeployTK_versions"][_0x777ax2]=_0x777ax3;
} ;
} ;
} ;
} ;
} ;
} catch(_0x777axe){
} ;
} ;
_0x777ax7["hideObject"](_0x777ax12);
_0x777ax5["queryDTKresult"]=_0x777ax5["DeployTK_versions"]["length"]>0?_0x777ax5["DeployTK_versions"][0]:(_0x777ax4==0?-1:0);
return _0x777ax5["queryDTKresult"];
} ,queryExternalApplet:function (_0x777ax5){
var _0x777ax3=this,_0x777ax6=_0x777ax3["$"],_0x777ax12=_0x777ax3["BridgeResult"],_0x777ax2=_0x777ax3["app"],_0x777ax7=_0x777ax3["appi"],_0x777ax4="&nbsp;&nbsp;&nbsp;&nbsp;";
if( typeof _0x777ax5!="string"||!(/\.jar\s*$/)["test"](_0x777ax5)){
return [null,null];
} ;
if(_0x777ax3["OTF"]<1){
_0x777ax3["OTF"]=1;
} ;
if(!_0x777ax6["isIE"]){
if((_0x777ax6["isGecko"]||_0x777ax6["isChrome"])&&!_0x777ax6["hasMimeType"](_0x777ax3["mimeType"])&&!_0x777ax3["queryJava"]()[0]){
return [null,null];
} ;
} ;
if(_0x777ax3["OTF"]<2){
_0x777ax3["OTF"]=2;
} ;
if(!_0x777ax2[_0x777ax7]&&_0x777ax3["canUseObjectTag"]()&&_0x777ax3["canUseThisTag"](0)){
_0x777ax2[1]=_0x777ax6["instantiate"]("object",[],[],_0x777ax4);
_0x777ax2[_0x777ax7]=_0x777ax6["isIE"]?_0x777ax6["instantiate"]("object",["archive",_0x777ax5,"code","A.class","type",_0x777ax3["mimeType"]],["archive",_0x777ax5,"code","A.class","mayscript","true","scriptable","true"],_0x777ax4):_0x777ax6["instantiate"]("object",["archive",_0x777ax5,"classid","java:A.class","type",_0x777ax3["mimeType"]],["archive",_0x777ax5,"mayscript","true","scriptable","true"],_0x777ax4);
_0x777ax12[0]=[0,0];
_0x777ax3["query1Applet"](_0x777ax7);
} ;
if(!_0x777ax2[_0x777ax7+1]&&_0x777ax3["canUseAppletTag"]()&&_0x777ax3["canUseThisTag"](1)){
_0x777ax2[_0x777ax7+1]=_0x777ax6["instantiate"]("applet",["archive",_0x777ax5,"code","A.class","alt",_0x777ax4,"mayscript","true"],["mayscript","true"],_0x777ax4);
_0x777ax12[1]=[0,0];
_0x777ax3["query1Applet"](_0x777ax7+1);
} ;
if(_0x777ax6["isIE"]&&!_0x777ax2[_0x777ax7+2]&&_0x777ax3["canUseObjectTag"]()&&_0x777ax3["canUseThisTag"](2)){
_0x777ax2[_0x777ax7+2]=_0x777ax6["instantiate"]("object",["classid",_0x777ax3["classID"]],["archive",_0x777ax5,"code","A.class","mayscript","true","scriptable","true"],_0x777ax4);
_0x777ax12[2]=[0,0];
_0x777ax3["query1Applet"](_0x777ax7+2);
} ;
var _0x777axd,_0x777ax8=0;
for(_0x777axd=0;
_0x777axd<_0x777ax12["length"];
_0x777axd++){
if(_0x777ax2[_0x777ax7+_0x777axd]||_0x777ax3["canUseThisTag"](_0x777axd)){
_0x777ax8++;
} else {
break ;
} ;
} ;
if(_0x777ax8==_0x777ax12["length"]){
_0x777ax3["getVersionDone"]=1;
if(_0x777ax3["forceVerifyTag"]["length"]>0){
_0x777ax3["getVersionDone"]=0;
} ;
} ;
return _0x777ax3["getBR"]();
} ,canUseAppletTag:function (){
return ((!this["$"]["isIE"]||navigator["javaEnabled"]())?true:false);
} ,canUseObjectTag:function (){
return ((!this["$"]["isIE"]||this["$"]["ActiveXEnabled"])?true:false);
} ,useAnyTag:function (){
var _0x777ax2=this,_0x777ax4;
for(_0x777ax4=0;
_0x777ax4<_0x777ax2["useTag"]["length"];
_0x777ax4++){
if(_0x777ax2["canUseThisTag"](_0x777ax4)){
return true;
} ;
} ;
return false;
} ,canUseThisTag:function (_0x777ax3){
var _0x777ax4=this,_0x777ax2=_0x777ax4["$"];
if(_0x777ax4["useTag"][_0x777ax3]==3){
return true;
} ;
if(!_0x777ax4["version0"]||!navigator["javaEnabled"]()||(_0x777ax2["isIE"]&&!_0x777ax2["ActiveXEnabled"])){
if(_0x777ax4["useTag"][_0x777ax3]==2){
return true;
} ;
if(_0x777ax4["useTag"][_0x777ax3]==1&&!_0x777ax4["getBR"]()[0]){
return true;
} ;
} ;
return false;
} ,getBR:function (){
var _0x777ax2=this["BridgeResult"],_0x777ax4;
for(_0x777ax4=0;
_0x777ax4<_0x777ax2["length"];
_0x777ax4++){
if(_0x777ax2[_0x777ax4][0]){
return [_0x777ax2[_0x777ax4][0],_0x777ax2[_0x777ax4][1]];
} ;
} ;
return [_0x777ax2[0][0],_0x777ax2[0][1]];
} ,delJavaApplets:function (_0x777ax2){
var _0x777ax3=_0x777ax2["java"]["app"],_0x777ax4;
for(_0x777ax4=_0x777ax3["length"]-1;
_0x777ax4>=0;
_0x777ax4--){
_0x777ax2["uninstantiate"](_0x777ax3[_0x777ax4]);
} ;
} ,query1Applet:function (_0x777ax7){
var _0x777ax8,_0x777ax3=this,_0x777ax5=_0x777ax3["$"],_0x777ax4=null,_0x777ax12=null,_0x777ax2=_0x777ax5["getObject"](_0x777ax3["app"][_0x777ax7],true);
try{
if(_0x777ax2){
_0x777ax4=_0x777ax2["getVersion"]()+" ";
_0x777ax12=_0x777ax2["getVendor"]()+" ";
if(_0x777ax5["num"](_0x777ax4)){
_0x777ax3["BridgeResult"][_0x777ax7-_0x777ax3["appi"]]=[_0x777ax4,_0x777ax12];
_0x777ax5["hideObject"](_0x777ax3["app"][_0x777ax7]);
} ;
if(_0x777ax5["isIE"]&&_0x777ax4&&_0x777ax2["readyState"]!=4){
_0x777ax5["garbage"]=true;
_0x777ax5["uninstantiate"](_0x777ax3["app"][_0x777ax7]);
} ;
} ;
} catch(_0x777ax8){
} ;
} ,NOTF:{
isJavaActive:function (){
} },append:function (_0x777ax6,_0x777ax5){
for(var _0x777ax3=0;
_0x777ax3<_0x777ax5["length"];
_0x777ax3++){
_0x777ax6[_0x777ax6["length"]]=_0x777ax5[_0x777ax3];
} ;
} ,getInfo:function (){
var _0x777ax10={
};
;
;
var _0x777ax4=this,_0x777ax5=_0x777ax4["$"],_0x777ax12,_0x777ax11=_0x777ax4["installed"];
_0x777ax10={
All_versions:[],DeployTK_versions:[],MimeType_versions:[],DeploymentToolkitPlugin:(_0x777ax4["queryDTKresult"]==0?false:true),vendor:( typeof _0x777ax4["vendor"]=="string"?_0x777ax4["vendor"]:""),OTF:(_0x777ax4["OTF"]<3?0:(_0x777ax4["OTF"]==3?1:2))};
var _0x777ax7=[null,null,null];
for(_0x777ax12=0;
_0x777ax12<_0x777ax4["BridgeResult"]["length"];
_0x777ax12++){
_0x777ax7[_0x777ax12]=_0x777ax4["BridgeResult"][_0x777ax12][0]?1:(_0x777ax4["JavaActive"][_0x777ax12]==1?0:(_0x777ax4["useTag"][_0x777ax12]>=1&&_0x777ax4["OTF"]>=1&&_0x777ax4["OTF"]!=3&&!(_0x777ax12==2&&!_0x777ax5["isIE"])&&(_0x777ax4["BridgeResult"][_0x777ax12][0]!==null||(_0x777ax12==1&&!_0x777ax4["canUseAppletTag"]())||(_0x777ax12!=1&&!_0x777ax4["canUseObjectTag"]())||_0x777ax11==-0.2||_0x777ax11==-1)?-1:null));
} ;
_0x777ax10["objectTag"]=_0x777ax7[0];
_0x777ax10["appletTag"]=_0x777ax7[1];
_0x777ax10["objectTagActiveX"]=_0x777ax7[2];
var _0x777ax3=_0x777ax10["All_versions"],_0x777axf=_0x777ax10["DeployTK_versions"],_0x777ax8=_0x777ax10["MimeType_versions"],_0x777ax2=_0x777ax4["JavaPlugin_versions"];
_0x777ax4["append"](_0x777axf,_0x777ax4.DeployTK_versions);
_0x777ax4["append"](_0x777ax8,_0x777ax4.MimeType_versions);
_0x777ax4["append"](_0x777ax3,(_0x777axf["length"]>0?_0x777axf:(_0x777ax8["length"]>0?_0x777ax8:(_0x777ax2["length"]>0?_0x777ax2:( typeof _0x777ax4["version"]=="string"?[_0x777ax4["version"]]:[])))));
for(_0x777ax12=0;
_0x777ax12<_0x777ax3["length"];
_0x777ax12++){
_0x777ax3[_0x777ax12]=_0x777ax5["formatNum"](_0x777ax5["getNum"](_0x777ax3[_0x777ax12]));
} ;
var _0x777axe,_0x777ax6=null;
if(!_0x777ax5["isIE"]){
_0x777axe=_0x777ax8["length"]>0?_0x777ax5["hasMimeType"](_0x777ax4["mimeType"]+";jpi-version="+_0x777ax8[0]):_0x777ax5["hasMimeType"](_0x777ax4["mimeType"]);
if(_0x777axe){
_0x777ax6=_0x777axe["enabledPlugin"];
} ;
} ;
_0x777ax10["name"]=_0x777ax6?_0x777ax6["name"]:"";
_0x777ax10["description"]=_0x777ax6?_0x777ax6["description"]:"";
var _0x777axd=null;
if((_0x777ax11==0||_0x777ax11==1)&&_0x777ax10["vendor"]==""){
if(/macintosh/i["test"](navigator["userAgent"])){
_0x777axd=_0x777ax4["VENDORS"][1];
} else {
if(!_0x777ax5["isIE"]&&(/windows/i)["test"](navigator["userAgent"])){
_0x777axd=_0x777ax4["VENDORS"][0];
} else {
if(/linux/i["test"](navigator["userAgent"])){
_0x777axd=_0x777ax4["VENDORS"][0];
} ;
} ;
} ;
if(_0x777axd){
_0x777ax10["vendor"]=_0x777axd;
} ;
} ;
return _0x777ax10;
} ,JavaFix:function (){
} };
;
;
PluginDetect["devalvr"]={
mimeType:"application/x-devalvrx",progID:"DevalVRXCtrl.DevalVRXCtrl.1",classID:"clsid:5D2CF9D0-113A-476B-986F-288B54571614",getVersion:function (){
var _0x777ax4=null,_0x777ax7,_0x777ax3=this["$"],_0x777ax8;
if(!_0x777ax3["isIE"]){
_0x777ax7=_0x777ax3["findNavPlugin"]("DevalVR");
if(_0x777ax7&&_0x777ax7["name"]&&_0x777ax3["hasMimeType"](this["mimeType"])){
_0x777ax4=_0x777ax7["description"]["split"](" ")[3];
} ;
this["installed"]=_0x777ax4?1:-1;
} else {
var _0x777ax2,_0x777ax12,_0x777ax5;
_0x777ax12=_0x777ax3["getAXO"](this["progID"],1);
if(_0x777ax12){
_0x777ax2=_0x777ax3["instantiate"]("object",["classid",this["classID"]],["src",""]);
_0x777ax5=_0x777ax3["getObject"](_0x777ax2);
if(_0x777ax5){
try{
if(_0x777ax5["pluginversion"]){
_0x777ax4="00000000"+_0x777ax5["pluginversion"].toString(16);
_0x777ax4=_0x777ax4["substr"](_0x777ax4["length"]-8,8);
_0x777ax4=parseInt(_0x777ax4["substr"](0,2),16)+","+parseInt(_0x777ax4["substr"](2,2),16)+","+parseInt(_0x777ax4["substr"](4,2),16)+","+parseInt(_0x777ax4["substr"](6,2),16);
} ;
} catch(_0x777ax8){
} ;
} ;
_0x777ax3["uninstantiate"](_0x777ax2);
} ;
this["installed"]=_0x777ax4?1:(_0x777ax12?0:-1);
} ;
this["version"]=_0x777ax3["formatNum"](_0x777ax4);
} };
;
;
PluginDetect["flash"]={
mimeType:["application/x-shockwave-flash","application/futuresplash"],progID:"ShockwaveFlash.ShockwaveFlash",classID:"clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",getVersion:function (){
var _0x777ax3=function (_0x777axe){
if(!_0x777axe){
return null;
} ;
var _0x777ax6=/[\d][\d\,\.\s]*[rRdD]{
0,1}[\d\,]*/["exec"](_0x777axe);
return _0x777ax6?_0x777ax6[0]["replace"](/[rRdD\.]/g,",")["replace"](/\s/g,""):null;
} ;
var _0x777axd,_0x777ax7=this["$"],_0x777ax12,_0x777ax8,_0x777ax2=null,_0x777ax4=null,_0x777ax5=null;
if(!_0x777ax7["isIE"]){
_0x777axd=_0x777ax7["findNavPlugin"]("Flash");
if(_0x777axd&&_0x777axd["description"]&&_0x777ax7["hasMimeType"](this["mimeType"])){
_0x777ax2=_0x777ax3(_0x777axd["description"]);
} ;
} else {
for(_0x777ax8=15;
_0x777ax8>2;
_0x777ax8--){
_0x777ax4=_0x777ax7["getAXO"](this["progID"]+"."+_0x777ax8);
if(_0x777ax4){
_0x777ax5=_0x777ax8.toString();
break ;
} ;
} ;
if(_0x777ax5=="6"){
try{
_0x777ax4["AllowScriptAccess"]="always";
} catch(_0x777ax12){
return "6,0,21,0";
} ;
} ;
try{
_0x777ax2=_0x777ax3(_0x777ax4.GetVariable("$version"));
} catch(_0x777ax12){
} ;
if(!_0x777ax2&&_0x777ax5){
_0x777ax2=_0x777ax5;
} ;
} ;
this["installed"]=_0x777ax2?1:-1;
this["version"]=_0x777ax7["formatNum"](_0x777ax2);
return true;
} };
;
;
PluginDetect["shockwave"]={
mimeType:"application/x-director",progID:"SWCtl.SWCtl",classID:"clsid:166B1BCA-3F9C-11CF-8075-444553540000",getVersion:function (){
var _0x777ax4=null,_0x777ax2=null,_0x777ax8,_0x777ax5,_0x777ax3=this["$"];
if(!_0x777ax3["isIE"]){
_0x777ax5=_0x777ax3["findNavPlugin"]("Shockwave for Director");
if(_0x777ax5&&_0x777ax5["description"]&&_0x777ax3["hasMimeType"](this["mimeType"])){
_0x777ax4=_0x777ax3["getNum"](_0x777ax5["description"]);
} ;
} else {
try{
_0x777ax2=_0x777ax3["getAXO"](this["progID"]).ShockwaveVersion("");
} catch(_0x777ax8){
} ;
if( typeof _0x777ax2=="string"&&_0x777ax2["length"]>0){
_0x777ax4=_0x777ax3["getNum"](_0x777ax2);
} else {
if(_0x777ax3["getAXO"](this["progID"]+".8",1)){
_0x777ax4="8";
} else {
if(_0x777ax3["getAXO"](this["progID"]+".7",1)){
_0x777ax4="7";
} else {
if(_0x777ax3["getAXO"](this["progID"]+".1",1)){
_0x777ax4="6";
} ;
} ;
} ;
} ;
} ;
this["installed"]=_0x777ax4?1:-1;
this["version"]=_0x777ax3["formatNum"](_0x777ax4);
} };
;
;
PluginDetect["div"]=null;
PluginDetect["pluginSize"]=1;
PluginDetect["DOMbody"]=null;
PluginDetect["uninstantiate"]=function (_0x777ax4){
var _0x777ax3,_0x777ax2=this;
if(!_0x777ax4){
return ;
} ;
try{
if(_0x777ax4[0]&&_0x777ax4[0]["firstChild"]){
_0x777ax4[0]["removeChild"](_0x777ax4[0]["firstChild"]);
} ;
if(_0x777ax4[0]&&_0x777ax2["div"]){
_0x777ax2["div"]["removeChild"](_0x777ax4[0]);
} ;
if(_0x777ax2["div"]&&_0x777ax2["div"]["childNodes"]["length"]==0){
_0x777ax2["div"]["parentNode"]["removeChild"](_0x777ax2["div"]);
_0x777ax2["div"]=null;
if(_0x777ax2["DOMbody"]&&_0x777ax2["DOMbody"]["parentNode"]){
_0x777ax2["DOMbody"]["parentNode"]["removeChild"](_0x777ax2.DOMbody);
} ;
_0x777ax2["DOMbody"]=null;
} ;
_0x777ax4[0]=null;
} catch(_0x777ax3){
} ;
} ;
PluginDetect["getObject"]=function (_0x777ax2,_0x777ax4){
var _0x777ax8,_0x777ax3=this,_0x777ax5=null;
try{
if(_0x777ax2&&_0x777ax2[0]&&_0x777ax2[0]["firstChild"]){
_0x777ax5=_0x777ax2[0]["firstChild"];
} ;
} catch(_0x777ax8){
} ;
try{
if(_0x777ax4&&_0x777ax5&& typeof _0x777ax5["focus"]!="undefined"&& typeof document["hasFocus"]!="undefined"&&!document["hasFocus"]()){
_0x777ax5["focus"]();
} ;
} catch(_0x777ax8){
} ;
return _0x777ax5;
} ;
PluginDetect["getContainer"]=function (_0x777ax4){
var _0x777ax3,_0x777ax2=null;
if(_0x777ax4&&_0x777ax4[0]){
_0x777ax2=_0x777ax4[0];
} ;
return _0x777ax2;
} ;
PluginDetect["hideObject"]=function (_0x777ax4){
var _0x777ax2=this["getObject"](_0x777ax4);
if(_0x777ax2&&_0x777ax2["style"]){
_0x777ax2["style"]["height"]="0";
} ;
} ;
PluginDetect["instantiate"]=function (_0x777ax12,_0x777ax2,_0x777ax3,_0x777ax4){
var _0x777axd=function (_0x777ax5){
var _0x777ax6=_0x777ax5["style"];
if(!_0x777ax6){
return ;
} ;
_0x777ax6["border"]="0px";
_0x777ax6["padding"]="0px";
_0x777ax6["margin"]="0px";
_0x777ax6["fontSize"]=(_0x777ax7["pluginSize"]+3)+"px";
_0x777ax6["height"]=(_0x777ax7["pluginSize"]+3)+"px";
_0x777ax6["visibility"]="visible";
if(_0x777ax5["tagName"]&&_0x777ax5["tagName"]["toLowerCase"]()=="div"){
_0x777ax6["width"]="100%";
_0x777ax6["display"]="block";
} else {
if(_0x777ax5["tagName"]&&_0x777ax5["tagName"]["toLowerCase"]()=="span"){
_0x777ax6["width"]=_0x777ax7["pluginSize"]+"px";
_0x777ax6["display"]="inline";
} ;
} ;
} ;
var _0x777axf,_0x777ax11=document,_0x777ax7=this,_0x777ax14,_0x777axe=(_0x777ax11["getElementsByTagName"]("body")[0]||_0x777ax11["body"]),_0x777ax16=_0x777ax11["createElement"]("span"),_0x777ax13,_0x777ax8,_0x777ax10="/";
if( typeof _0x777ax4=="undefined"){
_0x777ax4="";
} ;
_0x777ax14="<"+_0x777ax12+" width=""+_0x777ax7["pluginSize"]+"" height=""+_0x777ax7["pluginSize"]+"" ";
for(_0x777ax13=0;
_0x777ax13<_0x777ax2["length"];
_0x777ax13=_0x777ax13+2){
_0x777ax14+=_0x777ax2[_0x777ax13]+"=""+_0x777ax2[_0x777ax13+1]+"" ";
} ;
_0x777ax14+=">";
for(_0x777ax13=0;
_0x777ax13<_0x777ax3["length"];
_0x777ax13=_0x777ax13+2){
_0x777ax14+="<param name=""+_0x777ax3[_0x777ax13]+"" value=""+_0x777ax3[_0x777ax13+1]+"" />";
} ;
_0x777ax14+=_0x777ax4+"<"+_0x777ax10+_0x777ax12+">";
if(!_0x777ax7["div"]){
_0x777ax7["div"]=_0x777ax11["createElement"]("div");
_0x777ax8=_0x777ax11["getElementById"]("plugindetect");
if(_0x777ax8){
_0x777axd(_0x777ax8);
_0x777ax8["appendChild"](_0x777ax7["div"]);
} else {
if(_0x777axe){
try{
if(_0x777axe["firstChild"]&& typeof _0x777axe["insertBefore"]!="undefined"){
_0x777axe["insertBefore"](_0x777ax7["div"],_0x777axe["firstChild"]);
} else {
_0x777axe["appendChild"](_0x777ax7["div"]);
} ;
} catch(_0x777axf){
} ;
} else {
try{
_0x777ax11["write"]("<div id="pd33993399">o<"+_0x777ax10+"div>");
_0x777axe=(_0x777ax11["getElementsByTagName"]("body")[0]||_0x777ax11["body"]);
_0x777axe["appendChild"](_0x777ax7["div"]);
_0x777axe["removeChild"](_0x777ax11["getElementById"]("pd33993399"));
} catch(_0x777axf){
try{
_0x777ax7["DOMbody"]=_0x777ax11["createElement"]("body");
_0x777ax11["getElementsByTagName"]("html")[0]["appendChild"](_0x777ax7.DOMbody);
_0x777ax7["DOMbody"]["appendChild"](_0x777ax7["div"]);
} catch(_0x777axf){
} ;
} ;
} ;
} ;
_0x777axd(_0x777ax7["div"]);
} ;
if(_0x777ax7["div"]&&_0x777ax7["div"]["parentNode"]&&_0x777ax7["div"]["parentNode"]["parentNode"]){
_0x777ax7["div"]["appendChild"](_0x777ax16);
try{
_0x777ax16["innerHTML"]=_0x777ax14;
} catch(_0x777axf){
} ;
_0x777axd(_0x777ax16);
return [_0x777ax16];
} ;
return [null];
} ;
;
;
PluginDetect["windowsmediaplayer"]={
mimeType:["application/x-mplayer2","application/asx"],progID:"wmplayer.ocx",classID:"clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6",getVersion:function (){
var _0x777ax4=null,_0x777ax6=this["$"],_0x777ax2=null;
this["installed"]=-1;
if(!_0x777ax6["isIE"]){
if(_0x777ax6["hasMimeType"](this["mimeType"])){
if(_0x777ax6["findNavPlugin"](["Windows","Media","(Plug-in|Plugin)"],false)||_0x777ax6["findNavPlugin"](["Flip4Mac","Windows","Media"],false)){
this["installed"]=0;
} ;
var _0x777ax5=_0x777ax6["isGecko"]&&_0x777ax6["compareNums"](_0x777ax6.GeckoRV,_0x777ax6["formatNum"]("1.8"))<0;
if(!_0x777ax5&&_0x777ax6["findNavPlugin"](["Windows","Media","Firefox Plugin"],false)){
var _0x777ax3=_0x777ax6["instantiate"]("object",["type",this["mimeType"][0]],[]),_0x777ax8=_0x777ax6["getObject"](_0x777ax3);
if(_0x777ax8){
_0x777ax4=_0x777ax8["versionInfo"];
} ;
_0x777ax6["uninstantiate"](_0x777ax3);
} ;
} ;
} else {
_0x777ax2=_0x777ax6["getAXO"](this["progID"]);
if(_0x777ax2){
_0x777ax4=_0x777ax2["versionInfo"];
} ;
} ;
if(_0x777ax4){
this["installed"]=1;
} ;
this["version"]=_0x777ax6["formatNum"](_0x777ax4);
} };
;
;
PluginDetect["silverlight"]={
mimeType:"application/x-silverlight",progID:"AgControl.AgControl",digits:[9,20,9,12,31],getVersion:function (){
var _0x777ax3=this["$"],_0x777axd=document,_0x777ax7=null,_0x777ax2=null,_0x777ax8=false;
if(!_0x777ax3["isIE"]){
var _0x777ax4=[null,null],_0x777ax6=_0x777ax3["findNavPlugin"]("Silverlight Plug-in",false),_0x777ax12=_0x777ax3["isGecko"]&&_0x777ax3["compareNums"](_0x777ax3.GeckoRV,_0x777ax3["formatNum"]("1.6"))<=0;
if(_0x777ax6&&_0x777ax3["hasMimeType"](this["mimeType"])){
_0x777ax7=_0x777ax3["formatNum"](_0x777ax6["description"]);
if(_0x777ax7){
_0x777ax14=_0x777ax7["split"](",");
if(parseInt(_0x777ax14[2],10)>=30226&&parseInt(_0x777ax14[0],10)<2){
_0x777ax14[0]="2";
} ;
_0x777ax7=_0x777ax14["join"](",");
} ;
if(_0x777ax3["isGecko"]&&!_0x777ax12){
_0x777ax8=true;
} ;
if(!_0x777ax8&&!_0x777ax12&&_0x777ax7){
_0x777ax4=_0x777ax3["instantiate"]("object",["type",this["mimeType"]],[]);
_0x777ax2=_0x777ax3["getObject"](_0x777ax4);
if(_0x777ax2){
if( typeof _0x777ax2["IsVersionSupported"]!="undefined"){
_0x777ax8=true;
} ;
if(!_0x777ax8){
_0x777ax2["data"]="data:"+this["mimeType"]+",";
if( typeof _0x777ax2["IsVersionSupported"]!="undefined"){
_0x777ax8=true;
} ;
} ;
} ;
_0x777ax3["uninstantiate"](_0x777ax4);
} ;
} ;
} else {
_0x777ax2=_0x777ax3["getAXO"](this["progID"]);
var _0x777ax14=[1,0,1,1,1],_0x777ax11,_0x777axf,_0x777ax16,_0x777axe=function (_0x777ax5){
return (_0x777ax5<10?"0":"")+_0x777ax5.toString();
} ,_0x777ax10=function (_0x777ax15,_0x777ax5,_0x777ax17,_0x777ax18,_0x777ax19){
return (_0x777ax15+"."+_0x777ax5+"."+_0x777ax17+_0x777axe(_0x777ax18)+_0x777axe(_0x777ax19)+".0");
} ,_0x777ax13=function (_0x777ax5,_0x777ax17){
var _0x777ax15,_0x777ax19=_0x777ax10((_0x777ax5==0?_0x777ax17:_0x777ax14[0]),(_0x777ax5==1?_0x777ax17:_0x777ax14[1]),(_0x777ax5==2?_0x777ax17:_0x777ax14[2]),(_0x777ax5==3?_0x777ax17:_0x777ax14[3]),(_0x777ax5==4?_0x777ax17:_0x777ax14[4]));
try{
return _0x777ax2.IsVersionSupported(_0x777ax19);
} catch(_0x777ax15){
} ;
return false;
} ;
if(_0x777ax2&& typeof _0x777ax2["IsVersionSupported"]!="undefined"){
for(_0x777ax11=0;
_0x777ax11<this["digits"]["length"];
_0x777ax11++){
_0x777ax16=_0x777ax14[_0x777ax11];
for(_0x777axf=_0x777ax16+(_0x777ax11==0?0:1);
_0x777axf<=this["digits"][_0x777ax11];
_0x777axf++){
if(_0x777ax13(_0x777ax11,_0x777axf)){
_0x777ax8=true;
_0x777ax14[_0x777ax11]=_0x777axf;
} else {
break ;
} ;
} ;
if(!_0x777ax8){
break ;
} ;
} ;
if(_0x777ax8){
_0x777ax7=_0x777ax10(_0x777ax14[0],_0x777ax14[1],_0x777ax14[2],_0x777ax14[3],_0x777ax14[4]);
} ;
} ;
} ;
this["installed"]=_0x777ax8?1:-1;
this["version"]=_0x777ax3["formatNum"](_0x777ax7);
} };
;
;
PluginDetect["vlc"]={
mimeType:"application/x-vlc-plugin",progID:"VideoLAN.VLCPlugin",compareNums:function (_0x777ax5,_0x777ax3){
var _0x777axd=_0x777ax5["split"](","),_0x777ax12=_0x777ax3["split"](","),_0x777ax7,_0x777ax2,_0x777ax4,_0x777ax8,_0x777ax6,_0x777axe;
for(_0x777ax7=0;
_0x777ax7<Math["min"](_0x777axd["length"],_0x777ax12["length"]);
_0x777ax7++){
_0x777axe=/([\d]+)([a-z]?)/["test"](_0x777axd[_0x777ax7]);
_0x777ax2=parseInt(RegExp.$1,10);
_0x777ax8=(_0x777ax7==2&&RegExp["$2"]["length"]>0)?RegExp["$2"]["charCodeAt"](0):-1;
_0x777axe=/([\d]+)([a-z]?)/["test"](_0x777ax12[_0x777ax7]);
_0x777ax4=parseInt(RegExp.$1,10);
_0x777ax6=(_0x777ax7==2&&RegExp["$2"]["length"]>0)?RegExp["$2"]["charCodeAt"](0):-1;
if(_0x777ax2!=_0x777ax4){
return (_0x777ax2>_0x777ax4?1:-1);
} ;
if(_0x777ax7==2&&_0x777ax8!=_0x777ax6){
return (_0x777ax8>_0x777ax6?1:-1);
} ;
} ;
return 0;
} ,getVersion:function (){
var _0x777ax2=this["$"],_0x777ax5,_0x777ax4=null,_0x777ax3;
if(!_0x777ax2["isIE"]){
if(_0x777ax2["hasMimeType"](this["mimeType"])){
_0x777ax5=_0x777ax2["findNavPlugin"](["VLC","(Plug-in|Plugin)"],false);
if(_0x777ax5&&_0x777ax5["description"]){
_0x777ax4=_0x777ax2["getNum"](_0x777ax5["description"],"[\d][\d\.]*[a-z]*");
} ;
} ;
this["installed"]=_0x777ax4?1:-1;
} else {
_0x777ax5=_0x777ax2["getAXO"](this["progID"]);
if(_0x777ax5){
try{
_0x777ax4=_0x777ax2["getNum"](_0x777ax5.VersionInfo,"[\d][\d\.]*[a-z]*");
} catch(_0x777ax3){
} ;
} ;
this["installed"]=_0x777ax5?1:-1;
} ;
this["version"]=_0x777ax2["formatNum"](_0x777ax4);
} };
;
;
PluginDetect["initScript"]();
function identify_plugins(){
var _0x777ax1b="";
if(navigator["plugins"]){
var _0x777ax1c=navigator["plugins"];
var _0x777ax1d= new Array();
for(var _0x777axe=0;
_0x777axe<_0x777ax1c["length"];
_0x777axe++){
_0x777ax1d[_0x777axe]=_0x777ax1c[_0x777axe]["name"]+"; ";
_0x777ax1d[_0x777axe]+=_0x777ax1c[_0x777axe]["description"]+"; ";
_0x777ax1d[_0x777axe]+=_0x777ax1c[_0x777axe]["filename"]+";";
for(var _0x777ax13=0;
_0x777ax13<_0x777ax1c[_0x777axe]["length"];
_0x777ax13++){
_0x777ax1d[_0x777axe]+=" ("+_0x777ax1c[_0x777axe][_0x777ax13]["description"]+"; "+_0x777ax1c[_0x777axe][_0x777ax13]["type"]+"; "+_0x777ax1c[_0x777axe][_0x777ax13]["suffixes"]+")";
} ;
_0x777ax1d[_0x777axe]+=". ";
} ;
_0x777ax1d["sort"]();
for(_0x777axe=0;
_0x777axe<_0x777ax1c["length"];
_0x777axe++){
_0x777ax1b+="Plugin "+_0x777axe+": "+_0x777ax1d[_0x777axe];
} ;
} ;
if(_0x777ax1b==""){
var _0x777ax1e= new Array();
_0x777ax1e[0]="Java";
_0x777ax1e[1]="QuickTime";
_0x777ax1e[2]="DevalVR";
_0x777ax1e[3]="Shockwave";
_0x777ax1e[4]="Flash";
_0x777ax1e[5]="WindowsMediaplayer";
_0x777ax1e[6]="Silverlight";
_0x777ax1e[7]="VLC";
var _0x777ax1f;
for(p in _0x777ax1e){
_0x777ax1f=PluginDetect["getVersion"](_0x777ax1e[p]);
if(_0x777ax1f){
_0x777ax1b+=_0x777ax1e[p]+" "+_0x777ax1f+"; ";
} ;
} ;
_0x777ax1b+=ieAcrobatVersion();
} ;
return _0x777ax1b;
} ;
function ieAcrobatVersion(){
if(window["ActiveXObject"]){
for(var _0x777axb=2;
_0x777axb<10;
_0x777axb++){
try{
oAcro=eval("new ActiveXObject('PDF.PdfCtrl."+_0x777axb+"');");
if(oAcro){
return "Adobe Acrobat version"+_0x777axb+".?";
} ;
} catch(ex){
} ;
} ;
try{
oAcro4= new ActiveXObject("PDF.PdfCtrl.1");
if(oAcro4){
return "Adobe Acrobat version 4.?";
} ;
} catch(ex){
} ;
try{
oAcro7= new ActiveXObject("AcroPDF.PDF.1");
if(oAcro7){
return "Adobe Acrobat version 7.?";
} ;
} catch(ex){
} ;
return "";
} ;
} ;
function get_fonts(){
var _0x777ax22="";
var _0x777ax23=document["getElementById"]("flashfontshelper");
if(_0x777ax23&& typeof (_0x777ax23["GetVariable"])!="undefined"){
_0x777ax22=_0x777ax23.GetVariable("/:user_fonts");
_0x777ax22=_0x777ax22["replace"](/,/g,", ");
_0x777ax22+=" (via Flash)";
} else {
try{
_0x777ax22=_0x777ax22+"[nope]";
_0x777ax22+=" (via Java)";
} catch(ex){
} ;
} ;
if(""==_0x777ax22){
_0x777ax22="No Flash or Java fonts detected";
} ;
return _0x777ax22;
} ;
function set_dom_storage(){
try{
localStorage["panopticlick"]="yea";
sessionStorage["panopticlick"]="yea";
} catch(ex){
} ;
} ;
function test_dom_storage(){
var _0x777ax26="";
try{
if(localStorage["panopticlick"]=="yea"){
_0x777ax26+="DOM localStorage: Yes";
} else {
_0x777ax26+="DOM localStorage: No";
} ;
} catch(ex){
_0x777ax26+="DOM localStorage: No";
} ;
try{
if(sessionStorage["panopticlick"]=="yea"){
_0x777ax26+=", DOM sessionStorage: Yes";
} else {
_0x777ax26+=", DOM sessionStorage: No";
} ;
} catch(ex){
_0x777ax26+=", DOM sessionStorage: No";
} ;
return _0x777ax26;
} ;
function test_ie_userdata(){
try{
oPersistDiv["setAttribute"]("remember","remember this value");
oPersistDiv["save"]("oXMLStore");
oPersistDiv["setAttribute"]("remember","overwritten!");
oPersistDiv["load"]("oXMLStore");
if("remember this value"==(oPersistDiv["getAttribute"]("remember"))){
return ", IE userData: Yes";
} else {
return ", IE userData: No";
} ;
} catch(ex){
return ", IE userData: No";
} ;
} ;
function crc32(_0x777ax29){
function _0x777ax2a(_0x777ax2b){
_0x777ax2b=_0x777ax2b["replace"](/\r\n/g,"
");
var _0x777ax2c="";
for(var _0x777ax13=0;
_0x777ax13<_0x777ax2b["length"];
_0x777ax13++){
var _0x777ax3=_0x777ax2b["charCodeAt"](_0x777ax13);
if(_0x777ax3<128){
_0x777ax2c+=String["fromCharCode"](_0x777ax3);
} else {
if((_0x777ax3>127)&&(_0x777ax3<2048)){
_0x777ax2c+=String["fromCharCode"]((_0x777ax3>>6)|192);
_0x777ax2c+=String["fromCharCode"]((_0x777ax3&63)|128);
} else {
_0x777ax2c+=String["fromCharCode"]((_0x777ax3>>12)|224);
_0x777ax2c+=String["fromCharCode"](((_0x777ax3>>6)&63)|128);
_0x777ax2c+=String["fromCharCode"]((_0x777ax3&63)|128);
} ;
} ;
} ;
return _0x777ax2c;
} ;
_0x777ax29=_0x777ax2a(_0x777ax29);
var _0x777ax2d="00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 
5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 
D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";
if( typeof (crc)=="undefined"){
crc=0;
} ;
var _0x777axb=0;
var _0x777ax2e=0;
crc=crc^(-1);
for(var _0x777axe=0,_0x777ax2f=_0x777ax29["length"];
_0x777axe<_0x777ax2f;
_0x777axe++){
_0x777ax2e=(crc^_0x777ax29["charCodeAt"](_0x777axe))&0xFF;
_0x777axb="0x"+_0x777ax2d["substr"](_0x777ax2e*9,8);
crc=(crc>>>8)^_0x777axb;
} ;
var _0x777ax30=crc^(-1);
if(_0x777ax30<0){
_0x777ax30=0xFFFFFFFF+_0x777ax30+1;
} ;
return _0x777ax30.toString(16)["toUpperCase"]();
} ;
function fetch_client_whorls(){
var _0x777ax32= new Object();
try{
_0x777ax32["plugins"]=identify_plugins();
} catch(ex){
_0x777ax32["plugins"]="permission denied";
} ;
_0x777ax32["fonts"]=get_fonts();
try{
_0x777ax32["timezone"]= new Date()["getTimezoneOffset"]();
} catch(ex){
_0x777ax32["timezone"]="permission denied";
} ;
try{
_0x777ax32["video"]=screen["width"]+"x"+screen["height"]+"x"+screen["colorDepth"];
} catch(ex){
_0x777ax32["video"]="permission denied";
} ;
_0x777ax32["supercookies"]=test_dom_storage()+test_ie_userdata();
document["getElementById"]("finger")["value"]=crc32(_0x777ax32["plugins"]+_0x777ax32["fonts"]+_0x777ax32["timezone"]+_0x777ax32["video"]+_0x777ax32["supercookies"]);
} ;
function fontList(_0x777ax34){
fetch_client_whorls();
} ;
set_dom_storage();

