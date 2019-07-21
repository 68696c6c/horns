// import React from 'react'
// import PropTypes from 'prop-types'
// import { Formik } from 'formik'
// import * as Yup from 'yup'
//
// const fields = {
//   email: {
//     value: '',
//     required: true,
//   },
//   password: {
//     value: '',
//     required: true,
//   }
// }
//
// const Form = ({ onSubmit }) => (
//   <Formik
//     initialValues={{ email: '', password: '' }}
//     onSubmit={(values, { setSubmitting }) => {
//       setTimeout(() => {
//         onSubmit(JSON.stringify(values, null, 2))
//         setSubmitting(false)
//       }, 500)
//     }}
//     validationSchema={Yup.object().shape({
//       email: Yup.string()
//         .email('Invalid email address')
//         .required('Please enter your email'),
//       password: Yup.string().required('Please enter your password'),
//     })}
//   >
//     {({
//         values,
//         touched,
//         errors,
//         dirty,
//         isSubmitting,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         handleReset,
//       }) => (
//       <form onSubmit={handleSubmit}>
//         <Input
//           type="email"
//           name="email"
//           label="Email"
//           placeholder="example@xzy.com"
//           value={values.email}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           required
//           hasError={errors.email && touched.email}
//           errorMessage={errors.email}
//         />
//         <Input
//           type="password"
//           name="password"
//           label="Password"
//           placeholder="Password"
//           value={values.password}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           required
//           hasError={errors.password && touched.password}
//           errorMessage={errors.password}
//         />
//       </form>
//     )}
//   </Formik>
// )
//
// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// }
//
// export default Form
