'use client';
import React, { Fragment, useState } from 'react';
import SModal from '../{components}/SModal';
import MyFormModal from '../{components}/MyFormModal';

const FormTest = () => {
    const [openSModal, setOpenSModal] = useState(false);
    const [daisyModalOpen, setDaisyModalOpen] = useState(false);

    const modalHandler = () => {
        setOpenSModal((prevState) => !prevState);
    };

    const daisyModalHandler = () => {
        //    (window as any)['giorgio'].showModal();
        (window as any).giorgio.showModal();
    };

    return (
        <Fragment>
            <div className='flex flex-col'>
                <h1 className='text-xl font-semibold'>
                    Test form dentro modale
                </h1>
                <div className='p-5 flex flex-col items-start'>
                    <button
                        className='btn cursor-pointer'
                        type='button'
                        onClick={modalHandler}
                    >
                        Open S Modal
                    </button>
                </div>
                <div className='p-5 flex flex-col items-start'>
                    <button
                        className='btn btn-secondary cursor-pointer'
                        type='button'
                        onClick={daisyModalHandler}
                    >
                        Open Daisy Modal
                    </button>
                </div>
                <div className='p-5 flex flex-col items-start'>
                    <button
                        className='btn'
                        onClick={() => (window as any).my_modal_5.showModal()}
                    >
                        open modal default
                    </button>
                    <dialog
                        id='my_modal_5'
                        className='modal modal-bottom sm:modal-middle'
                    >
                        <form method='dialog' className='modal-box'>
                            <h3 className='font-bold text-lg'>Hello!</h3>
                            <p className='py-4'>
                                Press ESC key or click the button below to close
                            </p>
                            <div className='modal-action'>
                                {/* if there is a button in form, it will close the modal */}
                                <button className='btn'>Close</button>
                            </div>
                        </form>
                    </dialog>
                </div>
            </div>

            {openSModal && (
                <SModal>
                    <div className='flex flex-col'>
                        <span>Yo, sei dentro</span>
                    </div>
                </SModal>
            )}

            <MyFormModal></MyFormModal>
        </Fragment>
    );
};

export default FormTest;
