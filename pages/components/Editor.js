/* 
 * Simple editor component that takes placeholder text as a prop 
 */
import { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import "react-quill/dist/quill.snow.css";
// import React from 'react';
// import ReactQuill, { Quill } from 'react-quill';
class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editorHtml: 'from html', theme: 'snow' }
    this.handleChange = this.handleChange.bind(this);

  }
  
  handleChange (html) {
  	this.setState({ editorHtml: html });
  }
  
  handleThemeChange (newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme })
  }
  
  render () {
    return (
      <div>
        <ReactQuill 
          theme={this.state.theme}
          onChange={this.handleChange}
          // placeholder={this.props.placeholder}
        value={this.props.elementValue?this.props.elementValue:this.state.editorHtml}
         />
         Input Value: {this.props.elementValue}
        <div className="themeSwitcher">
          <label>Theme </label>
          <select onChange={(e) => 
              this.handleThemeChange(e.target.value)}>
            <option value="snow">Snow</option>
            <option value="bubble">Bubble</option>
            <option value="core">Core</option>
          </select>
        </div>
       </div>
     )
  }
modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ]
    // clipboard: {
    //   // toggle to add extra line breaks when pasting HTML:
    //   matchVisual: false,
    // }
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]
  
}

 export default Editor;