import React, { useState, forwardRef } from 'react'
import str from 'react-element-to-jsx-string'
import FroalaEditor from 'react-froala-wysiwyg'
import 'froala-editor/css/froala_style.min.css'
import '_assets/scss/froala.scss'
import 'froala-editor/js/plugins.pkgd.min.js'
// import 'froala-editor/js/third_party/image_tui.min.js'
// import 'froala-editor/js/languages/id.js'

function Index(props, ref){
  const [state] = useState({
    config: {
      placeholderText: "Edit Me",
      attribution: false,
      heightMin: 200,
      toolbarSticky: true,
      toolbarStickyOffset: 35,
      tooltips: false,
      zIndex: 99,
      quickInsertEnabled: false,
      imageAllowedTypes: ['jpeg', 'jpg', 'png'],
      imageUploadRemoteUrls: false,
      events: {
        "image.beforeUpload": function(files) {
          const editor = this;
          if (files.length) {
            const reader = new FileReader();
            reader.onload = e => {
              const result = e.target.result;
              editor.image.insert(result, null, null, editor.image.get());
            };
            reader.readAsDataURL(files[0]);
          }
          editor.popups.hideAll();
          return false;
        }
      },
      // imageUploadURL: 'http://localhost',
      toolbarButtons: {
        'moreText': {
          'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
        },
        'moreParagraph': {
          'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
        },
        'moreRich': {
          'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertHR'],
          'buttonsVisible': 8
        },
        'moreMisc': {
          'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
          'align': 'right',
          'buttonsVisible': 2
        }
      }
    }
  });
  function onModelChange(e){
    props.onChange && props.onChange(e || '');
  }
  return(
    <div className="" id={props.id}>
      <FroalaEditor model={str(<div>{props.children}</div>)} ref={ref}  tag='textarea' config={state.config} onModelChange={onModelChange} onImage={e => console.log(e)}/>
    </div>
  )
}

export default forwardRef(Index)
