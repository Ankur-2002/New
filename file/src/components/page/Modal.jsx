import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./modal.css";
import CloseIcon from '@material-ui/icons/Close'; 
import Tick from '../../Image/tickmark.png';
import {Link} from 'react-router-dom';
const Modal = props => {

 
  
  var shortenedname;
  
    var i=0;
    for(;i<props.name.length;i++)
    {
      // console.log(props.name[i]);
      if(props.name[i]===' ')
      break;
    }
    shortenedname=props.name.substring(0, i);

  const shortenedname2=shortenedname;

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{enter: 0, exit: 0 }}
    >
        <>
        <div className="modal" onClick={props.onClose}>
          
        <span className="underlinebordermodal "></span>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-body ">
                    <div className="row ">
                    <div className="col-12 justifycontentcenter  " >
                    <div className="resituateripplemodal">
                        <span className="RippleModal" style={{animationDelay:"0"}}></span>
                        <span className="RippleModal" style={{animationDelay:"1s"}}></span>
                        <span className="RippleModal" style={{animationDelay:"2s"}}></span>
                        <span className="RippleModal" style={{animationDelay:"3s"}}></span>
                        <span className="RippleModal" style={{animationDelay:"4s"}}></span>
                        </div>
                        </div></div>
                    <div className="row ">
                          
                          <div className="col-12 btnmodalalign">
                          <Link className="" to={{pathname:'/'}} target="_top" >
                            <button className="btn btn-outline btnmodalclose"  >
                             <CloseIcon style={{fontSize:"25px"}} />
                            </button></Link></div></div>
                        
                        <div className="row ">
                         
                        <div className="col-12 justifycontentcenter heightincmodal " >
                         
                        <img alt="sorry" src={Tick} height="175" width="175" className="vidmodal"></img> </div>
                   
                          </div>
                        <div className="row">
                            <div className="col-12 justifycontentcenter" style={{paddingBottom:"0px"}}>
                              <span className="modalmaintext">Hi {shortenedname2} </span>
                              </div>
                            <div className="col-12 justifycontentcenter">
                              <span className="modalmaintext2">Thank you for contacting us. We will be in touch soon. We look forward to serving you.</span> </div>
                        </div>
                   </div>
                </div>
                </div>
                
        </>
        </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
