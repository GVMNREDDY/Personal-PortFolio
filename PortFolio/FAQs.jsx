import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    { question: "What are my hobbies?", answer: "I love reading, painting, and coding." },
    { question: "Which sport do I like most?", answer: "I enjoy playing basketball and cricket." },
    { question: "My Achievements?", answer: "I have won several coding competitions." },
    { question: "Where do I live?", answer: "I live in Rajahmundry." },
    { question: "Where do I come from?", answer: "I am originally from Vedurupaka, Andhra Pradesh, 533345." },
  ];

  return (
    <div className="Fcontainer1">
      <h1>FAQs</h1>
      <div className="Fparent">
        {faqData.map((item, index) => (
          <div key={index} className={`Fchild ${openFAQ === index ? "open" : ""}`} onClick={() => toggleFAQ(index)}>
            <div>
              <b>{item.question}</b>
              {openFAQ === index && <p className="p1answer">{item.answer}</p>}
            </div>
            <div>{openFAQ === index ? <CloseTwoToneIcon /> : <AddIcon />}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;





// import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
// import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

// const FAQs = () => {

//     const [child1,setchild1]=useState(false);
//     const  child1called= () => {
//         setchild1(!child1);
//     }
//     const [child2,setchild2]=useState(false);
//     const  child2called= () => {
//         setchild2(!child2);
//     }
//     const [child3,setchild3]=useState(false);
//     const  child3called= () => {
//         setchild3(!child3);
//     }
//     const [child4,setchild4]=useState(false);
//     const  child4called= () => {
//         setchild4(!child4);
//     }
//     const [child5,setchild5]=useState(false);
//     const  child5called= () => {
//         setchild5(!child5);
//     }

//     return (
//         <>
//             <div class="Fcontainer1">
//                 <h1>FAQs</h1>
//                 <div class="Fparent">
//                     <div class={child1?"Fchild1":"Fchild11"}> <div><b>What are my hobbies?</b>
//                     <p className="p1answer" style={{width:"45vw",height:"2.7vh",overflowY:"scroll",fontSize:"12px"}}>the is asdkf jjasdfjkajsd 
//                         klfjklasdj fkaskdfjkla  jkdsfjkadj sfkasdj  fakdsfjkasj dkfkajdskfkaj  </p></div>
//                          <div>{child1?<CloseTwoToneIcon onClick={child1called}/>:<AddIcon onClick={child1called}/>}</div></div>
//                     <div class={child2?"Fchild2":"Fchild22"}> <div><b>Which sport i like most?</b></div><div>{child2?<CloseTwoToneIcon onClick={child2called}/>:<AddIcon onClick={child2called}/>}</div></div>
//                     <div class={child3?"Fchild3":"Fchild33"}> <div><b>My Achievements?</b></div> <div>{child3?<CloseTwoToneIcon onClick={child3called}/>:<AddIcon onClick={child3called}/>}</div></div>
//                     <div class={child4?"Fchild4":"Fchild44"}> <div><b>Where do i live?</b></div> <div>{child4?<CloseTwoToneIcon onClick={child4called}/>:<AddIcon onClick={child4called}/>}</div></div>
//                     <div class={child5?"Fchild5":"Fchild55"}> <div><b>Where i come from?</b></div> <div>{child5?<CloseTwoToneIcon onClick={child5called}/>:<AddIcon onClick={child5called}/>}</div></div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default FAQs;