import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ChatIcon from '@mui/icons-material/Chat';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CheckIcon from '@mui/icons-material/Check';

const Facilities = () => {
  const items = [
    'Safety & Security',
    'Convenience',
    'Unlimited Support',
    'Reliability',
    'Peace of mind',
  ];
  return (
    <main>
      <section className="bg-gray-100 p-8 shadow-inner">
        <div className="flex gap-6 items-center justify-center flex-col">
          <h2 className="text-3xl font-semibold text-center text-[#1e3a8a]">
            Everything you get, in a nutshell
          </h2>

          <ul className="flex gap-5 bg-white px-5 py-2 shadow-2xl rounded">
            {items.map((value, index) => {
              return (
                <li key={index}>
                  {' '}
                  <CheckIcon sx={{ color: '#1e3a8a' }} />
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className="flex justify-center p-5">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-[80%]">
          <div className="bg-white  flex justify-center items-center  flex-col rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105">
            <SupportAgentIcon sx={{ fontSize: '4.5rem', color: '#1e3a8a' }} />
            <p className="text-center mt-2  text-lg font-bold text-[#1e3a8a]">
              Online Tech Specialist
            </p>
            <p className="text-center">
              Unlimited, instant help with any connected device. No appointments
              needed.
            </p>
          </div>
          {/* ----------- 2------------------------- */}

          <div className="bg-white  flex justify-center items-center  flex-col rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105">
            <ChatIcon sx={{ fontSize: '4rem', color: '#1e3a8a' }} />
            <p className="text-center mt-2  text-lg font-bold text-[#1e3a8a]">
              Unlimited 24/7 Online Support
            </p>
            <p className="text-center">
              Get free 'round-the-clock' support for computers, printers, and
              more.
            </p>
          </div>

          {/* ---------------------- 3------------------ */}
          <div className="bg-white  flex justify-center items-center  flex-col rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105">
            <AcUnitIcon sx={{ fontSize: '4rem', color: '#1e3a8a' }} />
            <p className="text-center mt-2  text-lg font-bold text-[#1e3a8a]">
              Premium Antivirus Software
            </p>
            <p className="text-center">
              We've partnered with MalwareBytes to offer the best in protection
              against computer threats.
            </p>
          </div>

          {/* ------------------4 -------------- */}
          <div className="bg-white  flex justify-center items-center  flex-col rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105">
            <VerifiedUserIcon sx={{ fontSize: '4rem', color: '#1e3a8a' }} />
            <p className="text-center mt-2 text-lg font-bold text-[#1e3a8a]">
              Premium Password Manager
            </p>
            <p className="text-center">
              Manage passwords securely, effortlessly, and across all devices
              with Dashlane.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Facilities;
