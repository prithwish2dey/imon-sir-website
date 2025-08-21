import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image } from "lucide-react";

const carouselImages = [
	{
		// url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=560&fit=crop",
		url: "images/quantum-computer.webp",
		alt: "Quantum Computing Circuit",
		title: "Quantum Computing Research",
	},
	{
		// url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1200&h=560&fit=crop",
		url: "images/cryptography.jpg",
		alt: "Digital Network",
		title: "Advanced Cryptography",
	},
	{
		// url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=560&fit=crop",
		url: "images/QML.jpg",
		alt: "Machine Learning Code",
		title: "Quantum Machine Learning",
	},
	{
		// url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=560&fit=crop",
		url: "images/steganography.jpg",
		alt: "Computer Technology",
		title: "Steganography and Steganalysis",
	},
];

export default function Hero() {
	const [currentText, setCurrentText] = useState(0);
	const [displayText, setDisplayText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);
	
	const titles = [
		"Distinguished Professor | Expert in Quantum Computing, Steganography & Information Security",
		"Leading Researcher | Quantum Computing & Cryptography Specialist",
		"Academic Excellence | Information Security & Machine Learning Expert",
		"Research Pioneer | Advanced Cryptographic Techniques & AI Applications"
	];

	// Auto-play carousel
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const currentTitle = titles[currentText];
		const typingSpeed = isDeleting ? 50 : 100;
		const deletingSpeed = 50;

		if (!isDeleting && displayText === currentTitle) {
			// Wait before starting to delete
			setTimeout(() => setIsDeleting(true), 2000);
			return;
		}

		if (isDeleting && displayText === "") {
			setIsDeleting(false);
			setCurrentText((prev) => (prev + 1) % titles.length);
			return;
		}

		const timer = setTimeout(() => {
			if (isDeleting) {
				setDisplayText(currentTitle.slice(0, displayText.length - 1));
			} else {
				setDisplayText(currentTitle.slice(0, displayText.length + 1));
			}
		}, isDeleting ? deletingSpeed : typingSpeed);

		return () => clearTimeout(timer);
	}, [displayText, isDeleting, currentText, titles]);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		element?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section id="home" className="pt-20 pb-16 px-6">
			<div className="container mx-auto">
				{/* Top row: Animated profile image on the left, text on the right */}
				<div className="flex flex-col lg:flex-row items-center gap-12">
					{/* Profile Image (animated with jumping effect) */}
					<motion.img
						src="/images/profile_image.jpg"
						alt="Profile"
						className="w-60 h-60 rounded-full object-cover shadow-xl"
						initial={{ opacity: 0, x: -50 }}
						animate={{ 
							opacity: 1, 
							x: 0,
							y: [0, -10, 0]
						}}
						transition={{ 
							duration: 0.6,
							y: {
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut"
							}
						}}
					/>

					{/* Headings and CTAs */}
					<div className="flex-1 text-center lg:text-left">
						<div className="mb-6">
							<h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4 leading-tight">
								Dr. Imon Mukherjee
							</h1>
							<div className="text-xl mb-6 h-8 flex items-center justify-center lg:justify-start">
								<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
									{displayText}
								</span>
								<span className="animate-pulse text-purple-600 font-bold">|</span>
							</div>
							<p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto lg:mx-0">
								Assistant Professor at IIIT Kalyani with Ph.D. from Jadavpur University, specializing in 
								cutting-edge quantum technologies, advanced cryptographic techniques, and machine learning applications.
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Button 
								onClick={() => scrollToSection('research')} 
								className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg"
							>
								Explore Research
							</Button>
							<Link to="/publications">
								<Button 
									variant="outline" 
									className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
								>
									View Publications
								</Button>
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom: Auto-playing Carousel */}
				<div className="mt-12">
					<div className="w-full max-w-6xl mx-auto">
						<div className="relative">
							<motion.img 
								key={currentSlide}
								src={carouselImages[currentSlide].url}
								alt={carouselImages[currentSlide].alt}
								className="w-full h-[28rem] object-cover rounded-3xl shadow-2xl opacity-10"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
							/>
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-3xl">
								<h3 className="text-white font-semibold text-lg">{carouselImages[currentSlide].title}</h3>
							</div>
							
							{/* Navigation dots */}
							<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
								{carouselImages.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentSlide(index)}
										className={`w-3 h-3 rounded-full transition-colors ${
											index === currentSlide ? 'bg-white' : 'bg-white/50'
										}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
} 