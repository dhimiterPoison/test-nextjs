'use client'
import React, { useEffect } from 'react';
import { loadScript } from "@paypal/paypal-js";


let paypal: any;

const About = () => {

    useEffect( () => {
        async function loadPaypal() {
            try {
                paypal = await loadScript({ clientId: "Aalcuv1nO15ToqtsoksQuPOmE5m1AqKcuyPgCoz20pvqp2Tlhu8E8zI_b42GKL_uHcdmTKGw3OZ-s6k_" });
                paypal.Buttons().render("#paypal-container")
            } catch (error) {
                console.error("failed to load the PayPal JS SDK script", error);
            }
        }
        loadPaypal();
    }, []);

    return (
        <div className='flex flex-col'>
            <div className='flex'>brooo</div>
            <div className='flex'>testiamo i pagamenti</div>
            <div className='flex justify-center my-8'>
                <div className='person-list flex flex-col  bg-white w-1/3 p-4 rounded-xl shadow-xl'>
                    <div className='flex justify-center'>
                        <h3 className='text-xl'>Test PayPal</h3>
                    </div>
                    <div className='divider my-2' />
                    <div id="paypal-container" className='flex justify-center'>
                        {/* {paypal ? paypal.Buttons().render("#paypal-container") : null} */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
