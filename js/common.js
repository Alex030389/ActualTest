/** Displays confirmation dialog ("Are you sure?").
* @return bool true - user have clicked 'yes', false - 'no'
*/
function sure()
{
	var sMess = 'Are you sure ?';
	var aMessages = aMessages;
    if (aMessages && aMessages['js.sure'])
    	 sMess = aMessages['js.sure'];
    return confirm(sMess);
}

function formatMes(sKey)
{
    var i = 1;
    var sMsg = aMessages[sKey];
    var sMsg2 = aMessages[sKey];
    while (sMsg.length)
    {
        if (sMsg.search(/%s/) != -1)
        {
            sMsg = sMsg.replace(/.*?(%s.*|\n)/ , '$1');
            sMsg = sMsg.replace(/^%s/, '');
            sMsg2 = sMsg2.replace(/%s/, arguments[i]);
            i++;
        }
        else
        {
            sMsg = sMsg.replace(/.*/, '');
        }
    }
    return sMsg2;
}
/** Open popup window.
* @param string url       url to open in popup window
* @param string name      window name
* @param int    width     window width
* @param int    height    window height
* @param bool   bIsResize true - window resizable, false - fixed size
*/
function openWin(url, name, width, height, bIsResize){
  if (!width)
        width = screen.width*0.9;
  if (!height)
        height = screen.height*0.75;
  IsReize = bIsResize?1:0;
  var newWindow = window.open(url, name, 'left=' + Math.ceil((screen.width - width)/2) + ',top=' + Math.ceil((0+screen.height - height)/2) + ',width=' + width + ',height=' + height + ',location=0,toolbar=0,directories=0,status=0,menubar=0,scrollbars=1,resizable='+bIsResize+',channelmode=0,fullscreen=0');
  return false;
}
/** Selects/deselects all checkbox with given name
* @param string name checbox name
* @param bool   val  true - select, false - deselect boxes
*/
function selectAll(name,val){
        a = document.getElementsByName(name);
        for(i=0;i<a.length;++i) {
                a[i].checked =   val;
        }
}
/** Returns value of selected item (singel or first for multiselect)
*  in SELECT element.
* @param string sName select element name
* @return mixed selected element value or 0 - if none selected
*/
function getSelectedId( sName ){
        var a = document.getElementsByName(sName);
        for(i=0;i<a.length;++i)
                if(a[i].checked) return a[i].value;
        return 0;
}
/** Clear form elements. Used insted reset() when neede clear elements
*  but not reset to start values.
* @param string formName name form to clear
*/
function clearForm(formName)
{
	formName.reset();
	var a = formName.elements;
	for(i=0;i<a.length;++i)
	{
		type_input = a[i].type.toLowerCase();
		if(type_input == 'select-one') {
				a[i].selectedIndex = 0;
		} else if (type_input == 'checkbox') {
				a[i].checked = false;
		} else if (type_input == 'file') {
		} else if (type_input == 'submit') {
		} else if (type_input == 'button') {
		} else {
				a[i].value = '';
		}
	}
}
/** Inserts text in textarea (replaces selection or insert to the end of text)
* @param object oTextArea textarea object
* @param string sText     text to insert
* @return bool true
*/
function insertToTextArea(oTextArea, sText) {
    //for IE
    if (document.selection) {
            oTextArea.focus();
            oSel = document.selection.createRange();
            oSel.text = sText;
    }
    //for MOZILLA/NETSCAPE
    else if (oTextArea.selectionStart || oTextArea.selectionStart == "0") {
            var startPos  = oTextArea.selectionStart;
            var endPos    = oTextArea.selectionEnd;
            var str       = oTextArea.value;

            oTextArea.value = str.substring(0, startPos) + sText + str.substring(endPos, str.length);
    } else {
            oTextArea.value += sText;
    }

    return true;
}
/**
* Validate date
*/
function checkDate(fld)
{
    var mo, day, yr;
    var entry = fld.value;
    var re = /\b\d{1,2}[\/]\d{1,2}[\/]\d{4}\b/;
    if (re.test(entry)) {
        var delimChar = (entry.indexOf("/") != -1) ? "/" : "-";
        var delim1 = entry.indexOf(delimChar);
        var delim2 = entry.lastIndexOf(delimChar);
        mo = parseInt(entry.substring(0, delim1), 10);
        day = parseInt(entry.substring(delim1+1, delim2), 10);
        yr = parseInt(entry.substring(delim2+1), 10);
        var testDate = new Date(yr, mo-1, day);
        if (testDate.getDate( ) == day) {
            if (testDate.getMonth( ) + 1 == mo) {
                if (testDate.getFullYear( ) == yr) {
                    return true;
                } else {
                    alert("There is a problem with the year entry.");
                }
            } else {
                alert("There is a problem with the month entry.");
            }
        } else {
            alert("There is a problem with the date entry.");
        }
    } else {
        alert("Incorrect date format. Enter as mm/dd/yyyy.");
    }
    return false;
}

function show_livechat(Obj)
{
    if($(Obj).next().css("display") == "none"){
        $(Obj).next().show();
        $("#livechat_sub").show();
        $("#livechat_add").hide();
    }else{
        $(Obj).next().hide();
        $("#livechat_sub").hide();
        $("#livechat_add").show();
    }
}
//
function setCookie(c_name,value,exdays)
{
       var exdate=new Date();
       exdate.setDate(exdate.getDate() + exdays);
       var c_value=escape(value)+"; path=/; " + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
       document.cookie=c_name + "=" + c_value;
}
//
function getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name)
		{
			return unescape(y);
		}
	}
}

// validator
var submitclicks = 0;
/** Format text message for output
* @param string sKey - key of message
* @param string aParam - params to substitute
* @return  string formatted message.
*/
function validator_formatMes(sKey, aParam){
    if (! aValidatorMes)
            alert('No validation messages!');
    var sStr = aValidatorMes[sKey];

    var m;
    for(m=0; m<aParam.length; ++m)
        sStr = sStr.replace('%s'+m, aParam[m]);
    return sStr;
}
/** Gets field value, depending on field type
* @param object oField field
* @return string value of field
* @todo add support for dates
*/
function validator_getValue(oField){
    var sVal = '';
    if (oField[0])
    {
        for(var i=0; i<oField.length; ++i)
           if(oField[i].checked || oField[i].selected)
              sVal = oField[i].value;
    }
    else if (oField.type.toLowerCase() != 'checkbox' || oField.checked)
        sVal = oField.value;

    return sVal;
}
/** Checks is form valid
* @param object oForm  - form to validate
* @param array aShema  - array of validation shemas (hash) related to certan field
* @param array aRules  - array of validation rules bentween 2 fields
* @param string sDiv  - name of html DIV element for errors output
* @return  boolean  true if all is ok or false + alert wiht error messages if form contains errors.
*/
function validator_isValid(oForm, aShema, aRules, sDiv)
{
    // errors
    var aErr  = [];
    var oFld  = null; // first field with error
    var aErrFields = {};
    var i;
    // for each fields
    for( i=0; i< aShema.length; ++i ){
        var oShema = aShema[i];
        var sVal = validator_getValue(oForm.elements[oShema.field]);
        //optional param
        if( typeof(oShema.optional) != 'undefined' && !sVal.length)
            continue;
        var sMes = ( typeof(oShema.message) != 'undefined' ? oShema.message : '');

        var aTmpErr = [];
        // validation
        if (typeof(oShema.minlen) != 'undefined' &&  oShema.minlen > sVal.length)
            aTmpErr[aTmpErr.length] = validator_formatMes('minlen', [oShema.title, oShema.minlen]);
        if (typeof(oShema.maxlen) != 'undefined' &&  oShema.maxlen < sVal.length)
            aTmpErr[aTmpErr.length] = validator_formatMes('maxlen', [oShema.title, oShema.maxlen]);
        if (typeof(oShema.pattern) != 'undefined' && sVal.search(oShema.pattern) == -1 )
            aTmpErr[aTmpErr.length] = validator_formatMes('pattern', [oShema.title]);
        if (typeof(oShema.min) != 'undefined' &&  oShema.min > sVal)
            aTmpErr[aTmpErr.length] = validator_formatMes('min', [oShema.title, oShema.min]);
        if (typeof(oShema.max) != 'undefined' &&  oShema.max < sVal)
            aTmpErr[aTmpErr.length] = validator_formatMes('max', [oShema.title, oShema.max]);
        if (typeof(oShema.mineq) != 'undefined' &&  oShema.mineq >= sVal)
            aTmpErr[aTmpErr.length] = validator_formatMes('mineq', [oShema.title, oShema.mineq]);
        if (typeof(oShema.maxeq) != 'undefined' &&  oShema.maxeq < sVal)
            aTmpErr[aTmpErr.length] = validator_formatMes('maxeq', [oShema.title, oShema.maxeq]);

        // store error messages for field
        if (sMes && aTmpErr.length) // if given custom error message store only it
            aErr[aErr.length] = sMes;
        else // store all errors
            aErr = aErr.concat(aTmpErr);

        if (aTmpErr.length)
        {
                aErrFields[oShema.field] = oShema.field;
        }
        //setErrorStatus(oForm.elements[oShema.field], aTmpErr.length);

        // if first error, try to set focus
        if (aErr.length && oFld == null)
            oFld = oForm.elements[oShema.field];
    } // end loop by single elements

        // for each rules
    if ( 'undefined' != typeof(aRules) ){
        for( i=0; i < aRules.length; ++i ) { // for each rules  0 - first op, 1 - second op, 2 - operation, 3 - Error message text
            var v1 = validator_getValue(oForm.elements[aRules[i][0]]);
            var v2 = validator_getValue(oForm.elements[aRules[i][1]]);
            var bIsError = false;
            switch( aRules[i][2] ){
                case '==' :
                        if ( v1 != v2 ) {
                            aErr[aErr.length] = aRules[i][3];
                            bIsError = true;
                        }
                break;
                case '<=' :
                        if ( (v1!='') &&  (v2!='') && (parseFloat(v1) > parseFloat(v2)) ) {
                            aErr[aErr.length] = aRules[i][3];
                            bIsError = true;
                        }
                break;
                case '>=' :
                        if  ( (v1!='') && (v2=='') && (parseFloat(v1) < parseFloat(v2)) ) {
                            aErr[aErr.length] = aRules[i][3];
                            bIsError = true;
                        }
                break;
                case '!=' :
                        if ( v1 == v2 ) {
                            aErr[aErr.length] = aRules[i][3];
                            bIsError = true;
                        }
                case 'req' :
                        if ( v1 && !v2 ) {
                            aErr[aErr.length] = aRules[i][3];
                            bIsError = true;

                        }
                break;
            }//switch
            if (aErr.length && oFld == null) // if first error
                oFld = oForm.elements[aRules[i][0]];

            if (bIsError) {
                    aErrFields[aRules[i][0]] = aRules[i][0];
                    aErrFields[aRules[i][1]] = aRules[i][1];
            }

        }// end loop by rules
    }//end rules


    //process erorr statuses for fields
    aFields = oForm.elements;
    for(i=0; i<aFields.length; i++) {
        if (aFields[i].type!='hidden') {
                validator_setErrorStatus(aFields[i], aErrFields[aFields[i].name]);
        }
    }
    // make output
    if ( aErr.length ) {
        var sOut = '<table border="0" cellpadding="0" cellspacing="0" width="90%" align="left"><tr><td class="error_message" id="sysErrTable">';
        var oDiv = document.getElementById(sDiv);
        if (oDiv){
           for(i=0; i<aErr.length; ++i)
                    sOut += '<p>'+aErr[i]+'</p>';
           oDiv.innerHTML = sOut;
        } else
            alert(aErr.join("\n"));

	   if (oFld[0] && oFld[0].type == 'radio')
            oFld[0].focus();
        else if (oFld && oFld.type != 'hidden')
            oFld.focus();
     sOut += '</td></tr></table><br />';

            return false;
    }

    if (submitclicks == 0) {
  		submitclicks++;
  		return true;
  	} else {
			alert('We have received and are processing your submission. Please wait.');
    	return false;
    }

    return true;
}
/** Set/removes error status for field (through class).
* @param object oFld     field object
* @param object bIsError true - set error, false - remove error status
*/
function validator_setErrorStatus(oFld, bIsError)
{
	var sClass = oFld.className;
	var iLength = sClass.length;
	if (bIsError){ //set error
		if ('_error' != sClass.substr(iLength-6, 6))
			oFld.className = sClass+'_error';
	}
	else { //remove error
		if ('_error'==sClass.substr(iLength-6, 6))
			oFld.className = sClass.substr(0, iLength-6);
	}
}
//
function roundSimple(rnum)
{
	rlength = 2;
	temp=Math.round(rnum*Math.pow(10,rlength))/Math.pow(10,rlength);
	return temp;
}
function roundNumber(rnum)
{
	rlength = 2;
	temp=Math.round(rnum*Math.pow(10,rlength))/Math.pow(10,rlength);
	temp=temp.toString();
	if (temp.indexOf('.')==-1)
		temp+='.00';
	else if (temp.length-temp.indexOf('.')<3)
		temp+='0';
	return temp;
}