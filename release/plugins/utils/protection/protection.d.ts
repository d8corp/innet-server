export interface ProtectionProps {
    children?: any;
    cookieKey?: string;
    excludeIp?: string | string[];
    maxAge?: number;
    searchKey?: string;
    value?: string;
}
export declare function protection(): void;
