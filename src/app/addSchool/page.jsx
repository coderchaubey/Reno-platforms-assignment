"use client";

import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";

export default function AddSchool() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (let key in data) if (key !== "image") formData.append(key, data[key]);
    formData.append("image", data.image[0]);

    const res = await fetch("/api/schools", { method: "POST", body: formData });
    const result = await res.json();
    if (res.ok) {
      alert(result.message);
      reset();
    } else {
      alert(result.error);
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="form-container">
        <h1>Add School</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="School Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="error">Name is required</span>}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Address"
              {...register("address", { required: true })}
            ></input>
            {errors.address && (
              <span className="error">Address is required</span>
            )}
          </div>

          <div className="form-group">
            <input
              placeholder="City"
              {...register("city", { required: true })}
            />
            {errors.city && <span className="error">City is required</span>}
          </div>

          <div className="form-group">
            <input
              placeholder="State"
              {...register("state", { required: true })}
            />
            {errors.state && <span className="error">City is required</span>}
          </div>

          <div className="form-group">
            <input
              type="number"
              placeholder="Contact"
              {...register("contact", {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
            />
            {errors.contact && (
              <span className="error">Valid 10 digit mobile no. required</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              {...register("email_id", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.email_id && (
              <span className="error">Valid email required</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="file"
              accept="image/jpeg, .jpg, .png"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="error">Image File is required</span>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
