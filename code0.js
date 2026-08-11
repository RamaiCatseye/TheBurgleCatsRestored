gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDMenuBGObjects1= [];
gdjs.MenuCode.GDMenuBGObjects2= [];
gdjs.MenuCode.GDMenuBGObjects3= [];
gdjs.MenuCode.GDMenuBGObjects4= [];
gdjs.MenuCode.GDMenuTitleObjects1= [];
gdjs.MenuCode.GDMenuTitleObjects2= [];
gdjs.MenuCode.GDMenuTitleObjects3= [];
gdjs.MenuCode.GDMenuTitleObjects4= [];
gdjs.MenuCode.GDMenuEnterObjects1= [];
gdjs.MenuCode.GDMenuEnterObjects2= [];
gdjs.MenuCode.GDMenuEnterObjects3= [];
gdjs.MenuCode.GDMenuEnterObjects4= [];
gdjs.MenuCode.GDMenuEnterTextObjects1= [];
gdjs.MenuCode.GDMenuEnterTextObjects2= [];
gdjs.MenuCode.GDMenuEnterTextObjects3= [];
gdjs.MenuCode.GDMenuEnterTextObjects4= [];
gdjs.MenuCode.GDPONOSObjects1= [];
gdjs.MenuCode.GDPONOSObjects2= [];
gdjs.MenuCode.GDPONOSObjects3= [];
gdjs.MenuCode.GDPONOSObjects4= [];
gdjs.MenuCode.GDCatseyeObjects1= [];
gdjs.MenuCode.GDCatseyeObjects2= [];
gdjs.MenuCode.GDCatseyeObjects3= [];
gdjs.MenuCode.GDCatseyeObjects4= [];
gdjs.MenuCode.GDLoadingObjects1= [];
gdjs.MenuCode.GDLoadingObjects2= [];
gdjs.MenuCode.GDLoadingObjects3= [];
gdjs.MenuCode.GDLoadingObjects4= [];
gdjs.MenuCode.GDLoadingInfoObjects1= [];
gdjs.MenuCode.GDLoadingInfoObjects2= [];
gdjs.MenuCode.GDLoadingInfoObjects3= [];
gdjs.MenuCode.GDLoadingInfoObjects4= [];
gdjs.MenuCode.GDTheBurgleCatsRestoredObjects1= [];
gdjs.MenuCode.GDTheBurgleCatsRestoredObjects2= [];
gdjs.MenuCode.GDTheBurgleCatsRestoredObjects3= [];
gdjs.MenuCode.GDTheBurgleCatsRestoredObjects4= [];
gdjs.MenuCode.GDRESTOREDObjects1= [];
gdjs.MenuCode.GDRESTOREDObjects2= [];
gdjs.MenuCode.GDRESTOREDObjects3= [];
gdjs.MenuCode.GDRESTOREDObjects4= [];
gdjs.MenuCode.GDTBCObjects1= [];
gdjs.MenuCode.GDTBCObjects2= [];
gdjs.MenuCode.GDTBCObjects3= [];
gdjs.MenuCode.GDTBCObjects4= [];
gdjs.MenuCode.GDFadeObjects1= [];
gdjs.MenuCode.GDFadeObjects2= [];
gdjs.MenuCode.GDFadeObjects3= [];
gdjs.MenuCode.GDFadeObjects4= [];
gdjs.MenuCode.GDSkillWhatObjects1= [];
gdjs.MenuCode.GDSkillWhatObjects2= [];
gdjs.MenuCode.GDSkillWhatObjects3= [];
gdjs.MenuCode.GDSkillWhatObjects4= [];
gdjs.MenuCode.GDCat_9595BodyObjects1= [];
gdjs.MenuCode.GDCat_9595BodyObjects2= [];
gdjs.MenuCode.GDCat_9595BodyObjects3= [];
gdjs.MenuCode.GDCat_9595BodyObjects4= [];
gdjs.MenuCode.GDGlitchObjects1= [];
gdjs.MenuCode.GDGlitchObjects2= [];
gdjs.MenuCode.GDGlitchObjects3= [];
gdjs.MenuCode.GDGlitchObjects4= [];
gdjs.MenuCode.GDCorruptSpawnObjects1= [];
gdjs.MenuCode.GDCorruptSpawnObjects2= [];
gdjs.MenuCode.GDCorruptSpawnObjects3= [];
gdjs.MenuCode.GDCorruptSpawnObjects4= [];
gdjs.MenuCode.GDRankObjects1= [];
gdjs.MenuCode.GDRankObjects2= [];
gdjs.MenuCode.GDRankObjects3= [];
gdjs.MenuCode.GDRankObjects4= [];
gdjs.MenuCode.GDRankOutlineObjects1= [];
gdjs.MenuCode.GDRankOutlineObjects2= [];
gdjs.MenuCode.GDRankOutlineObjects3= [];
gdjs.MenuCode.GDRankOutlineObjects4= [];
gdjs.MenuCode.GDRankFillObjects1= [];
gdjs.MenuCode.GDRankFillObjects2= [];
gdjs.MenuCode.GDRankFillObjects3= [];
gdjs.MenuCode.GDRankFillObjects4= [];
gdjs.MenuCode.GDRankBar1Objects1= [];
gdjs.MenuCode.GDRankBar1Objects2= [];
gdjs.MenuCode.GDRankBar1Objects3= [];
gdjs.MenuCode.GDRankBar1Objects4= [];
gdjs.MenuCode.GDRankBar2Objects1= [];
gdjs.MenuCode.GDRankBar2Objects2= [];
gdjs.MenuCode.GDRankBar2Objects3= [];
gdjs.MenuCode.GDRankBar2Objects4= [];
gdjs.MenuCode.GDRankTextObjects1= [];
gdjs.MenuCode.GDRankTextObjects2= [];
gdjs.MenuCode.GDRankTextObjects3= [];
gdjs.MenuCode.GDRankTextObjects4= [];
gdjs.MenuCode.GDMaxObjects1= [];
gdjs.MenuCode.GDMaxObjects2= [];
gdjs.MenuCode.GDMaxObjects3= [];
gdjs.MenuCode.GDMaxObjects4= [];
gdjs.MenuCode.GDDebuffObjects1= [];
gdjs.MenuCode.GDDebuffObjects2= [];
gdjs.MenuCode.GDDebuffObjects3= [];
gdjs.MenuCode.GDDebuffObjects4= [];
gdjs.MenuCode.GDAccessory_9595TopObjects1= [];
gdjs.MenuCode.GDAccessory_9595TopObjects2= [];
gdjs.MenuCode.GDAccessory_9595TopObjects3= [];
gdjs.MenuCode.GDAccessory_9595TopObjects4= [];
gdjs.MenuCode.GDAccessory_9595BottomObjects1= [];
gdjs.MenuCode.GDAccessory_9595BottomObjects2= [];
gdjs.MenuCode.GDAccessory_9595BottomObjects3= [];
gdjs.MenuCode.GDAccessory_9595BottomObjects4= [];
gdjs.MenuCode.GDManorIconObjects1= [];
gdjs.MenuCode.GDManorIconObjects2= [];
gdjs.MenuCode.GDManorIconObjects3= [];
gdjs.MenuCode.GDManorIconObjects4= [];
gdjs.MenuCode.GDscenechangeObjects1= [];
gdjs.MenuCode.GDscenechangeObjects2= [];
gdjs.MenuCode.GDscenechangeObjects3= [];
gdjs.MenuCode.GDscenechangeObjects4= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, "Hub") > 0.05;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(97008700);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoadingInfo"), gdjs.MenuCode.GDLoadingInfoObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDLoadingInfoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadingInfoObjects2[i].getBehavior("Text").setText("Getting Data");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, "Hub") > 0.2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96988668);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoadingInfo"), gdjs.MenuCode.GDLoadingInfoObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDLoadingInfoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadingInfoObjects2[i].getBehavior("Text").setText("Waking Up Doges");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, "Hub") > 0.4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96979596);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoadingInfo"), gdjs.MenuCode.GDLoadingInfoObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDLoadingInfoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadingInfoObjects2[i].getBehavior("Text").setText("Drawing Cat Faces");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, "Hub") > 0.6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96975180);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoadingInfo"), gdjs.MenuCode.GDLoadingInfoObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDLoadingInfoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadingInfoObjects2[i].getBehavior("Text").setText("Hanging Around");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, "Hub") == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96958972);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.MenuCode.GDLoadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("LoadingInfo"), gdjs.MenuCode.GDLoadingInfoObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuEnter"), gdjs.MenuCode.GDMenuEnterObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuEnterText"), gdjs.MenuCode.GDMenuEnterTextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMenuEnterObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuEnterObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenuEnterTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuEnterTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadingObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuCode.GDLoadingInfoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadingInfoObjects1[i].hide();
}
}
}

}


};gdjs.MenuCode.asyncCallback91275468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Hub", false);
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(91275468, gdjs.MenuCode.asyncCallback91275468);
gdjs.MenuCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback91275468(runtimeScene, asyncObjectsList)), 91275468, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback48243788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 1, 0, 0.5);
}

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(48243788, gdjs.MenuCode.asyncCallback48243788);
gdjs.MenuCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.MenuCode.asyncCallback48243788(runtimeScene, asyncObjectsList)), 48243788, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback62531388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.MenuCode.GDFadeObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDFadeObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDFadeObjects2[i].setY(0);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFadeObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDFadeObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDFadeObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDFadeObjects2[i].getBehavior("Tween").addObjectOpacityTween2("1", 254, "easeOutQuad", 0.8, false);
}
}

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(62531388, gdjs.MenuCode.asyncCallback62531388);
gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback62531388(runtimeScene, asyncObjectsList)), 62531388, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback62252500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(62252500, gdjs.MenuCode.asyncCallback62252500);
gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback62252500(runtimeScene, asyncObjectsList)), 62252500, asyncObjectsList);
}
}

}


};gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(97634444);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MenuEnter"), gdjs.MenuCode.GDMenuEnterObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuEnterText"), gdjs.MenuCode.GDMenuEnterTextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMenuEnterObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuEnterObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenuEnterTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuEnterTextObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timefromstart");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "bgm_002.ogg");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(97028588);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MenuEnterText"), gdjs.MenuCode.GDMenuEnterTextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMenuEnterTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuEnterTextObjects1[i].getBehavior("Text").setText("Tap anywhere to start");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timefromstart") < 20;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timefromstart") >= 15;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoadingInfo"), gdjs.MenuCode.GDLoadingInfoObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDLoadingInfoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadingInfoObjects1[i].getBehavior("Text").setText("Sorry, please wait");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timefromstart") >= 20;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Hub");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96922284);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.MenuCode.GDLoadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("LoadingInfo"), gdjs.MenuCode.GDLoadingInfoObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuEnter"), gdjs.MenuCode.GDMenuEnterObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuEnterText"), gdjs.MenuCode.GDMenuEnterTextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMenuEnterObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuEnterObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenuEnterTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuEnterTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadingObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuCode.GDLoadingInfoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadingInfoObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96915660);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loadtext");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "loadtext") >= 0.4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96900940);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.MenuCode.GDLoadingObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadingObjects1[i].getBehavior("Text").setText("Loading.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "loadtext") >= 0.8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96887692);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.MenuCode.GDLoadingObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadingObjects1[i].getBehavior("Text").setText("Loading..");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "loadtext") >= 1.2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96852948);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.MenuCode.GDLoadingObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadingObjects1[i].getBehavior("Text").setText("Loading...");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "loadtext") >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96806556);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.MenuCode.GDLoadingObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadingObjects1[i].getBehavior("Text").setText("Loading");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loadtext");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("MUTE", "1"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96765508);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(191).setNumber(100);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96763700);
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("MUTE", "1", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(191));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(191).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96795364);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(191).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96760756);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MenuEnter"), gdjs.MenuCode.GDMenuEnterObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuTitle"), gdjs.MenuCode.GDMenuTitleObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMenuTitleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuTitleObjects1[i].getBehavior("Tween").addObjectPositionYTween2("fall", 130, "easeInOutQuad", 4, false);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenuEnterObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuEnterObjects1[i].getBehavior("Tween").addObjectPositionYTween2("fall", 425, "easeInOutQuad", 3, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuTitle"), gdjs.MenuCode.GDMenuTitleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuTitleObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuTitleObjects1[i].getBehavior("Tween").hasFinished("rise") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuTitleObjects1[k] = gdjs.MenuCode.GDMenuTitleObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuTitleObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96704684);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenuTitleObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMenuTitleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuTitleObjects1[i].getBehavior("Tween").addObjectPositionYTween2("fall", 130, "easeInOutQuad", 4, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuTitle"), gdjs.MenuCode.GDMenuTitleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuTitleObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuTitleObjects1[i].getBehavior("Tween").hasFinished("fall") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuTitleObjects1[k] = gdjs.MenuCode.GDMenuTitleObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuTitleObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96692580);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenuTitleObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMenuTitleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuTitleObjects1[i].getBehavior("Tween").addObjectPositionYTween2("rise", 126, "easeInOutQuad", 4, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuEnter"), gdjs.MenuCode.GDMenuEnterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuEnterObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuEnterObjects1[i].getBehavior("Tween").hasFinished("rise") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuEnterObjects1[k] = gdjs.MenuCode.GDMenuEnterObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuEnterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96680804);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenuEnterObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMenuEnterObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuEnterObjects1[i].getBehavior("Tween").addObjectPositionYTween2("fall", 425, "easeInOutQuad", 3, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuEnter"), gdjs.MenuCode.GDMenuEnterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuEnterObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuEnterObjects1[i].getBehavior("Tween").hasFinished("fall") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuEnterObjects1[k] = gdjs.MenuCode.GDMenuEnterObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuEnterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96660124);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenuEnterObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMenuEnterObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuEnterObjects1[i].getBehavior("Tween").addObjectPositionYTween2("rise", 414, "easeInOutQuad", 3, false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MenuEnter"), gdjs.MenuCode.GDMenuEnterObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuEnterText"), gdjs.MenuCode.GDMenuEnterTextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMenuEnterTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuEnterTextObjects1[i].putAroundObject((gdjs.MenuCode.GDMenuEnterObjects1.length !== 0 ? gdjs.MenuCode.GDMenuEnterObjects1[0] : null), 0, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuEnter"), gdjs.MenuCode.GDMenuEnterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuEnterObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuEnterObjects1[i].getBehavior("Animation").isAnimationPaused() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuEnterObjects1[k] = gdjs.MenuCode.GDMenuEnterObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuEnterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuEnterObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuEnterObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuEnterObjects1[k] = gdjs.MenuCode.GDMenuEnterObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuEnterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(51011548);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenuEnterObjects1 */
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Hub");
}
{for(var i = 0, len = gdjs.MenuCode.GDMenuEnterObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuEnterObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "se_004.mp3", 2, false, 100, 1);
}

{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(65822188);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(191)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(42228532);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13108420);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(65654908);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MenuEnter"), gdjs.MenuCode.GDMenuEnterObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMenuEnterObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuEnterObjects1[i].getBehavior("Animation").pauseAnimation();
}
}

{ //Subevents
gdjs.MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MenuTitle"), gdjs.MenuCode.GDMenuTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("RESTORED"), gdjs.MenuCode.GDRESTOREDObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDRESTOREDObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRESTOREDObjects1[i].putAround((( gdjs.MenuCode.GDMenuTitleObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDMenuTitleObjects1[0].getPointX("Restored")), (( gdjs.MenuCode.GDMenuTitleObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDMenuTitleObjects1[0].getPointY("Restored")), 0, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39145644);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RESTORED"), gdjs.MenuCode.GDRESTOREDObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDRESTOREDObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRESTOREDObjects1[i].setGradient("LINEAR_VERTICAL", "201;201;201", "226;226;226", "241;241;241", "196;196;196");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(46134516);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.MenuCode.GDLoadingObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadingObjects1[i].setGradient("LINEAR_VERTICAL", "196;166;43", "219;186;48", "238;202;52", "206;175;45");
}
}
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDMenuBGObjects1.length = 0;
gdjs.MenuCode.GDMenuBGObjects2.length = 0;
gdjs.MenuCode.GDMenuBGObjects3.length = 0;
gdjs.MenuCode.GDMenuBGObjects4.length = 0;
gdjs.MenuCode.GDMenuTitleObjects1.length = 0;
gdjs.MenuCode.GDMenuTitleObjects2.length = 0;
gdjs.MenuCode.GDMenuTitleObjects3.length = 0;
gdjs.MenuCode.GDMenuTitleObjects4.length = 0;
gdjs.MenuCode.GDMenuEnterObjects1.length = 0;
gdjs.MenuCode.GDMenuEnterObjects2.length = 0;
gdjs.MenuCode.GDMenuEnterObjects3.length = 0;
gdjs.MenuCode.GDMenuEnterObjects4.length = 0;
gdjs.MenuCode.GDMenuEnterTextObjects1.length = 0;
gdjs.MenuCode.GDMenuEnterTextObjects2.length = 0;
gdjs.MenuCode.GDMenuEnterTextObjects3.length = 0;
gdjs.MenuCode.GDMenuEnterTextObjects4.length = 0;
gdjs.MenuCode.GDPONOSObjects1.length = 0;
gdjs.MenuCode.GDPONOSObjects2.length = 0;
gdjs.MenuCode.GDPONOSObjects3.length = 0;
gdjs.MenuCode.GDPONOSObjects4.length = 0;
gdjs.MenuCode.GDCatseyeObjects1.length = 0;
gdjs.MenuCode.GDCatseyeObjects2.length = 0;
gdjs.MenuCode.GDCatseyeObjects3.length = 0;
gdjs.MenuCode.GDCatseyeObjects4.length = 0;
gdjs.MenuCode.GDLoadingObjects1.length = 0;
gdjs.MenuCode.GDLoadingObjects2.length = 0;
gdjs.MenuCode.GDLoadingObjects3.length = 0;
gdjs.MenuCode.GDLoadingObjects4.length = 0;
gdjs.MenuCode.GDLoadingInfoObjects1.length = 0;
gdjs.MenuCode.GDLoadingInfoObjects2.length = 0;
gdjs.MenuCode.GDLoadingInfoObjects3.length = 0;
gdjs.MenuCode.GDLoadingInfoObjects4.length = 0;
gdjs.MenuCode.GDTheBurgleCatsRestoredObjects1.length = 0;
gdjs.MenuCode.GDTheBurgleCatsRestoredObjects2.length = 0;
gdjs.MenuCode.GDTheBurgleCatsRestoredObjects3.length = 0;
gdjs.MenuCode.GDTheBurgleCatsRestoredObjects4.length = 0;
gdjs.MenuCode.GDRESTOREDObjects1.length = 0;
gdjs.MenuCode.GDRESTOREDObjects2.length = 0;
gdjs.MenuCode.GDRESTOREDObjects3.length = 0;
gdjs.MenuCode.GDRESTOREDObjects4.length = 0;
gdjs.MenuCode.GDTBCObjects1.length = 0;
gdjs.MenuCode.GDTBCObjects2.length = 0;
gdjs.MenuCode.GDTBCObjects3.length = 0;
gdjs.MenuCode.GDTBCObjects4.length = 0;
gdjs.MenuCode.GDFadeObjects1.length = 0;
gdjs.MenuCode.GDFadeObjects2.length = 0;
gdjs.MenuCode.GDFadeObjects3.length = 0;
gdjs.MenuCode.GDFadeObjects4.length = 0;
gdjs.MenuCode.GDSkillWhatObjects1.length = 0;
gdjs.MenuCode.GDSkillWhatObjects2.length = 0;
gdjs.MenuCode.GDSkillWhatObjects3.length = 0;
gdjs.MenuCode.GDSkillWhatObjects4.length = 0;
gdjs.MenuCode.GDCat_9595BodyObjects1.length = 0;
gdjs.MenuCode.GDCat_9595BodyObjects2.length = 0;
gdjs.MenuCode.GDCat_9595BodyObjects3.length = 0;
gdjs.MenuCode.GDCat_9595BodyObjects4.length = 0;
gdjs.MenuCode.GDGlitchObjects1.length = 0;
gdjs.MenuCode.GDGlitchObjects2.length = 0;
gdjs.MenuCode.GDGlitchObjects3.length = 0;
gdjs.MenuCode.GDGlitchObjects4.length = 0;
gdjs.MenuCode.GDCorruptSpawnObjects1.length = 0;
gdjs.MenuCode.GDCorruptSpawnObjects2.length = 0;
gdjs.MenuCode.GDCorruptSpawnObjects3.length = 0;
gdjs.MenuCode.GDCorruptSpawnObjects4.length = 0;
gdjs.MenuCode.GDRankObjects1.length = 0;
gdjs.MenuCode.GDRankObjects2.length = 0;
gdjs.MenuCode.GDRankObjects3.length = 0;
gdjs.MenuCode.GDRankObjects4.length = 0;
gdjs.MenuCode.GDRankOutlineObjects1.length = 0;
gdjs.MenuCode.GDRankOutlineObjects2.length = 0;
gdjs.MenuCode.GDRankOutlineObjects3.length = 0;
gdjs.MenuCode.GDRankOutlineObjects4.length = 0;
gdjs.MenuCode.GDRankFillObjects1.length = 0;
gdjs.MenuCode.GDRankFillObjects2.length = 0;
gdjs.MenuCode.GDRankFillObjects3.length = 0;
gdjs.MenuCode.GDRankFillObjects4.length = 0;
gdjs.MenuCode.GDRankBar1Objects1.length = 0;
gdjs.MenuCode.GDRankBar1Objects2.length = 0;
gdjs.MenuCode.GDRankBar1Objects3.length = 0;
gdjs.MenuCode.GDRankBar1Objects4.length = 0;
gdjs.MenuCode.GDRankBar2Objects1.length = 0;
gdjs.MenuCode.GDRankBar2Objects2.length = 0;
gdjs.MenuCode.GDRankBar2Objects3.length = 0;
gdjs.MenuCode.GDRankBar2Objects4.length = 0;
gdjs.MenuCode.GDRankTextObjects1.length = 0;
gdjs.MenuCode.GDRankTextObjects2.length = 0;
gdjs.MenuCode.GDRankTextObjects3.length = 0;
gdjs.MenuCode.GDRankTextObjects4.length = 0;
gdjs.MenuCode.GDMaxObjects1.length = 0;
gdjs.MenuCode.GDMaxObjects2.length = 0;
gdjs.MenuCode.GDMaxObjects3.length = 0;
gdjs.MenuCode.GDMaxObjects4.length = 0;
gdjs.MenuCode.GDDebuffObjects1.length = 0;
gdjs.MenuCode.GDDebuffObjects2.length = 0;
gdjs.MenuCode.GDDebuffObjects3.length = 0;
gdjs.MenuCode.GDDebuffObjects4.length = 0;
gdjs.MenuCode.GDAccessory_9595TopObjects1.length = 0;
gdjs.MenuCode.GDAccessory_9595TopObjects2.length = 0;
gdjs.MenuCode.GDAccessory_9595TopObjects3.length = 0;
gdjs.MenuCode.GDAccessory_9595TopObjects4.length = 0;
gdjs.MenuCode.GDAccessory_9595BottomObjects1.length = 0;
gdjs.MenuCode.GDAccessory_9595BottomObjects2.length = 0;
gdjs.MenuCode.GDAccessory_9595BottomObjects3.length = 0;
gdjs.MenuCode.GDAccessory_9595BottomObjects4.length = 0;
gdjs.MenuCode.GDManorIconObjects1.length = 0;
gdjs.MenuCode.GDManorIconObjects2.length = 0;
gdjs.MenuCode.GDManorIconObjects3.length = 0;
gdjs.MenuCode.GDManorIconObjects4.length = 0;
gdjs.MenuCode.GDscenechangeObjects1.length = 0;
gdjs.MenuCode.GDscenechangeObjects2.length = 0;
gdjs.MenuCode.GDscenechangeObjects3.length = 0;
gdjs.MenuCode.GDscenechangeObjects4.length = 0;

gdjs.MenuCode.eventsList5(runtimeScene);
gdjs.MenuCode.GDMenuBGObjects1.length = 0;
gdjs.MenuCode.GDMenuBGObjects2.length = 0;
gdjs.MenuCode.GDMenuBGObjects3.length = 0;
gdjs.MenuCode.GDMenuBGObjects4.length = 0;
gdjs.MenuCode.GDMenuTitleObjects1.length = 0;
gdjs.MenuCode.GDMenuTitleObjects2.length = 0;
gdjs.MenuCode.GDMenuTitleObjects3.length = 0;
gdjs.MenuCode.GDMenuTitleObjects4.length = 0;
gdjs.MenuCode.GDMenuEnterObjects1.length = 0;
gdjs.MenuCode.GDMenuEnterObjects2.length = 0;
gdjs.MenuCode.GDMenuEnterObjects3.length = 0;
gdjs.MenuCode.GDMenuEnterObjects4.length = 0;
gdjs.MenuCode.GDMenuEnterTextObjects1.length = 0;
gdjs.MenuCode.GDMenuEnterTextObjects2.length = 0;
gdjs.MenuCode.GDMenuEnterTextObjects3.length = 0;
gdjs.MenuCode.GDMenuEnterTextObjects4.length = 0;
gdjs.MenuCode.GDPONOSObjects1.length = 0;
gdjs.MenuCode.GDPONOSObjects2.length = 0;
gdjs.MenuCode.GDPONOSObjects3.length = 0;
gdjs.MenuCode.GDPONOSObjects4.length = 0;
gdjs.MenuCode.GDCatseyeObjects1.length = 0;
gdjs.MenuCode.GDCatseyeObjects2.length = 0;
gdjs.MenuCode.GDCatseyeObjects3.length = 0;
gdjs.MenuCode.GDCatseyeObjects4.length = 0;
gdjs.MenuCode.GDLoadingObjects1.length = 0;
gdjs.MenuCode.GDLoadingObjects2.length = 0;
gdjs.MenuCode.GDLoadingObjects3.length = 0;
gdjs.MenuCode.GDLoadingObjects4.length = 0;
gdjs.MenuCode.GDLoadingInfoObjects1.length = 0;
gdjs.MenuCode.GDLoadingInfoObjects2.length = 0;
gdjs.MenuCode.GDLoadingInfoObjects3.length = 0;
gdjs.MenuCode.GDLoadingInfoObjects4.length = 0;
gdjs.MenuCode.GDTheBurgleCatsRestoredObjects1.length = 0;
gdjs.MenuCode.GDTheBurgleCatsRestoredObjects2.length = 0;
gdjs.MenuCode.GDTheBurgleCatsRestoredObjects3.length = 0;
gdjs.MenuCode.GDTheBurgleCatsRestoredObjects4.length = 0;
gdjs.MenuCode.GDRESTOREDObjects1.length = 0;
gdjs.MenuCode.GDRESTOREDObjects2.length = 0;
gdjs.MenuCode.GDRESTOREDObjects3.length = 0;
gdjs.MenuCode.GDRESTOREDObjects4.length = 0;
gdjs.MenuCode.GDTBCObjects1.length = 0;
gdjs.MenuCode.GDTBCObjects2.length = 0;
gdjs.MenuCode.GDTBCObjects3.length = 0;
gdjs.MenuCode.GDTBCObjects4.length = 0;
gdjs.MenuCode.GDFadeObjects1.length = 0;
gdjs.MenuCode.GDFadeObjects2.length = 0;
gdjs.MenuCode.GDFadeObjects3.length = 0;
gdjs.MenuCode.GDFadeObjects4.length = 0;
gdjs.MenuCode.GDSkillWhatObjects1.length = 0;
gdjs.MenuCode.GDSkillWhatObjects2.length = 0;
gdjs.MenuCode.GDSkillWhatObjects3.length = 0;
gdjs.MenuCode.GDSkillWhatObjects4.length = 0;
gdjs.MenuCode.GDCat_9595BodyObjects1.length = 0;
gdjs.MenuCode.GDCat_9595BodyObjects2.length = 0;
gdjs.MenuCode.GDCat_9595BodyObjects3.length = 0;
gdjs.MenuCode.GDCat_9595BodyObjects4.length = 0;
gdjs.MenuCode.GDGlitchObjects1.length = 0;
gdjs.MenuCode.GDGlitchObjects2.length = 0;
gdjs.MenuCode.GDGlitchObjects3.length = 0;
gdjs.MenuCode.GDGlitchObjects4.length = 0;
gdjs.MenuCode.GDCorruptSpawnObjects1.length = 0;
gdjs.MenuCode.GDCorruptSpawnObjects2.length = 0;
gdjs.MenuCode.GDCorruptSpawnObjects3.length = 0;
gdjs.MenuCode.GDCorruptSpawnObjects4.length = 0;
gdjs.MenuCode.GDRankObjects1.length = 0;
gdjs.MenuCode.GDRankObjects2.length = 0;
gdjs.MenuCode.GDRankObjects3.length = 0;
gdjs.MenuCode.GDRankObjects4.length = 0;
gdjs.MenuCode.GDRankOutlineObjects1.length = 0;
gdjs.MenuCode.GDRankOutlineObjects2.length = 0;
gdjs.MenuCode.GDRankOutlineObjects3.length = 0;
gdjs.MenuCode.GDRankOutlineObjects4.length = 0;
gdjs.MenuCode.GDRankFillObjects1.length = 0;
gdjs.MenuCode.GDRankFillObjects2.length = 0;
gdjs.MenuCode.GDRankFillObjects3.length = 0;
gdjs.MenuCode.GDRankFillObjects4.length = 0;
gdjs.MenuCode.GDRankBar1Objects1.length = 0;
gdjs.MenuCode.GDRankBar1Objects2.length = 0;
gdjs.MenuCode.GDRankBar1Objects3.length = 0;
gdjs.MenuCode.GDRankBar1Objects4.length = 0;
gdjs.MenuCode.GDRankBar2Objects1.length = 0;
gdjs.MenuCode.GDRankBar2Objects2.length = 0;
gdjs.MenuCode.GDRankBar2Objects3.length = 0;
gdjs.MenuCode.GDRankBar2Objects4.length = 0;
gdjs.MenuCode.GDRankTextObjects1.length = 0;
gdjs.MenuCode.GDRankTextObjects2.length = 0;
gdjs.MenuCode.GDRankTextObjects3.length = 0;
gdjs.MenuCode.GDRankTextObjects4.length = 0;
gdjs.MenuCode.GDMaxObjects1.length = 0;
gdjs.MenuCode.GDMaxObjects2.length = 0;
gdjs.MenuCode.GDMaxObjects3.length = 0;
gdjs.MenuCode.GDMaxObjects4.length = 0;
gdjs.MenuCode.GDDebuffObjects1.length = 0;
gdjs.MenuCode.GDDebuffObjects2.length = 0;
gdjs.MenuCode.GDDebuffObjects3.length = 0;
gdjs.MenuCode.GDDebuffObjects4.length = 0;
gdjs.MenuCode.GDAccessory_9595TopObjects1.length = 0;
gdjs.MenuCode.GDAccessory_9595TopObjects2.length = 0;
gdjs.MenuCode.GDAccessory_9595TopObjects3.length = 0;
gdjs.MenuCode.GDAccessory_9595TopObjects4.length = 0;
gdjs.MenuCode.GDAccessory_9595BottomObjects1.length = 0;
gdjs.MenuCode.GDAccessory_9595BottomObjects2.length = 0;
gdjs.MenuCode.GDAccessory_9595BottomObjects3.length = 0;
gdjs.MenuCode.GDAccessory_9595BottomObjects4.length = 0;
gdjs.MenuCode.GDManorIconObjects1.length = 0;
gdjs.MenuCode.GDManorIconObjects2.length = 0;
gdjs.MenuCode.GDManorIconObjects3.length = 0;
gdjs.MenuCode.GDManorIconObjects4.length = 0;
gdjs.MenuCode.GDscenechangeObjects1.length = 0;
gdjs.MenuCode.GDscenechangeObjects2.length = 0;
gdjs.MenuCode.GDscenechangeObjects3.length = 0;
gdjs.MenuCode.GDscenechangeObjects4.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
