import { motion } from "framer-motion"

const update_card_variants = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 0.8, display: 'none' },
  enter: { opacity: 1, x: 0, y: 0, scale: 1, display: 'block' },
  exit: { opacity: 0, x: 0, y: 0, scale: 0.8, transitionEnd: { display: 'none' } },
}

export default function PopupCard({ useRef, header, text, button_1, button_2, button_1_onClick, button_2_onClick, isOpen, isButtonClickable, isWideCard, children }) {
  return(
    <motion.div 
      id='settings-overlay-card' 
      ref={useRef} 
      className={(isWideCard ? 'w-2/5' : 'w-96') + ' rounded-sm bg-maincolor mb-8 flex flex-col justify-between p-4 pb-2 pointer-events-auto shadow-lg relative'}
      variants={update_card_variants}
      initial="hidden"
      animate={ isOpen ? "enter" : "exit"}
      transition={{ type: 'ease-in', duration: 0.2 }}
    >
      <h1>{ header }</h1>
      <p>{ text }</p>
      { children }
      <div className='mt-4'>
        <button 
          onClick={ isButtonClickable ? button_1_onClick : null } 
          className={isButtonClickable ? '' : 'cursor-not-allowed bg-gray-500 hover:bg-gray-400'}
        >
          { button_1 }
        </button>
        <button className='text-button' onClick={ button_2_onClick }>{ button_2 }</button>
      </div>
    </motion.div>
  )
}