//import { Editor } from 'react-draft-wysiwyg';
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useEffect,useState } from 'react';
import Editor from './components/Editor';
// import ReactDOM from 'react-dom';

export default function (about){
        const [contents, setContents] = useState('');
        useEffect( ()=>{
               
                setTimeout( ()=>{ setContents('from parent contents') }, 2000);
             });
      return (
        <div>
        <Editor elementValue={contents}/>
        </div>
        
        ) ;
              
        // <h2>aobut us</h2>



}