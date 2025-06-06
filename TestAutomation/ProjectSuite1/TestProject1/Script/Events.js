﻿//USEUNIT CommonFunctions


function EventControl1_OnStartTest(Sender)
{

 }  

function EventControl1_OnStartTestCase(Sender, StartTestCaseParams)
{
//   aqFile.WriteToTextFile(resultFilePath, "Build Number::"+sBuildNumber+"=======" + "Execution Date::"+aqDateTime.Today()+"... \t"+"\r\n", aqFile.ctANSI, true);
}

function EventControl1_OnStopTest(Sender)
{

}

function EventControl1_OnLogError(Sender, LogParams)
{
//  var testCase = Project.TestItems.Current.Name
//  Project.Variables.AddVariable(testCase, "String");
//  Project.Variables.testCase = "FAIL";
}
/*
====================================================================================================
 FUNCTION NAME     : EventControl1_OnStopTestCase()
 DESCRIPTION       : This function is to write Pass or fail in external text file depending on result
 INPUT PARAMETERS  : Nil
 OUTPUT PARAMETERS : Nil
 AUTHOR            : Dayanand
 DATE CREATED      : 05-Apr-2025                                                  
                                               MODIFICATION LOG
                                               ------------------
 DATE MODIFIED  AUTHOR               DESCRIPTION
 -------------  -----------------    ---------------------------------------------------------------
 
======================================================================================================
*/
function EventControl1_OnStopTestCase(Sender, StopTestCaseParams)
{
   var objconfig = fnToFindRelativeEnvironmentPath("configFile");
   var objPersonalPropsDD = fnLoadPersonalProperties(objconfig);
   var resultFilePath = objPersonalPropsDD.Item("ResultFilePath");
   var oFile = aqFile.OpenTextFile(resultFilePath, aqFile.faWrite, aqFile.ctUnicode);
   var testName = Project.TestItems.Current.Name;

  var testResult;

  // Determine the test result based on error and warning counts
  if (Log.ErrCount > 0)
    testResult = "FAILED";
  else if (Log.WrnCount > 0)
    testResult = "WARNING";
  else
    testResult = "PASSED";

  if (!aqFile.Exists(resultFilePath))
    aqFile.Create(resultFilePath);
 var currentDateAndTime = aqDateTime.Now();
// oFile.WriteLine("============="+currentDateAndTime+"=======================");
 oFile.WriteLine("TestCase:: "+testName+"::"+testResult+"----Execution Date----"+currentDateAndTime);
 oFile.WriteLine("\n");
// oFile.WriteLine("======================================================");
 oFile.Close();
 
}

function EventControl1_OnUnexpectedWindow(Sender, Window, LogParams)
{
  //Close any un expected window which appears during run time
}

function test()
{
  var oFile = aqFile.OpenTextFile("E:\\MyFile.txt", aqFile.faWrite, aqFile.ctUnicode);
   var currentDateAndTime = aqDateTime.Now();
   Log.Message("Date is"+currentDateAndTime) ;
 oFile.WriteLine("============="+currentDateAndTime+"=======================");
  oFile.Close();
}

function ComparingDates()
{
  var currentDateAndTime = aqDateTime.Now();
  var currentTime = aqDateTime.Time();
  // The default date for currentTime is set to 12/30/1899
  var currentDate = aqDateTime.Today();
  // The default time for currentDate is set to 00:00:00

  Log.Message(currentDateAndTime);
  Log.Message(currentTime);
  Log.Message(currentDate);

  Log.Message(aqDateTime.Compare(currentDateAndTime, currentTime));
  // 1, because currentDateAndTime is later then currentTime

  Log.Message(aqDateTime.Compare(currentDateAndTime, currentDate));
  // 1, because currentDateAndTime is later then currentDate

  Log.Message(aqDateTime.Compare(currentTime, currentDate));
  // -1, because currentTime is earlier then currentDate
}