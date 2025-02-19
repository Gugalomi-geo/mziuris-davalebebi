import { useState } from "react";
import { useFormik } from "formik";
import { object, string, array, boolean } from "yup";
import "./App.css";

export const ReservationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // ეს სთეითი გამოიყენება ფორმის გაგზავნის პროცესის საკონტროლებლად

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      amenities: [],
      roomType: "single",
      termsAccepted: false,
    },
    validationSchema: object({
      fullName: string()
        .required("fullName is a required field")
        .min(3)
        .max(20),
      email: string().required("email is a required field").min(4).max(25),
      roomType: string().required("roomType is a required field").min(4),
      amenities: array().of(string().min(3)), // ვალიდაციის წესები თითოეული ველისთვის, რომელიც განსაზღვრავს შეყვანილი მონაცემების სისწორეს
      termsAccepted: boolean()
        .oneOf([true], "Please accept terms and conditions")
        .required(), // ეს ველი მხოლოდ მაშინ ჩაითვლება სწორად, როცა მომხმარებელი დაეთანხმება პირობებს (true)
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true); // ფორმის გაგზავნისას ღილაკი გადადის Loading მდგომარეობაში
      setTimeout(() => {
        console.log(values); // 1.5 წამის შემდეგ კონსოლში გამოაქვს შევსებული ფორმის მონაცემები
        setIsSubmitting(false); // ფორმის გაგზავნის დასრულებისას ღილაკი უბრუნდება საწყის მდგომარეობას
      }, 1500);
    },
  });

  const availableAmenities = [
    { displayText: "WiFi", value: "WiFi" },
    { displayText: "Breakfast", value: "Breakfast" },
    { displayText: "Parking", value: "Parking" },
  ];

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container">
        <h1>Reservation 🏠</h1>
        <div className="fullName">
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
          </label>
          <span style={{ color: "red" }}>{formik.errors.fullName}</span>
          {/* formik-ის მეშვეობით ვაკონტროლებთ ინპუტის მნიშვნელობას და ცვლილებებს, ხოლო ერორის შემთხვევაში ვაჩვენებთ შესაბამის შეტყობინებას */}
        </div>

        <div className="email">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </label>
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        </div>

        <div className="amenities">
          Amenities:
          {availableAmenities.map((item) => (
            <label key={item.value}>
              <input
                type="checkbox"
                name="amenities"
                value={item.value}
                onChange={formik.handleChange}
              />
              <span>{item.displayText}</span>
            </label>
          ))}
          {/* map ფუნქციით ვახდენთ დამატებითი მომსახურების ჩეკბოქსების გენერირებას მასივიდან */}
        </div>

        <div className="roomType">
          <label>
            Room Type:
            <select
              name="roomType"
              value={formik.values.roomType}
              onChange={formik.handleChange}
            >
              <option value="single">single</option>
              <option value="double">double</option>
              <option value="suite">suite</option>
            </select>
          </label>
          <span style={{ color: "red" }}>{formik.errors.roomType}</span>
        </div>

        <div className="terms">
          <label htmlFor="">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formik.values.termsAccepted}
              onChange={formik.handleChange}
            />
            <span>Accept the terms and conditions.</span>
          </label>
          <span style={{ color: "red" }}>{formik.errors.termsAccepted}</span>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Continue"}
          {/* ღილაკის ტექსტი და მდგომარეობა იცვლება isSubmitting სთეითის მიხედვით */}
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
