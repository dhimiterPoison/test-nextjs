import React from 'react';
import { faker } from '@faker-js/faker';

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
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
}

const users : User[] = faker.helpers.multiple(createRandomUser, {
    count: 5,
});

const PersonList = () => {
    return (
        <div className='person-list flex flex-col  bg-white w-1/2 p-4 rounded-xl shadow-xl'>
            <div className='flex'>
                <h3 className='text-xl'>Lista esempio</h3>
            </div>
            <div className='divider my-2' />

            <ul>
                {users.map((user) => (
                    <li key={user.userId} className='flex items-center my-2'>
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
