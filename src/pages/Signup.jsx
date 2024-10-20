import React from "react";
import { Formik, Form, Field } from "formik";
import { User, Mail, Lock, CheckCircle, AlertCircle } from "lucide-react";
import { signupSchema } from "../validations/SignupValidation";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../components/ui/Card";
import Button from "../components/ui/Button";
import FormField from "../components/ui/FormField";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleNavigate = () => {
    navigate("/sign-in");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Create Account
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
            Join us to start managing your tasks effectively
          </p>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={signupSchema}
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
                  <Field name="name">
                    {({ field }) => (
                      <FormField
                        {...field}
                        label="Full Name"
                        icon={User}
                        error={touched.name && errors.name}
                        placeholder="Enter your full name"
                      />
                    )}
                  </Field>

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
                        placeholder="Create a strong password"
                      />
                    )}
                  </Field>

                  <Field name="confirmPassword">
                    {({ field }) => (
                      <FormField
                        {...field}
                        type="password"
                        label="Confirm Password"
                        icon={CheckCircle}
                        error={
                          touched.confirmPassword && errors.confirmPassword
                        }
                        placeholder="Confirm your password"
                      />
                    )}
                  </Field>
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating account..." : "Create Account"}
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <span
              onClick={handleNavigate}
              className="font-medium text-blue-600 cursor-pointer hover:text-blue-500 dark:text-blue-400"
            >
              Sign in instead
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupForm;
