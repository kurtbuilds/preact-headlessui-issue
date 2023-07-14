import viteLogo from '/vite.svg';
import {Disclosure} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import {useState} from 'preact/compat';
import 'src/app.css';
import reactLogo from './assets/preact.svg';

export function MobileProfileButton({open}: { open: boolean }) {
    return <div className="-mr-2 flex items-center sm:hidden">
        {/* Mobile menu button */}
        <Disclosure.Button
            className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="sr-only">Open main menu</span>
            {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
            ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
            )}
        </Disclosure.Button>
    </div>;
}


export function Header() {
    return <Disclosure as="nav" classme="border-b border-gray-200 bg-white">
        {({open}: { open: boolean }) => (
            <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <MobileProfileButton open={open}/>
                    </div>
                </div>
            </>
        )}
    </Disclosure>;
}


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + Preact</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/app.tsx</code> and save to test HMR
                </p>
            </div>
            <Header/>
        </>
    )
}

export default App