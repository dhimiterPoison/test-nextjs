'use client'
import React from 'react';
import { faker } from '@faker-js/faker';
import { useDebouncedState } from '@mantine/hooks';

type User = {
    userId: string;
    name: string;
    surname: string;
    email: string;
    avatar: string;
    password: string;
    birthdate: Date;
    registeredAt: Date;
};

function createRandomUser(): User {
    return {
        userId: faker.string.uuid(),
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
}

const users: User[] = faker.helpers.multiple(createRandomUser, {
    count: 5,
});

const PersonList = () => {
    const [value, setValue] = useDebouncedState('', 200);

    return (
        <div className='person-list flex flex-col  bg-white w-1/2 p-4 rounded-xl shadow-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='text-xl'>Lista esempio</h3>
                <div className='form-control'>
                    <input
                        type='text'
                        placeholder='Search'
                        className='input input-bordered w-24 md:w-auto'
                        onChange={(event) => setValue(event.currentTarget.value?.toLowerCase())}
                    />
                </div>
            </div>
            <div className='divider my-2' />

            <ul>
                {users.filter(el => 
                    el.name.toLowerCase().includes(value) || el.surname.toLowerCase().includes(value) || el.email.toLowerCase().includes(value)
                ).map((user) => (
                    <li key={user.userId} className='flex items-center my-2 '>
                        <img
                            src={user.avatar}
                            alt={user.userId}
                            className='w-12 h-12 rounded-full mr-4'
                        />
                        <div className='flex flex-col'>
                            <h4 className='text-lg font-semibold'>
                                {user.name} {user.surname}
                            </h4>
                            <p className='text-sm text-gray-500'>
                                {user.email}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PersonList;
