import {useSelector} from 'react-redux'
export default function About() {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-4xl mx-auto p-3 text-center text-justify'>
        <div>
          <h1 className='text-2xl font font-bold text-center my-7 '>
            About Us
          </h1>
          <div className={`text-md flex flex-col gap-6 mb-5`}>
          <p className='text-center bg-blend-color-dodge text-[#0694A2] font-semibold '>Celebrating Our Cultural Roots</p>

          <p >In an era of rapid modernization, it's easy to lose sight of our cultural heritage. Yet, we firmly believe that culture should remain an integral part of our lives, as it reflects the essence of who we are and shapes our identity. Our culture isn't just a reflection of our past; it also influences our present and future.</p>

          <p>Throughout history, culture has played a pivotal role in shaping civilizations. From art and literature to traditions and customs, our cultural heritage is a treasure trove of wisdom and beauty. It's a testament to the rich tapestry of human experience and the diversity of our world.</p>

          <p>Unfortunately, in our quest for modernity, we risk losing touch with our cultural roots. But we believe that reconnecting with our heritage is essential for preserving our identity and enriching our lives. That's why we've embarked on this project—to provide information about our culture to the new generation and visitors alike.</p>

          <p>Our goal is to showcase the cultural diversity of the Malwa region, highlighting its unique traditions, cuisine, music, dance, and festivals. Through informative articles, engaging blogs, and firsthand experiences, we aim to bridge the gap between the past and the present, connecting people with their cultural heritage.</p>

          <p>But we're not just here to impart knowledge—we're here to foster community. That's why we've created a platform where users can share their own stories, experiences, and insights. Whether it's through blog posts, comments, or interactions with fellow visitors, our website is a place where people can come together to celebrate and explore our culture.</p>

          <p>Additionally, we have an event section where people can add their local events to the website, allowing others to join in and participate. By facilitating connections between individuals and encouraging offline engagement, we aim to bridge the gap between digital screens and real-life interactions. Our ultimate goal is to connect people with each other and with our rich cultural heritage, as India is known for its cultural diversity and we believe it's crucial to preserve and celebrate our roots.</p>

          <p>Join us on this journey of discovery and rediscovery. Let's reconnect with our roots, celebrate our cultural diversity, and inspire others to explore the beauty of our heritage. Together, we can ensure that our culture remains alive and vibrant for generations to come.</p>

          </div>
        </div>
      </div>
    </div>
  );
}
