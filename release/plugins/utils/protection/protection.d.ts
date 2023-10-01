export interface ProtectionProps {
    cookieKey?: string;
    excludeIp?: string | string[];
    maxAge?: number;
    searchKey?: string;
    value?: string;
}
export declare function protection(): void;
