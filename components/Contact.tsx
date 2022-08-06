import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef, useEffect, useState } from 'react';

const Contact = () => {
  //Lazy Loading
  const contactRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [contactIsVisible, setContactIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('animateMain', entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
        const entry = entries[0];
        setContactIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(contactRef.current);
  }, []);

  //Form Button
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Sending...');
  function setFalse() {
    setLoading(false);
  }

  const timeoutfunction = () => {
    setLoadingMessage('Sent!');
    setTimeout(setFalse, 3000);
  };

  //Form values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  //Send Email function
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_MAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID!,
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    timeoutfunction();
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div ref={contactRef} className='opacity-0 sm:px-[217px]'>
      <div className='max-w-[1240px] mx-auto flex p-2'>
        <div className='flex text-xl tracking-widest uppercase text-white'>
          <p id='contact' className='text-teal mr-2'>
            04.
          </p>
          What&apos;s Next?
        </div>
      </div>
      <div className='flex items-center justify-center text-center w-full p-2 pb-20'>
        <div className='max-w-xl justify-center items-center text-center'>
          <h1 className='flex text-6xl text-center content-center justify-center'>
            <p className='text-teal jello-vertical'>G</p>
            <p className='text-teal jello-vertical'>e</p>
            <p className='text-teal jello-vertical'>t </p>
            <div className='px-2'></div>
            <p className='text-teal jello-vertical'>i</p>
            <p className='text-teal jello-vertical'>n</p>
            <div className='px-2'></div>
            <p className='text-teal jello-vertical'>t</p>
            <p className='text-teal jello-vertical'>o</p>
            <p className='text-teal jello-vertical'>u</p>
            <p className='text-teal jello-vertical'>c</p>
            <p className='text-teal jello-vertical'>h</p>
          </h1>
          <h1 className='my-4 flex text-white text-xl text-center content-center justify-center'>
            I&apos;m currently looking for new opportunities, my inbox is always
            open. I&apos;ll try my best to get back to you as soon as possible!
          </h1>
          <div className='my-10 '>
            <form
              autoComplete='off'
              className='grid grid-cols-2 gap-4'
              onSubmit={sendEmail}
            >
              <input
                className='bg-zinc-800 text-white focus:outline-none form-style px-2'
                type='Text'
                placeholder='Name'
                name='from_name'
                value={name}
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
              <input
                className='bg-zinc-800 text-white focus:outline-none form-style px-2'
                type='email'
                placeholder='Email'
                name='reply_to'
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <input
                className='bg-zinc-800  text-white col-span-2 focus:outline-none form-style px-2'
                type='text'
                placeholder='Subject'
                name='subject'
                value={subject}
                required
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              ></input>
              <textarea
                className='bg-zinc-800 text-white col-span-2 focus:outline-none form-style px-2'
                placeholder='Message'
                name='message'
                value={message}
                required
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              <div className='flex  justify-end col-span-2'>
                {loading ? (
                  <button
                    type='submit'
                    value='Send'
                    className='sendmessage p-2'
                  >
                    {loadingMessage}
                  </button>
                ) : (
                  <button
                    type='submit'
                    value='Send'
                    className='sendmessage p-2'
                  >
                    Send Message!
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
