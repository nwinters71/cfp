<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Login Form</title>
	
	<style>
		body {font-family: consolas;}
	</style>

</head>
<body>

<cfif isDefined("session.user.LoggedIn") and session.user.LoggedIn>

	<cflocation url="/cfp" addtoken="no" />
	<a href="loginCRUD.cfm?action=logout">Logout</a>
	<!--- <cfdump var="#session#">
	<cfdump var="#cookie#">
	<cfdump var="#cgi#"> --->


<cfelse>

<div style="margin:auto; width: 450px;">


	<form action="loginCRUD.cfm" method="post" />
	<div style="border:thin black solid; padding: 20px; margin-top: 30px;">
		<div style="font-size:18px; font-weight:bold;">Login</div>
		<cfoutput>
		<input type="hidden" name="token" value="#CSRFGenerateToken()#" />
		<!--- <input type="hidden" name="action" value="login" /> --->
		</cfoutput>
		<p /><div style="width: 200px; display: inline-block;">Email:</div><input type="text" name="email" value="" size="50" />
		<p /><div style="width: 200px; display: inline-block;">Password:</div><input type="text" name="password" value="" size="50" />
		<p /><input type="checkbox" value="StayLoggedIn" /> Keep me logged in
		 &nbsp;::&nbsp;  <a href="loginCRUD.cfm?forgot">Forgot Password</a> 
		<p /><input type="submit" value="Login" />
	</div>
	</form>


	<form action="loginCRUD.cfm" method="post" />
	<div style="border:thin black solid; padding: 20px; margin-top: 30px;">
		<div style="font-size:18px; font-weight:bold;">Sign Up</div>
		<cfoutput>
		<input type="hidden" name="token" value="#CSRFGenerateToken()#" />
		<!--- <input type="hidden" name="action" value="signup" /> --->
		</cfoutput>
		<p /><div style="width: 200px; display:inline-block">Email:</div> <input type="text" name="email" value="" size="50" />
		<p /><div style="width: 200px; display: inline-block;">Password:</div> <input type="password" name="password" value="" size="50" />
		<!--- <p /><div style="width: 200px; display: inline-block;">Confirm Password:</div> <input type="password" name="password2" value="" size="50" /> --->
		<p /><input type="submit" value="Signup" />
	</div>
	</form>

<br />


</div>

</cfif>

<!--- <cfdump var="#session#"> --->


</body>
</html>
