gdjs.EnterLeaugeCode = {};
gdjs.EnterLeaugeCode.localVariables = [];
gdjs.EnterLeaugeCode.idToCallbackMap = new Map();
gdjs.EnterLeaugeCode.GDLeaugeObjects1= [];
gdjs.EnterLeaugeCode.GDLeaugeObjects2= [];
gdjs.EnterLeaugeCode.GDLeaugeObjects3= [];
gdjs.EnterLeaugeCode.GDTapAnywhereObjects1= [];
gdjs.EnterLeaugeCode.GDTapAnywhereObjects2= [];
gdjs.EnterLeaugeCode.GDTapAnywhereObjects3= [];
gdjs.EnterLeaugeCode.GDFadeObjects1= [];
gdjs.EnterLeaugeCode.GDFadeObjects2= [];
gdjs.EnterLeaugeCode.GDFadeObjects3= [];
gdjs.EnterLeaugeCode.GDSkillWhatObjects1= [];
gdjs.EnterLeaugeCode.GDSkillWhatObjects2= [];
gdjs.EnterLeaugeCode.GDSkillWhatObjects3= [];
gdjs.EnterLeaugeCode.GDCat_9595BodyObjects1= [];
gdjs.EnterLeaugeCode.GDCat_9595BodyObjects2= [];
gdjs.EnterLeaugeCode.GDCat_9595BodyObjects3= [];
gdjs.EnterLeaugeCode.GDGlitchObjects1= [];
gdjs.EnterLeaugeCode.GDGlitchObjects2= [];
gdjs.EnterLeaugeCode.GDGlitchObjects3= [];
gdjs.EnterLeaugeCode.GDCorruptSpawnObjects1= [];
gdjs.EnterLeaugeCode.GDCorruptSpawnObjects2= [];
gdjs.EnterLeaugeCode.GDCorruptSpawnObjects3= [];
gdjs.EnterLeaugeCode.GDRankObjects1= [];
gdjs.EnterLeaugeCode.GDRankObjects2= [];
gdjs.EnterLeaugeCode.GDRankObjects3= [];
gdjs.EnterLeaugeCode.GDRankOutlineObjects1= [];
gdjs.EnterLeaugeCode.GDRankOutlineObjects2= [];
gdjs.EnterLeaugeCode.GDRankOutlineObjects3= [];
gdjs.EnterLeaugeCode.GDRankFillObjects1= [];
gdjs.EnterLeaugeCode.GDRankFillObjects2= [];
gdjs.EnterLeaugeCode.GDRankFillObjects3= [];
gdjs.EnterLeaugeCode.GDRankBar1Objects1= [];
gdjs.EnterLeaugeCode.GDRankBar1Objects2= [];
gdjs.EnterLeaugeCode.GDRankBar1Objects3= [];
gdjs.EnterLeaugeCode.GDRankBar2Objects1= [];
gdjs.EnterLeaugeCode.GDRankBar2Objects2= [];
gdjs.EnterLeaugeCode.GDRankBar2Objects3= [];
gdjs.EnterLeaugeCode.GDRankTextObjects1= [];
gdjs.EnterLeaugeCode.GDRankTextObjects2= [];
gdjs.EnterLeaugeCode.GDRankTextObjects3= [];
gdjs.EnterLeaugeCode.GDMaxObjects1= [];
gdjs.EnterLeaugeCode.GDMaxObjects2= [];
gdjs.EnterLeaugeCode.GDMaxObjects3= [];
gdjs.EnterLeaugeCode.GDDebuffObjects1= [];
gdjs.EnterLeaugeCode.GDDebuffObjects2= [];
gdjs.EnterLeaugeCode.GDDebuffObjects3= [];
gdjs.EnterLeaugeCode.GDAccessory_9595TopObjects1= [];
gdjs.EnterLeaugeCode.GDAccessory_9595TopObjects2= [];
gdjs.EnterLeaugeCode.GDAccessory_9595TopObjects3= [];
gdjs.EnterLeaugeCode.GDAccessory_9595BottomObjects1= [];
gdjs.EnterLeaugeCode.GDAccessory_9595BottomObjects2= [];
gdjs.EnterLeaugeCode.GDAccessory_9595BottomObjects3= [];
gdjs.EnterLeaugeCode.GDManorIconObjects1= [];
gdjs.EnterLeaugeCode.GDManorIconObjects2= [];
gdjs.EnterLeaugeCode.GDManorIconObjects3= [];
gdjs.EnterLeaugeCode.GDscenechangeObjects1= [];
gdjs.EnterLeaugeCode.GDscenechangeObjects2= [];
gdjs.EnterLeaugeCode.GDscenechangeObjects3= [];
gdjs.EnterLeaugeCode.GDInputUserObjects1= [];
gdjs.EnterLeaugeCode.GDInputUserObjects2= [];
gdjs.EnterLeaugeCode.GDInputUserObjects3= [];
gdjs.EnterLeaugeCode.GDData1Objects1= [];
gdjs.EnterLeaugeCode.GDData1Objects2= [];
gdjs.EnterLeaugeCode.GDData1Objects3= [];
gdjs.EnterLeaugeCode.GDData2Objects1= [];
gdjs.EnterLeaugeCode.GDData2Objects2= [];
gdjs.EnterLeaugeCode.GDData2Objects3= [];
gdjs.EnterLeaugeCode.GDQuitLobbyObjects1= [];
gdjs.EnterLeaugeCode.GDQuitLobbyObjects2= [];
gdjs.EnterLeaugeCode.GDQuitLobbyObjects3= [];
gdjs.EnterLeaugeCode.GDObjectObjects1= [];
gdjs.EnterLeaugeCode.GDObjectObjects2= [];
gdjs.EnterLeaugeCode.GDObjectObjects3= [];
gdjs.EnterLeaugeCode.GDscenechangeVSObjects1= [];
gdjs.EnterLeaugeCode.GDscenechangeVSObjects2= [];
gdjs.EnterLeaugeCode.GDscenechangeVSObjects3= [];
gdjs.EnterLeaugeCode.GDSkillWhatVSObjects1= [];
gdjs.EnterLeaugeCode.GDSkillWhatVSObjects2= [];
gdjs.EnterLeaugeCode.GDSkillWhatVSObjects3= [];
gdjs.EnterLeaugeCode.GDDebuffVSObjects1= [];
gdjs.EnterLeaugeCode.GDDebuffVSObjects2= [];
gdjs.EnterLeaugeCode.GDDebuffVSObjects3= [];


gdjs.EnterLeaugeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(224).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "me_001.ogg", -4, false, 60, 1);
}
}

}


};gdjs.EnterLeaugeCode.asyncCallback141706652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EnterLeaugeCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Hub", false);
}
gdjs.EnterLeaugeCode.localVariables.length = 0;
}
gdjs.EnterLeaugeCode.idToCallbackMap.set(141706652, gdjs.EnterLeaugeCode.asyncCallback141706652);
gdjs.EnterLeaugeCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.EnterLeaugeCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.EnterLeaugeCode.asyncCallback141706652(runtimeScene, asyncObjectsList)), 141706652, asyncObjectsList);
}
}

}


};gdjs.EnterLeaugeCode.asyncCallback141705028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EnterLeaugeCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Leauge"), gdjs.EnterLeaugeCode.GDLeaugeObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("TapAnywhere"), gdjs.EnterLeaugeCode.GDTapAnywhereObjects2);

{for(var i = 0, len = gdjs.EnterLeaugeCode.GDLeaugeObjects2.length ;i < len;++i) {
    gdjs.EnterLeaugeCode.GDLeaugeObjects2[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "O", 0, "linear", 0.4, false);
}
}
{for(var i = 0, len = gdjs.EnterLeaugeCode.GDTapAnywhereObjects2.length ;i < len;++i) {
    gdjs.EnterLeaugeCode.GDTapAnywhereObjects2[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "O", 0, "linear", 0.4, false);
}
}

{ //Subevents
gdjs.EnterLeaugeCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.EnterLeaugeCode.localVariables.length = 0;
}
gdjs.EnterLeaugeCode.idToCallbackMap.set(141705028, gdjs.EnterLeaugeCode.asyncCallback141705028);
gdjs.EnterLeaugeCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EnterLeaugeCode.localVariables);
for (const obj of gdjs.EnterLeaugeCode.GDLeaugeObjects1) asyncObjectsList.addObject("Leauge", obj);
for (const obj of gdjs.EnterLeaugeCode.GDTapAnywhereObjects1) asyncObjectsList.addObject("TapAnywhere", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.EnterLeaugeCode.asyncCallback141705028(runtimeScene, asyncObjectsList)), 141705028, asyncObjectsList);
}
}

}


};gdjs.EnterLeaugeCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(224).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "se_004.mp3", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TapAnywhere"), gdjs.EnterLeaugeCode.GDTapAnywhereObjects1);
{gdjs.evtTools.storage.writeNumberInJSONFile("TK", "League", 1);
}
{for(var i = 0, len = gdjs.EnterLeaugeCode.GDTapAnywhereObjects1.length ;i < len;++i) {
    gdjs.EnterLeaugeCode.GDTapAnywhereObjects1[i].getBehavior("Tween").stopTween("O", false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "flash");
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "flash");
}

{ //Subevents
gdjs.EnterLeaugeCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.EnterLeaugeCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(141699380);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TapAnywhere"), gdjs.EnterLeaugeCode.GDTapAnywhereObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "flash");
}
{for(var i = 0, len = gdjs.EnterLeaugeCode.GDTapAnywhereObjects2.length ;i < len;++i) {
    gdjs.EnterLeaugeCode.GDTapAnywhereObjects2[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "O", 255, "linear", 0.7, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leauge"), gdjs.EnterLeaugeCode.GDLeaugeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EnterLeaugeCode.GDLeaugeObjects1.length;i<l;++i) {
    if ( gdjs.EnterLeaugeCode.GDLeaugeObjects1[i].getVariableNumber(gdjs.EnterLeaugeCode.GDLeaugeObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.EnterLeaugeCode.GDLeaugeObjects1[k] = gdjs.EnterLeaugeCode.GDLeaugeObjects1[i];
        ++k;
    }
}
gdjs.EnterLeaugeCode.GDLeaugeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
/* Reuse gdjs.EnterLeaugeCode.GDLeaugeObjects1 */
{for(var i = 0, len = gdjs.EnterLeaugeCode.GDLeaugeObjects1.length ;i < len;++i) {
    gdjs.EnterLeaugeCode.GDLeaugeObjects1[i].returnVariable(gdjs.EnterLeaugeCode.GDLeaugeObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}

{ //Subevents
gdjs.EnterLeaugeCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.EnterLeaugeCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(141712180);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(141713156);
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


};gdjs.EnterLeaugeCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(141689164);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leauge"), gdjs.EnterLeaugeCode.GDLeaugeObjects1);
{for(var i = 0, len = gdjs.EnterLeaugeCode.GDLeaugeObjects1.length ;i < len;++i) {
    gdjs.EnterLeaugeCode.GDLeaugeObjects1[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "O", 255, "easeOutSine", 0.6, false);
}
}
{for(var i = 0, len = gdjs.EnterLeaugeCode.GDLeaugeObjects1.length ;i < len;++i) {
    gdjs.EnterLeaugeCode.GDLeaugeObjects1[i].getBehavior("Tween").addObjectPositionYTween2("Y", 335, "easeOutSine", 0.6, false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "go");
}
{for(var i = 0, len = gdjs.EnterLeaugeCode.GDLeaugeObjects1.length ;i < len;++i) {
    gdjs.EnterLeaugeCode.GDLeaugeObjects1[i].setGradient("LINEAR_VERTICAL", "115;141;255", "124;149;255", "87;119;255", "76;104;226");
}
}

{ //Subevents
gdjs.EnterLeaugeCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "go") >= 3;
if (isConditionTrue_0) {

{ //Subevents
gdjs.EnterLeaugeCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "flash") >= 0.7;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(141707492);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TapAnywhere"), gdjs.EnterLeaugeCode.GDTapAnywhereObjects1);
{for(var i = 0, len = gdjs.EnterLeaugeCode.GDTapAnywhereObjects1.length ;i < len;++i) {
    gdjs.EnterLeaugeCode.GDTapAnywhereObjects1[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "O", 150, "easeInOutQuad", 0.7, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "flash") >= 1.4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(141709252);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TapAnywhere"), gdjs.EnterLeaugeCode.GDTapAnywhereObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "flash");
}
{for(var i = 0, len = gdjs.EnterLeaugeCode.GDTapAnywhereObjects1.length ;i < len;++i) {
    gdjs.EnterLeaugeCode.GDTapAnywhereObjects1[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "O", 255, "easeInOutQuad", 0.7, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(141708692);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(191)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {

{ //Subevents
gdjs.EnterLeaugeCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.EnterLeaugeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EnterLeaugeCode.GDLeaugeObjects1.length = 0;
gdjs.EnterLeaugeCode.GDLeaugeObjects2.length = 0;
gdjs.EnterLeaugeCode.GDLeaugeObjects3.length = 0;
gdjs.EnterLeaugeCode.GDTapAnywhereObjects1.length = 0;
gdjs.EnterLeaugeCode.GDTapAnywhereObjects2.length = 0;
gdjs.EnterLeaugeCode.GDTapAnywhereObjects3.length = 0;
gdjs.EnterLeaugeCode.GDFadeObjects1.length = 0;
gdjs.EnterLeaugeCode.GDFadeObjects2.length = 0;
gdjs.EnterLeaugeCode.GDFadeObjects3.length = 0;
gdjs.EnterLeaugeCode.GDSkillWhatObjects1.length = 0;
gdjs.EnterLeaugeCode.GDSkillWhatObjects2.length = 0;
gdjs.EnterLeaugeCode.GDSkillWhatObjects3.length = 0;
gdjs.EnterLeaugeCode.GDCat_9595BodyObjects1.length = 0;
gdjs.EnterLeaugeCode.GDCat_9595BodyObjects2.length = 0;
gdjs.EnterLeaugeCode.GDCat_9595BodyObjects3.length = 0;
gdjs.EnterLeaugeCode.GDGlitchObjects1.length = 0;
gdjs.EnterLeaugeCode.GDGlitchObjects2.length = 0;
gdjs.EnterLeaugeCode.GDGlitchObjects3.length = 0;
gdjs.EnterLeaugeCode.GDCorruptSpawnObjects1.length = 0;
gdjs.EnterLeaugeCode.GDCorruptSpawnObjects2.length = 0;
gdjs.EnterLeaugeCode.GDCorruptSpawnObjects3.length = 0;
gdjs.EnterLeaugeCode.GDRankObjects1.length = 0;
gdjs.EnterLeaugeCode.GDRankObjects2.length = 0;
gdjs.EnterLeaugeCode.GDRankObjects3.length = 0;
gdjs.EnterLeaugeCode.GDRankOutlineObjects1.length = 0;
gdjs.EnterLeaugeCode.GDRankOutlineObjects2.length = 0;
gdjs.EnterLeaugeCode.GDRankOutlineObjects3.length = 0;
gdjs.EnterLeaugeCode.GDRankFillObjects1.length = 0;
gdjs.EnterLeaugeCode.GDRankFillObjects2.length = 0;
gdjs.EnterLeaugeCode.GDRankFillObjects3.length = 0;
gdjs.EnterLeaugeCode.GDRankBar1Objects1.length = 0;
gdjs.EnterLeaugeCode.GDRankBar1Objects2.length = 0;
gdjs.EnterLeaugeCode.GDRankBar1Objects3.length = 0;
gdjs.EnterLeaugeCode.GDRankBar2Objects1.length = 0;
gdjs.EnterLeaugeCode.GDRankBar2Objects2.length = 0;
gdjs.EnterLeaugeCode.GDRankBar2Objects3.length = 0;
gdjs.EnterLeaugeCode.GDRankTextObjects1.length = 0;
gdjs.EnterLeaugeCode.GDRankTextObjects2.length = 0;
gdjs.EnterLeaugeCode.GDRankTextObjects3.length = 0;
gdjs.EnterLeaugeCode.GDMaxObjects1.length = 0;
gdjs.EnterLeaugeCode.GDMaxObjects2.length = 0;
gdjs.EnterLeaugeCode.GDMaxObjects3.length = 0;
gdjs.EnterLeaugeCode.GDDebuffObjects1.length = 0;
gdjs.EnterLeaugeCode.GDDebuffObjects2.length = 0;
gdjs.EnterLeaugeCode.GDDebuffObjects3.length = 0;
gdjs.EnterLeaugeCode.GDAccessory_9595TopObjects1.length = 0;
gdjs.EnterLeaugeCode.GDAccessory_9595TopObjects2.length = 0;
gdjs.EnterLeaugeCode.GDAccessory_9595TopObjects3.length = 0;
gdjs.EnterLeaugeCode.GDAccessory_9595BottomObjects1.length = 0;
gdjs.EnterLeaugeCode.GDAccessory_9595BottomObjects2.length = 0;
gdjs.EnterLeaugeCode.GDAccessory_9595BottomObjects3.length = 0;
gdjs.EnterLeaugeCode.GDManorIconObjects1.length = 0;
gdjs.EnterLeaugeCode.GDManorIconObjects2.length = 0;
gdjs.EnterLeaugeCode.GDManorIconObjects3.length = 0;
gdjs.EnterLeaugeCode.GDscenechangeObjects1.length = 0;
gdjs.EnterLeaugeCode.GDscenechangeObjects2.length = 0;
gdjs.EnterLeaugeCode.GDscenechangeObjects3.length = 0;
gdjs.EnterLeaugeCode.GDInputUserObjects1.length = 0;
gdjs.EnterLeaugeCode.GDInputUserObjects2.length = 0;
gdjs.EnterLeaugeCode.GDInputUserObjects3.length = 0;
gdjs.EnterLeaugeCode.GDData1Objects1.length = 0;
gdjs.EnterLeaugeCode.GDData1Objects2.length = 0;
gdjs.EnterLeaugeCode.GDData1Objects3.length = 0;
gdjs.EnterLeaugeCode.GDData2Objects1.length = 0;
gdjs.EnterLeaugeCode.GDData2Objects2.length = 0;
gdjs.EnterLeaugeCode.GDData2Objects3.length = 0;
gdjs.EnterLeaugeCode.GDQuitLobbyObjects1.length = 0;
gdjs.EnterLeaugeCode.GDQuitLobbyObjects2.length = 0;
gdjs.EnterLeaugeCode.GDQuitLobbyObjects3.length = 0;
gdjs.EnterLeaugeCode.GDObjectObjects1.length = 0;
gdjs.EnterLeaugeCode.GDObjectObjects2.length = 0;
gdjs.EnterLeaugeCode.GDObjectObjects3.length = 0;
gdjs.EnterLeaugeCode.GDscenechangeVSObjects1.length = 0;
gdjs.EnterLeaugeCode.GDscenechangeVSObjects2.length = 0;
gdjs.EnterLeaugeCode.GDscenechangeVSObjects3.length = 0;
gdjs.EnterLeaugeCode.GDSkillWhatVSObjects1.length = 0;
gdjs.EnterLeaugeCode.GDSkillWhatVSObjects2.length = 0;
gdjs.EnterLeaugeCode.GDSkillWhatVSObjects3.length = 0;
gdjs.EnterLeaugeCode.GDDebuffVSObjects1.length = 0;
gdjs.EnterLeaugeCode.GDDebuffVSObjects2.length = 0;
gdjs.EnterLeaugeCode.GDDebuffVSObjects3.length = 0;

gdjs.EnterLeaugeCode.eventsList6(runtimeScene);
gdjs.EnterLeaugeCode.GDLeaugeObjects1.length = 0;
gdjs.EnterLeaugeCode.GDLeaugeObjects2.length = 0;
gdjs.EnterLeaugeCode.GDLeaugeObjects3.length = 0;
gdjs.EnterLeaugeCode.GDTapAnywhereObjects1.length = 0;
gdjs.EnterLeaugeCode.GDTapAnywhereObjects2.length = 0;
gdjs.EnterLeaugeCode.GDTapAnywhereObjects3.length = 0;
gdjs.EnterLeaugeCode.GDFadeObjects1.length = 0;
gdjs.EnterLeaugeCode.GDFadeObjects2.length = 0;
gdjs.EnterLeaugeCode.GDFadeObjects3.length = 0;
gdjs.EnterLeaugeCode.GDSkillWhatObjects1.length = 0;
gdjs.EnterLeaugeCode.GDSkillWhatObjects2.length = 0;
gdjs.EnterLeaugeCode.GDSkillWhatObjects3.length = 0;
gdjs.EnterLeaugeCode.GDCat_9595BodyObjects1.length = 0;
gdjs.EnterLeaugeCode.GDCat_9595BodyObjects2.length = 0;
gdjs.EnterLeaugeCode.GDCat_9595BodyObjects3.length = 0;
gdjs.EnterLeaugeCode.GDGlitchObjects1.length = 0;
gdjs.EnterLeaugeCode.GDGlitchObjects2.length = 0;
gdjs.EnterLeaugeCode.GDGlitchObjects3.length = 0;
gdjs.EnterLeaugeCode.GDCorruptSpawnObjects1.length = 0;
gdjs.EnterLeaugeCode.GDCorruptSpawnObjects2.length = 0;
gdjs.EnterLeaugeCode.GDCorruptSpawnObjects3.length = 0;
gdjs.EnterLeaugeCode.GDRankObjects1.length = 0;
gdjs.EnterLeaugeCode.GDRankObjects2.length = 0;
gdjs.EnterLeaugeCode.GDRankObjects3.length = 0;
gdjs.EnterLeaugeCode.GDRankOutlineObjects1.length = 0;
gdjs.EnterLeaugeCode.GDRankOutlineObjects2.length = 0;
gdjs.EnterLeaugeCode.GDRankOutlineObjects3.length = 0;
gdjs.EnterLeaugeCode.GDRankFillObjects1.length = 0;
gdjs.EnterLeaugeCode.GDRankFillObjects2.length = 0;
gdjs.EnterLeaugeCode.GDRankFillObjects3.length = 0;
gdjs.EnterLeaugeCode.GDRankBar1Objects1.length = 0;
gdjs.EnterLeaugeCode.GDRankBar1Objects2.length = 0;
gdjs.EnterLeaugeCode.GDRankBar1Objects3.length = 0;
gdjs.EnterLeaugeCode.GDRankBar2Objects1.length = 0;
gdjs.EnterLeaugeCode.GDRankBar2Objects2.length = 0;
gdjs.EnterLeaugeCode.GDRankBar2Objects3.length = 0;
gdjs.EnterLeaugeCode.GDRankTextObjects1.length = 0;
gdjs.EnterLeaugeCode.GDRankTextObjects2.length = 0;
gdjs.EnterLeaugeCode.GDRankTextObjects3.length = 0;
gdjs.EnterLeaugeCode.GDMaxObjects1.length = 0;
gdjs.EnterLeaugeCode.GDMaxObjects2.length = 0;
gdjs.EnterLeaugeCode.GDMaxObjects3.length = 0;
gdjs.EnterLeaugeCode.GDDebuffObjects1.length = 0;
gdjs.EnterLeaugeCode.GDDebuffObjects2.length = 0;
gdjs.EnterLeaugeCode.GDDebuffObjects3.length = 0;
gdjs.EnterLeaugeCode.GDAccessory_9595TopObjects1.length = 0;
gdjs.EnterLeaugeCode.GDAccessory_9595TopObjects2.length = 0;
gdjs.EnterLeaugeCode.GDAccessory_9595TopObjects3.length = 0;
gdjs.EnterLeaugeCode.GDAccessory_9595BottomObjects1.length = 0;
gdjs.EnterLeaugeCode.GDAccessory_9595BottomObjects2.length = 0;
gdjs.EnterLeaugeCode.GDAccessory_9595BottomObjects3.length = 0;
gdjs.EnterLeaugeCode.GDManorIconObjects1.length = 0;
gdjs.EnterLeaugeCode.GDManorIconObjects2.length = 0;
gdjs.EnterLeaugeCode.GDManorIconObjects3.length = 0;
gdjs.EnterLeaugeCode.GDscenechangeObjects1.length = 0;
gdjs.EnterLeaugeCode.GDscenechangeObjects2.length = 0;
gdjs.EnterLeaugeCode.GDscenechangeObjects3.length = 0;
gdjs.EnterLeaugeCode.GDInputUserObjects1.length = 0;
gdjs.EnterLeaugeCode.GDInputUserObjects2.length = 0;
gdjs.EnterLeaugeCode.GDInputUserObjects3.length = 0;
gdjs.EnterLeaugeCode.GDData1Objects1.length = 0;
gdjs.EnterLeaugeCode.GDData1Objects2.length = 0;
gdjs.EnterLeaugeCode.GDData1Objects3.length = 0;
gdjs.EnterLeaugeCode.GDData2Objects1.length = 0;
gdjs.EnterLeaugeCode.GDData2Objects2.length = 0;
gdjs.EnterLeaugeCode.GDData2Objects3.length = 0;
gdjs.EnterLeaugeCode.GDQuitLobbyObjects1.length = 0;
gdjs.EnterLeaugeCode.GDQuitLobbyObjects2.length = 0;
gdjs.EnterLeaugeCode.GDQuitLobbyObjects3.length = 0;
gdjs.EnterLeaugeCode.GDObjectObjects1.length = 0;
gdjs.EnterLeaugeCode.GDObjectObjects2.length = 0;
gdjs.EnterLeaugeCode.GDObjectObjects3.length = 0;
gdjs.EnterLeaugeCode.GDscenechangeVSObjects1.length = 0;
gdjs.EnterLeaugeCode.GDscenechangeVSObjects2.length = 0;
gdjs.EnterLeaugeCode.GDscenechangeVSObjects3.length = 0;
gdjs.EnterLeaugeCode.GDSkillWhatVSObjects1.length = 0;
gdjs.EnterLeaugeCode.GDSkillWhatVSObjects2.length = 0;
gdjs.EnterLeaugeCode.GDSkillWhatVSObjects3.length = 0;
gdjs.EnterLeaugeCode.GDDebuffVSObjects1.length = 0;
gdjs.EnterLeaugeCode.GDDebuffVSObjects2.length = 0;
gdjs.EnterLeaugeCode.GDDebuffVSObjects3.length = 0;


return;

}

gdjs['EnterLeaugeCode'] = gdjs.EnterLeaugeCode;
