//Copyright (c) 2012 NS BASIC Corporation. All rights reserved.
//Helper functions
var True=true; TRUE=true;
var False=false; FALSE=false;
var _jsString=String; //allow javascript string object to be in vbScript code
var _JSSTRING=_jsString; _jsSTRING=_jsString; _jsstring=_jsString;
var savethefunction_rvar=null;

//vbScript GetRef function: GetRef(sub name)
function getRef(str) {
    if (typeof(str)=='string') {
        return eval(str);
    } else {
        return str;
    }
} var GetRef=getRef; var getref=getRef; var GETREF=getRef;
         
//MsgBox function to handle proper return variables since JavaScript returns true or false from CONFIRM box
function _msgbox_confirm(prompt, buttons, title, helpfile, context) {
    if (prompt == false || prompt == 0) {
        //do nothing and use the 'false' or '0' value
    } else {
        if (!prompt || prompt==null || typeof(prompt)=='undefined') { prompt = ''; }
    }
    if (!buttons || buttons==null || typeof(buttons)=='undefined' || buttons=='') { buttons = 0; }
    if (buttons == parseInt(buttons) && buttons == parseFloat(buttons)) { buttons = buttons & 0x000F; }
    
    var res = 1;
    switch (buttons) {
        case 1: //vbOKCancel - OK (1) and Cancel (2)
            res = confirm(prompt);
            if (res == true) { return 1; } else { return 2; }
            break;
        case 2: //vbAbortRetryIgnore - Abort (3), Retry (4), and Ignore (5)
            res = confirm(prompt);
            if (res == true) { return 4; } else { return 5; }
            break;
        case 3: //vbYesNoCancel - Yes (6), No (7), and Cancel (2)
            res = confirm(prompt);
            if (res == true) { return 6; } else { return 7; }
            break;
        case 4: //vbYesNo - Yes (6) and No (7)
            res = confirm(prompt);
            if (res == true) { return 6; } else { return 7; }
            break;
        case 5: //vbRetryCancel - Retry (4) and Cancel (2)
            res = confirm(prompt);
            if (res == true) { return 4; } else { return 2; }
            break;
        default: //0 = vbOKOnly - OK (1)
            alert(prompt);
            return 1;
            break;
    }
}

//vbScript mid syntax: mid(string1, start[,end])
// string1: string to cust from; start: start of cut; end: end of cut (if no end, then to end of string1)
function Mid(strMid, intBeg, intEnd) {
    //setup variables in case there is no intEnd (optional value in vbScript)
    if (strMid==null || strMid=="" || intBeg < 0) { return ''; }
    intBeg -= 1; //reset vbScript 1 base
    if (intEnd==null || intEnd=="") {
        return strMid.substr(intBeg);
    } else {
        return strMid.substr(intBeg,intEnd);
    }
} var mid=Mid; var MID=Mid; var midb=Mid; var MidB=mid; var Midb=Mid; var MIDB=Mid; var midB=Mid;

//vbScript Right function: Right(str,len)
function Right(str, n) {
    var s=str + '';
    var iLen = s.length;
    if (n <= 0) {
        return "";
    } else if (n >= iLen) {
        return s;
    } else {
        return s.substr(iLen-n, n);
    }
} var right=Right; var rightb=Right; var Rightb=Right; var RightB=Right; var rightB=Right; var RIGHT=Right; //so all cases work for the function name

//vbScript Left function: Left(str,len)
function Left(str, n) {
    var s=str + '';
    var iLen = s.length;
    if (n <= 0) {
        return "";
    } else if (n >= iLen) {
        return str;
    } else {
        return s.substr(0,n);
    }
} var left=Left; var leftb=Left; var Leftb=Left; var LeftB=Left; var leftB=Left; var LEFT=Left;

//vbScript RTrim function: RTrim(str)
function RTrim(str) {
    var whitespace = " \t\n\r";
    var s = str;
    if (whitespace.indexOf(s.charAt(s.length-1)) != -1) {
        var i = s.length - 1;       // Get length of string
        while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1) { i--; }
        s = s.substring(0, i+1);
    }
    return s;
} var rtrim=RTrim; var rTrim=RTrim; var Rtrim=RTrim; var RTRIM=RTrim; //so both cases work for the function name

//vbScript LTrim function: LTrim(str)
function LTrim(str) {
    var whitespace = " \t\n\r";
    var s = str;
    if (whitespace.indexOf(s.charAt(0)) != -1) {
        var j=0, i = s.length;
        while (j < i && whitespace.indexOf(s.charAt(j)) != -1) { j++; }
        s = s.substring(j, i);
    }
    return s;
} var ltrim=LTrim; var lTrim=LTrim; var Ltrim=LTrim; var LTRIM=LTrim;

//vbScript Trim
function Trim(str) {
    return LTrim(RTrim(str));
} var trim=Trim; var TRIM=Trim;

//vbScrtip Sgn
function Sgn(val) {
    /*  >0 - Sgn returns 1
        =0 - Sgn returns 0
        <0 - Sgn returns -1
    */
    if (typeof(val)=='string') { val=parseFloat(val); }
    if (val == 0) { return 0; }
    if (val < 0) { return -1; }
    return 1;
} var sgn=Sgn; var SGN=Sgn;

//vbScript Len function: Len(str)
function Len(str) {
    if (typeof(str)=='object') { return str.length; }
    str=str + '';
    return str.length;
} var len=Len; var LEN=Len; var lenb=Len; var Lenb=Len; var LenB=Len; var LENB=Len; var lenB=Len;

//vbScript Replace function: Replace(string,find,replacewith[,start[,count[,compare]]]) 
function Replace(str, fnd, rpl, st, cnt, cmp) {
    if (st==null || st=="" || st < 0) { st=1; }
    st -= 1;
    if (cnt==null || cnt=="" || cnt < 0) { cnt=0; }
    if (st >= 0) { str=str.substr(st,str.length); }
    fnd=fnd.replace(/([\$\^\[\(\)\*\+\?\.\\])/g,'\\$1');
    if (cnt > 0) {
        var regex=new RegExp(fnd);
        for (var i=0; i<cnt; i++) {
            str =str.replace(regex,rpl);
        }
    } else {
        var regex=new RegExp(fnd,'g');
        str = str.replace(regex,rpl);
    }
    return str;
} var replace=Replace; var REPLACE=Replace;

function Replace2(str, fnd, rpl, st, cnt, cmp) {
    var regex=new RegExp(fnd,'g');
    return str.replace(regex,rpl);
    //return str.replace(fnd, rpl);
} replace=Replace; REPLACE=Replace;

//vbScript StrReverse function: StrReverse(str)
function StrReverse(s) {
    var sArray = s.split("");
    var rArray=sArray.reverse();
    return rArray.join("");
} var strreverse=StrReverse; var strReverse=StrReverse; var STRREVERSE=StrReverse;

//vbScript WeekdayName function: WeekdayName(dow[,true/false[,offset]])
function WeekdayName_del(dow,tf,st) {
    var weekday=new Array(nsbx.messages["Sunday"],nsbx.messages["Monday"],nsbx.messages["Tuesday"],nsbx.messages["Wednesday"],nsbx.messages["Thursday"],nsbx.messages["Friday"],nsbx.messages["Saturday"]);
    var dd="";
    if (dow>=1 && dow<=7) {
        dow--;
        if (st>=1 && st<=7) {
            st--;
        } else {
            st=0;
        }
        if (dow+st>6) {
            dow=(dow+st)-7;
            st=0;
        }
        dd=weekday[dow+st];
        if (tf==true) {
            dd=dd.substring(0,3);
        }
    }
    return dd;
} //weekdayname=WeekdayName;WeekDayName=WeekdayName;weekDayName=WeekdayName;WEEKDAYNAME=WeekdayName;

//vbScript Year function: Year(date)
function Year(dt) {
    var regex=new RegExp('-','g');
    dt=dt.replace(regex,'/');
    var dat=new Date(dt);
    return dat.getFullYear();
} var year=Year; var YEAR=Year;

function Sort(arrayToSort, sortType, sortFunc) {
    //arguments: array to sort, sort type (a=ascending, d=descending), sort function (for custom functions--parameter for sort function is arrayToSort)
    //syntax:   sort(arrayToSort)               <-- sortType defaulted to ascending
    //          sort(arrayToSort,'')            <-- sortType defaulted to ascending
    //          sort(arrayToSort,'d')           <-- descending sort
    //          sort(arrayToSort,'a')           <-- ascending sort
    //          sort(arrayToSort,'d',sortFunc)  <-- function sortFunc called with argument arrayToSort; function will return sorted array; sortType ignored
    //          sort(arrayToSort,sortFunc)      <-- function sortFunc called with argument arrayToSort; function will return sorted array
    if (!sortType || sortType==null || typeof(sortType)=='undefined') {sortType='';}
    if (!sortFunc || sortFunc==null || typeof(sortFunc)=='undefined' || typeof(sortFunc)!='function') {sortFunc='';}
    if (typeof(sortType)=='function' && sortFunc=='') {
        sortFunc = sortType;
        sortType = 'a';
    } else {
        if (sortType != 'd') {sortType='a';}
    }
    this._sortType=sortType;
    var arr = arrayToSort.slice();
    var ret = [];
    if (sortFunc=='' || typeof(sortFunc)!='function') {
        arr.sort();
        arr.sort(_sort1);
        ret=arr.slice();
    } else {
        //ret = sortFunc(arr).slice();
        ret=arr.sort(sortFunc);
    }
    return ret;

    function _sort1(a,b) {
        if ( _isNumber(a) && _isNumber(b) ) {
            if (this._sortType=='d') {
            y=a*1; x=b*1;
            } else {
            x=a*1; y=b*1;
            }
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        } else if ( _isNumber(a) && !_isNumber(b) ) {
            x=a*1; y=b;
            return (this._sortType=='d' ? 1 : -1);
        } else if ( !_isNumber(a) && _isNumber(b) ) {
            x=a; y=b*1;
            return (this._sortType=='d' ? -1 : 1);
        } else {
            if (this._sortType=='d') {
                y=a.toLowerCase(); x=b.toLowerCase();
            } else {
                x=a.toLowerCase(); y=b.toLowerCase();
            }
            return ((x > y) ? 1 : (x===y?0:-1) );
        }
    }
    function _isNumber(n) { return !isNaN(parseFloat(n)) && isFinite(n); }
}

//vbScript IsNumeric function: IsNumeric(var)
function IsNumeric(sText) {
   return !isNaN(sText);
} var isnumeric=IsNumeric; var isNumeric=IsNumeric; var ISNUMERIC=IsNumeric;

//vbscribt Asc function: Asc(char)
function Asc(c) {
    c = c . charAt (0);
    var i;
    for (i = 0; i < 256; ++ i) {
        var h = i . toString (16);
        if (h . length == 1)
            h = "0" + h;
        h = "%" + h;
        h = unescape (h);
        if (h == c)
            break;
    }
    return i;
} var asc=Asc; var ASC=Asc; var ASCB=Asc; var ASCW=Asc; var ascB=Asc; var ascW=Asc; var ascw=Asc; var ascb=Asc;

//vbScript CByte/CLng/CInt function: CByte(n)
function CByte(n) {
    var i=n*1;
    i=Math.round(i);
    //odd numbers round up if .5, even numbers don't
    if (i%2 != 0) {
        var j=Math.abs(n-i);
        if (j==.5) {i-=1;}
    }
    return i;
} var cbyte=CByte; var CBYTE=CByte; var CInt=CByte; var CINT=CByte; var CLng=CByte; var CLNG=CByte; var clng=CByte; var cint=CByte; var CINT=CByte;

//vbScript ROUND
function ROUND(n,d) {
    if (!d || d==null || d=="") {d=0;}
    d=Math.floor(d);
    d=d<1?0:d;
    d=Math.pow(10,d);
    var result=Math.round(n*d) / d;
    return result;
} var Round=ROUND; var round=ROUND;

//vbScript CCur function: CCur(n) round to 4 decimal places
function CCur(num) {
    var dec=4;
    var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
    return result;
} var ccur=CCur; var CCUR=CCur; var cCur=CCur;

//vbScript CSng function: CSng(n) round to 7 decimal places
function CSng(num) {
    var dec=7;
    var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
    return result;
} var csng=CSng; var CSNG=CSng;

//vbScript imp functionality
function impFunc(a,b) {
    var val1=a?1:0;
    var val2=b?1:0;
    if (val1==1 && val2==1) return true;
    if (val1==1 && val2==0) return false;
    if (val1==0 && val2==1) return true;
    if (val1==0 && val2==0) return true;
    if (a==null && val2==1) return true;
    return null;
} var IMPFUNC=impFunc; var ImpFunc=impFunc;

//vbScript exp functionality
function eqvFunc(a,b) {
    if (a==true && b==true || a==false && b==false) {
        return true;
    } else {
        return false;
    }
} var EQVFUNC=eqvFunc; var EqvFunc=eqvFunc;

//convertDate helper function
function convertDate(dt,convertMonth) {
    if(typeof(dt)=='object') {return dt;}
    if (dt==null || dt=='') {return null;}
    //new Date format
    dt=dt.toString();
    if (dt.match(/\s*\w{3}\s+\w{3}\s+\d{2}\s+\d{4}\s+\d{2}:\d{2}:\d{2}\s+\w{3}[\+\-]\d{4}/) ) {
        if (convertMonth != 1) {
            return dt.replace(/\s*\w{3}\s+(\w{3})\s+(\d{2})\s+(\d{4})\s+(\d{2}:\d{2}:\d{2}).*/, '$1 $2, $3 $4');
        } else {
            dt=dt.replace(/\s*\w{3}\s+(\w{3})\s+(\d{2})\s+(\d{4})\s+(\d{2}:\d{2}:\d{2}).*/, '$2 $1 $3 $4');
        }
    }
    
    if (dt.match(/\s*(\d{1,2})(\s+|\s*\-\s*)([a-z]{3})(\s+|\s*\-\s*)(\d{2})($|\s+)/i)) {
        dt=dt.replace(/\s*(\d{1,2})(\s+|\s*\-\s*)([a-z]{3})(\s+|\s*\-\s*)(\d{2})($|\s+)/i,'$1 $3 20$5$6');
    }
    if (dt.match(/\s*\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/)) {
        dt=dt.replace(/\s*(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/,'$2-$3-$1');
    }
    if (!dt.match(/\s*\d{1,2}(\s+|\s*\-\s*)[a-z]{3}(\s+|\s*\-\s*)(\d{2}|\d{4})\s*/i)) {
        if(!dt.match(/\s*[a-z]+\s+\d{1,2},?\s+(\d{2}|\d{4})\s*/i)) {
            dt=dt.replace(/\-/g,'/').replace(/\;/g,'/').replace(/\s+/g,'/').replace(/\./g,'/').replace(/,/g,'/').replace(/\/+/g,'/');
            if (!dt.match(/\d{1,2}\/\d{1,2}\/(\d{2}|\d{4})/)) {
                return null;
            }
        }
    }
    if (convertMonth==1) {
        var smon=[nsbx.messages['Jan'],nsbx.messages['Feb'],nsbx.messages['Mar'],nsbx.messages['Apr'],nsbx.messages['May'],nsbx.messages['Jun'],nsbx.messages['Jul'],nsbx.messages['Aug'],nsbx.messages['Sep'],nsbx.messages['Oct'],nsbx.messages['Nov'],nsbx.messages['Dec']];
        var dmon=dt.replace(/(\w+)(\s+)(\w+)(\s+)(\w+)(\s+)(\S+)/,'$3')
        var nmon=0;
        for (i=0; i<smon.length; i++) {
            if (dmon==smon[i]) {
                nmon=i+1;
                break;
            }
        }
        dt=nmon+dt.replace(/(\w+)(\s+)(\w+)(\s+)(\w+)(\s+)(\S+)/,'/$1/$5 $7');
    } else {
        var sdt=dt;
        dt=dt.replace(/(\d+)(\s+|\/)([a-zA-Z]{3,})(\s+|\/)(\d+)(\s+|\/)(\w+)(\s+|\/|\:)(\w+)(\s+|\/|\:)(\w+)(\s+|\/|)([apAP][mM])/,'$1 $3 $5 $7:$9:$11 $13');
        if (sdt==dt) {
            dt=dt.replace(/(\d+)(\s+|\/)([a-zA-Z]{3,})(\s+|\/)(\d+)(\s+|\/)(\w+)(\s+|\/|\:)(\w+)(\s+|\/|)([apAP][mM])/,'$1 $3 $5 $7:$9 $11');
        }
        if (sdt==dt) {
            dt=dt.replace(/(\d+)(\s+|\/)([a-zA-Z]{3,})(\s+|\/)(\d+)(\s+|\/)(\w+)(\s+|\/|\:)(\w+)(\s+|\/|\:)(\w+)/,'$1 $3 $5 $7:$9:$11');
        }
        if (sdt==dt) {
            dt=dt.replace(/(\d+)(\s+|\/)([a-zA-Z]{3,})(\s+|\/)(\d+)(\s+|\/)(\w+)(\s+|\/|\:)(\w+)/,'$1 $3 $5 $7:$9');
        }
        if (sdt==dt) {
            dt=dt.replace(/(\w+)(\s+|\/)(\w+)(\s+|\/)(\w+)(\s+|\/)(\w+)(\s+|\/|\:)(\w+)(\s+|\/|\:)(\w+)(\s+|\/|)([apAP][mM])/,'$1/$3/$5 $7:$9:$11 $13');
        }
        if (sdt==dt) {
            dt=dt.replace(/(\w+)(\s+|\/)(\w+)(\s+|\/)(\w+)(\s+|\/)(\w+)(\s+|\/|\:)(\w+)(\s+|\/|)([apAP][mM])/,'$1/$3/$5 $7:$9 $11');
        }
        if (sdt==dt) {
            dt=dt.replace(/(\w+)(\s+|\/)(\w+)(\s+|\/)(\w+)(\s+|\/)(\w+)(\s+|\/|\:)(\w+)(\s+|\/|\:)(\w+)/,'$1/$3/$5 $7:$9:$11');
        }
        if (sdt==dt) {
            dt=dt.replace(/(\w+)(\s+|\/)(\w+)(\s+|\/)(\w+)(\s+|\/)(\w+)(\s+|\/|\:)(\w+)/,'$1/$3/$5 $7:$9');
        }
    }
    return dt;
} var CONVERTDATE=convertDate; var ConvertDate=convertDate;

//vbScript IsDate function: IsDate(date string)
function IsDate(dt) {
    if (typeof(dt) != 'object' && isNumeric(dt)) { return false; }
    var cdt=convertDate(dt,0);
    return !isNaN(new Date(cdt));
} var isdate=IsDate; var isDate=IsDate; var ISDATE=IsDate;

//vbScript CDate
function CDate(dt) {
    if (typeof(dt)==undefined) {return 'undefined'};
    if (IsDate(dt)) {
        if (VARTYPE(dt.toString(),1) == 'date') {
            return FormatDateTime(dt,2); //date
        }
        if (dt.toString().indexOf(':') > -1) {
            return FormatDateTime(dt,3); //time
        } else {
            return FormatDateTime(dt,2); //date
        }
    } else {
        return null;
    }
} var cdate=CDate; var cDate=CDate; var Cdate=CDate; var CDATE=CDate;

function CvDate(dt) {
    if (IsDate(dt)) {
        return new Date(convertDate(dt,0));
    } else {
        return null;
    }
} var cvdate=CvDate; var cvDate=CvDate; var Cvdate=CvDate; var CVDATE=CvDate;

//vbScript dateadd function: DateAdd(interval,number,date)
function DateAdd(dint, numval, thedate) {
    if(!CvDate(thedate)){   return null;    }
    if(isNaN(numval)){  return null;    }   

    numval = new Number(numval);
    var dt = CvDate(thedate);
    
    switch(dint.toLowerCase()){
        case "yyyy": {
            dt.setFullYear(dt.getFullYear() + numval);
            break;
        }
        case "q": {
            var omon=dt.getMonth();
            dt.setMonth(dt.getMonth() + (numval*3));
            //fix problem with end of month date not correct for new month
            var nmon=dt.getMonth();
            var rmon=omon+(numval*3)<0?12+(omon+(numval*3)):omon+(numval*3);
            if (rmon != nmon) {
                dat=dt.getDate();
                dt.setDate(dt.getDate() - dat);
            }
            break;
        }
        case "m": {
            var omon=dt.getMonth();
            dt.setMonth(dt.getMonth() + numval);
            //fix problem with end of month date not correct for new month
//          nmon=dt.getMonth();
//          rmon=omon+numval<0?12+(omon+numval):omon+numval;
//          if (rmon != nmon) {
//              dat=dt.getDate();
//              dt.setDate(dt.getDate() - dat);
//          }
            break;
        }
        case "y":
        case "d":
        case "w": { 
            dt.setDate(dt.getDate() + numval);
            break;
        }
        case "ww": {
            dt.setDate(dt.getDate() + (numval*7));
            break;
        }
        case "h": {
            dt.setHours(dt.getHours() + numval);
            break;
        }
        case "n": {
            dt.setMinutes(dt.getMinutes() + numval);
            break;
        }
        case "s": {
            dt.setSeconds(dt.getSeconds() + numval);
            break;
        }
        case "ms": {
            dt.setMilliseconds(dt.getMilliseconds() + numval);
            break;
        }
        default: {
            return null;
            break;
        }
    }
    var fdt = FormatDateTime(dt,2) + " " + FormatDateTime(dt,3);
    return fdt;
} var dateadd=DateAdd; var dateAdd=DateAdd; var DATEADD=DateAdd;

//vbScript datepart function: DatePart(interval,date[,firstdayofweek[,firstweekofyear]])
function DatePart(dint, thedate, fdow) {
    var d;
    //if(fdow==null) fdow=1;
    d=CvDate(thedate);
    if(!d){ return null;    }
    var dtPart = d;
    var leapYearAdj=0;
    if (_testLeapYear(dtPart.getFullYear())) {
        //test if leap year and past 2/28
        if ( dtPart.getMonth()>1 || (dtPart.getMonth()==1 && dtPart.getDate()>28) ) { leapYearAdj=1; } //adjust for leap year
    }
    
    if (!dint || dint==null) return null;
    switch(dint.toLowerCase()){
        case "yyyy": return dtPart.getFullYear();
        case "q": return Math.floor(dtPart.getMonth() / 3) + 1;
        case "m": return dtPart.getMonth() + 1;
        case "y": return DateDiff("y", "1/1/" + dtPart.getFullYear(), dtPart) + 1 + leapYearAdj;    // day of year
        case "d": return dtPart.getDate();
        case "w": return Weekday((dtPart.getMonth()+1)+'/'+(dtPart.getDay()+1)+'/'+dtPart.getFullYear(), fdow);     // weekday
        case "ww":return DateDiff("ww", "1/1/" + dtPart.getFullYear(), dtPart, fdow) + 1;   // week of year
        case "h": return dtPart.getHours();
        case "n": return dtPart.getMinutes();
        case "s": return dtPart.getSeconds();
        case "ms":return dtPart.getMilliseconds();  // <-- JS extension, NOT in vbScript
        default : return null;
    }
} var datepart=DatePart; var datePart=DatePart; var DATEPART=DatePart;

function _testLeapYear(yr) {
    //test if leap year
    if ((parseInt(yr)%4) == 0) {
        if (parseInt(yr)%100 == 0) {
            if (parseInt(yr)%400 != 0) {
                return false;
            }
            if (parseInt(yr)%400 == 0) {
                return true;
            }
        }
        if (parseInt(yr)%100 != 0) {
            return true;
        }
    }
    if ((parseInt(yr)%4) != 0) {
        return false;
    }
}

// adjusts weekday for week starting on fdow
function Weekday(wd, fdow) {
    var vbSunday=1;
    fdow = (isNaN(fdow) || fdow==0) ? vbSunday : Math.floor(fdow);  // set default & cast
    if (!isObject(wd)) {
        wd=new Date(wd.replace(/-/g,'/')); //javascript Date object does not work with yyyy-mm-dd format
    }
    var iDay=wd.getDay()+1;
    return ((iDay - fdow +7) % 7) + 1;
} var weekday=Weekday; var weekDay=Weekday; var WEEKDAY=Weekday;//vbScript DateDiff function: DateDiff(interval,date1,date2[,firstdayofweek[,firstweekofyear]])

function DateDiff(dint, thedate1, thedate2, fdow) {
    var vbUseSystemDayOfWeek=0; var vbSunday=1; var vbMonday=2; var vbTuesday=3; var vbWednesday=4; var vbThursday=5; var vbFriday=6; var vbSaturday=7;
    if(!CvDate(thedate1)){  return null;    }
    if(!CvDate(thedate2)){  return null;    }
    fdow = (isNaN(fdow) || fdow==0) ? vbSunday : Math.floor(fdow);  // set default & cast

    var dt1 = CvDate(thedate1);
    var dt2 = CvDate(thedate2);

    // correct DST-affected intervals ("d" & bigger)
    //if("h,n,s,ms".indexOf(dint.toLowerCase())==-1){
        //if(thedate1.toString().indexOf(":") ==-1){ dt1.setUTCHours(0,0,0,0) };    // no time, assume 12am
        //if(thedate2.toString().indexOf(":") ==-1){ dt2.setUTCHours(0,0,0,0) };    // no time, assume 12am
    //}

    // get ms between UTC dates and make into "difference" date
    var iDiffMS = dt2.valueOf() - dt1.valueOf();
    var dtDiff = new Date(iDiffMS);

    // calc various diffs
    var nYears  = dt2.getYear() - dt1.getYear();
    var nMonths = dt2.getMonth() - dt1.getMonth() + (nYears!=0 ? nYears*12 : 0);
    var nQuarters = Math.floor(nMonths / 3);    //<<-- different than vbScript, which watches rollover not completion
    
    var nMilliseconds = iDiffMS;
    var nSeconds = Math.floor(iDiffMS / 1000);
    var nMinutes = Math.floor(nSeconds / 60);
    var nHours = Math.floor(nMinutes / 60);
    var nDays  = Math.floor(nHours / 24);
    var nWeeks = Math.floor(nDays / 7);

    if(dint.toLowerCase()=='ww'){
            // set dates to 1st & last FirstDayOfWeek
            var offset = DatePart("w", dt1, fdow)-1;
            if(offset){ dt1.setDate(dt1.getDate() +7 -offset);  }
            var offset = DatePart("w", dt2, fdow)-1;
            if(offset){ dt2.setDate(dt2.getDate() -offset); }
            // recurse to "w" with adjusted dates
            var nCalWeeks1 = DateDiff("w", dt1, dt2) + 1;
            var nCalWeeks2 = (nDays / 7 == Math.floor(nDays / 7) ) ? nWeeks : nWeeks+1;
            var nCalWeeks = round(nDays / 7);
            //document.write("<br>days: "+nCalWeeks1+', '+nCalWeeks2+', ' + nDays / 7 + ', '+iDiffMS/(1000*60*60*24*7)+', '+nWeeks+'<br>');
    }
    
    // return difference
    switch(dint.toLowerCase()){
        case "yyyy": return nYears;
        case "q": return nQuarters;
        case "m":   return nMonths;
        case "y":           // day of year
        case "d": return nDays;
        case "w": return nWeeks;
        case "ww":return nCalWeeks; // week of year 
        case "h": return nHours;
        case "n": return nMinutes;
        case "s": return nSeconds;
        case "ms":return nMilliseconds; // not in vbScript
        default : return null;
    }
} var datediff=DateDiff; var dateDiff=DateDiff; var DATEDIFF=DateDiff;

//vbScript Minute
function Minute(tm) {
    return DatePart("n",tm);
} var minute=Minute; var MINUTE=Minute;

//vbScript Second
function Second(tm) {
    return DatePart("s",tm);
} var second=Second; var SECOND=Second;

//vbScript CStr function: Cstr(value)
function CStr(val) {
   if (typeof(val)==undefined) {return 'undefined'};
    if (isNumeric(val)) {
        return val.toString();
    }
    if (val==true) {
        return 'True';
    } else if (val==false) {
        return 'False';
    }
    return val=val.toString();
} var cstr=CStr; var cStr=CStr; var Cstr=CStr; var CSTR=CStr;

//vbScript FormatDateTime function: FormatDateTime(date,format)
// thanks to Rob Eberhardt of Slingshot Solutions for free use of partial versions of the vbScript native Date functions 
// many of these Date functions have been modified from the original author's design
function FormatDateTime(thedate, df) {
    var vbGeneralDate=0; var vbLongDate=1; var vbShortDate=2; var vbLongTime=3; var vbShortTime=4;
    var vbYYYYMMDD=5; var vbDDdotMMdotYY=6; var vbDDdotMMdotYYYY=7;
    var vbYYslashMMslashDD=8; var vbDDslashMMslashYY=9; var vbYYYYhyphenMMhyphenDD=10;
    var datstr=thedate.toString();
    if(datstr.toUpperCase().substring(0,3) == "NOW") {
        thedate = new Date();
    };
    if(!CvDate(thedate)){ return null; }
    var dt = CvDate(thedate);
    
    //add custom date formats
    if (!df || df==null || df=='undefined') {
        //skip custom date formats
    } else {
        var newdf = df.toString().replace(/\s*/g,'').toUpperCase();
        if (newdf=="DD.MM.YY") { return _Format(thedate, 'DD.MM.YY'); }
        if (newdf=="DD.MM.YYYY") { return _Format(thedate, 'DD.MM.YYYY'); }
        if (newdf=="DD/MM/YY") { return _Format(thedate, 'DD/MM/YY'); }
        if (newdf=="DD/MM/YYYY") { return _Format(thedate, 'DD/MM/YYYY'); }
        if (newdf=="DD-MM-YY") { return _Format(thedate, 'DD-MM-YY'); }
        if (newdf=="DD-MM-YYYY") { return _Format(thedate, 'DD-MM-YYYY'); }
        if (newdf=="DDMMYY") { return _Format(thedate, 'DDMMYY'); }
        if (newdf=="DDMMYYYY") { return _Format(thedate, 'DDMMYYYY'); }

        if (newdf=="YY.MM.DD") { return _Format(thedate, 'YY.MM.DD'); }
        if (newdf=="YYYY.MM.DD") { return _Format(thedate, 'YYYY.MM.DD'); }
        if (newdf=="YY/MM/DD") { return _Format(thedate, 'YY/MM/DD'); }
        if (newdf=="YYYY/MM/DD") { return _Format(thedate, 'YYYY/MM/DD'); }
        if (newdf=="YY-MM-DD") { return _Format(thedate, 'YY-MM-DD'); }
        if (newdf=="YYYY-MM-DD") { return _Format(thedate, 'YYYY-MM-DD'); }
        if (newdf=="YYMMDD") { return _Format(thedate, 'YYMMDD'); }
        if (newdf=="YYYYMMDD") { return _Format(thedate, 'YYYYMMDD'); }

        if (newdf=="MM.DD.YY") { return _Format(thedate, 'MM.DD.YY'); }
        if (newdf=="MM.DD.YYYY") { return _Format(thedate, 'MM.DD.YYYY'); }
        if (newdf=="MM/DD/YY") { return _Format(thedate, 'MM/DD/YY'); }
        if (newdf=="MM/DD/YYYY") { return _Format(thedate, 'MM/DD/YYYY'); }
        if (newdf=="MM-DD-YY") { return _Format(thedate, 'MM-DD-YY'); }
        if (newdf=="MM-DD-YYYY") { return _Format(thedate, 'MM-DD-YYYY'); }
        if (newdf=="MMDDYY") { return _Format(thedate, 'MMDDYY'); }
        if (newdf=="MMDDYYYY") { return _Format(thedate, 'MMDDYYYY'); }
    }

    if(isNaN(df)){ df = vbGeneralDate };

    switch(Math.floor(df)){
        case vbGeneralDate:     return dateadd("s",0,dt); //0
        case vbLongDate:        return _Format(thedate, 'DDDD, MMMM D, YYYY'); //1
        case vbShortDate:       return _Format(thedate, 'M/DD/YYYY'); //2
        case vbLongTime:        return _Format(thedate, 't t t t t'); //3
        case vbShortTime:       return _Format(thedate, 'HH:MM'); //4
        case vbYYYYMMDD:        return _Format(thedate, 'YYYYMMDD'); //5
        case vbDDdotMMdotYY:    return _Format(thedate, 'DD.MM.YY'); //6
        case vbDDdotMMdotYYYY:  return _Format(thedate, 'DD.MM.YYYY'); //7
        case vbYYslashMMslashDD:    return _Format(thedate, 'YY/MM/DD'); //8
        case vbDDslashMMslashYY:    return _Format(thedate, 'DD/MM/YY'); //9
        case vbYYYYhyphenMMhyphenDD:    return _Format(thedate, 'YYYY-MM-DD'); //10
        default:    return null;
    }
} var formatDateTime=FormatDateTime; var formatdateTime=FormatDateTime; var formatdatetime=FormatDateTime; var FORMATDATETIME=FormatDateTime;

function _Format(thedate, dfmt, fdow, fdoy) {
    var pmtest=0;
    thedate=thedate.toString();
    if (thedate.match(/\d{1,2}\s*:\s*\d{2}/)) {
        if(thedate.match(/^\s*\d{1,2}\s*:\s*\d{2}/)) { thedate='1/1/2001 '+thedate; }
        if (thedate.match(/\d{1,2}\s*pm/i)) { pmtest=1; }
    }
    if(!CvDate(thedate)){   return null;    }
    if(!dfmt || dfmt==''){  return dt.toString()    };

    var dt = CvDate(thedate);
    // Zero-padding formatter
    this._NSB_pad = function(p_str){
        if(p_str.toString().length==1){p_str = '0' + p_str}
        return p_str;
    }

    var ampm = dt.getHours()>=12 ? 'PM' : 'AM'
    var hr = dt.getHours();
    if (pmtest==1 && hr < 12) { hr +=12; }
    if (hr == 0){hr = 12};
    if (hr > 12) {hr -= 12};
    if (hr<10) { hr = '0'+Math.floor(hr).toString(); }
    var strShortTime = hr +':'+ this._NSB_pad(dt.getMinutes()) +':'+ this._NSB_pad(dt.getSeconds()) +' '+ ampm;
    var strShortDate = (dt.getMonth()+1) +'/'+ dt.getDate() +'/'+ (new _jsString( dt.getFullYear() ) + '').substring(2,4);
    var strLongDate = MonthName(dt.getMonth()+1) +' '+ dt.getDate() +', '+ dt.getFullYear();

    var retVal = dfmt;

    // switch tokens whose alpha replacements could be accidentally captured
    retVal = retVal.replace( new RegExp('C', 'gi'), 'CCCC' ); 
    retVal = retVal.replace( new RegExp('mmmm', 'gi'), 'XXXX' );
    retVal = retVal.replace( new RegExp('mmm', 'gi'), 'XXX' );
    retVal = retVal.replace( new RegExp('dddddd', 'gi'), 'AAAAAA' ); 
    retVal = retVal.replace( new RegExp('ddddd', 'gi'), 'AAAAA' ); 
    retVal = retVal.replace( new RegExp('dddd', 'gi'), 'AAAA' );
    retVal = retVal.replace( new RegExp('ddd', 'gi'), 'AAA' );
    retVal = retVal.replace( new RegExp('timezone', 'gi'), 'ZZZZ' );
    retVal = retVal.replace( new RegExp('time24', 'gi'), 'TTTT' );
    retVal = retVal.replace( new RegExp('time', 'gi'), 'TTT' );
    // now do simple token replacements
    retVal = retVal.replace( new RegExp('am/pm', 'g'), dt.getHours()>=12 ? 'pm' : 'am');
    retVal = retVal.replace( new RegExp('AM/PM', 'g'), dt.getHours()>=12 ? 'PM' : 'AM');
    retVal = retVal.replace( new RegExp('a/p', 'g'), dt.getHours()>=12 ? 'p' : 'a');
    retVal = retVal.replace( new RegExp('A/P', 'g'), dt.getHours()>=12 ? 'P' : 'A');
    retVal = retVal.replace( new RegExp('AMPM', 'g'), dt.getHours()>=12 ? 'pm' : 'am');
    retVal = retVal.replace( new RegExp('yyyy', 'gi'), dt.getFullYear() );
    retVal = retVal.replace( new RegExp('yy', 'gi'), (new _jsString( dt.getFullYear() ) + '').substring(2,4) );
    retVal = retVal.replace( new RegExp('y', 'gi'), DatePart("y", dt) );
    retVal = retVal.replace( new RegExp('q', 'gi'), DatePart("q", dt) );
    retVal = retVal.replace( new RegExp('hh:mm', 'gi'), 'hh:'+this._NSB_pad(dt.getMinutes()) );
    
    retVal = retVal.replace( new RegExp('mm', 'gi'), this._NSB_pad(dt.getMonth() + 1) );
//  retVal = retVal.replace( new RegExp('(?!p|m)m', 'gi'), (dt.getMonth() + 1) );   
    retVal = retVal.replace( new RegExp('(a|p)m', 'g'), '$1x' );    
    retVal = retVal.replace( new RegExp('(A|P)M', 'g'), '$1X' );    
    retVal = retVal.replace( new RegExp('m', 'gi'), (dt.getMonth() + 1) );  
    retVal = retVal.replace( new RegExp('(a|p)x', 'g'), '$1m' );    
    retVal = retVal.replace( new RegExp('(A|P)X', 'g'), '$1M' );
    
    retVal = retVal.replace( new RegExp('dd', 'gi'), this._NSB_pad(dt.getDate()) );
    retVal = retVal.replace( new RegExp('d', 'gi'), dt.getDate() );
    retVal = retVal.replace( new RegExp('hh', 'gi'), this._NSB_pad(dt.getHours()) );
    retVal = retVal.replace( new RegExp('h', 'gi'), dt.getHours() );
    retVal = retVal.replace( new RegExp('nn', 'gi'), this._NSB_pad(dt.getMinutes()) );
    retVal = retVal.replace( new RegExp('n', 'gi'), dt.getMinutes() );
    retVal = retVal.replace( new RegExp('ss', 'gi'), this._NSB_pad(dt.getSeconds()) ); 
    retVal = retVal.replace( new RegExp('s', 'gi'), dt.getSeconds() ); 
    retVal = retVal.replace( new RegExp('t t t t t', 'gi'), strShortTime ); 
    // (always proceed largest same-lettered token to smallest)
    // now finish the previously set-aside tokens 
    retVal = retVal.replace( new RegExp('XXXX', 'gi'), MonthName(dt.getMonth()+1, false) ); //
    retVal = retVal.replace( new RegExp('XXX',  'gi'), MonthName(dt.getMonth()+1, true ) ); //
    retVal = retVal.replace( new RegExp('AAAAAA', 'gi'), strLongDate ); 
    retVal = retVal.replace( new RegExp('AAAAA', 'gi'), strShortDate ); 
    retVal = retVal.replace( new RegExp('AAAA', 'gi'), WeekdayName(dt.getDay()+1, false, fdow) );   // 
    retVal = retVal.replace( new RegExp('AAA',  'gi'), WeekdayName(dt.getDay()+1, true,  fdow) );   // 
    retVal = retVal.replace( new RegExp('TTTT', 'gi'), dt.getHours() + ':' + this._NSB_pad(dt.getMinutes()) );
    retVal = retVal.replace( new RegExp('TTT',  'gi'), hr +':'+ this._NSB_pad(dt.getMinutes()) +' '+ ampm );
    retVal = retVal.replace( new RegExp('CCCC', 'gi'), strShortDate +' '+ strShortTime ); 

    // finally timezone
    var tz = dt.getTimezoneOffset();
    var timezone = (tz<0) ? ('GMT-' + tz/60) : (tz==0) ? ('GMT') : ('GMT+' + tz/60);
    retVal = retVal.replace( new RegExp('ZZZZ', 'gi'), timezone );

    return retVal;
}

function Month(sdt) {
    var dt=new Date(sdt).getMonth()+1;
    return dt;
} var MONTH=Month; var month=Month;

function MonthName(themonth, dabbr) {
    var MonthNames = [null,nsbx.messages['January'],nsbx.messages['February'],nsbx.messages['March'],nsbx.messages['April'],nsbx.messages['May'],nsbx.messages['June'],nsbx.messages['July'],nsbx.messages['August'],nsbx.messages['September'],nsbx.messages['October'],nsbx.messages['November'],nsbx.messages['December']];
    if(isNaN(themonth)){    // v0.94- compat: extract real param from passed date
        if(!CvDate(themonth)){  return null;    }
//      themonth = DatePart("m", Date.CvDate(themonth));
        themonth = DatePart("m", CvDate(themonth));
    }

    var retVal = MonthNames[themonth];
    if(dabbr==true){    retVal = retVal.substring(0, 3) }   // abbr to 3 chars
    return retVal;
} var MONTHNAME=MonthName; var monthName=MonthName;

function WeekdayName(theweekday, dabbr, fdow) {
    var WeekdayNames = [null,nsbx.messages['Sunday'],nsbx.messages['Monday'],nsbx.messages['Tuesday'],nsbx.messages['Wednesday'],nsbx.messages['Thursday'],nsbx.messages['Friday'],nsbx.messages['Saturday']];
    var vbUseSystemDayOfWeek=0; var vbSunday=1; var vbMonday=2; var vbTuesday=3; var vbWednesday=4; var vbThursday=5; var vbFriday=6; var vbSaturday=7;
    if(isNaN(theweekday)){  // v0.94- compat: extract real param from passed date
        if(!CvDate(theweekday)){    return null;    }
//      theweekday = DatePart("w", Date.CvDate(theweekday));
        theweekday = DatePart("w", CvDate(theweekday));
    }
    var fdow = (isNaN(fdow) || fdow==0) ? vbSunday : Math.floor(fdow);  // set default & cast

    var nWeekdayNameIdx = ((fdow-1 + Math.floor(theweekday)-1 +7) % 7) + 1; // compensate nWeekdayNameIdx for fdow
    var retVal = WeekdayNames[nWeekdayNameIdx];
    if(dabbr==true){    retVal = retVal.substring(0, 3) }   // abbr to 3 chars
    return retVal;
} var WEEKDAYNAME=WeekdayName; var weekDayName=WeekdayName; var weekdayName=WeekdayName; var weekdayname=WeekdayName;

//vbScript Day function: Day(date)
function Day(thedate) {
    if (IsDate(thedate)) {
        if (!isObject(thedate)) {
            thedate=CvDate(thedate);
        }
        return thedate.getDate();
    } else {
        return null;
    }
} var day=Day; var DAY=Day;

//vbScript DateSerial(year, month, day)
function DateSerial(yy, mm, dd) {
    return FormatDateTime(cvdate(mm+'/'+dd+'/'+yy),2);
} var dateSerial=DateSerial; var dateSERIAL=DateSerial; var DateSERIAL=DateSerial; var dateserial=DateSerial; var DATESERIAL=DateSerial;

//vbScript DateValue(dateString)
function DateValue(dateString) {
    return FormatDateTime(cvdate(dateString),2);
} var dateValue=DateValue; var dateVALUE=DateValue; var DateVALUE=DateValue; var datevalue=DateValue; var DATEVALUE=DateValue;

//vbScript IsEmpty
function IsEmpty( theValue ) { 
    return theValue === undefined ? true : false; 
} var isempty=IsEmpty; var isEmpty=IsEmpty; var ISEMPTY=IsEmpty;

//vbScript IsArray
//function IsArray(obj) {
//    return obj.constructor == Array;
//} var isarray=IsArray; var isArray=IsArray; var ISARRAY=IsArray;
function IsArray(obj) {
	return toString.call(obj) === "[object Array]";
} var isarray=IsArray; var isArray=IsArray; var ISARRAY=IsArray;

//vbScript IsNull
function IsNull(obj) {
    return obj == null
} var isnull=IsNull; var isNull=IsNull; var ISNULL=IsNull;

//vbScript IsObject
function IsObject(obj) {
    return obj.constructor == Object;
    //return typeOf(obj) == "Object";
} var isobject=IsObject; var isObject=IsObject; var ISOBJECT=IsObject;

//vbScript CHR()
function Chr(nmbr) {
//  return String.fromCharCode(nmbr);
    return _jsString.fromCharCode(nmbr);
} var ChrB=Chr; var ChrW=Chr; var chr=Chr; var chrB=Chr; var chrW=Chr; var CHRB=Chr; var CHRW=Chr; var CHR=Chr; var Chrb=Chr; var Chrw=Chr

//vbScript ASC()
function Asc(str) {
    return str.charCodeAt(0);
} var AscB=Asc; var AscW=Asc; var ascB=Asc; var ascW=Asc; var asc=Asc; var ASCB=Asc; var ASCW=Asc; var ASC=Asc; var Ascb=Asc; var Ascw=Asc

//vbScript Join function: Join(s,c)
function Join(str,chr) {
    if (chr=="") { chr=""; } else {
        if (!chr || chr==null) { chr=" "; }
    }
    return str.join(chr);
} var join=Join; var JOIN=Join;

//vbScript Filter function : Filter(srchStr, fndStr, incl, filter)
function Filter(srchStr, fndStr, incl, fil_ter) {
    var origSrchStr = srchStr;
    if (!fndStr || fndStr==null) {fndStr="";}
    if(!fil_ter || fil_ter==null) {fil_ter=0; }
    if (incl==false) {
    } else {
        if(!incl || incl==null) {incl=true; }
    }
    fil_ter = (fil_ter==1) ? 1 : 0; //0=binary compare, 1=text compare
    incl = (incl == false) ? false : true; //true=include, false=exclude
    if (typeof(srchStr) != 'object') {return '';}
    if (fil_ter==1) {
        fndStr=fndStr.toLowerCase();
    }
    var na=new Array();
    var j=0, ss;
    for(var i=0; i<srchStr.length; i++) {
        if (fil_ter==1) {
            ss=srchStr[i].toLowerCase();
        } else {
            ss=srchStr[i];
        }
        var sso=origSrchStr[i];
        if (incl==true && ss.indexOf(fndStr) > -1) {
            na[j]=sso;
            j++;
        } else {
            if (incl==false && ss.indexOf(fndStr) == -1) {
                na[j]=sso;
                j++;
            }
        }
    }
    return na;
} var filter=Filter; var FILTER=Filter;

//vbScript InStrRev function : InStrRev(string1,string2[,start[,compare]])
function InStrRev(srchStr, fndStr, start, cmp) {
    if (!fndStr || fndStr==null) {fndStr="";}
    if (!cmp) {cmp=0;}
    srchStr.toString();
    if (cmp==1) {
        srchStr=srchStr.toLowerCase();
        fndStr=fndStr.toLowerCase();
    }
    if (!start || !isNumeric(start)) {start=-1;}
    if (start>-1) {
        srchStr=srchStr.substr(0,start);
    }
    var loc;
    if (fndStr == "" ) {
        loc=srchStr.length;
    } else {
        loc=srchStr.lastIndexOf(fndStr)+1;
    }
    return loc;
} var instrrev=InStrRev; var inStrRev=InStrRev; var INSTRREV=InStrRev; var InstrRev=InStrRev;

//vbScript InStr function : InStr([start,]string1,string2[,compare])
function InStr(start, srchStr, fndStr) {
//  if (!start || start==null || !isNumeric(start) || start=='' || start < 1 || !fndStr || fndStr==null) {
    if (!fndStr || fndStr==null || fndStr=="") {
        if (fndStr == "") {
            if (!start || start==null || !isNumeric(start) || start=='' || start < 1 ) { start=1; }
            start=Math.floor(start);
            if (!srchStr || srchStr==null) { srchStr=''; }
            if (start > srchStr.toString().length) { return 0; }
            return start;
        }
        fndStr=srchStr;
        srchStr=start;
        start=1;
    }
    if (!start || start==null || !isNumeric(start) || start=='' || start < 1 ) { start=1; }
    if (!srchStr || srchStr==null) { srchStr=''; }
    if (!fndStr || fndStr==null) { fndStr=''; }
    start=Math.floor(start);

    if (srchStr == "") { return 0; }
    var osrchStr=srchStr.toString();
    if (start > osrchStr.length) { return 0; }
    if (fndStr == "") { return start; }
    
    srchStr=osrchStr;
    fndStr=fndStr.toString();
    if (start>1) { srchStr=srchStr.substr(start-1); }
    if (srchStr.indexOf(fndStr) == -1) { return 0; }
    var loc=srchStr.indexOf(fndStr)+1+(start-1);
    return loc;
} var instr=InStr; var inStr=InStr; var INSTR=InStr;

//vbScript Space function: Space(n)
function Space(c) {
    return (new Array(c+1)).join(' ');
} var space=Space; var SPACE=Space;

//vbScript String function: String(n,c)
//javascript String object has name changed to _jsString to allow for vbScript STRING function
function _vbsSTRING(n,c) {
    if (!n || n==null) {
        return '';
    } else {
        if (!c || c==null) {
            return (n.toString());
        } else {
            c=c.toString().substr(0,1);
            return (new Array(n+1)).join(c);
        }
    }
} var _vbsstring=_vbsSTRING; var _vbsString=_vbsSTRING;

//vbScript StrCmp function: StrComp(string1,string2[,compare])
function StrComp(str1, str2, compare, typ) {
    typ = (typ==1) ? 1 : 0; //0=binary compare, 1=text compare
    if (typ==0) {
        str1=str1.toLowerCase();
        str2=str2.toLowerCase();
    }
    return ( ( str1 == str2 ) ? 0 : ( ( str1 > str2 ) ? 1 : -1 ) );
} var strcomp=StrComp; var strComp=StrComp; var strcmp=StrComp; var strCmp=StrComp; var StrCmp=StrComp; var STRCOMP=StrComp;

//vbScript Split function: Split(expression[,delimiter[,count[,compare]]]) 
function Split(str, del, cnt, cmp) {
    if (!del || del==null || del=="") { del=" "; }
    if (del != "") {
        return str.split(del);
    }
} var split=Split; var SPLIT=Split;

//vbScript Hex function: Hex(n)
function Hex(n) {
    n=Math.round(n);
    if (n < 0) { 
        n = 0xFFFFFFFF + n + 1; 
    } 
    return n.toString(16).toUpperCase();
} var hex=Hex; var HEX=Hex;

//vbScript Oct function: Oct(n)
function Oct(n) {
    n=Math.round(n);
    if (n < 0) { 
        n = 0177777 + n + 1; 
    } 
    return n.toString(8);
} var oct=Oct; var OCT=Oct;

//vbScript LBound function: LBound(arrayname[,dimension]) 
//dimension Optional. Which dimension's lower bound to return. 1 = first dimension, 2 = second dimension, and so on. Default is 1 
function LBound(arr, dm) {
    return 0;
} var lbound=LBound; var lBound=LBound; var LBOUND=LBound;

//vbScript UBound function: UBound(arrayname[,dimension]) 
//dimension Optional. Which dimension's upper bound to return. 1 = first dimension, 2 = second dimension, and so on. Default is 1
//JavaScript will increase the size of the multidim arrays if more array values are added regardless of how array was created
function UBound(arr, dm) {
    if (!dm || dm==null || dm<1) dm=1;
    dm--;
    var rv=null;
    if (dm==0) {
        try { arr[0]==null; rv=Object.keys(arr).length-1; } catch(e) {}
    } else {
        try { arr[dm]==null; rv=arr[dm-1].length; } catch(e) {}
    }
    return rv;
} var ubound=UBound; var uBound=UBound; var UBOUND=UBound;

//dm: array dimensions: create array (d1,d2,d3,d4)
//handle any number of dimensions and indexes
//Thomas Gruber
function createMultiDimArray(dm,b,c,d) {
    var arr=null;
    if (!dm || dm==null) { dm=""; } dm+='';
    if (!b || b==null) { b=""; } b+='';
    if (!c || c==null) { c=""; } c+='';
    if (!d || d==null) { d=""; } d+='';
    if (b != "") dm+=","+b;
    if (c != "") dm+=","+c;
    if (d != "") dm+=","+d;

    var dms=split(dm.replace(/\s/g,'').replace(/,,/g,',').replace(/,+$/,''),","); //no whitespace, no double comma's, no ending comma
    var dmsctr=(dms==""?0:dms.length)-1;
    if (dmsctr<0) {
        //single dimension array without parameters
        arr=[]; //array[]
        return arr;
    }
    currdim = 0;
    arr = _NSBsubCreateArray(arr,dmsctr,dms,currdim);
    return arr;
}        

//Thomas Gruber
function _NSBsubCreateArray(arr,dmsctr,dms,currdim) {
    var ub=null
    ub = dms[currdim]*1+1;
    arr = new Array(ub);
    if (currdim<dmsctr)  {
        for(var i=0;i<ub;i++)  {
            currdim = currdim+1;
            arr[i] = _NSBsubCreateArray(arr,dmsctr,dms,currdim);
            currdim = currdim-1;
        }
    }
    return arr;
}

//vbScript Time()
function Time() {
   var now    = new Date();
   var hour   = now.getHours();
   var minute = now.getMinutes();
   var second = now.getSeconds();
   var ap = "AM";
   if (hour   > 11) { ap = "PM";             }
   if (hour   > 12) { hour = hour - 12;      }
   if (hour   == 0) { hour = 12;             }
   if (hour   < 10) { hour   = "0" + hour;   }
   if (minute < 10) { minute = "0" + minute; }
   if (second < 10) { second = "0" + second; }
   var timeString = hour + ':' + minute + ':' + second + " " + ap;
   return timeString;
} var time=Time; var TIME=Time;

//vbScript Hour()
function Hour() {
   var now = new Date();
   return now.getHours();
} var hour=Hour; var HOUR=Hour;

//vbScript ERASE
function _erase(arr) {
	//clears up to 7 multi-dimensioned arrays and truncates at 8
	var _thisx=0, _thisz=0, _thisy=[];
	do {
		var _thisay='';
		for(_thisi=0; _thisi<_thisx; ++_thisi) {_thisay+='[0]';}
		try {
			_thisal=eval(arr+_thisay+'.length;');
			if (_thisal>1 && _thisal != 'undefined' && eval('IsArray('+arr+_thisay+');')) {
				_thisy[_thisx]=_thisal; ++_thisx; _thisz=1;
			} else {_thisz=0; _thisal=0;}
		} catch(_thise) {_thisz=0; _thisal=0; --_thisx;}
	} while(_thisz==1 && _thisx<7);
	try {
	if (_thisx==1 && _thisay=='[0]') { _thisx=0; }
	if (_thisx>=0) {
		for(_thisa=0; _thisa<_thisy[0]; ++_thisa) {
			if (_thisx>=1) {
				for(_thisb=0; _thisb<_thisy[1]; ++_thisb) {
					if (_thisx>=2) {
						for(_thisc=0; _thisc<_thisy[2]; ++_thisc) {
							if (_thisx>=3) {
								for(_thisd=0; _thisd<_thisy[3]; ++_thisd) {
									if(_thisx>=4) {
										for(_thise=0; _thise<_thisy[4]; ++_thise) {
											if(_thisx>=5) {
												for(_thisf=0; _thisf<_thisy[5]; ++_thisf) {
													if(_thisx>=6) {
														for(_thisg=0; _thisg<_thisy[6]; ++_thisg) {
															if(_thisx>=7) {
																//for(_thish=0; _thish<_thisy[7]; ++_thish) {
																	//at this point, delete array since array is greater than 7 deep
																	for(var i=0; i<eval(arr+'.length;'); i++) {
																		eval(arr+'['+_thisa+']['+_thisb+']['+_thisc+']['+_thisd+']['+_thise+']['+_thisf+']['+_thisg+']="";');
																	}
																//}
															} else {
																eval(arr+'['+_thisa+']['+_thisb+']['+_thisc+']['+_thisd+']['+_thise+']['+_thisf+']['+_thisg+']="";');
															}
														}
													} else {
														eval(arr+'['+_thisa+']['+_thisb+']['+_thisc+']['+_thisd+']['+_thise+']['+_thisf+']="";');
													}
												}
											} else {
												eval(arr+'['+_thisa+']['+_thisb+']['+_thisc+']['+_thisd+']['+_thise+']="";');
											}
										}
									} else {
										eval(arr+'['+_thisa+']['+_thisb+']['+_thisc+']['+_thisd+']="";');
									}
								}
							} else {
								eval(arr+'['+_thisa+']['+_thisb+']['+_thisc+']="";');
							}
						}
					} else {
						eval(arr+'['+_thisa+']['+_thisb+']="";');
					}
				}
			} else {
				eval(arr+'['+_thisa+']="";');
			}
		}
	}
	} catch(_thise) {
	}
} var _Erase=_erase; var _ERASE=_erase;

//vbScript VARTYPE
function VARTYPE(arg,txt) {
    /*
    vbEmpty 0   Uninitialized (default)
    vbNull  1   No valid data
    vbInteger   2   Integer
    vbLong  3   Long integer
    vbSingle    4   Single-precision floating-point
    vbDouble    5   Double-precision floating-point
    vbCurrency  6   Currency
    vbDate  7   Date
    vbString    8   String
    vbObject    9   Object
    vbError 10  Error
    vbBoolean   11  Boolean
    vbVariant   12  Variant (only with arrays of Variants)
    vbDataObject    13  Data-access object
    vbByte  17  Byte
    vbArray 8192    Array
    */
    if (!txt || txt==null) { txt=0; } //vartype() vs. typename(); txt==0 if vartype
    var res=-1;
    if (!arg && arg != null) {
        res=0;
        if (txt==1) { return 'empty'; } //typename
    } else if (arg==null) {
        res=1;
        if (txt==1) { return 'null'; } //typename
    } else {
        var type='';
        var typ=typeof arg;
        arg=arg.toString();
        if (type == '' && (arg==1 || arg==0) ) { type='number'; }
        if (type == '' && (arg==true || arg==false || arg=='true' || arg=='false') ) { type='boolean'; res=11;}
        if (type == '' && arg.match(/\s*\d{1,2}(\/|-)\d{1,2}(\/|-)\d{2,4}/) && arg != "NaN") { type='date'; }
        if (type == '' && arg.match(/\s*\w{3}\s+\w{3}\s+\d{2}\s+\d{4}\s+\d{2}:\d{2}:\d{2}\s+\w{3}[\+\-]\d{4}/) && arg != "NaN") { type='date'; }
        if (type == '' && arg.match(/\s*(\d{1,2})(\s+|\s*\-\s*)([a-z]{3})(\s+|\s*\-\s*)(\d{2})($|\s+)/) && arg != "NaN") { type='date'; }
        if (type == '' && arg.match(/\s*\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/) && arg != "NaN") { type='date'; }
        if (type == '' && arg.match(/\s*\d{1,2}(\s+|\s*\-\s*)[a-z]{3}(\s+|\s*\-\s*)(\d{2}|\d{4})\s*/) && arg != "NaN") { type='date'; }
        if (type == '' && arg.match(/\s*[a-z]+\s+\d{1,2},?\s+(\d{2}|\d{4})\s*/) && arg != "NaN") { type='date'; }
        if (type == '' && arg.match(/\d{1,2}\/\d{1,2}\/(\d{2}|\d{4})/) && arg != "NaN") { type='date'; }
        if (type == '' && arg[1] && typ=='object') { type='array'; }
        if (type == '' && arg.match(/[a-zA-z]\d/)) { type='string'; }
        if (type == '' && arg.match(/\d[a-zA-z]/)) { type='string'; }
        if (type == '' && arg.match(/\s*\$\d+,*\d*\.*\d*/)) { type='currency'; }
        if (type == '' && arg.match(/\d\.\d/)) { type='double'; }
        if (type == '' && arg.match(/\d/)) { type='integer'; }
        if (type == '') { type = typeof arg; }
        
        if (txt==1) { //typename()
            if (res==0 || res==1) { type='null'; }
            if (type=='array') { type='object'; }
            return type;
        }
        
        switch (type) {
            case 'date': res=7; break;
            case 'integer': res=2; break;
            case 'double': res=5; break;
            case 'currency': res=6; break;
            case 'string': res=8; break;
            case 'object': res=9; break;
            case 'boolean': reg=11; break;
            case 'array': res=8192; break;
            default: res=type; break;
        }
    }
    return res;
} var vartype=VARTYPE; var varType=VARTYPE; var VarType=VARTYPE; var Vartype=VARTYPE;

//vbScript typeName
function TypeName(ele) {
    return vartype(ele, 1);
    /*
    var tmpNumStr = new _jsString(ele);
    if (ele==null) { return null; }
    if (typeof(ele)=='number') {
        if (tmpNumStr.indexOf(".") > -1) { return 'double'; }
        return 'integer';
    }
    return typeof(ele);
    */
} var typename=TypeName; var typeName=TypeName; var TYPENAME=TypeName; var Typename=TypeName;

function FormatNumber(num,decimalNum,bolLeadingZero,bolParens,bolCommas) {
    if (isNaN(Math.floor(num))) return "NaN";

    var tmpNum = num;
    var iSign = num < 0 ? -1 : 1;       // Get sign of number
    if (!decimalNum || decimalNum==null || decimalNum < 0) { decimalNum=0; }
    if (!bolLeadingZero && bolLeadingZero != false || bolLeadingZero==null) { bolLeadingZero=true; }
    if (!bolParens && bolParens != false || bolParens==null) { bolParens=false; }
    if (!bolCommas && bolCommas != false || bolCommas==null) { bolCommas=true; }
    
    tmpNum = Math.round(Math.abs(tmpNum*Math.pow(10,decimalNum)))/Math.pow(10,decimalNum)*iSign;
    
    // Create a string object to do our formatting on
    var tmpNumStr = new _jsString(tmpNum);

    // See if we need to strip out the leading zero or not.
    if (!bolLeadingZero && num < 1 && num > -1 && num != 0) {
        if (num > 0) {
            tmpNumStr = tmpNumStr.substring(1,tmpNumStr.length);
        } else {
            tmpNumStr = "-" + tmpNumStr.substring(2,tmpNumStr.length);
        }
    }
    
    // See if we need to put in the commas
    var iStart;
    if (bolCommas && (num >= 1000 || num <= -1000)) {
        iStart = tmpNumStr.indexOf(".");
        if (iStart < 0) {
            iStart = tmpNumStr.length;
        }

        iStart -= 3;
        while (iStart >= 1) {
            tmpNumStr = tmpNumStr.substring(0,iStart) + "," + tmpNumStr.substring(iStart,tmpNumStr.length)
            iStart -= 3;
        }       
    }

    // add additional zeroes after decimal point
    iStart = tmpNumStr.indexOf(".");
    var decStr, intStr, totLen;
    if (iStart > -1) {
        decStr=tmpNumStr.substr(iStart+1,tmpNumStr.length);
        intStr=tmpNumStr.substr(0,iStart);
    } else {
        decStr="";
        intStr=tmpNumStr;
        iStart=tmpNumStr.length;
    }
    if (decStr.length < decimalNum) {
        totLen=(decimalNum-decStr.length);
        for(var di=0;di<totLen;di++) {
            decStr=decStr.toString() + '0'.toString();
        }
        intStr=tmpNumStr.substr(0,iStart);
        tmpNumStr=intStr+'.'+decStr
    }

    // See if we need to use parenthesis
    if (bolParens && num < 0) {
        tmpNumStr = "(" + tmpNumStr.substring(1,tmpNumStr.length) + ")";
    }

    return tmpNumStr;       // Return our formatted string!
} var FORMATNUMBER=FormatNumber; var formatNumber=FormatNumber; var formatnumber=FormatNumber;

function FormatPercent(num,decimalNum,bolLeadingZero,bolParens,bolCommas) {
    var tmpNumStr = new _jsString(FormatNumber(num*100,decimalNum,bolLeadingZero,false,bolCommas));

    // See if we need to use parenthesis
    if (bolParens && num < 0) {
        tmpNumStr = "(" + tmpNumStr.substring(1,tmpNumStr.length) + "%)";
    } else {
        tmpNumStr += '%';
    }
    return tmpNumStr;
} var FORMATPERCENT=FormatPercent; var formatPercent=FormatPercent; var formatpercent=FormatPercent;

function FormatCurrency(num,decimalNum,bolLeadingZero,bolParens,bolCommas) {
    decimalNum=decimalNum<0?2:decimalNum;
    var tmpStr = new _jsString(FormatNumber(num,decimalNum,bolLeadingZero,bolParens,bolCommas));

    if (tmpStr.indexOf("(") != -1 || tmpStr.indexOf("-") != -1) {
        // We know we have a negative number, so place '$' inside of '(' / after '-'
        if (tmpStr.charAt(0) == "(")
            tmpStr = "($"  + tmpStr.substring(1,tmpStr.length);
        else if (tmpStr.charAt(0) == "-")
            tmpStr = "-$" + tmpStr.substring(1,tmpStr.length);
            
        return tmpStr;
    }
    else
        return "$" + tmpStr;        // Return formatted string!
} var FORMATCURRENCY=FormatCurrency; var formatCurrency=FormatCurrency; var formatcurrency=FormatCurrency;

//vbScript TimeValue
function TimeValue(tm) {
    return FormatDateTime(tm,3);
} var timevalue=TimeValue; var timeValue=TimeValue; var TIMEVALUE=TimeValue;

//vbScript TimeSerial
function TimeSerial(hh,mm,ss) {
    if (!ss || ss==null || ss=="") { ss='00'; }
    if (!mm || mm==null || mm=="") { mm='00'; }
    var ssval=parseInt(ss.toString());
    var mmval=parseInt(mm.toString());
    var hhval=parseInt(hh.toString());
    if (ssval>59) {
        ssval=ssval-60;
        mmval++;
    }
    if (mmval>59) {
        mmval=mmval-60;
        hhval++;
    }
    if (hhval > 23) { hhval=hhval-24; }
    hh=hhval.toString(); if (hh.length==1) { hh='0'+hh; }
    mm=mmval.toString(); if (mm.length==1) { mm='0'+mm; }
    ss=ssval.toString(); if (ss.length==1) { ss='0'+ss; }
    return TimeValue(hh+':'+mm+':'+ss);
} var timeserial=TimeSerial; var timeSerial=TimeSerial; var TIMESERIAL=TimeSerial;

//vbScript Rnd (sort of)
function rnd() {
    return Math.random()%1;
} var RND=rnd; var Rnd=rnd;

//vbScript sleep n
function _pause(millis) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

//vbscript sysinfo()
function sysinfo(arg) {
    switch(arg) {
        case 0: return screen.width;
        case 1: return screen.height;
        case 2: {if(SysInfo(4)==false) return window.innerWidth;
               if(Math.abs(window.orientation==90))
                 {return Math.max(screen.width,screen.height)}
                else
                 {return Math.min(screen.width,screen.height)}
                };
        case 3: {if(SysInfo(4)==false) return window.innerHeight;
                if(Math.abs(window.orientation==90))
                 {return Math.min(screen.width,screen.height)}
                else
                 {return Math.max(screen.width,screen.height)}
                };
        case 4:  return !( /Windows NT|Macintosh/i.test(navigator.userAgent));
        case 10: return new Date().getTime();
        case 108: return screen.availWidth;
        case 109: return screen.availHeight;
        case 188: return screen.width;
        case 190: return screen.height;
        default: return 0;
    }
} var sysInfo=sysinfo; var SYSINFO=sysinfo; var SysInfo=sysinfo; var Sysinfo=sysinfo;

function RGB(r,g,b)  {
    //return '#'+(r + 256 * g + 65536 * b).toString(16).toUpperCase();
    return '#'+(right('00'+hex(r),2) + right('00'+hex(g),2) + right('00'+hex(b),2));
} var rgb=RGB;

//vbScript "\" opterator: integer division
function intDiv(v1, v2) {
    if (!v1) { v1=0; }
    if (!v2) { v2=0; }
    if (v1==null || v2==null) { return null; }
    if (v1==0 || v2==0) { return 0; }
    return (v1 % v2);
} var intdiv=intDiv; var IntDiv=intDiv; var Intdiv=intDiv; var INTDIV=intDiv;

function ucase(arg) {
    if (!arg || arg==null || typeof(arg)=='undefined') { return arg; }
    return arg.toUpperCase();
} var UCASE=ucase; var uCase=ucase; var Ucase=ucase; var UCase=ucase;

function lcase(arg) {
    if (!arg || arg==null || typeof(arg)=='undefined') { return arg; }
    return arg.toLowerCase();
} var LCASE=lcase; var lCase=lcase; var Lcase=lcase; var LCase=lcase;

//vbScript doevents simulation
function doevents() {
    setTimeout("doevents()",100);
} var doEvents=doevents; var DOEVENTS=doevents; var DoEvents=doevents; var Doevents=doevents;

// SQL Functions

function Sql(db, sqlList){
    // Built in function
    db.transaction(function(transaction) {
        for(var i = 0; i < sqlList.length; i++) {
            // create a new scope that holds sql for the error message, if needed
            (function(tx, sql) {
                if (typeof(sql) === 'string') sql = [sql];
                var sql_return = sql[1] || function() {};    
                var sql_error = sql[2] || NSB._sqlError(sql[0]);
                
                tx.executeSql(sql[0], [], sql_return, sql_error);
            }(transaction, sqlList[i]));
        }
    });
}

function SqlOpenDatabase(shortName, version, displayName, maxSize) {
  //Built in function
    try {
            if (!window.openDatabase) {
                    alert(nsbx.messages['SQLite_not_supported']);
            } else {
                    if (typeof(shortName) == 'undefined') {
                        alert(nsbx.messages["Database_name_required"]);
                        return 0;
                        }
                    if (typeof(version) == 'undefined') version="";
                    if (typeof(displayName) == 'undefined') displayName = shortName;
                    if (typeof(maxSize) == 'undefined') maxSize =1000000;
                    var myDB = openDatabase(shortName, version, displayName, maxSize);
            }
    } catch(e) {
            if (e.code == 11) {// INVALID_STATE_ERR: Version number mismatch.
            alert(nsbx.messages["Invalid_database_version." + version]);
            } else {
            alert(nsbx.messages["Unknown_error_"]+e+".");
            }
            return 0;
    }
    return myDB;
}

function SQLExport(db, dbname, callback) {
    // convert a SQLite database schema to JSON
    //
    // db is the db to export
    // callback is a function of one argument that recieves the JSON
    //
    // Limitations:
    // - BLOB data will probably not export properly, or not import properly
    // - Foreign keys are not taken into account when exporting/importing
    var item, 
        totalRows = 0,
        processedRows = 0,
        masterSql = 'SELECT name, sql, type FROM sqlite_master WHERE sql IS NOT NULL',
        schema = {
            'dbname': db.name || dbname || 'default',
            'dbver': db.version,
            'ddl': {
                'drops': [],
                'tables': [],
                'creates': []               
            },
            'dml': []
        };

    db.transaction(function(tx) {
        tx.executeSql(masterSql, [], function(tx, result) {
            for (var i = 0; i < result.rows.length; i++) {
                item = result.rows.item(i);

                if (item['name'] != '__WebKitDatabaseInfoTable__' && item['name'] != 'sqlite_sequence') {
                    schema.ddl.drops.push('DROP ' + item['type'] + ' IF EXISTS ' + item['name']);
                    if (item['type'] === 'table') {
                        schema.ddl.tables.push(item['sql']);
                        totalRows++;
                        tx.executeSql('SELECT * FROM ' + item['name'], [], (function(item) { 
                            return function(tx, result) {
                                var row,
                                    sql,
                                    sql1,
                                    sql2,
                                    params;

                                for (var i = 0; i < result.rows.length; i++) {
                                    row = result.rows.item(i);
                                    sql1 = 'INSERT INTO ' + item['name'] + ' (';
                                    sql2 = ') VALUES (';
                                    params = []

                                    for (field in row) {
                                        sql1 += field + ', ';
                                        sql2 += '?, ';
                                        params.push(row[field]);
                                    }
                                    sql = sql1.slice(0, -2) + sql2.slice(0, -2) + ')';

                                    schema.dml.push({'sql': sql, 'params': params});
                                }

                                // only callback when we're done
                                if (callback && (++processedRows === totalRows)) callback(schema);
                            }; 
                        }(item)), NSB._sqlError('SELECT * FROM ' + item['name']));
                    } else {
                        schema.ddl.creates.push(item['sql']);
                    }
                }
            }
        }, NSB._sqlError(masterSql));
    });

    return schema;
}

function SQLImport(json, db, callback, overwrite) {
    // imports a database exported by SQLExport -
    // - json: the json object from SQLExport
    // - db (optional): the database to use, normally you should let SQLImport open the DB
    // - callback (optional): call this function on completion
    // - overwrite (optional): boolean, default true -  if false, only import if the DB is new
    var i;

    // try to parse the json as a string if someone gave us the wrong sort of object
    if (typeof json.dbname === 'undefined') {
        json = JSON.parse(json);
    }
    
    db = db || SqlOpenDatabase(json.dbname, '');
    callback = callback || function(t, r) {};
    overwrite = overwrite || true;
    
    if (overwrite===true) {
        if (db.version === json.dbver) {
            callback("No overwrite - new database is same version as old.")}
    else
        if (db.version !== '') {
            callback("No database write - database already exists.")}
    }

    // make sure we don't clobber the database version if it wasn't spec'd
    // this is really about being extra careful - unlikely scenario
    if (typeof json.dbver !== 'undefined') {
        db.changeVersion(db.version, json.dbver);
    }

    db.transaction(function(tx) {
        for (i = 0; i < json.ddl.drops.length; i++) {
            tx.executeSql(json.ddl.drops[i], [], function(t, r) {}, 
                          NSB._sqlError(json.ddl.drops[i]));
        }
        
        for (i = 0; i < json.ddl.tables.length; i++) {
            tx.executeSql(json.ddl.tables[i], [], function(t, r) {},
                          NSB._sqlError(json.ddl.tables[i]));
        }
        
        for (i = 0; i < json.dml.length; i++) {
            tx.executeSql(json.dml[i].sql, json.dml[i].params, function(t, r) {}, 
                          NSB._sqlError(json.dml[i].sql));
        }
        
        for (i = 0; i < json.ddl.creates.length; i++) {
                tx.executeSql(json.ddl.creates[i], [], function(t, r) {}, 
                              NSB._sqlError(json.ddl.creates[i]));     
        }

        tx.executeSql('SELECT * FROM sqlite_master', [],
            function(t, r) { callback(); },
            NSB._sqlError('SELECT * FROM sqlite_master'));
    });
}

function Main(){}

function _navGetLocaleFunc() {
    var lang='';
    if ( navigator ) {
        if ( navigator.language ) {
            lang=navigator.language;
        }
        else if ( navigator.browserLanguage ) {
            lang=navigator.browserLanguage;
        }
        else if ( navigator.systemLanguage ) {
            lang=navigator.systemLanguage;
        }
        else if ( navigator.userLanguage ) {
            lang=navigator.userLanguage;
        }
    }
    return lang;
}

function Log10(x) {
    return Math.log(x)/Math.log(10);
} var log10=Asc; var LOG10=Asc; 

function _jsCint(n) {
    //simulate vbScript CINT()
    var i=Math.floor(n);
    var d=n*1-i-0.5; //get fractional part
    if (d==0) { //d=.5
        if (i%2 == 0) { //even leave as is otherwise inc
            n=i;
        } else {
            n=i*1+1;
        } // end of if d%2
    } else if (d>0) { //greater than .5
        n=i*1+1;
    } else { //less than .5
        n=i;
    }
    return n*1;
} var _jsCINT=_jsCint; var _JSCINT=_jsCint; var _jsCInt=_jsCint; var _JSCInt=_jsCint;

function jsFix(n) {
    //simulate vbScript FIX()
    var i=Math.floor(n);
    if (i<0) { i++; };
    return i*1;
} var jsFIX=jsFix; var JSFIX=jsFix; var JSFix=jsFix;

function readFile(filename,method){
    if (!method || method==null || typeof(method)=='undefined') { method = ''; }
    if(method=="") method="GET";
    req=new XMLHttpRequest();
    req.open(method.toUpperCase(),filename,false);
    try {
        req.send(null)}
    catch(err) {
        req.err=err};
    return req
} var ReadFile=readFile; var readfile=readFile; var READFILE=readFile;

function Ajax(URL, method, data, callback){
  if(!method || method==null || typeof(method)=='undefined') method = "GET";
  if(!data || data==null || typeof(data)=='undefined') data = "";
  var req = new XMLHttpRequest();
  if (callback) req.onreadystatechange=callback;
  if(method.toUpperCase()=="GET"){ 
    if(data!=="") URL+=data;
    data=null}
  req.open(method.toUpperCase(), URL, (callback!=undefined));
  if(method.toUpperCase()=="POST"){ 
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded")};
  try {
    req.send(data)}
  catch(err) {
    req.err=err}
  return req
}

function nsbDOMAttr(obj, strobj) {
    var parts = strobj.split('.');
    var target = parts[parts.length - 1]
    var setter = arguments.length > 2;
    var value = arguments[2];  // optional, value to be set
    var noscroll = arguments[3];  // optional, don't do scroller exceptions
    
    // special cases for canvas elements
    if ((obj.tagName === 'CANVAS') && setter) {
        if (strobj === 'style.width') obj.width = parseInt(value);
        if (strobj === 'style.height') obj.height = parseInt(value);
    }
    
    // one more exception and this needs to be a list
    if (obj.parentNode && !noscroll && (obj.parentNode.id === (obj.id + '_scroller')) &&
        ((strobj === 'style.left') || (strobj === 'style.top') ||
         (strobj === 'style.width') || (strobj === 'style.height') ||
         (strobj === 'style.display'))) {
        // if setting, set the actual value as well
        if (setter && strobj !== 'style.left' && strobj !== 'style.top') nsbDOMAttr(obj, strobj, value, true);
        // get/set from the parent object
        obj = obj.parentNode;
    }
    
    for (var i = 0; i < parts.length - 1; i++) {
        obj = obj[parts[i]];
    }
    
    if (setter) {
        // set the value
        return obj[target] = value;
    } else {
        // return the value
        return obj[target];
    }
}

function NSB_addDisableProperty(ctrl) {
    ctrl.__defineSetter__('disabled', 
        function(n) {
            if (n) {
                $(this).addClass('ui-disabled')}
            else {
                $(this).removeClass('ui-disabled')}  
        });
    ctrl.__defineGetter__('disabled', 
        function() {
            return $(this).hasClass('ui-disabled')
            });
}
  
function GetURLParameter( name ) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
} getURLParameter=GetURLParameter;

function enquote(s){
  var i, arrTerms, arrTerm;
  arrTerms=s.split(" ");
  for (i=0; i<arrTerms.length; i++){
    arrTerm=arrTerms[i].split("=");
    if (arrTerm.length>1) {
      if (arrTerm[1].length==0){
        arrTerms[i]="";
        }
      else {
        if (arrTerm[1].substring(0,1)!="'") {
          arrTerms[i]=arrTerm[0] + "='" + arrTerm[1] + "'"}
          }
        }
    else 
      if (arrTerms[i].indexOf("=")>0) {
        //arrTerms[i]=arrTerm[0] + "=''"}
        arrTerms[i]=""}
    }
  return arrTerms.join(" ");
  }
  
function ChangeForm(newForm, transition, reverse) {
  if (typeof(NSBCurrentForm.onhide)=='function') {NSBCurrentForm.onhide()};
  
  if (false & NSBFramework=="jQuery Mobile"){
    if (typeof(transition)=='undefined') {transition='none'};
    if (reverse!=True) {reverse=false};
    $.mobile.changePage($('#Page_'+newForm.id),{transition: transition.toLowerCase(), reverse: reverse, role: 'dialog'});
  } else {
    NSBCurrentForm.style.display="none";
    newForm.style.display="block"
  }
  NSBCurrentForm=newForm;
  if (typeof(NSBCurrentForm.onshow)=='function') 
    {setTimeout(NSBCurrentForm.onshow, 100)};
}

var NSB = {
    alertDialog: null,
    eCount:0,
    NSB_Progress: null,
    
    msgboxDefaultRtn: function(buttonClicked, inputTxt) {},

    addProperties: function(ctrl,actualCtrl){
        if (!actualCtrl){actualCtrl=ctrl};
        
        ctrl.__defineSetter__('left', function(n){
          actualCtrl.style.left=n + (typeof(n)=='number' ? "px":"")});
        ctrl.__defineGetter__('left', function(){return actualCtrl.offsetLeft});
        
        ctrl.__defineSetter__('top', function(n){
          actualCtrl.style.top=n + (typeof(n)=='number' ? "px":"")});
        ctrl.__defineGetter__('top', function(){return actualCtrl.offsetTop});
        
        if (ctrl.nodeName!='CANVAS') {
            ctrl.__defineSetter__('width', function(n){
                actualCtrl.style.width=n + (typeof(n)=='number' ? "px":"")});
            ctrl.__defineGetter__('width', function(){return actualCtrl.offsetWidth});
        
            ctrl.__defineSetter__('height', function(n){
                actualCtrl.style.height=n + (typeof(n)=='number' ? "px":"")});
            ctrl.__defineGetter__('height', function(){return actualCtrl.offsetHeight});
            }
        if (ctrl.nodeName=='LABEL'){
            ctrl.__defineGetter__('Caption', function(){return actualCtrl.textContent});    
            ctrl.__defineSetter__('Caption', function(n){actualCtrl.textContent=n});    
        }
        if (ctrl.nodeName=='INPUT' || ctrl.nodeName=='TEXTAREA'){
            ctrl.__defineGetter__('text', function(){return actualCtrl.value});    
            ctrl.__defineSetter__('text', function(n){actualCtrl.value=n});    
        }
        ctrl.hide=function(){actualCtrl.style.display='none'};
        ctrl.show=function(){actualCtrl.style.display='block'};
        ctrl.resize=function(l,t,w,h){
            ctrl.left=l;
            ctrl.top=t;
            ctrl.width=w;
            ctrl.height=h
            }
        ctrl.__defineGetter__('Visible', function(){
          return (actualCtrl.style.display!="none")});
        ctrl.__defineSetter__('Visible', function(n){
          if(n) {actualCtrl.style.display="block"}
        else {actualCtrl.style.display="none"}});
    },
  
    oncache: function(e){
      if (typeof oncache!='undefined'){oncache(e);return;}
      NSB.eCount=NSB.eCount+1;
      if (e.type=="progress"){NSB.ShowProgress(nsbx.messages["Update_loading"] + (Array(NSB.eCount%25).join(".")))}
        else {NSB.ShowProgress(e.type);}
      if ((e.type=="noupdate") || (e.type=="cached")){
        NSB.ShowProgress(false);
      }
      if (e.type=="updateready"){
        NSB.ShowProgress(nsbx.messages["Update_Complete_-_Restarting."]);
        if (typeof(window.applicationCache)=='undefined') return; //ie8
        window.applicationCache.swapCache();
        window.location.reload();
      }
    },
  
    ShowProgress: function(s){
        if (s==false || !s){
            if (typeof(NSB_Progress)==='object' && NSB_Progress != null) {
              if (NSB_Progress.parentNode!=undefined){        
                NSB_Progress.parentNode.removeChild(NSB_Progress);
                NSB_Progress=null;}
                }
              return
            }
        if (typeof(NSB_Progress)=='undefined' || NSB_Progress==null){
            NSB_Progress = document.createElement("div");
            NSB_Progress.id="NSB_Progress";
            NSB_Progress.style.top = window.innerHeight-205 + "px";
            NSB_Progress.style.left = (window.innerWidth-240)/2 + "px";
            NSB_Progress.onclick=function(){NSB.ShowProgress(false)};
            document.body.appendChild(NSB_Progress);
            }
        NSB_Progress.innerHTML=s + '<span class="NSB_ProgressClose">\u00D7</span>';
    },

    MsgBox: function(rtnFunc, prompt, buttons, title) {
        if (typeof(rtnFunc)!='function' && !title){ //looking for less than 4 parameters
            title=buttons; buttons=prompt; prompt=rtnFunc; rtnFunc=NSB.msgboxDefaultRtn;}
        var imgicon = NSB._parseIcon(buttons);
        if (!prompt || prompt==null || typeof(prompt)=='undefined') { prompt = ''; }
        if (title==null || typeof(title)=='undefined') { title = document.title; }
        if (title=='') title=' ';
        if (!buttons || buttons==null || typeof(buttons)=='undefined') { buttons = '0'; }
        if (!rtnFunc || rtnFunc==null || typeof(rtnFunc)=='undefined' || typeof(rtnFunc) != 'function' || rtnFunc=='') { rtnFunc=NSB.msgboxDefaultRtn; }
        buttonObj = NSB._parseButtons(buttons, rtnFunc);

        if (!this.alertDialog) {
            this.alertDialog = new Dialog({ //default options
                //top: 140,
                width: 281,
                title: title,
                icon: imgicon,
                content: prompt,
                icontent: '',
                buttons: buttonObj,
                openOnCreate: false,
                destroyOnClose: true //jw destroy on any button click
            });
        }
        this.alertDialog.open();
    },

    closeMsgBox: function() { if (this.alertDialog) {this.alertDialog.close();} },

    InputBox: function(rtnFunc, prompt, title, def, xpos, ypos) {
        if (!prompt || prompt==null || typeof(prompt)=='undefined') { prompt = ''; }
        if (title==null || typeof(title)=='undefined') { title = document.title; }
        if (!rtnFunc || rtnFunc==null || typeof(rtnFunc)=='undefined' || rtnFunc=='') { rtnFunc=NSB.msgboxDefaultRtn; }
        if (!def || def==null || typeof(def)=='undefined' || def=='') { def = null; }

        var dialog = new Dialog({
            title: title,
            icon: '',
            content: prompt,
            icontent: def,
            buttons: {
                    'Cancel': function() {
                    this.close();
                    rtnFunc(2,'');
                },
                    'OK': function() {
                    var iboxValue = document.getElementById('_nsbDialogBoxInput');
                    var inputText = iboxValue.value;
                    this.close();
                    rtnFunc(1,inputText);
                }
            },
            close: function() {this.close();}
        });
        this.alertDialog = dialog;
        _nsbDialogBoxInput.focus();
    },

    //parses button types
    _parseButtons: function(buttons, rtnFunc) {
        if (buttons == "") buttons = "0";
        var buttonObj = '';
        //test if buttons parameter numeric
        if (buttons == parseInt(buttons) && buttons == parseFloat(buttons)) {
            //determine button from vbscript value: modal 0xF000, default 0x0F00, icon 0x00F0, button 0x000F
            
            // 0 = vbOKOnly - OK button only
            // 1 = vbOKCancel - OK and Cancel buttons
            // 2 = vbAbortRetryIgnore - Abort, Retry, and Ignore buttons
            // 3 = vbYesNoCancel - Yes, No, and Cancel buttons
            // 4 = vbYesNo - Yes and No buttons
            // 5 = vbRetryCancel - Retry and Cancel buttons
            var buttonCombination = buttons & 0x000F;
            
            // 0 = vbDefaultButton1 - First button is default
            // 256 = vbDefaultButton2 - Second button is default
            // 512 = vbDefaultButton3 - Third button is default
            // 768 = vbDefaultButton4 - Fourth button is default
            var buttonDefault = buttons & 0x0F00;
            
            // 0 = vbApplicationModal - Application modal (the current application will not work until the user responds to the message box)
            // 4096 = vbSystemModal - System modal (all applications wont work until the user responds to the message box)
            var buttonMode = buttons & 0xF000;

            switch (buttonCombination) {
                case 1: //vbOKCancel - OK (1) and Cancel (2) buttons
                    buttonObj={'OK': function() {this.close(); rtnFunc(1,'');},'Cancel': function() {this.close(); rtnFunc(2,'');}};
                    break;
                case 2: //vbAbortRetryIgnore - Abort (3), Retry (4), and Ignore (5) buttons
                    buttonObj={'Abort': function() {this.close(); rtnFunc(3,'');},'Retry': function() {this.close(); rtnFunc(4,'');},'Ignore': function() {this.close(); rtnFunc(5,'');}};
                    break;
                case 3: //vbYesNoCancel - Yes (6), No (7), and Cancel (2) buttons
                    buttonObj={'Yes': function() {this.close(); rtnFunc(6,'');},'No': function() {this.close(); rtnFunc(7,'');},'Cancel': function() {this.close(); rtnFunc(2,'');}};
                    break;
                case 4: //vbYesNo - Yes (6) and No (7) buttons
                    buttonObj={'Yes': function() {this.close(); rtnFunc(6,'');},'No': function() {this.close(); rtnFunc(7,'');}};
                    break;
                case 5: //vbRetryCancel - Retry (4) and Cancel (2) buttons
                    buttonObj={'Retry': function() {this.close(); rtnFunc(4,'');},'Cancel': function() {this.close(); rtnFunc(2,'');}};
                    break;
                default: //0 = vbOKOnly - OK (1) button only
                    buttonObj={'OK': function() {this.close(); rtnFunc(1,'');}};
                    break;
            }
        } else {
            //not numeric so custom buttons
            var customButtonParams = buttons.split(";"); //separate button values from icon value
            var customButton = customButtonParams[0].split(","); //get button values
            
            var cbutton=[];
            for(i=0; i<customButton.length; i++) {
                var appendType = (i==0?true:false); //insert first one then append others
                cbutton[i] = customButton[i]+": function() {this.close(); rtnFunc('"+customButton[i]+"','');}"
                if (i != customButton.length-1) { cbutton[i] += ','; }
            }
            var cbuttonObj='';
            for(i=0; i<customButton.length; i++) { cbuttonObj += cbutton[i]; }
            eval("buttonObj={"+cbuttonObj+"};");
        }
        return buttonObj;
    },

    //parses icon types
    _parseIcon: function(buttons) {
        if (typeof(buttons)=="undefined") buttons=0;
        if (buttons == "") buttons = 0;
        //test if buttons parameter numeric
        var imgIcon = '';
        if (buttons == parseInt(buttons) && buttons == parseFloat(buttons)) {
            //determine button from vbscript value: modal 0xF000, default 0x0F00, icon 0x00F0, button 0x000F
            
            // 16 = vbCritical - Critical Message icon
            // 32 = vbQuestion - Warning Query icon
            // 48 = vbExclamation - Warning Message icon
            // 64 = vbInformation - Information Message icon
            imgIcon = buttons & 0x00F0;
        } else {
            //not numeric so custom buttons
            var customButtonParams = buttons.split(";"); //separate button values from icon value
            if (customButtonParams.length > 1) { imgIcon=customButtonParams[1]; } //icon can be vbScript type or custom path
        }
        
        imgIcon = imgIcon + ""; //force string conversion
        if (!imgIcon || imgIcon==null || imgIcon.replace(/\s+/g,'')=='') { imgIcon=''; }
        if (imgIcon.length > 2) {
            imgIcon=imgIcon.replace(/\'/g,"''").replace(/\"/g,'""');
            imgIcon="<img src='"+imgIcon+"' width='33' height='33' border='0'>";
            //source string of custom image
        } else {
            switch (imgIcon) { //must begin with "*" to denote system icon to calling function
                case '16': imgIcon="*criticalicon"; break;
                case '32': imgIcon="*questionicon"; break;
                case '48': imgIcon="*exclamationicon"; break;
                case '64': imgIcon="*informationicon"; break;
                default: imgIcon=""; break;
            }
        }
        return imgIcon;
    },

    _sqlError: function(lastSQL) {
        // returns an appropriate sqlError function give lastSQL
        return function(tx, err) {
            alert('SQLite error: ' + err.message + ' (Code ' + err.code + ') ' + lastSQL);
            return false;
        };
    }
} //NSB

// Utility functions
function bindEventHandler(element, eventName, handler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, handler); //IE is onclick //jw
    } else {
        element["on" + eventName] = handler;
    }       
}

/**
 * The modal dialog class
 * @constructor
 */
function Dialog(options) {
    this.options = {
        width: 281,
        //top: 140,
        openOnCreate: true,
        destroyOnClose: true,
        escHandler: this.close
    };
    // Overwrite the default options
    for (var option in options) {
        this.options[option] = options[option];
    }
    // Create dialog dom
    this._makeNodes();
    if (this.options.openOnCreate) {
        this.open();
    }
}

Dialog.prototype = {
    /* handles to the dom nodes */
    header: null,
    body: null,
    icon: null,
    content: null,
    icontent: null,
    buttonbar: null,
    wrapper: null,
    _overlay: null,
    _wrapper: null,
    _zIndex: 0,
    _escHandler: null,
    
    // Shows the dialog
    open: function() {
        this._makeTop();
        var ws = this._wrapper.style;
        ws.left = (document.body.clientWidth - this.options.width) / 2 + 'px';
        ws.position="fixed";
        ws.top="60px";
        this._overlay.style.display = 'block';
        ws.display = 'block';
        this._wrapper.focus();

        if (this.options.focus) {
            var input = document.getElementById(this.options.focus);
            if (input) {
                input.focus();
            }
        }
    },
    
    close: function() {
        if (this.options.destroyOnClose) {
            this._destroy();
            NSB.alertDialog=null; //remove the alertDialog since object destroyed //jw
        } else {
            this._overlay.style.display = 'none';
            this._wrapper.style.display = 'none';
        }
    },

    addButtons: function(buttons, prepend) {
        var buttonbar = this.buttonbar;
        var buttonArray = this._makeButtons(buttons);
        var first = null;
        if (prepend && (first = buttonbar.firstChild) != null) {
            for (var i in buttonArray) {
                buttonbar.insertBefore(buttonArray[i], first);
            }
        } else {
            for (var i in buttonArray) {
                buttonbar.appendChild(buttonArray[i]);
            }
        }
    },

     //Makes the dom tree for the dialog
    _makeNodes: function() {
        if (this._wrapper || this.overlay) {
            return; // Avoid duplicate invocation
        }
        // Make overlay
        this._overlay = document.createElement('div');
        this._overlay.className = 'dialog-overlay';
        document.body.appendChild(this._overlay);

        // build header display
        if (typeof this.options.title == 'string' && this.options.title != '') {
            var header = document.createElement('div');
            header.className = 'dialog-header';
            header.innerHTML = this.options.title;
            this.header = header;
        }

        //build icon display
        var icon = document.createElement('div');
        if (this.options.icon.substring(0,1)=='*') {
            icon.className = 'dialog-icon';
            icon.id = this.options.icon.substring(1); //system icon
        } else {
            icon.className = 'dialog-icon-c';
            icon.innerHTML = this.options.icon; //custom icon
        }
        this.icon = icon;

        //build text display
        var content = document.createElement('div');
        if (this.options.icon != '') {
            content.className = 'dialog-itext';
        } else {
            content.className = 'dialog-text';
        }
        this.options.content=this.options.content.replace(/(\r\n)+/g,'<br>');
        this.options.content=this.options.content.replace(/(\n)+/g,'<br>');
        this.options.content=this.options.content.replace(/(\r)+/g,'<br>');
        content.innerHTML = this.options.content;
        this.content = content;

        // build button bar
        var buttonbar = document.createElement('div');
        var buttons = this._makeButtons(this.options.buttons);
        buttonbar.className = 'dialog-buttonbar';
        for (var i=0; i<buttons.length; i++) 
            buttonbar.appendChild(buttons[i]);
        this.buttonbar = buttonbar;

        var dialogContent = document.createElement('div')
        dialogContent.className = 'dialog-content';
        if (this.options.icon != '') {
            dialogContent.appendChild(icon);
        }
        
        dialogContent.appendChild(content);
        if (this.options.icontent != '') {
            var icont = document.createElement('input');
            icont.id = '_nsbDialogBoxInput';
            icont.type = 'text';
            icont.value = this.options.icontent;
            icont.text = icont.value;
            if (navigator.appVersion.indexOf('Chrome')==-1) icont.style.width = '90%';
            dialogContent.appendChild(icont);
        }
        
        var wrapper = document.createElement('div');
        wrapper.className = 'dialog-wrapper';
        var ws = wrapper.style;
        ws.position = 'absolute';
        ws.display = 'none';
        ws.outline = 'none';

        if (this.header) {
            wrapper.appendChild(header);
        }
        wrapper.appendChild(dialogContent);
        wrapper.appendChild(buttonbar);

        if (this.options.escHandler) {
            wrapper.tabIndex = -1;
            this._onKeydown = this._makeHandler(function(e) {
                if (!e) {
                    e = window.event;
                }
                if (e.keyCode && e.keyCode == 27) {
                    this.options.escHandler.apply(this);
                }
            }, this);
            bindEventHandler(wrapper, 'keydown', this._onKeydown);
        }
        this._wrapper = document.body.appendChild(wrapper);
    },
    
    _makeButtons: function(buttons) {
        var buttonArray = new Array();
        var buttonCount=0; //button counter
        var buttonTotal=0; //button total
        var buttonWidth=0; //button width
        for (var buttonText in buttons) { buttonTotal++; }
        
        for (var buttonText in buttons) {
            var button = document.createElement('button');
            button.className = 'dialog-buttonNoBorder';
            switch (buttonTotal) {
                case 1: buttonWidth='263px'; break;
                case 2: buttonWidth='128px'; break;
                case 3: buttonWidth='83px'; break;
                default: buttonWidth=parseInt(260/buttonTotal-1)+'px'; break; //compute button width
            }
            button.style.width = buttonWidth;

            if (buttonCount%2 == 0) { //even: 0, 2, 4, ...
                if (buttonTotal <=2) {
                    button.style.margin = "0px 1px 0px 0px";
                } else {
                    if (buttonCount == 0) {
                        button.style.margin = "0px 2px 0px 1px";
                    } else if (buttonCount == buttonTotal-1) {
                        button.style.margin = "0px 0px 0px 2px";
                    } else {
                        button.style.margin = "0px 2px 0px 2px";
                    }
                }
            } else {
                if (buttonTotal <=2) {
                    button.style.margin = "0px 0px 0px 2px";
                } else {
                    if (buttonCount == buttonTotal-1) {
                        button.style.margin = "0px 0px 0px 1px";
                    } else {
                        button.style.margin = "0px 2px 0px 2px";
                    }
                }
            }
            button.innerHTML = buttonText;
            bindEventHandler(button, 'click', this._makeHandler(buttons[buttonText], this));
            buttonArray.push(button);
            buttonCount++;
        }
        return buttonArray;
    },  
    
    _makeHandler: function(method, obj) {
        return function(e) {
            method.call(obj, e);
        }
    },

    _makeTop: function() {
        if (this._zIndex < Dialog.Manager.currentZIndex) {
            this._overlay.style.zIndex = Dialog.Manager.newZIndex();
            this._zIndex = this._wrapper.style.zIndex = Dialog.Manager.newZIndex();
        }
    },

    _destroy: function() {
        document.body.removeChild(this._wrapper);
        document.body.removeChild(this._overlay);
        this.header = null;
        this.body = null;
        this.icon = null;
        this.content = null;
        this.buttonbar = null;
        this.wrapper = null;
        this._overlay = null;
        this._wrapper = null;
    }
};

Dialog.Manager = {
    currentZIndex: 3000,
    newZIndex: function() {
        return ++this.currentZIndex;
    }
};

//Global code

if (typeof navigator !== 'undefined' && navigator.onLine){
    //window.applicationCache.addEventListener("checking", NSB.oncache, false);
    window.applicationCache.addEventListener("downloading", NSB.oncache, false);
    window.applicationCache.addEventListener("noupdate", NSB.oncache, false);
    window.applicationCache.addEventListener("progress", NSB.oncache, false);
    window.applicationCache.addEventListener("updateready", NSB.oncache, false);
    window.applicationCache.addEventListener("cached", NSB.oncache, false);
    window.applicationCache.addEventListener("error", NSB.oncache, false);
    window.applicationCache.addEventListener("obsolete", NSB.oncache, false);
}

// globals and init
if (typeof document !== 'undefined') {
    var AppBuildStamp=document.getElementsByName("date")[0].content;
    var AppVersion=document.getElementsByName("version")[0].content;
    var AppLegalCopyright=document.getElementsByName("copyright")[0].content;
    var NSBVersion=document.getElementsByName("generator")[0].content.split("$")[0];
    var NSBFramework=(typeof($)=='function')?'jQuery Mobile':'Classic';
    document.ontouchmove = function(e) { e.preventDefault(); };
    /mobile/i.test(navigator.userAgent) && !location.hash && setTimeout(function(){if (!pageYOffset) window.scrollTo(0,0)},500);
}
