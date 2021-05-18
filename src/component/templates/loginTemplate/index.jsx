const LoginTemplate = ({ formData, handleSubmit, handleInputChange }) => {
  const { email, password } = formData;

  const handleChange = ({ key, e }) => {
    const inputValue = e?.target?.value;
    handleInputChange({ key, value: inputValue });
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md md:max-w-xl lg:max-w-3xl w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Sign in
          </h2>
          <p className="mt-2 text-center text-sm md:text-base lg:text-lg text-gray-600">
            <span className="font-medium text-indigo-600 hover:text-indigo-500">
              edit page infomation
            </span>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={e => onSubmit(e)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm md:text-base lg:text-lg"
                placeholder="Email address"
                onChange={e => handleChange({ key: 'email', e })}
                value={email}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm md:text-base lg:text-lg"
                placeholder="Password"
                onChange={e => handleChange({ key: 'password', e })}
                value={password}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-gray-900 text-sm md:text-base lg:text-lg"
              >
                Remember me
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm md:text-base lg:text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3" />
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginTemplate;
