const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-result",
    reportPath: "./",
    reportName: "Playwright Automation Report",
    pageTitle: "BookCart test Automation",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "latest"
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "11"
        },
    },
    customData: {
        title: "Test info",
        data: [
            { label: "Project", value: "BookCart" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" },
            { label: "Execution Start Time", value: new Date().toLocaleString() },
            { label: "Execution End Time", value: new Date().toLocaleString() }
        ],
    },
});