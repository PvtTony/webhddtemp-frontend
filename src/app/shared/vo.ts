export interface FanStatus {
    speed: number;
    rpm: number;
}

export interface ResponsePack<T> {
    code: number;
    message: string;
    data: T;
}

export interface DriveItem {
    info_name: string;
    name: string;
    protocol: string;
    type: string;
}

export interface DriveTemp {
    log: {
        history: Array<{ est: number; temp: number }>;
        logging_interval_minutes: number;
        sampling_period_minutes: number;
    }
    temp:
    {
        current: number;
        lifetime_max: number;
        lifetime_min: number;
        limit_max: number;
        limit_min: number;
        op_limit_max: number;
        op_limit_min: number;
        power_cycle_max: number;
        power_cycle_min: number;
    }
}

export interface DriveTempTableItem {
    name: string;
    value: string;
}