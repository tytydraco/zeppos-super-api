export var Profile;
(function (Profile) {
    let Gender;
    (function (Gender) {
        Gender[Gender["Male"] = 0] = "Male";
        Gender[Gender["Female"] = 1] = "Female";
        Gender[Gender["Unspecified"] = 2] = "Unspecified";
    })(Gender = Profile.Gender || (Profile.Gender = {}));
    function getUserInfo() {
        return hmSetting.getUserData();
    }
    Profile.getUserInfo = getUserInfo;
    function getWeightTargetKg() {
        return hmSetting.getWeightTarget();
    }
    Profile.getWeightTargetKg = getWeightTargetKg;
    function getSleepTargetMin() {
        return hmSetting.getSleepTarget();
    }
    Profile.getSleepTargetMin = getSleepTargetMin;
})(Profile || (Profile = {}));
