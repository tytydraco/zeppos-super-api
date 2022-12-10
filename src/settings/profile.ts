export namespace Profile {
    export enum Gender {
        Male,
        Female,
        Unspecified
    }

    export interface UserInfo {
        age: number,
        height: number,
        weight: number,
        gender: Gender,
        nickName: string,
        region: string,
    }

    export function getUserInfo(): UserInfo {
        return hmSetting.getUserData()
    }

    export function getWeightTargetKg(): number {
        return hmSetting.getWeightTarget()
    }

    export function getSleepTargetMin(): number {
        return hmSetting.getSleepTarget()
    }
}