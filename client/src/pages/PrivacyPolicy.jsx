import { useSelector } from 'react-redux';

export default function PrivacyPolicy() {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-4xl mx-auto p-3 text-center text-justify'>
        <div>
          <h1 className='text-2xl font font-bold text-center my-7'>
            Privacy Policy
          </h1>
          <div
            className={`text-md  flex flex-col gap-3`}
          >
            <p className='text-center bg-blend-color-dodge text-[#0694A2] font-semibold '>
              Your Privacy Matters
            </p>
            <p>
              Your privacy is important to
              us. This Privacy Policy outlines the types of personal
              information we collect, how it is used, and the steps we take to
              safeguard your information.
            </p>
            <h2 className='text-xl font-bold mt-4'>Information We Collect</h2>
            <ul className="list-disc pl-6 mt-2"> {/* Added custom class and reduced margin-top */}
              <li>
                <strong>Profile Picture:</strong> We may collect a profile
                picture to personalize your experience on our platform.
              </li>
              <li>
                <strong>Name:</strong> We require your name to address you
                properly and facilitate interactions within the community.
              </li>
              <li>
                <strong>Email Address:</strong> Your email address is used for
                communication purposes, such as account verification,
                notifications, and updates.
              </li>
            </ul>
            <h2 className='text-xl font-bold'>How We Use Your Information</h2>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Personalization:</strong> Your profile picture and name
                may be displayed publicly to personalize your interactions on
                our platform.
              </li>
              <li>
                <strong>Communication:</strong> We use your email address to
                send important notifications, updates, and to respond to
                inquiries or feedback.
              </li>
              <li>
                <strong>Security:</strong> We take measures to protect your
                password to ensure the security of your account and personal
                information.
              </li>
            </ul>
            <h2 className='text-xl font-bold'>Data Protection</h2>
            <ul className="list-disc pl-6 mt-2">
                <li>
                We are committed to safeguarding your personal information and
                have implemented appropriate security measures to prevent
                unauthorized access, disclosure, alteration, or destruction of
                your data.
                </li>
            </ul>
            <h2 className='text-xl font-bold'>Sharing of Information</h2>
            <ul className="list-disc pl-6 mt-2">
                <li>We do not sell, trade, or otherwise transfer your personal
              information to third parties. Your information is strictly used
              for the purposes outlined in this Privacy Policy.</li>
            </ul>
            <h2 className='text-xl font-bold'>Your Choices</h2>
            <ul className="list-disc pl-6 mt-2">
                <li>You have the option to update, edit, or delete your personal
              information from our platform at any time. If you wish to do so,
              please contact us through the provided channels.</li>
            </ul>
            <h2 className='text-xl font-bold'>Updates to Privacy Policy</h2>
            <ul className="list-disc pl-6 mt-2">
                <li>We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. We encourage you
              to review this page periodically for any updates.</li>
            </ul>

            <p className='mt-5'>
              If you have any questions or concerns regarding this Privacy
              Policy or the handling of your personal information, please
              contact us at{' '}
              <a className='text-[#0694A2]' href='mailto:htlp.apna.malwa@email.com'>help.apna.malwa@gmail.com</a>
            </p>
            <p>
              By using our platform, you consent to the terms outlined in this
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
