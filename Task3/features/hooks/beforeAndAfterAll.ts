import {Before,BeforeStep,ITestCaseHookParameter,
    ITestStepHookParameter,
    setDefaultTimeout} from "@cucumber/cucumber";
import {getFeatureName, getScenarioName, runWithContext} from '../utils/ScenarioContext';
export let globalFeatureName = '';
export let globalScenarioName = '';
export let globalStepName = '';
Before(async function (scenario: ITestCaseHookParameter) {
    this.response=null;
    globalFeatureName = scenario.gherkinDocument?.feature?.name ?? '';
    globalScenarioName = scenario.pickle?.name ?? '';
    runWithContext(globalFeatureName, globalScenarioName, '', () => {});
});
BeforeStep(async function (step: ITestStepHookParameter) {
    globalStepName = step.pickleStep?.text ?? '';
    runWithContext(getFeatureName(), getScenarioName(), globalStepName, () => {});
});
