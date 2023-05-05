import {
  FaChalkboardTeacher,
  FaClipboardList,
  FaUserTie,
} from "react-icons/fa";

const services = [
  {
    title: "Learn the best QA practices",
    description:
      "We are a team of hands-on professionals, with years of experience in QA and Software Development fields. We will introduce you to the latest IT practices and tools that will be required in your future daily working environment",
    icon: <FaChalkboardTeacher size={64} />,
  },
  {
    title: "Test Real Projects",
    description:
      "The main purpose is to provide you with real-world experience. We collaborate with several commercial projects, to ensure our students are able to apply the course experience to future job opportunities",
    icon: <FaClipboardList size={64} />,
  },
  {
    title: "Get a Job",
    description:
      "We help you to reach the next professional level, whether it is your first IT job or a new level position in QA Automation. We guide you in your job search - from resume application to technical assignments",
    icon: <FaUserTie size={64} />,
  },
];

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServiceOptions = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceOptions;
