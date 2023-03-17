import React from "react";

function OpenModal({ closeModal}) {
  return (
<div
                    id="popup-1"
                    className={
                      isDark
                        ? "dark-menu certificate-card popup-box mfp-fade mfp-hide"
                        : "popup-box mfp-fade mfp-hide"
                    }
                  >
                    <div className="content">
                      <div className="image">
                        <img src={eventmatters} alt="eventmatters" />
                      </div>
                      <div className="desc">
                        <div className="category">Prototype</div>
                        <h4>Event Matters</h4>
                        <p>
                        Event Matters Project is a platform for concerts and events like marriage, corporate shows etc.
                        </p>
                        {/* <a href="#" className="btn btn_animated"><span className="circle">View Project</span></a>  */}
                      </div>
                    </div>
                  </div>
    // <div className="modal-container">
    //   <div className="header-modal">
    //     <b className="nav-content-title "> {title} </b>
    //     <img
    //       src={circleclose}
    //       className="close-circle"
    //       onClick={() => closeModal()}
    //       alt="img"
    //     />
    //   </div>
    // </div>
  );
}

export default OpenModal;
