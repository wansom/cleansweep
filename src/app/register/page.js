'use client'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation'
import Loader from '../(components)/buttonLoader'
import { createNewUser } from '../(services)/firestore'
import { createUser } from '../(services)/auth'


const Signup = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    password: '',
    profileUpdate: '0%',
    profileStage: 'overview',
    messages: []
  })

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({
    company: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const isValidEmail = (email) => {
    // You need to implement or import your email validation logic
    // For example, a simple check for demonstration purposes:
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Validate form fields
    const newErrors = {
      company: '',
      email: '',
      password: ''
    }

    if (formData.company.trim() === '') {
      newErrors.company = 'Name is required'
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address'
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required'
    }

    if (Object.values(newErrors).some((error) => error !== '')) {
      setErrors(newErrors)
      setLoading(false)
      return
    }

    try {
      const user = await createUser(formData)
      const payload = {
        uid: user.uid,
        data: formData
      }
      await createNewUser(payload, () => {
       router.push('/chat')
      })
      setLoading(false)
      toast.success('🦄 Account Request Sent Successfully!', {
        // Toast configuration
      })
    } catch (err) {
      setLoading(false)
      toast.error(` 🦄 something went wrong.check email and try again!`, {
        // Toast configuration
      })
    }
  }
  return (
    <main>
      <section className="mx-auto">
        <ToastContainer />
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
          <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div className="flex flex-col overflow-y-auto md:flex-row">
              <div className="h-32 md:h-auto md:w-1/2">
                <img
                  aria-hidden="true"
                  className="object-cover w-full h-full dark:hidden"
                  src="/img/eva.jpg"
                  alt="Office"
                />
                <img
                  aria-hidden="true"
                  className="hidden object-cover w-full h-full dark:block"
                  src="/login.jpg"
                  alt="Office"
                />
              </div>
              <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div className="w-full">
                  <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                    Create account
                  </h1>

                  <form onSubmit={handleSubmit}>
                    <label className="block text-sm">
                      <span className="text-gray-700 dark:text-gray-400">Your Name</span>
                      <input
                        className={`block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input ${
                          errors.company && 'border-red-500'
                        }`}
                        placeholder="Malkia Esther"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                      {errors.company && (
                        <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                      )}
                    </label>
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400">Email</span>
                      <input
                        className={`block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input ${
                          errors.email && 'border-red-500'
                        }`}
                        placeholder="user@rafikihealth.com"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </label>
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400">Password</span>
                      <input
                        className={`block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input ${
                          errors.password && 'border-red-500'
                        }`}
                        placeholder="***************"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                      )}
                    </label>

                    {/* <div className="flex mt-6 text-sm">
                      <label className="flex items-center dark:text-gray-400">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="text-[#13A8BD] dark:text-[#13A8BD] focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                        />
                        <span className="ml-2">
                          I agree to the
                          <span className="underline ml-1">privacy policy</span>
                        </span>
                      </label>
                    </div> */}
                    <button
                      type="submit"
                      className=" flex items-center justify-center gap-2 w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"
                    >
                      Create account
                      {loading && <Loader/>}
                    </button>
                  </form>

                  <hr className="my-8" />
                  <p className="mt-4">
                    {/* <a
                      className="text-sm font-medium text-[#13A8BD] dark:text-[#13A8BD] hover:underline"
                      href="/login"
                    >
                      Already have an account? Login
                    </a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Signup
