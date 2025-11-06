import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const galleryImages = [
	{
		// url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
		url: "images/image1.jpg",
		alt: "Quantum Computing Research",
		title: "Quantum Computing Lab",
		category: "Research"
	},
	{
		// url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
		url: "images/image2.jpg",
		alt: "Cryptography Workshop",
		title: "Cryptography Workshop",
		category: "Workshop"
	},
	{
		// url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
		url: "images/image3.jpg",
		alt: "Machine Learning Conference",
		title: "ML Conference",
		category: "Conference"
	},
	{
		// url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
		url: "images/image4.jpg",
		alt: "Information Security Seminar",
		title: "Security Seminar",
		category: "Seminar"
	},
	{
		// url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
		url: "images/image5.webp",
		alt: "Academic Presentation",
		title: "Academic Presentation",
		category: "Presentation"
	},
	{
		// url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
		url: "images/image6.jpg",
		alt: "Research Team",
		title: "Research Team",
		category: "Team"
	},
	// {
	// 	url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
	// 	alt: "Laboratory Work",
	// 	title: "Lab Work",
	// 	category: "Research"
	// },
	// {
	// 	url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
	// 	alt: "Student Supervision",
	// 	title: "Student Supervision",
	// 	category: "Teaching"
	// },
	// {
	// 	url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
	// 	alt: "Conference Presentation",
	// 	title: "Conference Talk",
	// 	category: "Conference"
	// },
	{
		url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
		alt: "Research Publication",
		title: "Research Publication",
		category: "Publication"
	},
	// {
	// 	url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
	// 	alt: "Academic Meeting",
	// 	title: "Academic Meeting",
	// 	category: "Meeting"
	// },
	{
		url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
		alt: "Collaboration",
		title: "Outreach Activity",
		category: "Collaboration"
	}
];

const Gallery = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
			{/* Header */}
			<div className="bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
				<div className="container mx-auto px-6 py-4">
					<div className="flex justify-between items-center">
						<Link to="/">
							<Button variant="ghost" className="flex items-center gap-2">
								<ArrowLeft size={16} />
								Back to Home
							</Button>
						</Link>
						<h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Dr. Imon Mukherjee
						</h1>
					</div>
				</div>
			</div>

			{/* Gallery Content */}
			<div className="container mx-auto px-6 py-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4">
						Research Gallery
					</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto">
						Explore the visual journey of our research activities, academic presentations, and collaborative endeavors in quantum computing, cryptography, and information security.
					</p>
				</motion.div>

				{/* Gallery Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
					{galleryImages.map((image, index) => (
						<motion.div
							key={index}
							className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<img
								src={image.url}
								alt={image.alt}
								className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 mb-2 inline-block">
										<span className="text-white text-xs font-medium">{image.category}</span>
									</div>
									<h3 className="text-white font-semibold text-lg">{image.title}</h3>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Footer */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="text-center mt-16"
				>
					<p className="text-slate-600 mb-4">
						Capturing moments from our research journey in quantum computing and information security
					</p>
					<Link to="/">
						<Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
							Return to Homepage
						</Button>
					</Link>
				</motion.div>
			</div>
		</div>
	);
};

export default Gallery; 
