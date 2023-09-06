export interface ProtectionProps {
    value?: string;
    maxAge?: number;
    excludeIp?: string | string[];
    cookieKey?: string;
    searchKey?: string;
}
export declare function protection(): void;
