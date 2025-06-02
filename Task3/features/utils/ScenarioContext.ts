import { AsyncLocalStorage } from 'async_hooks';

type ContextType = {
    featureName?: string;
    scenarioName?: string;
    stepName?: string;
};

const storage = new AsyncLocalStorage<ContextType>();

export function runWithContext<T>(
    featureName: string,
    scenarioName: string,
    stepName: string,
    fn: () => T
): T {
    return storage.run({ featureName, scenarioName, stepName }, fn);
}

export function getFeatureName(): string {
    return storage.getStore()?.featureName ?? '';
}

export function getScenarioName(): string {
    return storage.getStore()?.scenarioName ?? '';
}

export function getStepName(): string {
    return storage.getStore()?.stepName?.replace("\"","") ?? '';
}
