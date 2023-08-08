import PersonList from "./{components}/PersonList";

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-start'>
            <div className='flex p-24'>
                <h1 className='text-6xl font-bold text-center '>GIORGIO</h1>
                <p>(test)</p>
            </div>
            <PersonList />
        </main>
    );
}
