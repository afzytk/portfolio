import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitStatus(null);
      try {
        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form Submitted Safely:", values);
        setSubmitStatus("success");
        resetForm();
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section id="contact" className="py-24 bg-background text-foreground">
      <div className="max-w-xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12 gap-3">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-base max-w-sm">
            Have a question or want to work together? Drop me a message below.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full h-10 px-3 rounded-md border bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "border-input"
              }`}
              placeholder="Your name"
            />
            {formik.touched.name && formik.errors.name && (
              <span className="text-xs text-red-500">{formik.errors.name}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full h-10 px-3 rounded-md border bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-input"
              }`}
              placeholder="your.email@example.com"
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-xs text-red-500">
                {formik.errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full p-3 rounded-md border bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "border-input"
              }`}
              placeholder="Type your message here..."
            />
            {formik.touched.message && formik.errors.message && (
              <span className="text-xs text-red-500">
                {formik.errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full h-11 inline-flex items-center justify-center gap-2 font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm mt-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {formik.isSubmitting && (
              <svg
                className="animate-spin h-5 w-5 text-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {formik.isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <div className="p-3 mt-2 text-sm text-green-600 bg-green-50 rounded-md text-center border border-green-200">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="p-3 mt-2 text-sm text-red-600 bg-red-50 rounded-md text-center border border-red-200">
              Oops! Something went wrong. Please try again later.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
