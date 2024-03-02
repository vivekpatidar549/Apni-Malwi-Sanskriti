import { useSelector } from 'react-redux';

export default function TermsAndConditions() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-4xl mx-auto p-3 text-center text-justify'>
        <div>
          <h1 className='text-2xl font font-bold text-center my-7 '>Terms and Conditions</h1>
          <div className={`text-md  flex flex-col gap-3 `}>
            <p className='text-[#0694A2]'>
              By engaging with our website, you acknowledge and agree to
              abide by the following terms and conditions:
            </p>
            <h2 className='text-xl font-bold mt-4'>Conduct</h2>
            <ul className="list-disc pl-6 mt-2"> {/* Added custom class and reduced margin-top */}
              <li>
              Uphold a standard of respect and dignity in all interactions. Discriminatory, offensive, or
              disrespectful behavior will not be tolerated.
              </li>
              <li>
              Foster an atmosphere of inclusivity and understanding, embracing the diversity of our community.
              </li>
            </ul>

            <h2 className='text-xl font-bold mt-4'>Ownership and Use of Content</h2>
            <ul className="list-disc pl-6 mt-2"> {/* Added custom class and reduced margin-top */}
              <li>
              You retain ownership of the content you contribute to our platform, granting us a non-exclusive license
              to use, display, and distribute it.
              </li>
              <li>
              Respect intellectual property rights. Do not post copyrighted material without proper authorization.
              </li>
            </ul>
            
            <h2 className='text-xl font-bold mt-4'>Privacy and Confidentiality</h2>
            <ul className="list-disc pl-6 mt-2"> {/* Added custom class and reduced margin-top */}
              <li>
              Safeguard your personal information and that of others. Review our Privacy Policy for details on how we
              handle your data.
              </li>
              <li>
              Obtain consent before sharing any sensitive or private information within our community.           
                </li>
            </ul>

            <h2 className='text-xl font-bold mt-4'>Responsible Platform Usage</h2>
            <ul className="list-disc pl-6 mt-2"> {/* Added custom class and reduced margin-top */}
              <li>
              Utilize our platform in a responsible and lawful manner, refraining from any activities that may
              compromise its integrity or disrupt its operation.
              </li>
              <li>
              Report any misuse or abuse of the platform promptly to our dedicated support team.
              </li>
            </ul>

            <h2 className='text-xl font-bold mt-4'>Disclaimer of Liability</h2>
            <ul className="list-disc pl-6 mt-2"> {/* Added custom class and reduced margin-top */}
              <li>
              While we strive for accuracy and reliability, we cannot guarantee the completeness or timeliness of
              all content on our platform.
              </li>
              <li>
              Your use of our services is at your own risk. We disclaim any liability for damages or losses
              resulting from reliance on information provided herein.
              </li>
            </ul>


            <h2 className='text-xl font-bold mt-4'>Community Guidelines</h2>
            <ul className="list-disc pl-6 mt-2"> {/* Added custom class and reduced margin-top */}
              <li>
              Embrace our community guidelines, promoting constructive dialogue and mutual respect among all members.
              </li>
              <li>
              Play an active role in maintaining a positive and welcoming environment for everyone.
              </li>
            </ul>

            <h2 className='text-xl font-bold mt-4'>Modification of Terms</h2>
            <ul className="list-disc pl-6 mt-2"> {/* Added custom class and reduced margin-top */}
              <li>
              We reserve the right to modify these terms and conditions at our discretion. Any revisions will be
              effective immediately upon publication.
              </li>
              <li>
              It is your responsibility to stay informed of any updates to these terms.              </li>
            </ul>
            <p className='mt-5'>
              <br />
              For inquiries or concerns regarding these terms and conditions, please reach out to us at{' '}
              <a className='text-[#0694A2]' href='mailto:htlp.apna.malwa@email.com'>help.apna.malwa@gmail.com</a>
            </p>

            <p>
              Thank you for taking step toward protecting our culture. We appreciate your commitment to fostering a
              vibrant and inclusive community!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
