export { };

declare global {
    interface Internal {
        [k: string]: any | null
    }

    function App(any: any): any
    function Page(any: any): any

    const hmApp: Internal;
    const hmUI: Internal;
    const hmSetting: Internal;
    const hmSensor: Internal;
    const hmFS: Internal;

    const timer: Internal;
}