$wnd.jsme.runAsyncCallback5('o(203,191,{});function tO(){tO=q;uO=new Ao("dragend",new vO)}function wO(a){a.a.cancelBubble=!0;Wm(a.a)}function vO(){}o(204,203,{},vO);_.Rc=function(){wO(this)};_.Uc=function(){return uO};var uO;function xO(){xO=q;yO=new Ao("dragenter",new zO)}function zO(){}o(205,203,{},zO);_.Rc=function(){wO(this)};_.Uc=function(){return yO};var yO;function AO(){AO=q;BO=new Ao("dragover",new CO)}function CO(){}o(206,203,{},CO);_.Rc=function(){wO(this)};_.Uc=function(){return BO};var BO;\nfunction DO(){DO=q;EO=new Ao("drop",new FO)}function FO(){}o(207,203,{},FO);_.Rc=function(a){var b,c,d,e;this.a.cancelBubble=!0;Wm(this.a);d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;GO(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(og),a.a.b.a.a.e.ob[Jg]=null!=b?b:l)};_.Uc=function(){return EO};var EO;function HO(a,b,c){$p(!a.lb?a.lb=new oq(a):a.lb,c,b)}\nfunction IO(a){var b=E(Ad);XG(dg,WG(b));this.ob=b;this.b=new zI(this.ob);this.ob[ed]="gwt-HTML";yI(this.b,a,!0);HI(this)}o(326,327,{13:1,15:1,17:1,18:1,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,30:1,31:1,32:1,36:1,37:1,38:1,39:1,40:1,41:1,42:1,43:1,44:1,45:1,47:1,49:1,53:1,58:1,68:1,69:1,70:1,73:1,77:1,80:1,81:1,83:1},IO);function JO(){Iv();var a=E("textarea");!Lr&&(Lr=new Kr);!Jr&&(Jr=new Ir);this.ob=a;this.ob[ed]="gwt-TextArea"}o(366,367,bi,JO);\nfunction KO(a,b){var c,d;c=E(Dg);d=E(ng);d[zc]=a.a.a;d.style[Kg]=a.b.a;var e=(Nr(),Or(d));c.appendChild(e);Mr(a.d,c);ut(a,b,d)}function LO(){ou.call(this);this.a=(ru(),yu);this.b=(zu(),Cu);this.e[ad]=Za;this.e[$c]=Za}o(375,320,Xh,LO);_.Fd=function(a){var b;b=Vm(a.ob);(a=yt(this,a))&&this.d.removeChild(Vm(b));return a};\nfunction MO(a){try{a.v=!1;var b,c,d;d=a.gb;c=a._;d||(a.ob.style[Lg]=ee,a._=!1,a.Sd());b=a.ob;b.style[ne]=0+(Un(),sf);b.style[vg]=$a;hK(a,Qi(wn($doc)+(vn()-Rm(a.ob,df)>>1),0),Qi(xn($doc)+(un()-Rm(a.ob,cf)>>1),0));d||((a._=c)?(a.ob.style[hd]=Kf,a.ob.style[Lg]=Mg,ri(a.fb,200)):a.ob.style[Lg]=Mg)}finally{a.v=!0}}function PO(a){a.f=(new uJ(a.i)).nc.He();et(a.f,new QO(a),(Go(),Go(),Ho));a.d=C(RO,m,60,[a.f])}\nfunction SO(){CK();var a,b,c,d,e,f;ZK.call(this,(qL(),rL),null,!0);this.Ag();this.cb=!0;a=new IO(this.j);this.e=new JO;this.e.ob.style[Pg]=cb;Gs(this.e,cb);this.yg();tK(this,"400px");f=new LO;f.ob.style[de]=cb;f.e[ad]=10;c=(ru(),su);f.a=c;KO(f,a);KO(f,this.e);e=new Gu;e.e[ad]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],Du(e,a);KO(f,e);HK(this,f);DJ(this,!1);this.zg()}o(622,623,XF,SO);_.yg=function(){PO(this)};_.zg=function(){var a=this.e;a.ob.readOnly=!0;var b=Ws(a.ob)+"-readonly";Fs(a.sd(),b,!0)};\n_.Ag=function(){CJ(this.H.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i="Close";_.j="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function QO(a){this.a=a}o(625,1,{},QO);_.Wc=function(){JK(this.a,!1)};_.a=null;function TO(a){this.a=a}o(626,1,{},TO);\n_.Dc=function(){at(this.a.e.ob,!0);$u(this.a.e.ob);var a=this.a.e,b;b=Sm(a.ob,Jg).length;if(0<b&&a.jb){if(0>b)throw new iD("Length must be a positive integer. Length: "+b);if(b>Sm(a.ob,Jg).length)throw new iD("From Index: 0  To Index: "+b+"  Text Length: "+Sm(a.ob,Jg).length);var a=a.ob,c=0;try{var d=a.createTextRange(),e=a.value.substr(c,b).match(/(\\r\\n)/gi);null!=e&&(b-=e.length);var f=a.value.substring(0,c).match(/(\\r\\n)/gi);null!=f&&(c-=f.length);d.collapse(!0);d.moveStart("character",c);d.moveEnd("character",\nb);d.select()}catch(g){}}};_.a=null;function UO(a){a.i="Cancel";a.j="Paste the text to import into the text area below.";a.b="Accept";CJ(a.H.b,"Paste")}function VO(a){CK();SO.call(this);this.c=a}o(628,622,XF,VO);_.yg=function(){PO(this);this.a=(new uJ(this.b)).nc.He();et(this.a,new WO(this),(Go(),Go(),Ho));this.d=C(RO,m,60,[this.a,this.f])};_.zg=function(){Gs(this.e,"150px")};_.Ag=function(){UO(this)};_.Sd=function(){YK(this);Gm((Dm(),Em),new XO(this))};_.a=null;_.b=null;_.c=null;\nfunction YO(a){CK();VO.call(this,a)}o(627,628,XF,YO);_.zg=function(){Gs(this.e,"150px");var a=new ZO(this),b=this.e;HO(b,new $O,(xO(),xO(),yO));HO(b,new aP,(tO(),tO(),uO));HO(b,new bP,(AO(),AO(),BO));HO(b,new cP(a),(DO(),DO(),EO))};_.Ag=function(){UO(this);this.j+=" Or drag and drop a file on it."};o(631,1,{});o(630,631,{});_.b=null;_.c=1;_.d=-1;function ZO(a){this.a=a;this.b=new dP(this);this.c=this.d=1}o(629,630,{},ZO);_.a=null;function dP(a){this.a=a}o(632,1,{},dP);\n_.Bg=function(a){this.a.a.e.ob[Jg]=null!=a?a:l};_.a=null;function WO(a){this.a=a}o(636,1,{},WO);_.Wc=function(){if(this.a.c){var a=this.a.c,b;b=new Dy(a.a,0,Sm(this.a.e.ob,Jg));XB(a.a.a,b.a)}JK(this.a,!1)};_.a=null;function XO(a){this.a=a}o(637,1,{},XO);_.Dc=function(){at(this.a.e.ob,!0);$u(this.a.e.ob)};_.a=null;o(638,1,qh);_.Oc=function(){var a,b;a=new eP(this.a);void 0!=$wnd.FileReader?b=new YO(a):b=new VO(a);vK(b);MO(b)};function eP(a){this.a=a}o(639,1,{},eP);_.a=null;o(640,1,qh);\n_.Oc=function(){var a;a=new SO;var b=this.a,c;Hv(a.e,b);b=(c=mD(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);Gs(a.e,20*(10>b?b:10)+sf);Gm((Dm(),Em),new TO(a));vK(a);MO(a)};function GO(a,b){a.onloadend=function(a){b.Bg(a.target.result)}}function cP(a){this.a=a}o(645,1,{},cP);_.a=null;function $O(){}o(646,1,{},$O);function aP(){}o(647,1,{},aP);function bP(){}o(648,1,{},bP);Y(631);Y(630);Y(645);Y(646);Y(647);Y(648);Y(203);Y(205);Y(204);Y(206);Y(207);Y(622);var RO=YC(786);Y(628);Y(627);Y(639);Y(625);Y(626);Y(636);\nY(637);Y(629);Y(632);Y(326);Y(375);Y(366);s(RF)(5);\n//@ sourceURL=5.js\n')