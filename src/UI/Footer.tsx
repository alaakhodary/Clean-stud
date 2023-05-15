import logoImg from "../assest/logofooter.svg";
import telephone from "../assest/telephone.svg";
import messege from "../assest/Message.svg";
import pinImage from "../assest/Pin_alt_duotone.svg";
import Map from "../assest/Maps.svg";
import facebookImg from "../assest/facebook.svg";
import twitterImg from "../assest/twitter.svg";
import youtubeImg from "../assest/youtube.svg";
import WhatsAppImg from "../assest/WhatsApp.svg";
import instegramImg from "../assest/instegram.svg";
import GoogleImg from "../assest/Google.svg";

const Footer = () => {
  return (
    <footer className="mt-16 rounded-t-3xl bg-[#E5F7FD] p-8 pb-0 max-sm:rounded-t-none">
      <div className="grid gap-24 max-md:text-center sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <div className="justify-items-center max-md:grid">
          <img src={logoImg} alt="logo" className="mb-3" />
          <p className="text-[#7D7E82]">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.
          </p>
        </div>
        <div>
          <h1 className="mb-3 text-lg font-bold">خدماتنا</h1>
          <p className="mb-1 text-[#7D7E82]">تنظيف المنازل</p>
          <p className="mb-1 text-[#7D7E82]">التنظيف التجاري</p>
          <p className="mb-1 text-[#7D7E82]">تنظيف السجاد</p>
          <p className="mb-1 text-[#7D7E82]">تنظيف النوافذ</p>
          <p className="mb-1 text-[#7D7E82]">تنظيف السيارات</p>
          <p className="text-[#7D7E82]">تنظيف بعد البناء</p>
        </div>
        <div className="justify-items-center max-md:grid">
          <h1 className="mb-3 text-lg">تواصل معنا</h1>
          <div className="mb-2 flex max-sm:grid max-sm:justify-items-center">
            <img src={telephone} alt="telephone" />
            <p className="text-[#7D7E82]">0592700722</p>
          </div>
          <div className="flex justify-items-center max-sm:grid">
            <img src={messege} alt="messeges" />
            <p className="text-[0.9rem] text-[#7D7E82]">
              eng.mohammadalhabil@gmail.com
            </p>
          </div>
        </div>
        <div className="justify-items-center max-md:grid">
          <h1 className="mb-3 text-lg">تابعنا على</h1>
          <div className="mb-12 flex gap-5 text-center">
            <img src={facebookImg} alt="facebookImg" />
            <img src={twitterImg} alt="twitterImg" />
            <img src={youtubeImg} alt="youtubeImg" />
            <img src={WhatsAppImg} alt="WhatsAppImg" />
            <img src={instegramImg} alt="instegramImg" />
            <img src={GoogleImg} alt="GoogleImg" />
          </div>
          <div className="flex gap-1">
            <img src={pinImage} alt="pinImg" />
            <img src={Map} alt="Maps" />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <hr className="border border-white" />
        <p className="p-5 text-center text-lg font-medium text-black">
          جميع الحقوق محفوظة © 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
