export interface ProtectionProps {
    html: string;
    value?: string;
    maxAge?: number;
    excludeIp?: string | string[];
    cookieKey?: string;
    searchKey?: string;
}
export declare function protection(): void;
