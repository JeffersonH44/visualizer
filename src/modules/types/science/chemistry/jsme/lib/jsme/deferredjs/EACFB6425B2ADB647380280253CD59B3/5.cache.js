$wnd.jsme.runAsyncCallback5('function GP(a){var b=$doc.createElement(Ad);cJ(eg,b.tagName);this.ob=b;this.b=new LJ(this.ob);this.ob[ed]="gwt-HTML";KJ(this.b,a,!0);TJ(this)}n(344,345,{14:1,16:1,18:1,19:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,31:1,32:1,33:1,37:1,38:1,39:1,40:1,41:1,42:1,43:1,44:1,45:1,46:1,48:1,50:1,54:1,59:1,69:1,70:1,71:1,74:1,78:1,81:1,82:1,84:1},GP);function JP(){Rw();var a=$doc.createElement("textarea");!Ms&&(Ms=new Ls);!Ks&&(Ks=new Js);this.ob=a;this.ob[ed]="gwt-TextArea"}n(384,385,Eh,JP);\nfunction KP(a,b){var c,d;c=$doc.createElement(Eg);d=$doc.createElement(og);d[zc]=a.a.a;d.style[Kg]=a.b.a;var e=(Os(),Ps(d));c.appendChild(e);Ns(a.d,c);zu(a,b,d)}function LP(){yv.call(this);this.a=(Bv(),Iv);this.b=(Jv(),Mv);this.e[Uc]=ab;this.e[Tc]=ab}n(393,338,vh,LP);_.Jd=function(a){var b;b=Xm(a.ob);(a=Du(this,a))&&this.d.removeChild(Xm(b));return a};\nfunction MP(a){try{a.v=!1;var b,c,d;d=a.gb;c=a._;d||(a.ob.style[Lg]=le,a._=!1,a.Wd());b=a.ob;b.style[ve]=0+(Eo(),Gf);b.style[wg]=bb;uL(a,Ri(dn($doc)+(cn()-Tm(a.ob,of)>>1),0),Ri(en($doc)+(bn()-Tm(a.ob,nf)>>1),0));d||((a._=c)?(a.ob.style[hd]=Nf,a.ob.style[Lg]=Mg,si(a.fb,200)):a.ob.style[Lg]=Mg)}finally{a.v=!0}}function NP(a){a.f=(new GK(a.i)).nc.Le();ju(a.f,new OP(a),(qp(),qp(),rp));a.d=C(PP,m,61,[a.f])}\nfunction QP(){PL();var a,b,c,d,e,f;lM.call(this,(DM(),EM),null,!0);this.Fg();this.cb=!0;a=new GP(this.j);this.e=new JP;this.e.ob.style[Og]=db;Wt(this.e,db);this.Dg();GL(this,"400px");f=new LP;f.ob.style[ke]=db;f.e[Uc]=10;c=(Bv(),Cv);f.a=c;KP(f,a);KP(f,this.e);e=new Qv;e.e[Uc]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],Nv(e,a);KP(f,e);UL(this,f);PK(this,!1);this.Eg()}n(645,646,hH,QP);_.Dg=function(){NP(this)};_.Eg=function(){var a=this.e;a.ob.readOnly=!0;var b=$t(a.ob)+"-readonly";Vt(a.wd(),b,!0)};\n_.Fg=function(){OK(this.H.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i="Close";_.j="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function OP(a){this.a=a}n(648,1,{},OP);_.Wc=function(){WL(this.a,!1)};_.a=null;function RP(a){this.a=a}n(649,1,{},RP);\n_.Dc=function(){eu(this.a.e.ob,!0);this.a.e.ob.focus();var a=this.a.e,b;b=Um(a.ob,Jg).length;if(0<b&&a.jb){if(0>b)throw new zE("Length must be a positive integer. Length: "+b);if(b>Um(a.ob,Jg).length)throw new zE("From Index: 0  To Index: "+b+"  Text Length: "+Um(a.ob,Jg).length);try{a.ob.setSelectionRange(0,0+b)}catch(c){}}};_.a=null;function SP(a){a.i="Cancel";a.j="Paste the text to import into the text area below.";a.b="Accept";OK(a.H.b,"Paste")}function TP(a){PL();QP.call(this);this.c=a}\nn(651,645,hH,TP);_.Dg=function(){NP(this);this.a=(new GK(this.b)).nc.Le();ju(this.a,new UP(this),(qp(),qp(),rp));this.d=C(PP,m,61,[this.a,this.f])};_.Eg=function(){Wt(this.e,"150px")};_.Fg=function(){SP(this)};_.Wd=function(){kM(this);Jm((Gm(),Hm),new VP(this))};_.a=null;_.b=null;_.c=null;function WP(a){PL();TP.call(this,a)}n(650,651,hH,WP);_.Eg=function(){Wt(this.e,"150px");uA(new XP(this),this.e)};_.Fg=function(){SP(this);this.j+=" Or drag and drop a file on it."};\nfunction XP(a){this.a=a;this.b=new YP(this);this.c=this.d=1}n(652,489,{},XP);_.a=null;function YP(a){this.a=a}n(653,1,{},YP);_.We=function(a){this.a.a.e.ob[Jg]=null!=a?a:l};_.a=null;function UP(a){this.a=a}n(657,1,{},UP);_.Wc=function(){if(this.a.c){var a=this.a.c,b;b=new Lz(a.a,0,Um(this.a.e.ob,Jg));BA(a.a.a,b.a)}WL(this.a,!1)};_.a=null;function VP(a){this.a=a}n(658,1,{},VP);_.Dc=function(){eu(this.a.e.ob,!0);this.a.e.ob.focus()};_.a=null;n(659,1,Dh);\n_.Oc=function(){var a,b;a=new ZP(this.a);void 0!=$wnd.FileReader?b=new WP(a):b=new TP(a);IL(b);MP(b)};function ZP(a){this.a=a}n(660,1,{},ZP);_.a=null;n(661,1,Dh);_.Oc=function(){var a;a=new QP;var b=this.a,c;Qw(a.e,b);b=(c=DE(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);Wt(a.e,20*(10>b?b:10)+Gf);Jm((Gm(),Hm),new RP(a));IL(a);MP(a)};T(645);var PP=pE(807);T(651);T(650);T(660);T(648);T(649);T(657);T(658);T(652);T(653);T(344);T(393);T(384);s(eH)(5);\n//@ sourceURL=5.js\n')