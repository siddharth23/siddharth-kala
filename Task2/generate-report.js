const report = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonDir: './reports/json',
        output: './reports/html/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: false,
        metadata: {
        },
        failedSummaryReport: true,
    };

report.generate(options);