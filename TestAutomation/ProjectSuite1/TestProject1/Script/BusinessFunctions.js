
//USEUNIT CommonFunctions

/*
====================================================================================================
 FUNCTION NAME     : fnRegisterUser
 DESCRIPTION       : Function to register user
 INPUT PARAMETERS  : FirstName,LastName,Address,City,State,Zipcode,Phone,SSN,UserName,Password,Confirm
 RETURN VALUE      : True or False
 AUTHOR            : Dayanand Bhat
 DATE CREATED      :                                                          
                                               MODIFICATION LOG
                                               ------------------
 DATE MODIFIED  AUTHOR               DESCRIPTION
 -------------  -----------------    ---------------------------------------------------------------
======================================================================================================
*/
function fnRegisterUser(strFirstName,strLastName,strAddress,strCity,strState,intZipcode,intPhone,strSSN,strUserName,strPassword,strConfirm)
{
 try{ 
  Browsers.Item(btChrome).Navigate("https://parabank.parasoft.com/parabank/index.htm;jsessionid=*");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageParabankWelcomeOnlineBanking.linkRegister.Click();
  Delay(2000,"waiting for user registration form to open....")
  let form = browser.pageParabankRegisterForFreeOnlin.formCustomerform;
  let textbox = form.textboxCustomerFirstname; 
  if(strFirstName != null)
   textbox.SetText(strFirstName);
  textbox = form.textboxCustomerLastname;
  if(strLastName != null)
  textbox.SetText(strLastName);
  textbox = form.textboxCustomerAddressStreet;
  if(strAddress != null)
  textbox.SetText(strAddress);
  textbox = form.textboxCustomerAddressCity;
  if(strCity != null)
  textbox.SetText(strCity);
  textbox = form.textboxCustomerAddressState;
  if(strState != null)
  textbox.SetText(strState);
  textbox = form.textboxCustomerAddressZipcode;
  if(intZipcode != null)
  textbox.SetText(intZipcode);
  textbox = form.textboxCustomerPhonenumber;
  if(intPhone != null)
  textbox.SetText(intPhone);
  textbox = form.textboxCustomerSsn;
  if(strSSN != null)
  textbox.SetText(strSSN);
  textbox = form.textboxCustomerUsername;
  if(strUserName != null)
  textbox.SetText(strUserName);
  let passwordBox = form.passwordboxCustomerPassword;
  if(strPassword != null)
  passwordBox.SetText(strPassword);
  passwordBox = form.passwordboxRepeatedpassword;
  if(strConfirm != null)
  passwordBox.SetText(strConfirm);
  form.submitbuttonRegister.ClickButton();
  
 }
 catch(e)
  {
   Log.Error("FAILED::: "+e.description);
  }
}

function Test1()
{
  Browsers.Item(btChrome).Run("https://parabank.parasoft.com/parabank/index.htm;jsessionid=237BF4325B2AA1D058C43DAFC02D59C8");
  Aliases.browser.BrowserWindow.Maximize();
}

function Test2()
{
  Browsers.Item(btChrome).Navigate("https://parabank.parasoft.com/parabank/index.htm;jsessionid=*");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageParabankWelcomeOnlineBanking.linkRegister.Click();
}

function Test3()
{
  Browsers.Item(btChrome).Navigate("https://parabank.parasoft.com/parabank/register.htm");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let form = browser.pageParabankRegisterForFreeOnlin.formCustomerform;
  let textbox = form.textboxCustomerAddressCity;
  textbox.Click();
  textbox.SetText("Bangalore");
  textbox = form.textboxCustomerAddressState;
  textbox.Click();
  textbox.SetText("Karnataka");
  textbox = form.textboxCustomerAddressZipcode;
  textbox.Click();
  textbox.SetText("560048");
  textbox = form.textboxCustomerPhonenumber;
  textbox.Click();
  textbox.SetText("123456");
  textbox = form.textboxCustomerSsn;
  textbox.Click();
  textbox.SetText("3457");
  textbox = form.textboxCustomerUsername;
  textbox.Click();
  textbox.SetText("Daya001");
  let passwordBox = form.passwordboxCustomerPassword;
  passwordBox.Click();
  passwordBox.SetText(Project.Variables.Password1);
  passwordBox = form.passwordboxRepeatedpassword;
  passwordBox.Click();
  passwordBox.SetText(Project.Variables.Password1);
  form.submitbuttonRegister.ClickButton();
}