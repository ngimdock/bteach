import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Paragraphe from '../../elements/p/Paragraphe';
import H3 from '../../elements/titles/H3';
import Button from '../../elements/buttons/Button';

function AskToSigninModal({ isOpen, closeModal }) {
  
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
              <div className="inline-block space-y-3 w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className='flex flex-col'>
                  <H3>Vous n'êtes pas connecté</H3>

                  <Paragraphe>
                    Veillez vous connecter avant d'effectuer cette action
                  </Paragraphe>
                </div>

                <div className="flex space-x-3 justify-end mt-6">
                  <Button
                    type="button"
                    size="small"
                    theme="danger"
                    link="/sign_in"
                  >
                    Connexion
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


export default AskToSigninModal