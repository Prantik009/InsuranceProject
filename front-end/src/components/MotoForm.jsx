import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"; // Import SweetAlert2

const MotoForm = ({ formType = "car" }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset, // Add reset from useForm
    formState: { errors },
  } = useForm();

  const today = new Date();
  const formatDate = (date) => date.toISOString().split("T")[0];

  const todayStr = formatDate(today);
  const tenYearsAgo = formatDate(
    new Date(today.setFullYear(today.getFullYear() - 10))
  );
  const oneYearAgo = formatDate(
    new Date(new Date().setFullYear(new Date().getFullYear() - 1))
  );

  const [hideExpiry, setHideExpiry] = useState(false);

  const formatVehicle = (value) =>
    value
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .replace(/(.{2})(.{1,2})([A-Z]{1,3})(\d{0,4})/, "$1$2$3$4");

  const formatMobile = (value) => value.replace(/^(?:\+91|91)?/, "").trim();

  const formatName = (value) =>
    value.replace(/\b\w/g, (char) => char.toUpperCase());

  const onSubmit = (data) => {
    const finalData = {
      RegNo: data.vehicle,
      RegDate: data.regDate,
      PolicyExpiry: data.policyExpiry,
      Mobile: data.mobile,
      FullName: data.full_name,
      VehicleType: formType,
      Status: "pending",
      FillDate: todayStr,
    };

    const url = "https://insuranceproject-99su.onrender.com/proxy/moto"; // Replace with your proxy or Google Apps Script URL

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        console.log("Submitted:", result);
        Swal.fire({
          title: "Success!",
          text: "Your form has been submitted successfully! Our agent will connect with you soon.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#EC4899",
          background: "#1F2937",
          color: "#F3F4F6",
        });
        // Clear form fields and reset hideExpiry state
        reset({
          vehicle: "",
          regDate: oneYearAgo,
          policyExpiry: todayStr,
          mobile: "",
          full_name: "",
        });
        setHideExpiry(false); // Reset the checkbox state
      })
      .catch((err) => {
        console.error("Submission failed:", err);
        Swal.fire({
          title: "Error!",
          text: "Failed to submit form: " + err.message,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#EC4899",
          background: "#1F2937",
          color: "#F3F4F6",
        });
      });
  };

  return (
    <div className="w-full px-10 border py-8 border-stone-400 rounded-md">
      <h2 className="text-center md:text-start text-pink font-bold text-xl mb-3 capitalize">
        Please enter your details
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-5 justify-center items-center"
      >
        {/* Vehicle Registration Number */}
        <div className="relative w-full mt-2">
          <input
            type="text"
            id="regNo"
            name="regNo"
            className="peer h-10 w-full border-b-1 border-gray-300 text-stone-100 placeholder-transparent focus:outline-none focus:border-pink uppercase"
            placeholder="regNo"
            {...register("vehicle", {
              required: "Vehicle number is required",
              pattern: {
                value: /^[A-Z]{2}\d{1,2}[A-Z]{1,3}\d{4}$/,
                message:
                  "Enter a valid Indian vehicle number (e.g., WB20AG1234)",
              },
              onChange: (e) => {
                const formatted = formatVehicle(e.target.value);
                setValue("vehicle", formatted);
              },
            })}
            onChange={(e) => {
              const formatted = formatVehicle(e.target.value);
              setValue("vehicle", formatted);
            }}
          />
          <label
            htmlFor="regNo"
            className="absolute left-0 -top-2.5 text-stone-300 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs"
          >
            Vehicle Registration No.
          </label>
          {errors.vehicle && (
            <p className="text-sm text-red-500 mt-1">
              {errors.vehicle.message}
            </p>
          )}
        </div>

        {/* Registration Date */}
        <div className="relative w-full mt-2">
          <input
            type="date"
            id="regDate"
            name="regDate"
            max={todayStr}
            min={tenYearsAgo}
            defaultValue={oneYearAgo}
            className="h-10 w-full border-b-1 border-gray-300 text-stone-100 focus:outline-none focus:border-pink"
            {...register("regDate", {
              required: "Registration date is required",
            })}
          />
          <label
            htmlFor="regDate"
            className="absolute left-0 -top-2.5 text-stone-300 text-xs"
          >
            Exact Registration Date
          </label>
          {errors.regDate && (
            <p className="text-sm text-red-500 mt-1">
              {errors.regDate.message}
            </p>
          )}
        </div>

        {/* Policy Expiry Date */}
        {!hideExpiry && (
          <div className="relative w-full mt-2">
            <input
              type="date"
              id="policyExpiry"
              name="policyExpiry"
              max={todayStr}
              min={oneYearAgo}
              defaultValue={todayStr}
              className="h-10 w-full border-b-1 border-gray-300 text-stone-100 focus:outline-none focus:border-pink"
              {...register("policyExpiry", {
                required: "Policy expiry date is required",
              })}
            />
            <label
              htmlFor="policyExpiry"
              className="absolute left-0 -top-2.5 text-stone-300 text-xs"
            >
              Previous Year Policy Expiry Date
            </label>
            {errors.policyExpiry && (
              <p className="text-sm text-red-500 mt-1">
                {errors.policyExpiry.message}
              </p>
            )}
          </div>
        )}

        {/* Checkbox */}
        <div className="w-full flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            id="dontKnow"
            checked={hideExpiry}
            onChange={() => setHideExpiry((prev) => !prev)}
          />
          <label htmlFor="dontKnow" className="text-stone-300 text-sm">
            Don't know the policy expiry date
          </label>
        </div>

        {/* Mobile Number */}
        <div className="relative w-full mt-2">
          <input
            type="text"
            id="mobile"
            name="mobile"
            className="peer h-10 w-full border-b-1 border-gray-300 text-stone-100 placeholder-transparent focus:outline-none focus:border-pink"
            placeholder="mobile"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Enter a valid Indian mobile number",
              },
              onChange: (e) => {
                const formatted = formatMobile(e.target.value);
                setValue("mobile", formatted);
              },
            })}
            onChange={(e) => {
              const formatted = formatMobile(e.target.value);
              setValue("mobile", formatted);
            }}
          />
          <label
            htmlFor="mobile"
            className="absolute left-0 -top-2.5 text-stone-300 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs"
          >
            Mobile Number
          </label>
          {errors.mobile && (
            <p className="text-sm text-red-500 mt-1">{errors.mobile.message}</p>
          )}
        </div>

        {/* Name */}
        <div className="relative w-full mt-2">
          <input
            type="text"
            id="full_name"
            name="full_name"
            className="peer h-10 w-full border-b-1 border-gray-300 text-stone-100 placeholder-transparent focus:outline-none focus:border-pink capitalize"
            placeholder="Name"
            {...register("full_name", {
              required: "Name is required",
              minLength: { value: 3, message: "Min 3 characters required" },
              maxLength: { value: 30, message: "Max 30 characters allowed" },
              onChange: (e) => {
                const formatted = formatName(e.target.value);
                setValue("full_name", formatted);
              },
            })}
            onChange={(e) => {
              const formatted = formatName(e.target.value);
              setValue("full_name", formatted);
            }}
          />
          <label
            htmlFor="full_name"
            className="absolute left-0 -top-2.5 text-stone-300 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs"
          >
            Name
          </label>
          {errors.full_name && (
            <p className="text-sm text-red-500 mt-1">
              {errors.full_name.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-pink cursor-pointer text-white px-5 py-2 rounded-md hover:opacity-90 mt-4 w-full md:w-3/4 lg:w-1/2"
        >
          Get Quote
        </button>
      </form>
    </div>
  );
};

export default MotoForm;
