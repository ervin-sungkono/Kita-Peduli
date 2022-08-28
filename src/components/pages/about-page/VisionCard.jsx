// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const VisionCard = (props) => {

//   const [isOpen, setIsOpen] = useState(false);

//   let toggleCheck = isOpen ? ' active-card' : '';
//   let absoluteCheck = !isOpen ? ' absolute' : '';

//   return (
//     <motion.div 
//       transition={{ layout: {duration: 1}}}
//       layout
//       onClick={() => setIsOpen(!isOpen)}
//       className={`card${toggleCheck}`}
//       style={{
//         borderRadius: "12px",
//       }}>
//         <div className='image-background'>
//           <img src={props.image} alt="" />
//         </div>
//         <motion.h2 
//           layout='position'
//           transition={{ layout: {duration: 1}}}
//           className={`card-number${absoluteCheck}`}>
//             {props.number}
//         </motion.h2>
//         {isOpen && (
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1 }}
//               className='card-contents'>
//                 <h4 className='card-title'>{props.title}</h4>
//                 <p className='card-caption'>
//                     {props.caption}
//                 </p>
//             </motion.div>
//           )}
//     </motion.div>
//   )
// }

// export default VisionCard;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VisionCard = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  let toggleCheck = isOpen ? ' active-card' : '';
  let absoluteCheck = !isOpen ? ' absolute' : '';

  return (
    <motion.div 
      transition={{ layout: {duration: 1}}}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className={`card${toggleCheck}`}
      style={{
        borderRadius: "12px",
      }}>
        <div className='image-background'>
          <img src={props.image} alt="" />
        </div>
        <motion.h2 
          layout='position'
          transition={{ layout: {duration: 1}}}
          className={`card-number${absoluteCheck}`}>
            {props.number}
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={isOpen ? "card-contents show" : "card-contents"}>
            <h4 className='card-title'>{props.title}</h4>
            <p className='card-caption'>
                {props.caption}
            </p>
        </motion.div>
    </motion.div>
  )
}

export default VisionCard;