/**
 * Ajax hien thi diem ban hang
**/
function requestNewFunc(idX, idY) 
{
	var sIdX = idX;
    var sIdY = idY;
    
    //alert('id='+sIdX);
    var oXmlHttp = zXmlHttp.createRequest();
    oXmlHttp.open("get", "includes/ajax_func9d4f.php?idx=" + sIdX + "&idy" + sIdY, true);
    oXmlHttp.onreadystatechange = function () 
    {
       if (oXmlHttp.readyState == 4) 
       {
 	       if (oXmlHttp.status == 200) 
 	       {
               displayFunInfo(oXmlHttp.responseText);
           }
            else 
            {
            	displayFunInfo("An error occurred: " + oXmlHttp.statusText); //statusText is not always accurate
            }
        }            
   	};
    oXmlHttp.send(null);
}

function displayFunInfo(sText) 
{
	var divCustomerInfo = document.getElementById("infoFunc");
    divCustomerInfo.innerHTML = sText;
}


/**
 * Ajax hien thi diem ban hang
**/
function requestTech(idTech) 
{
	var sidTech = idTech;
    
    var oXmlHttp = zXmlHttp.createRequest();
    oXmlHttp.open("get", "includes/ajax_techf77d.php?sidTech=" + sidTech, true);
    oXmlHttp.onreadystatechange = function () 
    {
       if (oXmlHttp.readyState == 4) 
       {
 	       if (oXmlHttp.status == 200) 
 	       {
               displayTechInfo(oXmlHttp.responseText);
           }
            else 
            {
            	displayTechInfo("An error occurred: " + oXmlHttp.statusText); //statusText is not always accurate
            }
        }            
   	};
    oXmlHttp.send(null);
}

function displayTechInfo(sText) 
{
	var divCustomerInfo = document.getElementById("techPhone");
    divCustomerInfo.innerHTML = sText;
}


function onlyNumbers(evt) {
	var e = evt
	if(window.event){ // IE
		var charCode = e.keyCode;
	} else if (e.which) { // Safari 4, Firefox 3.0.4
		var charCode = e.which
	}
	if (charCode > 31 && (charCode < 48 || charCode > 57))
	return false;
	return true;
}



//Change values scroll bar DIV
    function focus_search_keyword(e)
    {
        if ( e.value == strEnterKey )
        {
            e.value = '';
            return false;
        }
    }
    function Moveout_text(e)
    {
        if ( e.value == '')
        {
            e.value = strEnterKey;
            return false;
        }
    }
    
    function Entekey()
    {
        var strKey    = strFindKey;
        if(strKey=='')
        {
            document.adminForm.keyword.value = strEnterKey;
        }
        else
        {
            document.adminForm.keyword.value = strKey;
        }
    }
    
    function Check_search()
    {
        var txtSearch = document.adminForm.keyword.value;
        
        if ( txtSearch == strEnterKey || txtSearch == "")
        {
            alert(strErrorKey);
            document.adminForm.keyword.focus();
            return false;
        }
        return true;
    }
//BEGIN
function changeScrollBar(objId, direct)
{
	var curScrollPos = getObjectById(objId).scrollTop
	getObjectById(objId).scrollTop = curScrollPos + 20*(direct);
	return;
}

function getObjectById(id) 
{
	var obj = null;
	if( document.getElementById )
		obj = document.getElementById( id );
	else if( document.all )
		obj = document.all[id];
	else
		obj = document.layer[id];
	return obj;
}
// END

function addToFavorite()
{
	var pageTitle = document.title;
	var pageUrl = location.href;
	window.external.addFavorite(pageUrl, pageTitle);
}

function show_popup_info(duongdan,pid,c_rong,c_cao)
{
	window.open( duongdan + pid,"my_new_window","location: yes, status=no, menubar=yes ,scrollbars=yes, resizable=yes, copyhistory=yes, width="+ c_rong +", height="+c_cao);
	return false;
}

function submitSearch(){
    document.searchForm.cmd.click();
}

function emailCheck (emailStr) {
	
	var emailPat=/^(.+)@(.+)$/
	var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]"
	var validChars="\[^\\s" + specialChars + "\]"
	var quotedUser="(\"[^\"]*\")"
	var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
	var atom=validChars + '+'
	var word="(" + atom + "|" + quotedUser + ")"
	var userPat=new RegExp("^" + word + "(\\." + word + ")*$")
	var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$")


	var matchArray=emailStr.match(emailPat)
	if (matchArray==null) {
		return false
	}
	
	var user=matchArray[1]
	var domain=matchArray[2]

	if (user.match(userPat)==null) {
    	return false
	}

	var IPArray=domain.match(ipDomainPat)
	if (IPArray!=null) {
		for (var i=1;i<=4;i++) {
		  	if (IPArray[i]>255) {
		  		return false
		  	}
		}
	   return true
	}

	var domainArray=domain.match(domainPat)
	if (domainArray==null) {
		return false
	}

	var atomPat=new RegExp(atom,"g")
	var domArr=domain.match(atomPat)
	var len=domArr.length
	if (domArr[domArr.length-1].length<2 || domArr[domArr.length-1].length>3) {
   	return false
	}

	if (len<2) {
	   return false
	}
	
	return true;
}


function go(form) 
{
	var URL = form.selectmenu.value;
	if ( URL != "")
	{
		window.open(URL, '_blank');
		return false;
	}
	else
		return false;
}

function AdFindObjectID(idName)
{
	return document.getElementById(idName);
}
function AdFindObjectName(strName)
{
	return document.getElementsByName(strName);
}
