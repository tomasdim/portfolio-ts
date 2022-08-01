/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';

const navigation = [
  { name: 'Homepage', href: '#', current: true },
  { name: 'About Me', href: '#', current: false },
  { name: 'Services', href: '#', current: false },
  { name: 'Works', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as='nav' className='bg-white bg-opacity-25'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <div className='block h-6 w-6' aria-hidden='true'>
                      X
                    </div>
                  ) : (
                    <div className='block h-6 w-6' aria-hidden='true'>
                      MENU
                    </div>
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='justify-center flex items-center'>
                  <img
                    className='block lg:hidden h-8 w-auto'
                    src='/img/logotd.png'
                    alt='Logo TD'
                  />
                  <div className='flex items-center justify-center gap-2'>
                    <img
                      className='hidden lg:block h-8 w-auto'
                      src='/img/logotd.png'
                      alt='Logo TD'
                    />
                    <h1 className='hidden md:flex text-lg ml-4 lg:ml-0'>
                      Tomás Di Maria
                    </h1>
                  </div>
                </div>
                <div className='hidden md:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-gray-600' : 'text-gray-500',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <button
                  type='button'
                  className=' p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                >
                  <span className='sr-only'>View notifications</span>
                  <div className='h-6 w-6' aria-hidden='true'>
                    <img src='/img/moon.png' />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
