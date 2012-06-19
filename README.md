ageChecker
==========

very basic javascript minimum age checking

##Security
This isnt a secure way to keep users out of websites with delicate information. For something like an alcohol website restricting users under 21 years of age access, it's does the job. I created it for a site that could only use javascript, html, and css.

## To change the default settings-
open up ageChecker.js and at the top of the file you can adjust the minimum age, where to redirect to when the user is old enough, and where to redirect when the user is too young. The defaults looks like-
'''
minimumAge : 21,
userIsOldEnoughPage : "welcome.html",
userNotOldEnoughPage : "http://www.centurycouncil.org/landing",
'''
## To set the users birthday on a page
include ageChecker.js to your html head section -
'''
<script type="text/javascript" src="ageChecker.js"></script>
'''
as of now you must have these fields included in your html file-
'''
<select name="month" id="month" onchange="ageCheck.setTheMonth()"></select>
<select name="day" id="day"></select>
<select name="year" id="year"></select>
<button id="submit" onclick="ageCheck.start()">Lets do it!</button>
'''
select fields must have appropriate option values underneath them. This will all be
automated soon...
The dates in the day section will adjust depending on the month selected. Note that leap years are not currently implemented.

## To check for the age before allowing access to a page
include the following in the html head section of any page you want to deny access to younger users-
''' 
<script type="text/javascript" src="ageChecker.js"></script>
<script type="text/javascript">
  ageCheck.checkCookie();
</script>
'''
this checks if the user has an appropriate cookie set, and if not, redirects
to the specified page in your ageChecker.js file.

## Handling users with javascript disabled
if you want to keep users with javascript disabled out, add the following to the html head section of any page you want to keep users out of-
'''
<noscript>
<meta HTTP-EQUIV="REFRESH" content="2; url=YourWebsiteWithAgecheck.html"> 
</noscript>
'''
Fill in the url="YourWebsiteWithAgecheck" with the appropriate page you want to redirect to. 

You may also want to add this to the page where users set their birthday -
'''
<noscript>
You must have javascript enabled to view this page.
</noscript>
'''
It lets users who have javascript disabled that they will not be able to use your site.