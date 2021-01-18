export interface FanStatus {
    speed: number;
    rpm: number;
}

export interface ResponsePack<T> {
    code: number;
    message: string;
    data: T;
}