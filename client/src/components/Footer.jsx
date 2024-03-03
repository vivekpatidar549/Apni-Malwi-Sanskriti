import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
import { useSelector } from 'react-redux';
export default function FooterCom() {
  const { theme } = useSelector((state) => state.theme);
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
            {
          theme==='light'?(<img src="https://res.cloudinary.com/dwrbxnw11/image/upload/v1709314808/logo-light_yubjm2.png" alt="" className='max-w-[150px]'/>):(<img src="https://res.cloudinary.com/dwrbxnw11/image/upload/v1709314895/logo-dark_dvq6bn.png" alt="" className='max-w-[150px]'/>)
        }
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  About Us
                </Footer.Link>
                <Footer.Link
                  href='https://en.wikipedia.org/wiki/Malwa'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Learn More
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/vivekpatidar549'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='/privacy'>Privacy Policy</Footer.Link>
                <Footer.Link href='/terms'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Apni Malwi Sanskriti"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/vivekpatidar549' icon={BsGithub}/>
            <Footer.Icon href='#' icon={BsDribbble}/>

          </div>
        </div>
        <p className='text-center'>
  Made with ❤️ by  
  <a href="https://www.linkedin.com/in/vivekpatidar549" target="_blank" rel="noopener noreferrer"> Vivek</a>
</p>


      </div>
    </Footer>
  );
}
