export type Callback = () => void

export interface Listener {
    cancel(): void
}