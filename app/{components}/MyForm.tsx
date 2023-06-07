import React from 'react';

const MyForm = () => {
    return (
        <form>
            <div className='item'>
                <label htmlFor='name'></label>
                <input type='text' name='name' id='name' title='name' />
            </div>
            <div className='item'>
                <label htmlFor='surname'></label>
                <input
                    type='text'
                    name='surname'
                    id='surname'
                    title='surname'
                />
            </div>
            <div className='item'>
                <label htmlFor='email'></label>
                <input type='email' name='email' id='email' title='email' />
            </div>
        </form>
    );
};

export default MyForm;
