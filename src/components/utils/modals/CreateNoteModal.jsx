import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Paragraphe from '../../elements/p/Paragraphe';
import Button from '../../elements/buttons/Button';
import InputText from '../../elements/inputs/Input';
import { BsStar, BsStarFill } from 'react-icons/bs';

function CreateNoteModal({ isOpen, closeModal }) {
  const [stars, setStars] = useState(0)

  const handleGiveStar = (value) => {
    setStars(value)
  }

  const handleClose = () => {
    setStars(0)

    closeModal()
  }

	const formatStars = (stars) => {
		return stars > 1 ? `${stars} étoiles` : `${stars} étoile`
	}
  
  return (
    <>
    { isOpen && <div className='absolute top-0 left-0 w-full h-full bg-black opacity-75'></div>}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={handleClose}
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
                    <div className='flex flex-col justify-start sm:flex-row sm:justify-between mb-6'>
                      <div className='flex flex-row gap-4 mb-4'>
                        {
                          [1, 2, 3, 4, 5].map(val => {
                            if (val <= stars) {
                              return <BsStarFill 
                                key={val}
                                size={25} 
                                color="#ffd60a" 
                                onClick={() => handleGiveStar(val)}
                              />
                            }

                            return <BsStar 
                              size={25} 
                              color="#555" 
                              onClick={() => handleGiveStar(val)}  
                            />
                          })
                        }
                      </div>

                      <span style={{ color: "#555" }}>{ formatStars(stars) }</span>
                    </div>

                    <InputText
                      type="text"
                      placeholder="votre message"
                      handleChange={() => {}}
                    />
                  </div>

                </div>

                <div className="flex space-x-3 justify-end mt-6">
                  <Button
                    type="button"
                    size="small"
                    theme="danger"
                    action={handleClose}
                  >
                    annuler
                  </Button>
                  <Button
                    type="button"
                    size="small"
                    action={handleClose}
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