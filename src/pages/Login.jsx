import React from "react";
import { Formik, Form, Field } from "formik";
import { Mail, Lock, AlertCircle } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../components/ui/Card";
import Button from "../components/ui/Button";
import FormField from "../components/ui/FormField";
import { loginSchema } from "../validations/LoginValidation";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
            Sign in to access your account
          </p>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={async (values, { setSubmitting, setStatus }) => {
              try {
                console.log(values);
              } catch (error) {
                setStatus(error.message);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ errors, touched, status, isSubmitting }) => (
              <Form className="space-y-6">
                {status && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-red-600">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p>{status}</p>
                  </div>
                )}

                <div className="space-y-4">
                  <Field name="email">
                    {({ field }) => (
                      <FormField
                        {...field}
                        label="Email"
                        icon={Mail}
                        error={touched.email && errors.email}
                        placeholder="Enter your email"
                      />
                    )}
                  </Field>

                  <Field name="password">
                    {({ field }) => (
                      <FormField
                        {...field}
                        type="password"
                        label="Password"
                        icon={Lock}
                        error={touched.password && errors.password}
                        placeholder="Enter your password"
                      />
                    )}
                  </Field>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Remember me
                      </span>
                    </label>
                    <a
                      href="/forgot-password"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <span
              onClick={handleNavigate}
              className="font-medium text-blue-600 cursor-pointer hover:text-blue-500 dark:text-blue-400"
            >
              Sign up for free
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
