var cName = "_style";
var exdays = 30;
var checkCssFile = '../CSS/Style.css';

function changeCSS(cssFile, cssLinkIndex) {
	var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
	var newlink = document.createElement("link")
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", cssFile);
		newlink.setAttribute("media", "only screen and (min-width:769px)");

	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
	
function changeCSSall(cssFile, cssLinkIndex, cssFile2, cssLinkIndex2, cssFile3, cssLinkIndex3) {
	var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
	var newlink = document.createElement("link")
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", cssFile);
		newlink.setAttribute("media", "only screen and (min-width:769px)");

	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
		
		
	var oldlink2 = document.getElementsByTagName("link").item(cssLinkIndex2);
	var newlink2 = document.createElement("link")
        newlink2.setAttribute("rel", "stylesheet");
        newlink2.setAttribute("type", "text/css");
        newlink2.setAttribute("href", cssFile2);
		newlink2.setAttribute("media", "only screen and (max-width:480px)");

	document.getElementsByTagName("head").item(0).replaceChild(newlink2, oldlink2);
	
	var oldlink3 = document.getElementsByTagName("link").item(cssLinkIndex3);
	var newlink3 = document.createElement("link")
        newlink3.setAttribute("rel", "stylesheet");
        newlink3.setAttribute("type", "text/css");
        newlink3.setAttribute("href", cssFile3);
		newlink3.setAttribute("media", "only screen and (min-width:481px) and (max-width:768px)");
	
	document.getElementsByTagName("head").item(0).replaceChild(newlink3, oldlink3);
	setCookie(cssFile);
}
	
function setCookie(cssF) {
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cName + "=" + cssF + "; " + expires + "; domain=chrissiena.com; path=/";
}

function getCookie(cn)
{
var name = cn + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) 
  {
  var c = ca[i].trim();
  if (c.indexOf(name)==0)
  	return c.substring(name.length,c.length);
}
return "";
}

function startUp() {
var c=getCookie(cName);
if (c!="") {
	if (checkCssFile == c) {
		changeCSSall('CSS/Style.css', 1, 'CSS/phone.css', 3, 'CSS/tablet.css', 4);
	} else {
		changeCSSall('CSS/DarkStyle.css', 1, 'CSS/Darkphone.css', 3, 'CSS/Darktablet.css', 4);
	}
  } 
}