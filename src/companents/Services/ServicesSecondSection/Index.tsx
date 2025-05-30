import { useState } from "react";
import "../../../assets/css/style.css";
import { ServicesService } from "../../../services/service.service";
import { toast } from "react-toastify";
import { useSite } from "../../../context/SiteContext";
import { SiteData } from "../../../interface/site.interface";

const Index = () => {
  const { data } = useSite() as { data: SiteData };

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    productInfo: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id === "fullName"
        ? "full_name"
        : id === "phoneNumber"
        ? "phone_number"
        : "product_info"]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        full_name: formData.fullName,
        phone_number: formData.phoneNumber,
        product_info: formData.productInfo,
      };

      const res = await ServicesService.PostPriceOffer(payload);
      // alert("Form uğurla göndərildi!");
      toast.success("Müraciətiniz uğurla göndərildi");
    } catch (err: any) {
      setErrors(err.errors);
    }
  };

  return (
    <div className="sevices-all-color">
      <div className="container services-all-contact">
        <div className="quote-form">
          <h2 className="title">{data?.price_offer}</h2>
          <p className="subtitle">{data?.price_offer_description}</p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-field">
                <label htmlFor="fullName">{data?.name_surname}</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder={data?.name_surname_placeholder}
                  className="input"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <p className="errorMsg">{errors.full_name}</p>
              </div>
              <div className="input-field">
                <label htmlFor="phoneNumber">{data?.contact_number}</label>
                <input
                  id="phoneNumber"
                  type="number"
                  placeholder={data?.contact_number}
                  className="input"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <p className="errorMsg">{errors.phone_number}</p>
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="productInfo">{data?.product_about}</label>
              <textarea
                id="productInfo"
                className="textarea"
                placeholder={data?.product_about}
                value={formData.productInfo}
                onChange={handleChange}
              />
              <p className="errorMsg"> {errors.product_info}</p>
            </div>
            <button type="submit" className="submit-buttonn">
              {data?.send_message}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
