export interface ShellyDevice {


    id?: number;
    deviceId: string;
    deviceName: string;
    accountName?: string;
    accountEmail?: string;
    accountId: number;
    currentState?: boolean;//ON {{1}} or OFF {{0}}
    lastUpdate?: Date;



}