
// Generated by js_of_ocaml 2.7
(function(C){"use strict";var
bP="20",cf=254,bX=224,b4="Sys_error",ce="IF",bO="#FFFFFF",cd="Invalid_argument",cc='"',bW=250,Z="Should not happen",_=1024,cb="jsError",an="px 'Arial'",bU="IF <\xe6\x9d\xa1\xe4\xbb\xb6\xe6\x96\x87> ",bV="input",bN=785140586,b3=57343,ca=512,b2=982028505,b$="End_of_file",b_="Failure",bM="Undefined_recursive_module",aM=256,b1="Cannot happen in insert_rule",ao="\xe6\x96\x87",bT="Stack_overflow",e="",h=128,bL=56320,O=100,aN=" : file already exists",bZ=240,b0=2048,a=248,bS="Not_found",bJ="Assert_failure",bK="/",b8="Sys_blocked_io",b9="fd ",bY="Out_of_memory",bR="Match_failure",b6="10",b7="Division_by_zero",bQ=1e3,b5=2e3;function
ey(a,b,c,d,e){if(d<=b)for(var
f=1;f<=e;f++)c[d+f]=a[b+f];else
for(var
f=e;f>=1;f--)c[d+f]=a[b+f];return 0}function
aV(a,b,c){var
e=new
Array(c);for(var
d=0;d<c;d++)e[d]=a[b+d];return e}function
aT(a,b,c){var
d=String.fromCharCode;if(b==0&&c<=4096&&c==a.length)return d.apply(null,a);var
f=e;for(;0<c;b+=_,c-=_)f+=d.apply(null,aV(a,b,Math.min(c,_)));return f}function
ch(a){var
c=new
Array(a.l),e=a.c,d=e.length,b=0;for(;b<d;b++)c[b]=e.charCodeAt(b);for(d=a.l;b<d;b++)c[b]=0;a.c=c;a.t=4;return c}function
P(a,b,c,d,e){if(e==0)return 0;if(d==0&&(e>=c.l||c.t==2&&e>=c.c.length)){c.c=a.t==4?aT(a.c,b,e):b==0&&a.c.length==e?a.c:a.c.substr(b,e);c.t=c.c.length==c.l?0:2}else
if(c.t==2&&d==c.c.length){c.c+=a.t==4?aT(a.c,b,e):b==0&&a.c.length==e?a.c:a.c.substr(b,e);c.t=c.c.length==c.l?0:2}else{if(c.t!=4)ch(c);var
g=a.c,h=c.c;if(a.t==4)for(var
f=0;f<e;f++)h[d+f]=g[b+f];else{var
i=Math.min(e,g.length-b);for(var
f=0;f<i;f++)h[d+f]=g.charCodeAt(b+f);for(;f<e;f++)h[d+f]=0}}return 0}function
e4(a,b){var
e=a.length,d=new
Array(e+1),c=0;for(;c<e;c++)d[c]=a[c];d[c]=b;return d}function
Q(c,b){if(c.fun)return Q(c.fun,b);var
a=c.length,d=b.length,e=a-d;if(e==0)return c.apply(null,b);else
if(e<0)return Q(c.apply(null,aV(b,0,a)),aV(b,a,d-a));else
return function(a){return Q(c,e4(b,a))}}function
eR(a,b){throw[0,a,b]}function
eU(a,b){if(b.repeat)return b.repeat(a);var
c=e,d=0;if(a==0)return c;for(;;){if(a&1)c+=b;a>>=1;if(a==0)return c;b+=b;d++;if(d==9)b.slice(0,1)}}function
R(a){if(a.t==2)a.c+=eU(a.l-a.c.length,"\0");else
a.c=aT(a.c,0,a.c.length);a.t=0}function
ci(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>127)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
e0(a){for(var
l=e,d=e,i,g,j,b,c=0,k=a.length;c<k;c++){g=a.charCodeAt(c);if(g<h){for(var
f=c+1;f<k&&(g=a.charCodeAt(f))<h;f++);if(f-c>ca){d.substr(0,1);l+=d;d=e;l+=a.slice(c,f)}else
d+=a.slice(c,f);if(f==k)break;c=f}b=1;if(++c<k&&((j=a.charCodeAt(c))&-64)==h){i=j+(g<<6);if(g<bX){b=i-12416;if(b<h)b=1}else{b=2;if(++c<k&&((j=a.charCodeAt(c))&-64)==h){i=j+(i<<6);if(g<bZ){b=i-925824;if(b<b0||b>=55295&&b<57344)b=2}else{b=3;if(++c<k&&((j=a.charCodeAt(c))&-64)==h&&g<245){b=j-63447168+(i<<6);if(b<65536||b>1114111)b=3}}}}}if(b<4){c-=b;d+="\ufffd"}else
if(b>65535)d+=String.fromCharCode(55232+(b>>10),bL+(b&1023));else
d+=String.fromCharCode(b);if(d.length>_){d.substr(0,1);l+=d;d=e}}return l+d}function
eZ(a){switch(a.t){case
9:return a.c;default:R(a);case
0:if(ci(a.c)){a.t=9;return a.c}a.t=8;case
8:return e0(a.c)}}function
m(a,b,c){this.t=a;this.c=b;this.l=c}m.prototype.toString=function(){return eZ(this)};function
d(a){return new
m(0,a,a.length)}function
aR(a,b){eR(a,d(b))}var
f=[0];function
aq(a){aR(f.Invalid_argument,a)}function
ez(){aq("index out of bounds")}function
ap(a,b){if(b>>>0>=a.length-1)ez();return a}function
eH(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
eI(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
eV(a,b){a.t&6&&R(a);b.t&6&&R(b);return a.c<b.c?-1:a.c>b.c?1:0}function
aO(a,b,c){var
e=[];for(;;){if(!(c&&a===b))if(a
instanceof
m)if(b
instanceof
m){if(a!==b){var
d=eV(a,b);if(d!=0)return d}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
f=a[0];if(f===cf)f=0;if(f===bW){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
g=b[0];if(g===cf)g=0;if(g===bW){b=b[1];continue}else
if(f!=g)return f<g?-1:1;else
switch(f){case
248:var
d=eI(a[2],b[2]);if(d!=0)return d;break;case
251:aq("equal: abstract value");case
255:var
d=eH(a,b);if(d!=0)return d;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)e.push(a,b,1)}}else
return 1}else
if(b
instanceof
m||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!="number"&&a&&a.compare)return a.compare(b,c);else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!c)return NaN;if(a==a)return 1;if(b==b)return-1}}if(e.length==0)return 0;var
h=e.pop();b=e.pop();a=e.pop();if(h+1<a.length)e.push(a,b,h+1);a=a[h];b=b[h]}}function
eB(a,b){return aO(a,b,true)}function
w(a){if(a<0)aq("String.create");return new
m(a?2:9,e,a)}function
eD(a,b){return+(aO(a,b,false)==0)}function
eG(a,b){return+(aO(a,b,false)>=0)}var
ar={amp:/&/g,lt:/</g,quot:/\"/g,all:/[&<\"]/};function
cj(a){if(!ar.all.test(a))return a;return a.replace(ar.amp,"&amp;").replace(ar.lt,"&lt;").replace(ar.quot,"&quot;")}function
e1(a){for(var
g=e,c=g,b,j,d=0,i=a.length;d<i;d++){b=a.charCodeAt(d);if(b<h){for(var
f=d+1;f<i&&(b=a.charCodeAt(f))<h;f++);if(f-d>ca){c.substr(0,1);g+=c;c=e;g+=a.slice(d,f)}else
c+=a.slice(d,f);if(f==i)break;d=f}if(b<b0){c+=String.fromCharCode(192|b>>6);c+=String.fromCharCode(h|b&63)}else
if(b<55296||b>=b3)c+=String.fromCharCode(bX|b>>12,h|b>>6&63,h|b&63);else
if(b>=56319||d+1==i||(j=a.charCodeAt(d+1))<bL||j>b3)c+="\xef\xbf\xbd";else{d++;b=(b<<10)+j-56613888;c+=String.fromCharCode(bZ|b>>18,h|b>>12&63,h|b>>6&63,h|b&63)}if(c.length>_){c.substr(0,1);g+=c;c=e}}return g+c}function
aQ(a){var
b=9;if(!ci(a))b=8,a=e1(a);return new
m(b,a,a.length)}function
eE(a){aR(f.Failure,a)}function
cg(a){if((a.t&6)!=0)R(a);return a.c}function
i(a){a=cg(a);var
d=a.length/2,c=new
Array(d);for(var
b=0;b<d;b++)c[b]=(a.charCodeAt(2*b)|a.charCodeAt(2*b+1)<<8)<<16>>16;return c}function
eA(a){if(a.t!=4)ch(a);return a.c}function
eJ(a,b,c){var
p=2,q=3,t=5,e=6,j=7,h=8,l=9,o=1,n=2,s=3,u=4,r=5;if(!a.lex_default){a.lex_base=i(a[o]);a.lex_backtrk=i(a[n]);a.lex_check=i(a[r]);a.lex_trans=i(a[u]);a.lex_default=i(a[s])}var
f,d=b,m=eA(c[p]);if(d>=0){c[j]=c[t]=c[e];c[h]=-1}else
d=-d-1;for(;;){var
g=a.lex_base[d];if(g<0)return-g-1;var
k=a.lex_backtrk[d];if(k>=0){c[j]=c[e];c[h]=k}if(c[e]>=c[q])if(c[l]==0)return-d-1;else
f=aM;else{f=m[c[e]];c[e]++}d=a.lex_check[g+f]==d?a.lex_trans[g+f]:a.lex_default[d];if(d<0){c[e]=c[j];if(c[h]==-1)eE("lexing: empty token");else
return c[h]}else
if(f==aM)c[l]=0}}function
A(a,b){var
a=a+1|0,c=new
Array(a);c[0]=0;for(var
d=1;d<a;d++)c[d]=b;return c}function
r(a){aR(f.Sys_error,a)}function
eK(a){if(!a.opened)r("Cannot flush a closed channel");if(a.buffer==e)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=e;return 0}var
cp=0;function
e5(){return new
Date().getTime()/bQ}function
aW(){return Math.floor(e5())}function
z(a){this.data=a;this.inode=cp++;var
b=aW();this.atime=b;this.mtime=b;this.ctime=b}z.prototype={truncate:function(){this.data=w(0);this.modified()},modified:function(){var
a=aW();this.atime=a;this.mtime=a}};function
B(a){return a.l}function
cn(a){a=a
instanceof
m?a.toString():a;r(a+": No such file or directory")}var
eC=bK;function
as(a){a=a
instanceof
m?a.toString():a;if(a.charCodeAt(0)!=47)a=eC+a;var
d=a.split(bK),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(e);break;default:b.push(d[c]);break}b.orig=a;return b}function
H(){this.content={};this.inode=cp++;var
a=aW();this.atime=a;this.mtime=a;this.ctime=a}H.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
au=new
H();au.mk(e,new
H());function
aP(a){var
b=au;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))cn(a.orig);b=b.get(a[c])}return b}function
eY(a){var
c=as(a),b=aP(c);return b
instanceof
H?1:0}function
eW(a){return new
m(4,a,a.length)}function
eF(a,b){var
f=as(a),c=au;for(var
g=0;g<f.length-1;g++){var
e=f[g];if(!c.exists(e))c.mk(e,new
H());c=c.get(e);if(!(c
instanceof
H))r(f.orig+aN)}var
e=f[f.length-1];if(c.exists(e))r(f.orig+aN);if(b
instanceof
H)c.mk(e,b);else
if(b
instanceof
z)c.mk(e,b);else
if(b
instanceof
m)c.mk(e,new
z(b));else
if(b
instanceof
Array)c.mk(e,new
z(eW(b)));else
if(b.toString)c.mk(e,new
z(d(b.toString())));else
aq("caml_fs_register");return 0}function
eX(a){var
b=au,d=as(a),e,f;for(var
c=0;c<d.length;c++){if(b.auto){e=b.auto;f=c}if(!(b.exists&&b.exists(d[c])))return e?e(d,f):0;b=b.get(d[c])}return 1}function
$(a,b,c){if(f.fds===undefined)f.fds=new
Array();c=c?c:{};var
d={};d.file=b;d.offset=c.append?B(b.data):0;d.flags=c;f.fds[a]=d;f.fd_last_idx=a;return a}function
e6(a,b,c){var
d={};while(b){switch(b[1]){case
0:d.rdonly=1;break;case
1:d.wronly=1;break;case
2:d.append=1;break;case
3:d.create=1;break;case
4:d.truncate=1;break;case
5:d.excl=1;break;case
6:d.binary=1;break;case
7:d.text=1;break;case
8:d.nonblock=1;break}b=b[2]}var
g=a.toString(),i=as(a);if(d.rdonly&&d.wronly)r(g+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)r(g+" : flags Open_text and Open_binary are not compatible");if(eX(a)){if(eY(a))r(g+" : is a directory");if(d.create&&d.excl)r(g+aN);var
h=f.fd_last_idx?f.fd_last_idx:0,e=aP(i);if(d.truncate)e.truncate();return $(h+1,e,d)}else
if(d.create){var
h=f.fd_last_idx?f.fd_last_idx:0;eF(a,w(0));var
e=aP(i);return $(h+1,e,d)}else
cn(a)}$(0,new
z(w(0)));$(1,new
z(w(0)));$(2,new
z(w(0)));function
eL(a){var
b=f.fds[a];if(b.flags.wronly)r(b9+a+" is writeonly");return{file:b.file,offset:b.offset,fd:a,opened:true,refill:null}}function
e2(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=C.console;b&&b.error&&b.error(a)}function
e3(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=C.console;b&&b.log&&b.log(a)}var
at=new
Array();function
eT(a,b){var
h=d(b),c=B(h),g=B(a.file.data),f=a.offset;if(f+c>=g){var
e=w(f+c);P(a.file.data,0,e,0,g);P(h,0,e,f,c);a.file.data=e}a.offset+=c;a.file.modified();return 0}function
ck(a){var
b;switch(a){case
1:b=e3;break;case
2:b=e2;break;default:b=eT}var
d=f.fds[a];if(d.flags.rdonly)r(b9+a+" is readonly");var
c={file:d.file,offset:d.offset,fd:a,opened:true,buffer:e,output:b};at[c.fd]=c;return c}function
eM(){var
a=0;for(var
b
in
at)if(at[b].opened)a=[0,at[b],a];return a}function
eO(a){return+(a
instanceof
Array)}function
cm(a){return a
instanceof
Array?a[0]:a
instanceof
m?252:bQ}function
eQ(a,b,c,d){var
w=aM,v=6,aa=7,P=8,Q=9,E=10,J=0,s=1,H=2,I=3,G=4,F=5,p=1,D=2,C=3,q=4,A=5,M=6,h=7,u=8,O=9,N=10,x=11,K=12,L=13,z=14,B=15,y=16,$=2,_=3,W=4,V=5,S=6,T=7,Y=8,X=9,U=10,r=11,Z=12,R=13;if(!a.dgoto){a.defred=i(a[S]);a.sindex=i(a[Y]);a.check=i(a[R]);a.rindex=i(a[X]);a.table=i(a[Z]);a.len=i(a[V]);a.lhs=i(a[W]);a.gindex=i(a[U]);a.dgoto=i(a[T])}var
m=0,l,g,f,o,e=b[z],j=b[B],k=b[y];exit:for(;;)switch(c){case
0:j=0;k=0;case
6:l=a.defred[j];if(l!=0){c=E;break}if(b[h]>=0){c=aa;break}m=J;break exit;case
1:if(d
instanceof
Array){b[h]=a[_][d[0]+1];b[u]=d[1]}else{b[h]=a[$][d+1];b[u]=0}case
7:g=a.sindex[j];f=g+b[h];if(g!=0&&f>=0&&f<=a[r]&&a.check[f]==b[h]){c=P;break}g=a.rindex[j];f=g+b[h];if(g!=0&&f>=0&&f<=a[r]&&a.check[f]==b[h]){l=a.table[f];c=E;break}if(k<=0){m=F;break exit}case
5:if(k<3){k=3;for(;;){o=b[p][e+1];g=a.sindex[o];f=g+w;if(g!=0&&f>=0&&f<=a[r]&&a.check[f]==w){c=Q;break}else{if(e<=b[M])return s;e--}}}else{if(b[h]==0)return s;b[h]=-1;c=v;break}case
8:b[h]=-1;if(k>0)k--;case
9:j=a.table[f];e++;if(e>=b[A]){m=H;break exit}case
2:b[p][e+1]=j;b[D][e+1]=b[u];b[C][e+1]=b[O];b[q][e+1]=b[N];c=v;break;case
10:var
n=a.len[l];b[x]=e;b[L]=l;b[K]=n;e=e-n+1;n=a.lhs[l];o=b[p][e];g=a.gindex[n];f=g+o;j=g!=0&&f>=0&&f<=a[r]&&a.check[f]==o?a.table[f]:a.dgoto[n];if(e>=b[A]){m=I;break exit}case
3:m=G;break exit;case
4:b[p][e+1]=j;b[D][e+1]=d;var
t=b[x];b[q][e+1]=b[q][t+1];if(e>t)b[C][e+1]=b[q][t+1];c=v;break;default:return s}b[z]=e;b[B]=j;b[y]=k;return m}function
b(a,b,c){f[a+1]=b;if(c)f[c]=b}var
cl={};function
eS(a,b){cl[cg(a)]=b;return 0}var
eP=0;function
s(a){a[2]=eP++;return a}function
aS(a,b){a.t&6&&R(a);b.t&6&&R(b);return a.c==b.c?1:0}function
co(a){return a}function
eN(a){return cl[a]}function
aU(a){if(a
instanceof
Array)return a;if(C.RangeError&&a
instanceof
C.RangeError&&a.message&&a.message.match(/maximum call stack/i))return co(f.Stack_overflow);if(C.InternalError&&a
instanceof
C.InternalError&&a.message&&a.message.match(/too much recursion/i))return co(f.Stack_overflow);if(a
instanceof
C.Error)return[0,eN(cb),a];return[0,f.Failure,aQ(String(a))]}function
l(a,b){return a.length==1?a(b):Q(a,[b])}function
bI(a,b,c){return a.length==2?a(b,c):Q(a,[b,c])}function
ex(a,b,c,d){return a.length==3?a(b,c,d):Q(a,[b,c,d])}var
aY=[a,d(b_),-3],aX=[a,d(cd),-4],ac=[a,d(bS),-7],aZ=[a,d(bJ),-11],J=[0,d(e),0,0,-1],a1=[0,d(e),1,0,0],bi=d(bO),bv=[0,-1,-1];b(11,[a,d(bM),-12],bM);b(10,aZ,bJ);b(9,[a,d(b8),-10],b8);b(8,[a,d(bT),-9],bT);b(7,[a,d(bR),-8],bR);b(6,ac,bS);b(5,[a,d(b7),-6],b7);b(4,[a,d(b$),-5],b$);b(3,aX,cd);b(2,aY,b_);b(1,[a,d(b4),-2],b4);b(0,[a,d(bY),-1],bY);var
cq=d("Pervasives.Exit"),cs=d("Array.blit"),ct=d("Array.Bottom"),cw=d("List.map2"),cu=d("nth"),cv=d("List.nth"),cx=d("String.sub / Bytes.sub"),cy=d("Sys.Break"),cD=d("syntax error"),cz=d("Parsing.YYexit"),cA=d("Parsing.Parse_error"),cF=d("CamlinternalFormat.Type_mismatch"),cJ=d("Js.Error"),cQ=d("canvas"),cN=d("br"),cM=d("textarea"),cL=d(bV),cO=d("Dom_html.Canvas_not_available"),cS=d("_"),cT=d("0"),c0=d("\n"),cZ=d(an),cY=d(an),cX=d(an),cW=d(an),cV=d(bO),c2=[0,d("input_gui.ml"),96,17],c1=d("#55FF55"),c7=[0,0],c8=d(Z),c9=d(Z),c_=d("unify2"),c$=d(e),c5=d(e),c3=d("Fix.Cannot_take"),c4=d("Fix.Unify_Error"),db=d(e),de=d(b1),df=d(b1),dp=d("delete"),dq=d(e),dm=d(" "),dl=d("\xe9\x81\xa9\xe7\x94\xa8\xe5\x8f\xaf\xe8\x83\xbd\xe8\xa6\x8f\xe5\x89\x87\xef\xbc\x9a"),dk=d(e),di=d("#87cefa"),dg=d(e),dh=d(e),dc=d(e),dd=d(e),da=[0,d(e),[0,0,0,0,0]],dV=d(ao),dW=d("\xe8\xa4\x87\xe6\x96\x87"),dQ=d(ao),dR=d(ao),dO=d(ao),dG=d(e),dH=d("; "),dF=d(Z),dA=d("<while\xe6\x96\x87>"),dB=d("<\xe4\xbb\xa3\xe5\x85\xa5\xe6\x96\x87>"),dC=d("}"),dD=d("{"),dz=d(Z),du=d(bU),dv=d(" ELSE "),dw=d(bU),dt=d(Z),dI=[0,[0,0,[0,d(ce),[0,d("IFELSE"),0]]],[0,[0,1,[0,d(ce),[0,d("WHILE"),[0,d("SUBST"),[0,d("BLOCK"),0]]]]],[0,[0,2,[0,d("BLOCK_END"),[0,d("BLOCK_CONS"),0]]],0]]],dK=[3,[1,[3,[0,[0,0]]]]],dL=[3,[1,[3,[1,[3,[0,[0,0]]]]]]],dM=[3,[0,[0,0]]],dX=d("\xe8\xa4\x87\xe6\x96\x87-\xe7\xb5\x82\xe3\x82\x8f\xe3\x82\x8a"),dZ=d("\xe8\xa4\x87\xe6\x96\x87-cons"),d0=d("\xe4\xbb\xa3\xe5\x85\xa5-\xe6\x96\x87"),d1=d("while-\xe6\x96\x87"),d2=d("IF-ELSE-\xe6\x96\x87"),d3=d("IF-\xe6\x96\x87"),er=d("parser"),d4=[0,257,258,259,260,261,262,263,264,265,266,267,0],d7=d("\xff\xff\x01\0\x03\0\x03\0\x04\0\x04\0\x04\0\x04\0\x02\0\x02\0\0\0"),d8=d("\x02\0\x02\0\x02\0\x03\0\x03\0\x05\0\x01\0\x01\0\x03\0\x01\0\x02\0"),d9=d("\0\0\0\0\0\0\0\0\x06\0\x07\0\0\0\n\0\0\0\t\0\0\0\0\0\0\0\x01\0\0\0\b\0\0\0\x03\0\0\0\x05\0"),d_=d("\x02\0\x07\0\n\0\x0b\0\t\0"),d$=d("\x05\0\xfe\xfe\0\0\xfe\xfe\0\0\0\0\x01\xff\0\0\xff\xfe\0\0\x04\xff\x05\xff\xfe\xfe\0\0\xfe\xfe\0\0\x03\xff\0\0\xfe\xfe\0\0"),ea=d("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\xff\0\0\xfa\xfe\0\0\0\0\0\0"),eb=d("\0\0\0\0\xff\xff\x01\0\0\0"),ed=d("\b\0\x03\0\x04\0\x04\0\x05\0\x04\0\x01\0\x06\0\f\0\x0f\0\r\0\x10\0\x0e\0\x12\0\x02\0\x11\0\0\0\x13\0"),ee=d("\x01\0\x03\x01\b\x01\x05\x01\x06\x01\x0b\x01\x01\0\t\x01\x07\x01\x04\x01\x0b\x01\f\0\b\x01\n\x01\x04\x01\x0e\0\xff\xff\x12\0"),ef=d("LPAREN\0RPAREN\0LBRACE\0RBRACE\0WHILE\0SUBST\0BRANCH\0CONS\0IF\0ELSE\0EOI\0"),eg=d(e),ev=d("unknown token "),et=[0,d("\0\0\xf2\xff\x02\0\xf5\xff\xf6\xff\xf7\xff\0\0\0\0\0\0\0\0\x01\0\xfe\xff\0\0\x02\0\xfd\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xfc\xff\x01\0\x01\0\x02\0\x01\0\xfb\xff\0\0\0\0\x01\0\x02\0\x02\0\xfa\xff\x01\0\xf9\xff\xf3\xff"),d("\xff\xff\xff\xff\x0b\0\xff\xff\xff\xff\xff\xff\x07\0\r\0\r\0\r\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),d('\x01\0\0\0\xff\xff\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0"\0\0\0\0\0'),d('\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0\n\0#\0\0\0\n\0\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0\n\0\0\0\0\0\0\0\0\0\0\0\0\0\x06\0\x05\0"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x02\0\x07\0$\0\x16\0\x1b\0!\0\0\0\0\0\0\0\0\0\b\0\x0b\0\x0e\0\0\0\t\0\0\0\0\0\f\0\0\0\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1d\0\x0f\0\x18\0\x1f\0\x15\0\0\0\0\0\x12\0\x13\0 \0\0\0\x14\0\0\0\x1e\0\0\0\0\0\0\0\x1c\0\x10\0\x19\0\x17\0\x1a\0\x11\0\0\0\0\0\0\0\x04\0\0\0\x03\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\0\0'),d('\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\n\0"\0\xff\xff\0\0\n\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\n\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\x06\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\x02\0\x15\0\x1a\0 \0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\t\0\r\0\xff\xff\0\0\xff\xff\xff\xff\b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1c\0\x07\0\x17\0\x1e\0\x14\0\xff\xff\xff\xff\x11\0\x12\0\x1f\0\xff\xff\x13\0\xff\xff\x1d\0\xff\xff\xff\xff\xff\xff\x0f\0\x07\0\x18\0\x10\0\x19\0\x07\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0"\0\xff\xff'),d(e),d(e),d(e),d(e),d(e),d(e)],ew=d(";;");function
o(a){throw[0,aY,a]}function
aa(a){throw[0,aX,a]}s([a,cq,0]);function
S(a,b){return eG(a,b)?a:b}function
t(a,b){var
c=B(a),e=B(b),d=w(c+e|0);P(a,0,d,0,c);P(b,0,d,c,e);return d}eL(0);ck(1);ck(2);function
ab(a,b,c,d,e){if(0<=e)if(0<=b)if(!((a.length-1-e|0)<b))if(0<=d)if(!((c.length-1-e|0)<d))return ey(a,b,c,d,e);return aa(cs)}s([a,ct,0]);function
a0(a,b){if(0<=b){var
c=a,d=b;for(;;){if(c){var
e=c[2],f=c[1];if(0===d)return f;var
c=e,d=d-1|0;continue}return o(cu)}}return aa(cv)}function
n(a,b){if(b){var
c=b[2],d=l(a,b[1]);return[0,d,n(a,c)]}return 0}function
I(a,b){var
c=b;for(;;){if(c){var
d=c[2];l(a,c[1]);var
c=d;continue}return 0}}function
aw(a,b,c){if(b){if(c){var
d=c[2],e=b[2],f=bI(a,b[1],c[1]);return[0,f,aw(a,e,d)]}}else
if(!c)return 0;return aa(cw)}function
ax(a,b){var
c=b;for(;;){if(c){var
d=c[1],e=c[2],f=d[2];if(0===eB(d[1],a))return f;var
c=e;continue}throw ac}}s([a,cy,0]);var
a2=s([a,cz,0]),a3=s([a,cA,0]),g=[0,A(O,0),A(O,0),A(O,J),A(O,J),O,0,0,0,J,J,0,0,0,0,0,0];function
a4(a){var
b=g[5],c=b*2|0,d=A(c,0),e=A(c,0),f=A(c,J),h=A(c,J);ab(g[1],0,d,0,b);g[1]=d;ab(g[2],0,e,0,b);g[2]=e;ab(g[3],0,f,0,b);g[3]=f;ab(g[4],0,h,0,b);g[4]=h;g[5]=c;return 0}var
cB=[0,function(a){return 0}];function
cC(h,b,c,d){var
n=g[11],o=g[14],p=g[6],q=g[15],r=g[7],s=g[8],t=g[16];g[6]=g[14]+1|0;g[7]=b;g[10]=d[12];try{var
e=0,a=0;for(;;)switch(eQ(h,g,e,a)){case
0:var
k=l(c,d);g[9]=d[11];g[10]=d[12];var
e=1,a=k;continue;case
1:throw a3;case
2:a4(0);var
e=2,a=0;continue;case
3:a4(0);var
e=3,a=0;continue;case
4:try{var
f=g[13],m=[0,4,l(ap(h[1],f)[f+1],g)],i=m}catch(f){f=aU(f);if(f!==a3)throw f;var
i=[0,5,0]}var
e=i[1],a=i[2];continue;default:l(h[14],cD);var
e=5,a=0;continue}}catch(f){f=aU(f);var
j=g[7];g[11]=n;g[14]=o;g[6]=p;g[15]=q;g[7]=r;g[8]=s;g[16]=t;if(f[1]===a2)return f[2];cB[1]=function(a){if(eO(a)){var
b=cm(a);return ap(h[3],b)[b+1]===j?1:0}return ap(h[2],a)[a+1]===j?1:0};throw f}}function
c(a,b){var
c=a[11]-b|0;return ap(a[2],c)[c+1]}function
cE(a){return 0}s([a,cF,0]);var
a5=[0,0];function
a6(a){a5[1]=[0,a,a5[1]];return 0}var
K=C,a7=null,cH=undefined;function
a8(a){return 1-(a==a7?1:0)}var
ad=false,a9=K.Array,a_=s([a,cJ,0]),ay=[0,a_,{}],cI=true,cG=cm(ay)===a?ay:ay[1];eS(d(cb),cG);a6(function(a){return a[1]===a_?[0,aQ(a[2].toString())]:0});a6(function(a){return a
instanceof
a9?0:[0,aQ(a.toString())]});function
p(a,b){a.appendChild(b);return 0}function
az(c){return function(a){if(a8(a)){var
d=l(c,a);if(!(d|0))a.preventDefault();return d}var
e=event,b=l(c,e);if(!(b|0))e.returnValue=b;return b}}var
D="2d",cK=K.document;function
ae(a,b){return a?l(b,a[1]):0}function
aA(a,b){return a.createElement(b.toString())}function
a$(a,b){return aA(a,b)}var
ba=[0,bN];function
bb(a,b,c,d){for(;;){if(0===a)if(0===b)return aA(c,d);var
h=ba[1];if(bN===h){try{var
j=cK.createElement('<input name="x">'),k=j.tagName.toLowerCase()===bV?1:0,m=k?j.name==="x"?1:0:k,i=m}catch(f){var
i=0}var
l=i?b2:-1003883683;ba[1]=l;continue}if(b2<=h){var
f=new
a9();f.push("<",d.toString());ae(a,function(a){f.push(' type="',cj(a),cc);return 0});ae(b,function(a){f.push(' name="',cj(a),cc);return 0});f.push(">");return c.createElement(f.join(e))}var
g=aA(c,d);ae(a,function(a){return g.type=a});ae(b,function(a){return g.name=a});return g}}var
cP=s([a,cO,0]);function
bc(a){var
b=a$(a,cQ);if(a8(b.getContext))return b;throw cP}K.HTMLElement===cH;var
af=[0,0];function
cR(a){if(aS(a,cS))return a;try{var
b=ax(a,af[1]);b[1]=b[1]+1|0;var
c=t(a,d(e+b[1]));return c}catch(f){f=aU(f);if(f===ac){af[1]=[0,[0,a,[0,0]],af[1]];return t(a,cT)}throw f}}var
ag=K.document,y=bc(ag);y.width=b5;y.height=500;var
cU=20;function
T(a,b){return a.style.backgroundColor=b.toString()}function
aB(a,b){var
c=bb([0,"submit"],0,ag,cL);T(c,cV);c.value=a.toString();c.onclick=az(b);return c}function
aC(a){return a$(ag,cN)}var
x=bb(0,0,ag,cM);x.readOnly=cI;x.value=e;x.cols=80;x.rows=10;function
aD(a){x.value=x.value.concat(a.toString());return x.scrollTop=x.scrollHeight}function
j(a){var
b=2===a[0]?a[3]:a[2];return b}function
aE(a,b){var
c=b[2],d=b[1];return[0,a[1]+d,a[2]+c,a[3]+d,a[4]+c]}function
E(a,b){var
c=a[2],d=a[1];switch(b[0]){case
0:var
e=aE(b[2],[0,d,c]);return[0,b[1],e];case
1:var
f=aE(b[2],[0,d,c]),g=b[1],h=[0,d,c];return[1,n(function(a){return E(h,a)},g),f];default:var
i=b[5],j=b[4],k=aE(b[3],[0,d,c]),l=E([0,d,c],b[2]);return[2,E([0,d,c],b[1]),l,k,j,i]}}function
U(a,b){var
e=a[2],f=a[1],c=j(b),g=c[1]<=f?1:0;if(g){var
h=f<c[3]?1:0;if(h)var
i=c[2]<=e?1:0,d=i?e<c[4]?1:0:i;else
var
d=h}else
var
d=g;return d}function
bd(a,b){var
d=a,c=b;for(;;){if(c){var
e=d[2],f=d[1],g=U([0,f,e],c[1]);if(!g){var
d=[0,f,e],c=c[2];continue}var
h=g}else
var
h=c;return h}}function
q(a){var
b=y.getContext(D);b.font=t(d(bP),cW).toString();return[0,a,[0,0,0,b.measureText(a.toString()).width,cU]]}function
be(a,b,c,d){if(b)var
f=b[1],e=j(f),g=e[1],i=be(a+(e[3]-g)+c,b[2],c,d),h=[0,E([0,a-g,d-e[4]],f),i];else
var
h=b;return h}function
ah(a){var
d=a,c=1,k=0;for(;;){if(d){var
f=j(d[1]),i=S(c,f[4]-f[2]),d=d[2],c=i;continue}var
g=be(0,a,k,c),b=g;for(;;){if(b){var
e=b[2];if(e){var
b=e;continue}var
h=j(b[1])[3]}else
var
h=0;return[1,g,[0,0,0,h,c]]}}}function
bf(a,b,c){var
g=j(a),h=g[4],i=j(b),e=y.getContext(D);e.font=t(d(b6),cX).toString();var
f=e.measureText(c.toString()).width,k=h+i[4]+6,l=[0,0,0,S(g[3],i[3])+f,k];return[2,a,E([0,0,h+6],b),l,c,f]}function
ai(a){switch(a[0]){case
0:var
f=a[2],o=f[2],p=f[1],q=a[1],b=y.getContext(D);b.textBaseline="top";b.font=t(d(bP),cY).toString();return b.fillText(q.toString(),p,o);case
1:return I(ai,a[1]);default:var
g=a[2],h=a[1];ai(h);ai(g);var
i=j(h),k=i[3],e=j(g),l=e[3],m=e[2],n=e[1],r=S(k-i[1],l-n);y.getContext(D).fillRect(n,m-2,r,1);var
s=S(k,l),u=a[4],c=y.getContext(D);c.textBaseline="middle";c.font=t(d(b6),cZ).toString();return c.fillText(u.toString(),s,m-2)}}var
aj=K.document,u=bc(aj);u.width=b5;u.height=O;function
bg(a){var
b=u.width,c=u.height;return u.getContext(D).clearRect(0,0,b,c)}function
bh(a){var
b=a[2],c=a[1],d=u.getContext(D);d.strokeStyle="#FF0000";return d.strokeRect(c,b+2,a[3]-c,a[4]-b-1)}s([a,c3,0]);var
aF=s([a,c4,0]),aJ=0,v=1,Y=2,dr=[1,[0,1],[2,[0,1],[0,1]]];function
ds(a){if(3===a[0]){var
b=a[1];if(0===b[0]){var
d=b[1];if(1===d[0]){var
g=[0,d[1],0];return ah([0,q(du),g])}}else{var
c=b[1];if(4===c[0]){var
e=c[1];if(1===e[0]){var
f=c[2];if(1===f[0]){var
h=[0,f[1],0],i=[0,q(dv),h],j=[0,e[1],i];return ah([0,q(dw),j])}}}}}return o(dt)}var
dx=[1,[0,aJ],[1,0,[1,0,[0,Y]]]];function
dy(a){if(3===a[0]){var
b=a[1];if(0===b[0]){var
e=b[1];if(1===e[0])return e[1]}else{var
f=b[1];if(3===f[0]){var
c=f[1];if(0===c[0]){if(0===c[1][0])return q(dA)}else{var
g=c[1];if(3===g[0]){var
d=g[1];if(0===d[0]){if(0===d[1][0])return q(dB)}else{var
h=d[1];if(1===h[0]){var
i=[0,q(dC),0],j=[0,h[1],i];return ah([0,q(dD),j])}}}}}}}return o(dz)}var
dE=[1,0,[2,[0,v],[0,Y]]],bB=1,dJ=0,aK=[0,[0,dr,ds],[0,[0,dx,dy],[0,[0,dE,function(a){if(3===a[0]){var
b=a[1];if(0===b[0]){if(0===b[1][0])return q(dG)}else{var
c=b[1];if(4===c[0]){var
d=c[1];if(1===d[0]){var
e=c[2];if(1===e[0]){var
f=[0,e[1],0],g=[0,q(dH),f];return ah([0,d[1],g])}}}}}return o(dF)}],dJ]]],av=aK;for(;;){if(av){var
av=av[2];continue}var
ak=function(a){return a0(aK,a)[1]},c6=[1,0,c5,[0,0]],V=function(a,b){return[1,a,cR(b),[0,0]]},L=function(a,b,c){if(typeof
a==="number"){if(0===a){if(0===c[0])return c7}else
if(2===c[0])return[2,c[1]]}else
switch(a[0]){case
0:if(1===c[0])return[1,bI(b,a[1],c[1])];break;case
1:if(3===c[0]){var
d=c[1];return 0===d[0]?[3,[0,L(a[1],b,d[1])]]:[3,[1,L(a[2],b,d[1])]]}break;default:if(4===c[0]){var
e=L(a[2],b,c[2]);return[4,L(a[1],b,c[1]),e]}}return o(c8)},F=function(a){switch(a[0]){case
0:return a;case
1:var
d=a[3],e=d[1];if(e){var
f=F(e[1]);d[1]=[0,f];return f}return a;default:var
c=a[3],g=c[1];if(g){var
h=F(g[1]);c[1]=[0,h];return h}var
b=l(a[2],0);c[1]=[0,b];if(2===b[0])if(!b[3][1])return b;var
i=F(b);c[1]=[0,i];return i}},bj=function(a,b){var
d=a,c=b;for(;;){if(typeof
d==="number"){if(0===d){if(0===c[0])return 0}else
if(2===c[0])return 0}else
switch(d[0]){case
0:if(1===c[0])return c[1];break;case
1:if(3===c[0]){var
e=c[1];if(0===e[0]){var
d=d[1],c=e[1];continue}var
d=d[2],c=e[1];continue}break;default:if(4===c[0]){var
f=bj(d[1],c[1]);if(f)return f;var
d=d[2],c=c[2];continue}}return o(c9)}},bk=function(d,b,c){var
a=F(c);switch(a[0]){case
0:var
e=ak(a[1]),g=a[2];return bj(e,L(e,function(a){return function(a){return bk(d,b,a)}},g));case
1:var
f=b===a[1]?1:0,h=f?aS(d,a[2]):f;return h;default:return 1}},bl=function(a,b,c,d){var
g=a,f=c,e=d;for(;;){if(typeof
g==="number"){if(0===g){if(0===f[0])if(0===e[0])return 0}else
if(2===f[0])if(2===e[0])if(eD(f[1],e[1]))return 0}else
switch(g[0]){case
0:if(1===f[0])if(1===e[0]){var
k=e[1],l=f[1];return ex(b,ak(g[1]),l,k)}break;case
1:if(3===f[0]){var
h=f[1];if(0===h[0]){if(3===e[0]){var
i=e[1];if(0===i[0]){var
g=g[1],f=h[1],e=i[1];continue}}}else
if(3===e[0]){var
j=e[1];if(0!==j[0]){var
g=g[2],f=h[1],e=j[1];continue}}}break;default:if(4===f[0])if(4===e[0]){bl(g[1],b,f[1],e[1]);var
g=g[2],f=f[2],e=e[2];continue}}throw[0,aF,c_]}},bm=function(a,b,c){var
e=F(b),d=F(c);switch(e[0]){case
0:var
k=e[1];switch(d[0]){case
0:if(k===d[1])return bl(a,bm,e[2],d[2]);var
f=1;break;case
1:var
i=e,h=d[1],m=d[3],g=d[2],l=k,f=0;break;default:var
f=1}break;case
1:var
j=e[3],n=e[1];switch(d[0]){case
0:var
i=d,h=d[1],m=j,g=e[2],l=n,f=0;break;case
1:if(n===d[1]){var
o=j!==d[3]?1:0,p=o?(j[1]=[0,d],0):o;return p}var
f=1;break;default:var
f=1}break;default:var
f=1}if(!f)if(l===h){if(bk(g,h,i))throw[0,aF,g];m[1]=[0,i];return 0}throw[0,aF,c$]},bn=function(a,b){var
c=F(b);switch(c[0]){case
0:var
d=c[2],e=L(ak(a),bn,d);return l(a0(aK,a)[2],e);case
1:return q(c[2]);default:throw ac}},aG=function(a){return bn(a[1],a)},bC=function(a){return[0,aJ,[3,[0,[1,a]]]]},bD=function(a,b){return[0,aJ,[3,[1,[4,[1,a],[1,b]]]]]},al=function(a){return[0,v,[3,[0,[1,a]]]]},bE=[0,v,dK],bF=[0,v,dL],am=function(a){return[0,v,[3,[1,[3,[1,[3,[1,[1,a]]]]]]]]},bG=[0,Y,dM],aL=function(a,b){return[0,Y,[3,[1,[4,[1,a],[1,b]]]]]},dN=function(a){var
b=V(v,dO);return[0,al(bC(b)),[0,[0,b,0],0]]},dP=function(a){var
b=V(v,dQ),c=V(v,dR);return[0,al(bD(b,c)),[0,[0,b,0],[0,[0,c,0],0]]]},dS=function(a){return[1,bE]},dT=function(a){return[1,bF]},dU=function(a){return[1,am(bG)]},dY=[0,[0,dX,dU],0],bH=[0,[0,d3,dN],[0,[0,d2,dP],[0,[0,d1,dS],[0,[0,d0,dT],[0,[0,dZ,function(a){var
b=V(v,dV),c=V(Y,dW),d=[0,[0,b,0],[0,[0,am(c),0],0]];return[0,am(aL(b,c)),d]}],dY]]]]],d5=d4.slice(),d6=[0,0],ec=17,eh=function(a){throw[0,a2,c(a,0)]},ei=function(a){return c(a,0)},ej=function(a){return am(c(a,1))},ek=function(a){return bF},el=function(a){return bE},em=function(a){var
b=c(a,2);return al(bD(b,c(a,0)))},en=function(a){return al(bC(c(a,0)))},eo=function(a){var
b=c(a,2);return aL(b,c(a,0))},ep=function(a){return aL(c(a,1),bG)},eq=function(a){return c(a,1)},es=[0,[0,function(a){return o(er)},eq,ep,eo,en,em,el,ek,ej,ei,eh],d5,d6,d7,d8,d9,d_,d$,ea,eb,ec,ed,ee,cE,ef,eg],eu=function(a){a:for(;;){var
i=0;for(;;){var
b=eJ(et,i,a);if(0<=b){a[11]=a[12];var
e=a[12];a[12]=[0,e[1],e[2],e[3],a[4]+a[6]|0]}if(13<b>>>0){l(a[1],a);var
i=b;continue}switch(b){case
1:return 8;case
2:return 9;case
3:return 4;case
4:return 5;case
5:return 6;case
7:return 0;case
8:return 1;case
9:return 2;case
10:return 3;case
11:return 7;case
12:return 10;case
13:var
c=a[6]-a[5]|0,f=a[5],h=a[2];if(0<=f)if(0<=c)if((B(h)-c|0)<f)var
d=0;else{var
g=w(c);P(h,f,g,0,c);var
j=g,d=1}else
var
d=0;else
var
d=0;if(!d)var
j=aa(cx);return o(t(ev,j));default:continue a}}}},k=function(a){var
b=0===a[0]?a[3]:a[4];return b},bo=function(a){return ai(k(a))},bp=function(a,b){var
c=a[2],d=a[1];if(0===b[0]){var
e=E([0,d,c],b[3]);return[0,b[1],b[2],e]}var
f=E([0,d,c],b[4]),g=b[3],h=b[2],i=[0,d,c],j=n(function(a){return bp(i,a)},h);return[1,b[1],j,g,f]},bq=function(a,b){return[0,a,b,bf(da,aG(a),b)]},br=function(a,b,c,d){if(b)var
f=b[1],e=j(k(f)),g=e[1],i=br(a+(e[3]-g)+c,b[2],c,d),h=[0,bp([0,a-g,d-(e[4]-e[2])],f),i];else
var
h=b;return h},M=function(a,b,c){if(0===b)return[1,a,0,c,aG(a)];var
f=b,e=1;for(;;){if(f){var
i=j(k(f[1])),m=S(e,i[4]-i[2]),f=f[2],e=m;continue}var
g=br(0,b,5,e),d=g;for(;;){if(d){var
h=d[2];if(h){var
d=h;continue}var
l=j(k(d[1]))[3]}else
var
l=0;var
o=[1,n(k,g),[0,0,0,l,e]];return[1,a,g,c,bf(o,aG(a),c)]}}},bs=function(a,b){if(0===b[0]){var
c=b[2],d=n(function(a){return bs(db,a)},c);return M(b[1],d,a)}return bq(b[1],a)},bt=function(a,b){var
c=a[2],d=a[1],e=U([0,d,c],k(b));if(e){if(0===b[0])return bh(j(k(b)));var
f=b[2];if(bd([0,d,c],n(k,f))){var
g=[0,d,c];return I(function(a){return bt(g,a)},f)}return bh(j(k(b)))}return e},W=function(a,b,c){if(aS(b,dc))return M(a,0,dd);var
d=l(ax(b,c),0),e=d[1];bm(ak(a[1]),a,e);return bs(b,d)},aH=function(a,b,c,d,e){var
f=c[2],g=c[1];if(U([0,g,f],k(b))){if(0===b[0])return W(a,d,e);var
j=b[2];if(bd([0,g,f],n(k,j))){var
h=W(a,b[3],e);if(0===h[0])return o(de);var
l=h[2],m=aw(function(a,b){return aH(a[1],b,[0,g,f],d,e)},l,j);return M(h[1],m,h[3])}return W(a,d,e)}if(0===b[0])return W(a,b[2],e);var
i=W(a,b[3],e);if(0===i[0])return o(df);var
p=b[2],q=i[2],r=aw(function(a,b){return aH(a[1],b,[0,g,f],d,e)},q,p);return M(i[1],r,i[3])},bu=function(a){if(0===a[0])return bq(a[1],a[2]);var
b=a[3],c=n(bu,a[2]);return M(a[1],c,b)},G=[0,M(c6,0,dh)],N=[0,bv],X=[0,0],aI=[0,0],bw=function(a){return I(function(a){return T(a[2],bi)},a)},bx=function(a){return bw(X[1])},by=function(a){var
b=aI[1];return I(function(a){return bw(a[2])},b)},bz=function(a){af[1]=0;var
b=t(dg,ew),c=B(b),d=w(c);P(b,0,d,0,c);var
e=[0],f=1,g=0,h=0,i=0,j=0,k=0,l=B(b),m=cC(es,1,eu,[0,function(a){a[9]=1;return 0},d,l,k,j,i,h,g,f,e,a1,a1]);return bu(aH(m,G[1],N[1],a,bH))},bA=function(a,b){bx(0);var
c=k(G[1]);if(U(N[1],c)){G[1]=bz(a);bg(0);bo(G[1])}N[1]=bv;return ad},dj=function(a){return bA(dk,a)},dn=function(a){bg(0);bo(G[1]);var
b=u.getBoundingClientRect();N[1]=[0,a.clientX-b.left,a.clientY-b.top];bt(N[1],G[1]);var
d=k(G[1]);if(U(N[1],d)){aD(dl);var
c=X[1];I(function(a){var
b=a[2],c=a[1];try{bz(c);aD(t(c,dm));var
d=T(b,c1);return d}catch(f){return T(b,bi)}},c);aD(c0)}else
bx(0);return ad};K.onload=az(function(a){var
b=aj.getElementById("main");if(b==a7)throw[0,aZ,c2];u.onmousedown=az(dn);aI[1]=n(function(a){var
d=a[1],e=a[2],f=n(function(a){var
c=aB(a,function(a){if(d===bB)by(0);return ad});p(b,c);return[0,a,c]},e),c=aj.createDocumentFragment();p(c,aj.createTextNode(" / "));p(b,c);return[0,d,f]},dI);p(b,u);p(b,aC(0));X[1]=n(function(a){var
c=a[1],d=aB(c,function(a){return bA(c,a)});p(b,d);return[0,c,d]},bH);var
c=aB(dp,dj);X[1]=[0,[0,dq,c],X[1]];p(b,c);p(b,aC(0));p(b,aC(0));p(b,y);by(0);var
d=ax(bB,aI[1]);I(function(a){return T(a[2],di)},d);return ad});var
cr=function(a){var
b=a;for(;;){if(b){var
c=b[2],d=b[1];try{eK(d)}catch(f){}var
b=c;continue}return 0}};cr(eM(0));return}}(function(){return this}()));
