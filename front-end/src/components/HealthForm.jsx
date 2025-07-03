import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"; // Import SweetAlert2

const HealthForm = ({ type = "health" }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [age, setAge] = useState(null);

  const today = new Date();
  const formatDate = (date) => date.toISOString().split("T")[0];

  // Calculate boundaries
  const date18YearsAgo = new Date();
  date18YearsAgo.setFullYear(today.getFullYear() - 18);

  const date80YearsAgo = new Date();
  date80YearsAgo.setFullYear(today.getFullYear() - 80);

  const maxDateStr = formatDate(date18YearsAgo);
  const minDateStr = formatDate(date80YearsAgo);
  const defaultDOB = formatDate(date18YearsAgo);

  // Watch dob and calculate age
  const dob = watch("dob", defaultDOB);
  useEffect(() => {
    if (dob) {
      const selectedDate = new Date(dob);
      let calculatedAge = today.getFullYear() - selectedDate.getFullYear();
      const m = today.getMonth() - selectedDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < selectedDate.getDate())) {
        calculatedAge--;
      }
      setAge(
        !isNaN(calculatedAge) && calculatedAge >= 0 ? calculatedAge : null
      );
    }
  }, [dob]);

  const formatMobile = (value) => value.replace(/^(?:\+91|91)?/, "").trim();
  const formatName = (value) =>
    value.replace(/\b\w/g, (char) => char.toUpperCase());

  const onSubmit = (data) => {
    const finalData = {
      Gender: data.gender,
      DOB: data.dob,
      Age: age || 0, // Include calculated age
      FullName: data.full_name,
      Email: data.email,
      Pin: data.pin,
      Mobile: data.mobile,
      InsuranceType: type,
      Status: "pending",
      FillDate: formatDate(today),
    };

    const url = "https://insuranceproject-99su.onrender.com/proxy/health"; // Or use new Google Apps Script URL

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
          confirmButtonColor: "#EC4899", // Match form's pink button
          background: "#1F2937", // Dark background
          color: "#F3F4F6", // Light text
        });

        // Clear form fields and reset age state
        reset({
          gender: "",
          dob: defaultDOB,
          full_name: "",
          email: "",
          pin: "",
          mobile: "",
        });
        setAge(null);
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
        {/* Gender Selection */}
        <div className="w-full">
          <label className="block mb-1 text-stone-300 text-sm">Gender</label>
          <div className="flex gap-5">
            <label className="text-stone-100">
              <input
                type="radio"
                value="male"
                {...register("gender", { required: "Gender is required" })}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="text-stone-100">
              <input
                type="radio"
                value="female"
                {...register("gender", { required: "Gender is required" })}
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
          {errors.gender && (
            <p className="text-sm text-red-500 mt-1">{errors.gender.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div className="relative w-full mt-2">
          <div className="flex items-center gap-2 relative">
            <input
              type="date"
              id="dob"
              name="dob"
              defaultValue={defaultDOB}
              min={minDateStr}
              max={maxDateStr}
              className="h-10 w-full border-b-1 border-gray-300 text-stone-100 focus:outline-none focus:border-pink pr-16"
              {...register("dob", {
                required: "Date of Birth is required",
              })}
            />
            {age !== null && (
              <div className="absolute right-2 top-2 text-xs text-white bg-pink px-2 py-1 rounded">
                {age} yrs
              </div>
            )}
          </div>
          <label
            htmlFor="dob"
            className="absolute left-0 -top-2.5 text-stone-300 text-xs"
          >
            Date of Birth
          </label>
          {errors.dob && (
            <p className="text-sm text-red-500 mt-1">{errors.dob.message}</p>
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

        {/* Email */}
        <div className="relative w-full mt-2">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="peer h-10 w-full border-b-1 border-gray-300 text-stone-100 placeholder-transparent focus:outline-none focus:border-pink"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@[\w.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          <label
            htmlFor="email"
            className="absolute left-0 -top-2.5 text-stone-300 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs"
          >
            Email
          </label>
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Area PIN */}
        <div className="relative w-full mt-2">
          <input
            type="text"
            id="pin"
            name="pin"
            placeholder="PIN Code"
            maxLength={6}
            className="peer h-10 w-full border-b-1 border-gray-300 text-stone-100 placeholder-transparent focus:outline-none focus:border-pink"
            {...register("pin", {
              required: "PIN code is required",
              pattern: {
                value: /^[1-9][0-9]{5}$/,
                message: "Enter a valid 6-digit PIN code",
              },
            })}
          />
          <label
            htmlFor="pin"
            className="absolute left-0 -top-2.5 text-stone-300 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs"
          >
            Area PIN Code
          </label>
          {errors.pin && (
            <p className="text-sm text-red-500 mt-1">{errors.pin.message}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="relative w-full mt-2">
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Mobile"
            className="peer h-10 w-full border-b-1 border-gray-300 text-stone-100 placeholder-transparent focus:outline-none focus:border-pink"
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

export default HealthForm;
