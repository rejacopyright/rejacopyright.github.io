import React, { forwardRef } from 'react'
import str from 'react-element-to-jsx-string'
import FroalaEditor from 'react-froala-wysiwyg'
import 'froala-editor/css/froala_style.min.css'
import '_assets/scss/froala.scss'
import 'froala-editor/js/plugins.pkgd.min.js'
// import 'froala-editor/js/third_party/image_tui.min.js'
// import 'froala-editor/js/languages/id.js'

function Index(props, ref){
  // const toolbarButtons = {
  //   'moreText': {
  //     'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
  //   },
  //   'moreParagraph': {
  //     'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
  //   },
  //   'moreRich': {
  //     'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertHR'],
  //     'buttonsVisible': 8
  //   },
  //   'moreMisc': {
  //     'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
  //     'align': 'right',
  //     'buttonsVisible': 2
  //   }
  // }
  const toolbarSimple = {
    'moreText': {
      'buttons': ['bold', 'italic', 'strikeThrough', 'clearFormatting'],
      'buttonsVisible': 5
    },
    'moreParagraph': {
      'buttons': ['formatOLSimple', 'formatUL', 'paragraphFormat']
    },
    'moreRich': {
      'buttons': ['insertLink', 'insertTable', 'insertHR'],
      'buttonsVisible': 4
    },
    'moreMisc': {
      'buttons': ['undo', 'redo'],
      'align': 'right',
      'buttonsVisible': 2
    }
  }
  const state = {
    config: {
      placeholderText: "Edit Me",
      attribution: false,
      heightMin: 200,
      toolbarSticky: true,
      toolbarStickyOffset: props.offsetTop,
      tooltips: false,
      zIndex: 1,
      charCounterCount: false,
      quickInsertEnabled: false,
      imageAllowedTypes: ['jpeg', 'jpg', 'png'],
      imageUploadRemoteUrls: false,
      events: {
        'initialized': function(e) {
          const el = document.querySelector('a[href*="https://www.froala.com"]')
          el && el.parentElement.remove()
          const sec = document.querySelector('#fr-logo')
          sec && sec.remove()
          const ph = document.querySelector('.fr-placeholder')
          ph && (ph.style.marginTop = 0)
        },
        'html.beforeGet': function(e) {
          const el = document.querySelector('a[href*="https://www.froala.com"]')
          el && el.parentElement.remove()
          const sec = document.querySelector('#fr-logo')
          sec && sec.remove()
          const ph = document.querySelector('.fr-placeholder')
          ph && (ph.style.marginTop = 0)
        },
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
      quickInsertButtons: false,
      toolbarButtonsMD: toolbarSimple,
      toolbarButtonsSM: toolbarSimple,
      toolbarButtonsXS: toolbarSimple,
    }
  }
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
