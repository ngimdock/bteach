import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Paragraphe from '../../elements/p/Paragraphe';
import H4 from '../../elements/titles/H4';
import Button from '../../elements/buttons/Button';
import InputText from '../../elements/inputs/Input';

function CreateNoteModal({ isOpen, closeModal }) {
  
  return (
    <>
    { isOpen && <div className='absolute top-0 left-0 w-full h-full bg-black opacity-75'></div>}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-base md:text-lg lg:text-xl text-dark font-extrabold font-primary"
                >
                    Récommandez ce repétiteur
                </Dialog.Title>
                <div className="mt-2">
                  <Paragraphe size="small">
                    Renseigez le nombre d'étoiles sur 5 et le message de récommandation 
                  </Paragraphe>

                  <div className='flex flex-col splace-y-4 my-6'>
                    <InputText
                      type="number"
                      max={5}
                      placeholder="combien d'étoiles sur 5 ?"
                    />
                    <textarea
                    placeholder='votre message'
                    className='h-32 p-2 text-sm text-gray-600 bg-gray-100 border-2 border-gray-200 focus:outline-none focus:border-gray-200'>
                      
                    </textarea>
                  </div>

                </div>

                <div className="flex space-x-3 justify-end mt-6">
                  <Button
                    type="button"
                    size="small"
                    theme="danger"
                    action={closeModal}
                  >
                    annuler
                  </Button>
                  <Button
                    type="button"
                    size="small"
                    action={closeModal}
                  >
                    récommander
                  </Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


export default CreateNoteModal