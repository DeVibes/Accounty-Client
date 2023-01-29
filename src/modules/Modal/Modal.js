import React from 'react'
import { SlideDownAnimationHOC } from '../../shared/components/Animation/SlideDownAnimationHOC'

export const Modal = ({ children, isOpen, closeModal, elementHeight }) => {
  return (
    <>
      <SlideDownAnimationHOC
        elementHeight={elementHeight}
        trigger={isOpen}
        className="absolute top-0 z-20 w-full bg-[#24283b] rounded-b-xl p-3"
      >
        {children}
      </SlideDownAnimationHOC>
      {isOpen ? <BlurScreen onClick={closeModal} /> : null}
    </>
  )
}

export const ModalContent = {
  NONE: 0,
  ADD_TRANSACTION: 1,
  FILTER: 2,
}

Object.freeze(ModalContent)

const BlurScreen = ({ onClick }) => (
  <div
    className="h-screen w-screen absolute z-10 backdrop-blur-sm"
    onClick={onClick}
  />
)
