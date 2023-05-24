import { Link } from "react-router-dom";

import { products as mockService } from "../../mock/Service";

import "./style.css";

const Services: React.FC = () => {
  return (
    <ul className="grid gap-20 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {mockService.map((service) => (
        <li key={service.id} className="m-auto w-full">
          <div className="relative h-[237px] rounded-3xl border-none shadow-shadowPrimary md:w-full">
            <div className="absolute right-[20px] top-[-45px]">
              <img
                src={service.img}
                alt="imgService"
                className="h-[115px] w-[115px] rounded-full"
              />
            </div>
            <h2 className="mr-44 py-8 text-2xl font-bold text-co-17 max-sm:mr-36">
              {service.title}
            </h2>
            <div className="px-6">
              <p className="mb-4 w-full border-r-2 border-[#8FC930] pr-4 text-lg text-co-18">
                {service.description}
              </p>
            </div>
            <div className="flex items-center px-6">
              <Link
                to={service.link}
                className="text-lg text-[#00ADEE] hover:border-b-2 hover:border-[#00ADEE]"
              >
                {service.seeMore}
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 stroke-[#00ADEE]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Services;
