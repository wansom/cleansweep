const Footer = () => {
    return ( 
        <footer className="bg-primary rounded-lg shadow">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/logo.png" className="h-20" alt="Flowbite Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                <li>
                    <a href="/healthcare-providers" className="hover:underline me-4 md:me-6">Healthcare Providers</a>
                </li>
                <li>
                    <a href="https://opendatacommons.org/licenses/pddl/1-0/" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="/individuals" className="hover:underline me-4 md:me-6">Individuals</a>
                </li>
                <li>
                    <a href="https://calendly.com/ochiengwarren3/evacare" className="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white text-center">© 2023 <a href="#" className="hover:underline">Evacare</a>. All Rights Reserved.</span>
    </div>
</footer>
     );
}
 
export default Footer;