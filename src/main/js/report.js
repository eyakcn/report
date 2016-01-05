const React = require("react");
const ReactDOM = require("react-dom");

/* eslint no-unused-vars: 0 */
const ReportUploader = React.createClass({
  render() {
    return <input type="file"/>;
  }
});

ReactDOM.render(
  <ReportUploader/>,
  document.getElementById('report-uploader')
);