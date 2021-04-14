import type { Operation } from './Operation';

export interface Service {
    name: string;
    serviceUrlInjectToken?: string;
    operations: Operation[];
    imports: string[];
}
