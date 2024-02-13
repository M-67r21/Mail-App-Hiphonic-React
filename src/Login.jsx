import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Login() {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .max(10, "Username cannot be more than 10 characters"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        "Must Contain 6 Chars, 1 Uppercase, 1 Lowercase, 2 Number & 2 special Char"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitFunction)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          paddingBlock: "4rem",
          paddingInline: "34rem",
        }}
      >
        <>
          <input
            type="text"
            name=""
            placeholder="Enter Username"
            {...register("username")}
          />
          <p>{errors.username?.message}</p>
        </>

        {/* <>
          <input type="text" placeholder="Email..." {...register("email")} />
          <p>{errors.email?.message}</p>
        </> */}
        <>
          <input
            type="password"
            name=""
            placeholder="Enter Password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </>
        {/* <>
          <input
            type="password"
            name=""
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true, minLength: 6 })}
          />
          <p>{errors.confirmPassword?.message}</p>
        </> */}
        <Link to="/feed">
          <input type="submit" value="Submit" />
        </Link>
      </form>
    </>
  );
}

export default Login;
