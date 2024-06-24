import BuildIcon from '@mui/icons-material/Build';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CustomerReview from './CustomerReview';
import HelpPage from './HelpPage';
import PeaceOfMindGuarantee from '../../sections/PeaceOfMindGuarantee';

const HomePage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/gradient-blue-abstract-technology-background_23-2149213765.jpg?t=st=1717216214~exp=1717219814~hmac=2ca3a8d2ffc8cabe608e56f68f5f235a583753d4556e6577599bc46743f4acc7&w=826")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-4 px-4">
          <section className="md:mr-8 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left ">
              Welcome to Hewlett Printer Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 text-center md:text-left">
              In-Home & Online Support for your WiFi Network Streaming Device
            </p>
            <p className="text-lg md:text-xl mb-8 text-center md:text-left">
              The best tech solution, ready to help you - anytime, anywhere
            </p>
          </section>

          <section className="md:ml-8">
            <img
              src="https://i.ibb.co/3WGMSYD/customer-services-operator-with-finger-point-up-562687-313-removebg-preview-1.png"
              alt="Customer service"
              className="w-full md:max-w-lg"
            />
          </section>
        </div>
      </div>

      <section className="bg-[#f5f5f5] py-4 flex justify-center items-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4 ">
          <div className="flex justify-center items-center bg-white p-2 gap-3 rounded-lg shadow-lg">
            <BuildIcon style={{ color: '#1e3a8a', marginTop: '8px' }} />
            <p className="text-be185d mt-2">Thousands of Techs Nationwide</p>
          </div>

          <div className="flex justify-center items-center bg-white p-2 gap-3 rounded-lg shadow-lg">
            <AccessTimeIcon style={{ color: '#1e3a8a', marginTop: '8px' }} />
            <p className="text-be185d mt-2">Service as Soon as Today</p>
          </div>

          <div className="flex justify-center items-center bg-white p-2 gap-3 rounded-lg shadow-lg">
            <CheckCircleOutlineIcon
              style={{ color: '#1e3a8a', marginTop: '8px' }}
            />
            <p className="text-be185d mt-2">Don’t Pay Until It’s Done</p>
          </div>
        </div>
      </section>
     

      {/* --------------- other components ----------- */}
      <PeaceOfMindGuarantee/>
      <CustomerReview />
      <HelpPage />
    </>
  );
};

export default HomePage;
