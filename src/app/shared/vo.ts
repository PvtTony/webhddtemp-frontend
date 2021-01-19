export interface FanStatus {
    speed: number;
    rpm: number;
}

export interface ResponsePack<T> {
    code: number;
    message: string;
    data: T;
}

export interface BlockDeviceItem {
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
    };
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
    };
}

export interface DriveInfoTableRow {
    name: string;
    value: string;
}

export interface DriveInfo {
    ata_version: {
        major_value: number;
        minor_value: number;
        string: string;
    };
    device: BlockDeviceItem;
    firmware_version: string;
    form_factor: {
        ata_value: number;
        name: string;
    };
    interface_speed: {
        current: InterfaceSpeed;
        max: InterfaceSpeed;
    };
    logical_block_size: number;
    model_family: string;
    model_name: string;
    physical_block_size: number;
    rotation_rate: number;
    sata_version: {
        string: string;
        value: number;
    };
    serial_number: string;
    user_capacity: {
        blocks: number;
        bytes: number;
    };
}

interface InterfaceSpeed {
    bits_per_unit: number;
    sata_value: number;
    string: string;
    units_per_second: number;
}