import { useSelector } from 'react-redux';
import { Footer } from 'flowbite-react';

export default function UpcomingEvents() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className='flex items-center justify-center p-4' >
      <div className='max-w-4xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-2xl font-bold my-7'>Upcoming Events</h1>
          <div className={`text-md text-gray-100 ${theme === 'light' ? 'text-black' : 'white'}`}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-gray-200 rounded-lg p-4 text-start'>
                <h2 className='text-xl text-center font-bold mb-2 text-teal-500'>Maha Shivratri </h2>
                <Footer.Divider />
                <p className='text-gray-700 mb-2'>Date: March 08, 2024</p>
                <p className='text-gray-700 mb-2'>Time: Whole Day</p>
                <p className='text-gray-700 mb-2'>Location: Ujjain</p>
                <p className='text-gray-700 mb-2 text-justify'>Description: Sacred event at Mahakaleshwar Temple with prayers, rituals, devotees, and vibrant cultural festivities honoring Lord Shiva..</p>
                <a href='/post/mystical-marvel-exploring-the-mahashivratri-celebrations-in-ujjain' className='text-blue-500 hover:underline'>Learn More</a>
              </div>
              
              <div className='bg-gray-200 text-start rounded-lg p-4'>
                <h2 className='text-xl text-center font-bold mb-2 text-teal-500'>Indore's Rang Panchami</h2>
                <Footer.Divider />
                <p className='text-gray-700 mb-2'>Date: March 30, 2024</p>
                <p className='text-gray-700 mb-2'>Time: 08:00 AM Onwards</p>
                <p className='text-gray-700 mb-2'>Location: Indore</p>
                <p className='text-gray-700 mb-2 text-justify'>Description: Vibrant celebration featuring water play, grand processions, cultural legacy, and inclusive festivities with traditional delicacies.</p>
                <a href='/post/mystical-marvel-exploring-the-mahashivratri-celebrations-in-ujjain' className='text-blue-500 hover:underline'>Learn More</a>
              </div>
              {/* Add more event cards as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
