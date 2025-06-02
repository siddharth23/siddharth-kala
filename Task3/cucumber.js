module.exports = {
    'format-options':'{"snippetInterface": "async-await"}',
    default: {
        parallel: 1,
        threadCount:10,
        format: ['junit:report/report.xml', 'html:report/report.html','json:./report/cucumber_report.json']
    }
};