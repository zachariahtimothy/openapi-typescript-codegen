import type { Service } from '../client/interfaces/Service';
import { postProcessServiceImports } from './postProcessServiceImports';
import { postProcessServiceOperations } from './postProcessServiceOperations';

export function postProcessService(service: Service, { serviceUrlInjectToken }: { serviceUrlInjectToken?: string }): Service {
    const clone = { ...service, serviceUrlInjectToken };
    clone.operations = postProcessServiceOperations(clone);
    clone.operations.forEach(operation => {
        clone.imports.push(...operation.imports);
    });
    clone.imports = postProcessServiceImports(clone);
    return clone;
}
