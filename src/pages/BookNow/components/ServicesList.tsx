import { Fragment, useEffect, useState } from "react";

import { services as mockServiceList } from "../../../mock/OptionData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faPlus,
  faMinus,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";
import GuidelinesForSelection from "./GuidelinesForSelection";

const ServicesList = ({ handleCheck }: any) => {
  const [selectedMainService, setSelectedMainService] = useState<any[]>([]);
  const [showAllDetails, setShowAllDetails] = useState<number[]>([]);
  const [selectedSubServices, setSelectedSubServices] = useState<any[]>([]);

  useEffect(() => {
    handleCheck({
      mainService: selectedMainService,
      subService: selectedSubServices,
    });
  }, [selectedMainService, selectedSubServices]);

  // MainService
  const handleMainService = (serviceId: number) => {
    if (selectedMainService.includes(serviceId)) {
      setSelectedMainService(
        selectedMainService.filter((id) => id !== serviceId)
      );
    } else {
      const selectedService = mockServiceList.find(
        (serv) => serv.id === serviceId
      );
      if (selectedService) {
        setSelectedMainService([...selectedMainService, serviceId]);
        /* console.log("Selected Service:", selectedService); */
      }
    }
  };

  // SubService
  const handleChangeSubService = (serviceId: number, subServiceId: number) => {
    const selectedService = mockServiceList.find(
      (serv) => serv.id === serviceId
    );
    const selectedSubService = selectedService?.subServices.find(
      (serv) => serv.id === subServiceId
    );
    if (selectedSubServices.includes(subServiceId)) {
      setSelectedSubServices((prev) =>
        prev.filter((id) => id !== subServiceId)
      );
    } else {
      setSelectedSubServices((prev) => [...prev, subServiceId]);
    }
    console.log({ serviceId, ...selectedSubService });
  };

  // Details
  const handleToggleDetails = (subServiceId: number) => {
    if (showAllDetails.includes(subServiceId)) {
      setShowAllDetails(showAllDetails.filter((id) => id !== subServiceId));
    } else {
      setShowAllDetails([...showAllDetails, subServiceId]);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <GuidelinesForSelection text="اختر الخدمات التي تحتاج تنظيفها من أي تصنيف تريده" />
      {mockServiceList.map((service) => (
        <div key={service.id} className="mb-4 rounded-2xl border-2">
          <div
            className={`flex items-center justify-between space-x-2 rounded-2xl border py-4 pl-[0.25rem] pr-[1.25rem] ${
              selectedMainService.includes(service.id)
                ? "rounded-b-none border-b-2"
                : ""
            }`}
          >
            <p className="text-[1.3rem]">{service.label}</p>
            <button
              onClick={() => handleMainService(service.id)}
              className={`${selectedMainService.includes(
                service.id
              )} px-4 py-2 text-[16px] font-semibold`}
            >
              {selectedMainService.includes(service.id) ? (
                <>
                  <span className="ml-1 text-[#00ADEE]">اخفاء الخدمات</span>
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-[#00ADEE]"
                  />
                </>
              ) : (
                <>
                  <span className="ml-1 text-[#00ADEE]">رؤية الخدمات</span>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-[#00ADEE]"
                  />
                </>
              )}
            </button>
          </div>
          {selectedMainService.includes(service.id) && (
            <div className="grid gap-4 px-[30px] py-[25px]">
              {service.subServices.map((subServ) => (
                <Fragment key={subServ.id}>
                  <div
                    className={`flex items-center justify-between rounded-xl border-2 p-4 ${
                      selectedSubServices.includes(subServ.id)
                        ? "border-[#00ADEE]"
                        : ""
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        id={`service-${subServ.id}`}
                        name={`service-${subServ.id}`}
                        type="checkbox"
                        checked={selectedSubServices.includes(subServ.id)}
                        onChange={() =>
                          handleChangeSubService(service.id, subServ.id)
                        }
                        className="ml-4 h-[30px] w-[30px] border checked:border-none checked:bg-[#00ADEE]"
                      />
                      <label htmlFor={`service-${subServ.id}`}>
                        <div className="flex items-center">
                          <img
                            src={subServ.img}
                            alt="imgageService"
                            className="h-20 w-20"
                          />
                          <span className="mr-4 text-[18px] font-semibold">
                            {subServ.label}
                          </span>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faDollar}
                        className="w-8 text-[18px]"
                      />
                      <p className="text-[18px] font-semibold">
                        {subServ.price}
                      </p>
                    </div>
                    <div className="flex items-center justify-around">
                      <button className="ml-2 flex h-[30px] w-[30px] items-center justify-center rounded border bg-[#E5F7FD] p-2">
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="text-[#CCD2E3]"
                        />
                      </button>
                      <p className="ml-2 flex h-[30px] w-[30px] items-center justify-center rounded border p-2 text-[#1D1D35]">
                        {subServ.quantity}
                      </p>
                      <button className="ml-2 flex h-[30px] w-[30px] items-center justify-center rounded border bg-[#E5F7FD] p-2">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="text-[#CCD2E3]"
                        />
                      </button>
                    </div>
                    <button
                      className="rounded px-4 py-2 font-semibold text-black"
                      onClick={() => handleToggleDetails(subServ.id)}
                    >
                      {showAllDetails.includes(subServ.id) ? (
                        <>
                          <span className="ml-1 text-[#00ADEE]">
                            اخفاء التفاصيل
                          </span>
                          <FontAwesomeIcon
                            icon={faAngleUp}
                            className="text-[#00ADEE]"
                          />
                        </>
                      ) : (
                        <>
                          <span className="ml-1 text-[#00ADEE]">
                            رؤية التفاصيل
                          </span>
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            className="text-[#00ADEE]"
                          />
                        </>
                      )}
                    </button>
                  </div>
                  <div>
                    {showAllDetails.includes(subServ.id) && (
                      <ul className="ml-8">
                        {subServ.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Fragment>
              ))}
            </div>
          )}
        </div>
      ))}
    </form>
  );
};

export default ServicesList;
