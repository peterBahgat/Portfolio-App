import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data here
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    // Handle form submission here
    setIsSubmitted(true);
  };

  return (
    <section id='contact' className='py-10 px-3 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          Contact <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>Get in touch</p>
      </div>
      <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto'>
        <form className='flex flex-col flex-1 gap-5' onSubmit={handleSubmit}>
          <label htmlFor='name'>Your Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleInputChange}
            required
            autoComplete='name'
          />
          <label htmlFor='email'>Your Email Address:</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Your Email Address'
            value={formData.email}
            onChange={handleInputChange}
            required
            autoComplete='email'
          />
          <label htmlFor='message'>Your Message:</label>
          <textarea
            id='message'
            name='message'
            placeholder='Your Message'
            rows={10}
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button className='btn-primary w-fit' type='submit'>
            Send Message
          </button>
        </form>
        <div className='flex flex-col gap-7'>
          <div className='flex flex-row text-left gap-4 flex-wrap items-center'>
            <a
              href='mailto:peterbahgat21@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full'>
                <ion-icon name='mail'></ion-icon>
              </div>
            </a>
            <p className='md:text-base text-sm break-words'>
              peterbahgat21@gmail.com
            </p>
          </div>
          <div className='flex flex-row text-left gap-4 flex-wrap items-center'>
            <a
              href='https://wa.me/201285002165'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full'>
                <ion-icon name='logo-whatsapp'></ion-icon>
              </div>
            </a>
            <p className='md:text-base text-sm break-words'>+201285002165</p>
          </div>
          <div className='flex flex-row text-left gap-4 flex-wrap items-center'>
            <a
              href='https://www.google.com/maps?q=Cairo,%20Egypt'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full'>
                <ion-icon name='location'></ion-icon>
              </div>
            </a>
            <p className='md:text-base text-sm break-words'>Cairo, Egypt</p>
          </div>
        </div>
      </div>
      {isSubmitted && (
        <div className='mt-6 text-center text-green-500'>
          Message sent successfully!
        </div>
      )}
    </section>
  );
};

export default Contact;
