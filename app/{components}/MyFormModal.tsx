import React from 'react';
import MyForm from './MyForm';

const MyFormModal = () => {
    return (
        <dialog id='giorgio' className='modal modal-bottom sm:modal-middle'>
            <form className='modal-box'>
                <h3 className='font-bold text-lg'>Form di esempio</h3>
                <p className='py-4'>Compila per inviare la tua candidatura</p>

                {/* <MyForm /> */}
                <div className='item'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name' title='name'  className='border'/>
                </div>
                <div className='item'>
                    <label htmlFor='surname'>Surname</label>
                    <input
                        type='text'
                        name='surname'
                        id='surname'
                        title='surname'
                        className='border'
                    />
                </div>
                <div className='item'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' title='email'  className='border' />
                </div>

                <div className='modal-action'>
                    <button
                        className='btn'
                        // onClick={() => (window as any).giorgio.close()}
                    >
                        Close
                    </button>
                </div>
            </form>
        </dialog>
    );
};

export default MyFormModal;
