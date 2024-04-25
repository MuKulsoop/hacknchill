import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-gray-900 text-white'>
      <section className='container mx-auto py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='footer-link-wrapper'>
            <h2 className='text-lg font-bold mb-4'>About Us</h2>
            <ul>
              <li><Link to='/sign-up' className='text-white'>How it works</Link></li>
              <li><Link to='/' className='text-white'>Testimonials</Link></li>
              <li><Link to='/games' className='text-white'>Games</Link></li>
              <li><Link to='/about' className='text-white'>Sources</Link></li>
              <li><Link to='/about' className='text-white'>Terms of Service</Link></li>
            </ul>
          </div>
          <div className='footer-link-wrapper'>
            <h2 className='text-lg font-bold mb-4'>Contact Us</h2>
            <ul>
              <li><Link to='/sign-up' className='text-white'>Contact</Link></li>
              <li><Link to='/sign-up' className='text-white'>Support</Link></li>
              <li><Link to='/sign-up' className='text-white'>Bug</Link></li>
              <li><Link to='/sign-up' className='text-white'>Report</Link></li>
            </ul>
          </div>
          <div className='footer-link-wrapper'>
            <h2 className='text-lg font-bold mb-4'>Games</h2>
            <ul>
              <li><Link to='/games' className='text-white'>Suggest games</Link></li>
              <li><Link to='/games' className='text-white'>Minecraft</Link></li>
              <li><Link to='/games' className='text-white'>Play together</Link></li>
              <li><Link to='/games' className='text-white'>Influencer</Link></li>
            </ul>
          </div>
          <div className='footer-link-wrapper'>
            <h2 className='text-lg font-bold mb-4'>Social Media</h2>
            <ul>
              <li><Link to='/' className='text-white'>Instagram</Link></li>
              <li><Link to='/' className='text-white'>Facebook</Link></li>
              <li><Link to='/' className='text-white'>Youtube</Link></li>
              <li><Link to='/' className='text-white'>Twitter</Link></li>
            </ul>
          </div>
        </div>
      </section>
      <section className='bg-gray-800 py-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link to='/' className='text-xl font-bold text-white'>KILLERTIAN</Link>
          <p className='text-gray-400'>KILLERTIAN © 2022</p>
          <div className='social-icons'>
            <Link to='/' className='social-icon-link' aria-label='Facebook'>
              <i className='fab fa-facebook-f'></i>
            </Link>
            <Link to='/' className='social-icon-link' aria-label='Instagram'>
              <i className='fab fa-instagram'></i>
            </Link>
            <Link to='/' className='social-icon-link' aria-label='Youtube'>
              <i className='fab fa-youtube'></i>
            </Link>
            <Link to='/' className='social-icon-link' aria-label='Twitter'>
              <i className='fab fa-twitter'></i>
            </Link>
            <Link to='/' className='social-icon-link' aria-label='LinkedIn'>
              <i className='fab fa-linkedin'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
