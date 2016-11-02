const mdc = require('markdown-core/markdown-core-node');
require('./index.css');
const React = require('react');
const ReactDOM = require('react-dom');
const { createStore } = require('redux');
const Immutable = require('immutable');
const { connect, Provider } = require('react-redux');


// React
class MarkdownEditor extends React.Component {
  render() {
    const { markdown, updateMarkdown } = this.props;
    return (
      <div>
        <textarea ref="markdown" id="markdown-textarea" value={markdown} onChange={() => updateMarkdown(this.refs.markdown.value)}></textarea>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: mdc.render(markdown) }}></div>
      </div>
    );
  }
}

// Redux
const reducer = (state = Immutable.Map({ markdown: '' }), action) => {
  switch (action.type) {
    case 'UPDATE_MARKDOWN':
      return state.set('markdown', action.markdown);
    default:
      return state;
  }
};
const store = createStore(reducer);

// react-redux
const mapStateToProps = (state) => {
  return {
    markdown: state.get('markdown'),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateMarkdown: (markdown) => {
      dispatch({ type: "UPDATE_MARKDOWN", markdown });
    },
  };
};
const App = connect(mapStateToProps, mapDispatchToProps)(MarkdownEditor);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
