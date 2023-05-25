import woman from "../../assest/imgWoman.svg";
import imgLeft from "../../assest/imgTitleLeft.svg";

import Footer from "../../UI/Footer";
import Header from "../../UI/Header/Header";

import ContactForm from "./components/ContactForm";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <section className="px-2 py-12">
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          <div className="w-full py-4 sm:mb-[1.5rem] xl:mt-16">
            <div className="mb-8 flex items-center gap-2">
              <h1 className="text-4xl">تواصل معنا</h1>
              <img src={imgLeft} alt="images" />
            </div>
            <ContactForm />
          </div>
          <div className="w-full max-sm:hidden">
            <img
              src={woman}
              alt="img"
              className="h-auto w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
