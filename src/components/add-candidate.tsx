import { Field, Form, Formik } from "formik";

interface NewCandidateFormVal {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
}
interface AddCandidateProps {
  userData: any;
  setUserData: any;
}
const AddCandidate: React.FC<AddCandidateProps> = ({
  userData,
  setUserData,
}) => {
  const initialValues: NewCandidateFormVal = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
  };
  return (
    <>
      <p className="text-4xl pt-3">Add New Candidate</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setUserData([
            ...userData,
            {
              id: Math.floor(Math.random() * 100) + 5,
              first_name: values.firstName,
              last_name: values.lastName,
              email: values.email,
              gender: values.gender,
            },
          ]);
          actions.resetForm();
        }}
      >
        <Form>
          <div className="mt-4 pt-4 grid grid-rows-3 gap-3">
            <div className="grid grid-cols-2">
              <div className="pr-3">
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full p-2 border-b-[1px] focus:outline-none"
                  required={true}
                />
              </div>
              <div className="pr-3">
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full p-2 border-b-[1px] focus:outline-none"
                  required={true}
                />
              </div>
            </div>
            <div className="pr-3">
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border-b-[1px] focus:outline-none"
                required={true}
              />
            </div>
            <div className="grid grid-cols-4">
              <div className="pl-2">
                <label>
                  <Field
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    className="accent-green-600"
                    required={true}
                  />
                  <span className="pl-2">Male</span>
                </label>
              </div>
              <div className="pl-2">
                <label>
                  <Field
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    className="accent-green-600"
                    required={true}
                  />
                  <span className="pl-2">Female</span>
                </label>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 active:bg-green-800 focus:ring focus:ring-green-300 py-2 px-4 text-white rounded-sm"
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AddCandidate;
