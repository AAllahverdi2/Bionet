import { useState } from "react";
import "../../../assets/css/style.css";
import { ServicesService } from "../../../services/service.service";
import { toast } from "react-toastify";
// import { ServicesService } from '../../../services/services.service';

const Index = () => {
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
      console.log("Form göndərildi:", res.data);
      // alert("Form uğurla göndərildi!");
      toast.success("Müraciətiniz uğurla göndərildi");
    } catch (err: any) {
      console.log(err);
      setErrors(err.errors);
    }
  };

  return (
    <div className="sevices-all-color">
      <div className="container services-all-contact">
        <div className="quote-form">
          <h2 className="title">Qiymət təklifi</h2>
          <p className="subtitle">
            Vebsayt və ya mobil tətbiq üçün dizayn qiymətinin hesablanması
            istəyirsinizsə bizə yazın və qiymət təklifi alın
          </p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-field">
                <label htmlFor="fullName">Adınızı və soyadınız</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Adınızı və soyadınızı daxil edin"
                  className="input"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <p className="errorMsg">{errors.full_name}</p>
              </div>
              <div className="input-field">
                <label htmlFor="phoneNumber">Əlaqə nömrəniz</label>
                <input
                  id="phoneNumber"
                  type="number"
                  placeholder="Əlaqə nömrənizi daxil edin"
                  className="input"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <p className="errorMsg">{errors.phone_number}</p>
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="productInfo">Məhsul haqqında</label>
              <textarea
                id="productInfo"
                className="textarea"
                placeholder="Məhsul haqqında"
                value={formData.productInfo}
                onChange={handleChange}
              />
              <p className="errorMsg"> {errors.product_info}</p>
            </div>
            <button type="submit" className="submit-buttonn">
              Göndər
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
