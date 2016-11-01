const mdc = require('markdown-core/markdown-core-node');
require('./index.css');
const React = require('react');
const ReactDOM = require('react-dom');


class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' };
  }
  render() {
    return (
      <div>
        <textarea ref="markdown" id="markdown-textarea" value={this.state.markdown} onChange={() => this.setState({ markdown: this.refs.markdown.value })}></textarea>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: mdc.render(this.state.markdown) }}></div>
      </div>
    );
  }
}

ReactDOM.render(<MarkdownEditor />, document.getElementById('root'));
