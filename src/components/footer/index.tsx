import { FaFacebook, FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1500px]">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 relative z-10">
                    {/* Copyright Text */}
                    <p className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300 order-2 sm:order-1">
                        2024 Dream Interpreter. All rights reserved.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex items-center space-x-3 sm:space-x-6 order-1 sm:order-2">
                        <a
                            href="https://www.facebook.com/profile.php?id=100094473307768"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 hover:shadow-lg hover:shadow-blue-500/20 rounded-lg transition-shadow duration-300"
                        >
                            <span className="absolute inset-0 bg-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                            <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:scale-110 transition-all duration-300 hover:text-blue-500" />
                        </a>
                        <a
                            href="https://www.instagram.com/r_sadiyev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 hover:shadow-lg hover:shadow-pink-500/20 rounded-lg transition-shadow duration-300"
                        >
                            <span className="absolute inset-0 bg-pink-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                            <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:scale-110 transition-all duration-300 hover:text-pink-500" />
                        </a>
                        <a
                            href="https://t.me/@Lazy_Frontend_Developer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 hover:shadow-lg hover:shadow-blue-400/20 rounded-lg transition-shadow duration-300"
                        >
                            <span className="absolute inset-0 bg-blue-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                            <FaTelegram className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:scale-110 transition-all duration-300 hover:text-blue-400" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rustam-sadiyev-2723922b1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 hover:shadow-lg hover:shadow-blue-600/20 rounded-lg transition-shadow duration-300"
                        >
                            <span className="absolute inset-0 bg-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                            <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:scale-110 transition-all duration-300 hover:text-blue-600" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}