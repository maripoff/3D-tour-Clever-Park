// Garden Gnome Software - Skin
// Pano2VR 5.2.4/15996
// Filename: 3d_tour_flat.ggsk
// Generated Вс фев 15 22:55:55 2026

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._image_logo=document.createElement('div');
		this._image_logo__img=document.createElement('img');
		this._image_logo__img.className='ggskin ggskin_image';
		this._image_logo__img.setAttribute('src',basePath + 'images/image_logo.png');
		this._image_logo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_logo__img.className='ggskin ggskin_image';
		this._image_logo__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_logo__img);
		this._image_logo.appendChild(this._image_logo__img);
		this._image_logo.ggId="Image \"Logo\"";
		this._image_logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_logo.ggVisible=true;
		this._image_logo.className='ggskin ggskin_image ';
		this._image_logo.ggType='image';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		this._image_logo.setAttribute('style',hs);
		this._image_logo.style[domTransform + 'Origin']='50% 50%';
		me._image_logo.ggIsActive=function() {
			return false;
		}
		me._image_logo.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_logo.onclick=function (e) {
			me.player.openUrl("https:\/\/vozhevdesign.art\/disk\/zhk-clever-park-q563rh\/vfbtvfcl","_self");
		}
		this._image_logo.onmouseover=function (e) {
			me.elementMouseOver['image_logo']=true;
		}
		this._image_logo.onmouseout=function (e) {
			me._image_logo.style[domTransition]='none';
			me._image_logo.ggParameter.sx=1;me._image_logo.ggParameter.sy=1;
			me._image_logo.style[domTransform]=parameterToTransform(me._image_logo.ggParameter);
			me.elementMouseOver['image_logo']=false;
		}
		this._image_logo.ontouchend=function (e) {
			me.elementMouseOver['image_logo']=false;
		}
		this._image_logo.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._image_logo);
		this._heading=document.createElement('div');
		this._heading__text=document.createElement('div');
		this._heading.className='ggskin ggskin_textdiv';
		this._heading.ggTextDiv=this._heading__text;
		this._heading.ggId="Heading";
		this._heading.ggLeft=-300;
		this._heading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._heading.ggVisible=true;
		this._heading.className='ggskin ggskin_text ';
		this._heading.ggType='text';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -300px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 598px;';
		hs+='pointer-events:auto;';
		hs+='margin-top: 20px';
		this._heading.setAttribute('style',hs);
		this._heading.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 598px;';
		hs+='height: 100px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(230,210,183,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._heading__text.setAttribute('style',hs);
		this._heading__text.innerHTML="<div class=\"cover-title\">\u0416\u041a \"Clever park\"<\/div>";
		this._heading.appendChild(this._heading__text);
		me._heading.ggIsActive=function() {
			return false;
		}
		me._heading.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._heading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._heading);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseOver['image_logo']) {
			me._image_logo.style[domTransition]='none';
			me._image_logo.ggParameter.sx=1.05;me._image_logo.ggParameter.sy=1.05;
			me._image_logo.style[domTransform]=parameterToTransform(me._image_logo.ggParameter);
		}
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='Hotspot_light') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot_light";
			this.__div.ggLeft=0;
			this.__div.ggTop=0;
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._room_name_light=document.createElement('div');
			this._room_name_light__text=document.createElement('div');
			this._room_name_light.className='ggskin ggskin_textdiv';
			this._room_name_light.ggTextDiv=this._room_name_light__text;
			this._room_name_light.ggId="Room name_light";
			this._room_name_light.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._room_name_light.ggVisible=true;
			this._room_name_light.className='ggskin ggskin_text ';
			this._room_name_light.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : -50px;';
			hs+='opacity : 0;';
			hs+='position : absolute;';
			hs+='top : 22px;';
			hs+='visibility : hidden;';
			hs+='width : 98px;';
			hs+='pointer-events:auto;';
			this._room_name_light.setAttribute('style',hs);
			this._room_name_light.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 98px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(230,210,183,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._room_name_light__text.setAttribute('style',hs);
			this._room_name_light__text.innerHTML=me.hotspot.title;
			this._room_name_light.appendChild(this._room_name_light__text);
			me._room_name_light.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._room_name_light.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._room_name_light.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._room_name_light);
			this._image_hotspot_light=document.createElement('div');
			this._image_hotspot_light__img=document.createElement('img');
			this._image_hotspot_light__img.className='ggskin ggskin_image';
			this._image_hotspot_light__img.setAttribute('src',basePath + 'images/image_hotspot_light.png');
			this._image_hotspot_light__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_hotspot_light__img.className='ggskin ggskin_image';
			this._image_hotspot_light__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_hotspot_light__img);
			this._image_hotspot_light.appendChild(this._image_hotspot_light__img);
			this._image_hotspot_light.ggId="Image \"Hotspot_light\"";
			this._image_hotspot_light.ggLeft=-18;
			this._image_hotspot_light.ggTop=-18;
			this._image_hotspot_light.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_hotspot_light.ggVisible=true;
			this._image_hotspot_light.className='ggskin ggskin_image ';
			this._image_hotspot_light.ggType='image';
			hs ='';
			hs+='height : 32px;';
			hs+='left : -18px;';
			hs+='position : absolute;';
			hs+='top : -18px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._image_hotspot_light.setAttribute('style',hs);
			this._image_hotspot_light.style[domTransform + 'Origin']='50% 50%';
			me._image_hotspot_light.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_hotspot_light.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_hotspot_light.onmouseover=function (e) {
				me.elementMouseOver['image_hotspot_light']=true;
			}
			this._image_hotspot_light.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._room_name_light.style[domTransition]='none';
				} else {
					me._room_name_light.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._room_name_light.style.opacity='0';
				me._room_name_light.style.visibility='hidden';
				me.elementMouseOver['image_hotspot_light']=false;
			}
			this._image_hotspot_light.ontouchend=function (e) {
				me.elementMouseOver['image_hotspot_light']=false;
			}
			this._image_hotspot_light.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._image_hotspot_light);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_hotspot_light']) {
					if (me.player.transitionsDisabled) {
						me._room_name_light.style[domTransition]='none';
					} else {
						me._room_name_light.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._room_name_light.style.opacity='1';
					me._room_name_light.style.visibility=me._room_name_light.ggVisible?'inherit':'hidden';
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='Hotspot "Play"') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot \"Play\"";
			this.__div.ggLeft=0;
			this.__div.ggTop=0;
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._image_play=document.createElement('div');
			this._image_play__img=document.createElement('img');
			this._image_play__img.className='ggskin ggskin_image';
			this._image_play__img.setAttribute('src',basePath + 'images/image_play.png');
			this._image_play__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_play__img.className='ggskin ggskin_image';
			this._image_play__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_play__img);
			this._image_play.appendChild(this._image_play__img);
			this._image_play.ggId="Image \"Play\"";
			this._image_play.ggLeft=-50;
			this._image_play.ggTop=-50;
			this._image_play.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_play.ggVisible=true;
			this._image_play.className='ggskin ggskin_image ';
			this._image_play.ggType='image';
			hs ='';
			hs+='height : 96px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : -50px;';
			hs+='visibility : inherit;';
			hs+='width : 96px;';
			hs+='pointer-events:auto;';
			this._image_play.setAttribute('style',hs);
			this._image_play.style[domTransform + 'Origin']='50% 50%';
			me._image_play.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_play.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_play.onclick=function (e) {
				me.player.openNext(me.hotspot.url,me.hotspot.target);
				me.skin._heading.style[domTransition]='none';
				me.skin._heading.style.visibility='hidden';
				me.skin._heading.ggVisible=false;
				me._image_play.style[domTransition]='none';
				me._image_play.style.visibility='hidden';
				me._image_play.ggVisible=false;
			}
			this._image_play.onmouseover=function (e) {
				me.elementMouseOver['image_play']=true;
			}
			this._image_play.onmouseout=function (e) {
				me._image_play.style[domTransition]='none';
				me._image_play.ggParameter.sx=1;me._image_play.ggParameter.sy=1;
				me._image_play.style[domTransform]=parameterToTransform(me._image_play.ggParameter);
				me.elementMouseOver['image_play']=false;
			}
			this._image_play.ontouchend=function (e) {
				me.elementMouseOver['image_play']=false;
			}
			this._image_play.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._image_play);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_play']) {
					me._image_play.style[domTransition]='none';
					me._image_play.ggParameter.sx=1.2;me._image_play.ggParameter.sy=1.2;
					me._image_play.style[domTransform]=parameterToTransform(me._image_play.ggParameter);
				}
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot_dark";
			this.__div.ggLeft=0;
			this.__div.ggTop=0;
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this._room_name_dark=document.createElement('div');
			this._room_name_dark__text=document.createElement('div');
			this._room_name_dark.className='ggskin ggskin_textdiv';
			this._room_name_dark.ggTextDiv=this._room_name_dark__text;
			this._room_name_dark.ggId="Room name_dark";
			this._room_name_dark.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._room_name_dark.ggVisible=true;
			this._room_name_dark.className='ggskin ggskin_text ';
			this._room_name_dark.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : -50px;';
			hs+='opacity : 0;';
			hs+='position : absolute;';
			hs+='top : 22px;';
			hs+='visibility : hidden;';
			hs+='width : 98px;';
			hs+='pointer-events:auto;';
			this._room_name_dark.setAttribute('style',hs);
			this._room_name_dark.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 98px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(151,131,113,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._room_name_dark__text.setAttribute('style',hs);
			this._room_name_dark__text.innerHTML=me.hotspot.title;
			this._room_name_dark.appendChild(this._room_name_dark__text);
			me._room_name_dark.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._room_name_dark.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._room_name_dark.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._room_name_dark);
			this._image_hotspot_dark=document.createElement('div');
			this._image_hotspot_dark__img=document.createElement('img');
			this._image_hotspot_dark__img.className='ggskin ggskin_image';
			this._image_hotspot_dark__img.setAttribute('src',basePath + 'images/image_hotspot_dark.png');
			this._image_hotspot_dark__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_hotspot_dark__img.className='ggskin ggskin_image';
			this._image_hotspot_dark__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_hotspot_dark__img);
			this._image_hotspot_dark.appendChild(this._image_hotspot_dark__img);
			this._image_hotspot_dark.ggId="Image \"Hotspot_dark\"";
			this._image_hotspot_dark.ggLeft=-18;
			this._image_hotspot_dark.ggTop=-18;
			this._image_hotspot_dark.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_hotspot_dark.ggVisible=true;
			this._image_hotspot_dark.className='ggskin ggskin_image ';
			this._image_hotspot_dark.ggType='image';
			hs ='';
			hs+='height : 32px;';
			hs+='left : -18px;';
			hs+='position : absolute;';
			hs+='top : -18px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._image_hotspot_dark.setAttribute('style',hs);
			this._image_hotspot_dark.style[domTransform + 'Origin']='50% 50%';
			me._image_hotspot_dark.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_hotspot_dark.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_hotspot_dark.onmouseover=function (e) {
				me.elementMouseOver['image_hotspot_dark']=true;
			}
			this._image_hotspot_dark.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._room_name_dark.style[domTransition]='none';
				} else {
					me._room_name_dark.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._room_name_dark.style.opacity='0';
				me._room_name_dark.style.visibility='hidden';
				me.elementMouseOver['image_hotspot_dark']=false;
			}
			this._image_hotspot_dark.ontouchend=function (e) {
				me.elementMouseOver['image_hotspot_dark']=false;
			}
			this._image_hotspot_dark.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._image_hotspot_dark);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_hotspot_dark']) {
					if (me.player.transitionsDisabled) {
						me._room_name_dark.style[domTransition]='none';
					} else {
						me._room_name_dark.style[domTransition]='all 500ms ease-out 0ms';
					}
					me._room_name_dark.style.opacity='1';
					me._room_name_dark.style.visibility=me._room_name_dark.ggVisible?'inherit':'hidden';
				}
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};