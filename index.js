const mdc = require('markdown-core/markdown-core-node');
require('./index.css');
const React = require('react');
const ReactDOM = require('react-dom');
const { createStore } = require('redux');


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

const reducer = (state = { markdown: '' }, action) => {
  switch (action.type) {
    case 'UPDATE_MARKDOWN':
      return Object.assign({}, state, {
        markdown: action.markdown
      });
    default:
      return state;
  }
};
const store = createStore(reducer);
const render = () => ReactDOM.render(
  <MarkdownEditor markdown={store.getState().markdown} updateMarkdown={(markdown) => store.dispatch({ type: "UPDATE_MARKDOWN", markdown })} />,
  document.getElementById('root')
);
render();
store.subscribe(render);
