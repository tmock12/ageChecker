

var ageCheck = {
  
  //Set the minimum age and where to redirect to
  minimumAge : 21,
  userIsOldEnoughPage : "welcome.html",
  userNotOldEnoughPage : "http://www.centurycouncil.org/landing",


  //Leave this stuff alone please :)

  start: function() {
    this.setUsersBirthday();
    if (this.userIsOverMinimumAge()) {
      this.setCookie("usersBirthday",this.usersBirthday,30);
      window.location = this.userIsOldEnoughPage;
    } else{
      this.notMinimumAge();
    };
  },

  usersBirthday : new Date(),

  setTheMonth : function() {
    var selectedMonth = document.getElementById("month").value;
    if (selectedMonth === "1") {
      this.setDaysForMonth(29);
    } 
    else if (selectedMonth === "3" ||
             selectedMonth === "5" || 
             selectedMonth === "8" ||
             selectedMonth === "10") {
      this.setDaysForMonth(30);
    }
    else {
      this.setDaysForMonth(31);
    };
  },

  setDaysForMonth : function(x) {
    var daySelectTag = document.getElementsByName('day')[0];
    daySelectTag.options.length = 0;
      for(var i=1; i <= x; i++) {
      daySelectTag.options.add(new Option(i, i));
    }
  },

  setUsersBirthday: function() {
    var usersMonth = document.getElementById("month").value;
    var usersDay = document.getElementById("day").value;
    var usersYear = document.getElementById("year").value;
    this.usersBirthday.setMonth(usersMonth);
    this.usersBirthday.setDate(usersDay);
    this.usersBirthday.setFullYear(usersYear);
  },

  setMinimumAge: function() {
    var today = new Date();
    today.setFullYear(today.getFullYear() - this.minimumAge);
    return today;
  },

  notMinimumAge : function() {
    window.location = this.userNotOldEnoughPage
  },

  userIsOverMinimumAge: function () {
    if (this.usersBirthday < this.setMinimumAge()) {
      return true;
    }
  },

  setCookie: function (c_name,value,exMinutes) {
    var exdate=new Date();
    exdate.setMinutes(exdate.getMinutes() + exMinutes);
    var c_value=escape(value) + ((exMinutes==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
  },

  getCookie: function (c_name) {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
      {
        return unescape(x);
      }
    }
  },

  checkCookie:   function () {
    var usersBirthday=this.getCookie("usersBirthday");
    if (usersBirthday==null || usersBirthday=="") {
      window.location = "ageCheckTester.html";
    }
  }
}
