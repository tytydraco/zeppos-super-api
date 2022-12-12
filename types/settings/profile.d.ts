export declare namespace Profile {
    enum Gender {
        Male = 0,
        Female = 1,
        Unspecified = 2
    }
    interface UserInfo {
        age: number;
        height: number;
        weight: number;
        gender: Gender;
        nickName: string;
        region: string;
    }
    function getUserInfo(): UserInfo;
    function getWeightTargetKg(): number;
    function getSleepTargetMin(): number;
}
