import React from "react";

import "./PromotionalContent.css";

function PromotionalContent({ openAIData }) {
  return (
    <div>
      <div className='content'>{openAIData}</div>
    </div>
  );
}

export default PromotionalContent;
