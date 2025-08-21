
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Mail, MapPin, ExternalLink, Calendar, DollarSign, User, BookOpen, Award, MessageSquare, ChevronDown, Cpu, Lock, Brain, Atom, GraduationCap, Users, FileText } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const researchInterests = [
    { 
      name: "Quantum Computing", 
      description: "Quantum algorithms, quantum cryptography, and quantum machine learning",
      icon: Atom,
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    { 
      name: "Steganography", 
      description: "Advanced data hiding, secure communication, and image sterilization",
      icon: Lock,
      color: "bg-purple-100 text-purple-800 border-purple-200"
    },
    { 
      name: "Cryptography", 
      description: "Post-quantum cryptographic protocols and network security",
      icon: Lock,
      color: "bg-red-100 text-red-800 border-red-200"
    },
    { 
      name: "Information Security", 
      description: "Cybersecurity, data protection, and e-governance security",
      icon: Cpu,
      color: "bg-orange-100 text-orange-800 border-orange-200"
    },
    { 
      name: "Machine Learning", 
      description: "AI applications in agriculture, computer vision, and data analytics",
      icon: Brain,
      color: "bg-green-100 text-green-800 border-green-200"
    }
  ];

  const fundedProjects = [
    {
      title: "Study of Quantum Attacks on Stream Ciphers and Its Counter-Measures",
      funding: "DRDO, Govt. of India",
      duration: "Sept, 2022 – Sept, 2024",
      amount: "₹42.25 Lakhs",
      role: "PI"
    },
    {
      title: "Extraction, Organization and Query of Scholarly Information",
      funding: "SERB (CRG), Govt. of India",
      duration: "March, 2022 to March, 2025",
      amount: "₹45.61 Lakhs",
      role: "PI"
    },
    {
      title: "AI in Agriculture & Food Sustainability",
      funding: "MeitY, Govt. of India",
      duration: "March, 2020 to March, 2023",
      amount: "₹16.18 Lakhs",
      role: "Co-PI"
    },
    {
      title: "Implementation of Security in eGovernance through Steganography",
      funding: "DST, Govt. of West Bengal",
      duration: "July, 2013, to June, 2016",
      amount: "₹1.85 Lakhs",
      role: "PI"
    }
  ];

  const publications = [
    {
      title: "I-ROD: An Ensemble CNNs for Object Detection in Unconstrained Road Scenarios",
      journal: "Signal, Image and Video Processing",
      year: "2024",
      type: "journal",
      impactFactor: "2.0"
    },
    {
      title: "SteriCNN: Cloud Native Stego content Sterilization",
      journal: "Journal of Information Security and Applications",
      year: "2024",
      type: "journal",
      impactFactor: "5.6"
    },
    {
      title: "A complex network analysis approach to compare the performance of batsmen across different formats",
      journal: "Knowledge-Based Systems",
      year: "2024",
      type: "journal",
      impactFactor: "8.8"
    },
    {
      title: "A Quantum Public Key Cryptographic Scheme using Entangled States and Grover Operator",
      journal: "3rd International Conference on Security and Privacy (ICSP 2024)",
      year: "2024",
      type: "conference"
    }
  ];

  const phdSupervision = {
    awarded: [
      {
        name: "Dr. Pratap Chandra Mandal",
        thesis: "Unseen within Seen : A Steganographic Paradigm and Analysis",
        year: "Oct., 2021",
        position: "Asst. Professor, B.P. Poddar Institute of Management and Technology"
      },
      {
        name: "Dr. Abhishek Mukhopadhyay",
        thesis: "Object Detection in the Wild: Novel Techniques and Practical Applications",
        year: "Sept., 2023",
        position: "Post Doctoral Research Fellow, IISc Bangalore"
      },
      {
        name: "Dr. Nayan Ranjan Das",
        thesis: "Intelligent Decisions Lead to Success: An Unbiased Recommendation System in the Sport of Cricket for Quantifying Precedence of Players",
        year: "Nov., 2023",
        position: "Assistant Professor, Academy of Technology"
      },
      {
        name: "Dr. Ranjan Jana",
        thesis: "Epileptic Seizure Prediction with Channel Optimization",
        year: "Dec., 2024",
        position: "Assistant Professor, RCC Institute of Information Technology"
      }
    ],
    ongoing: [
      {
        name: "Chiranjit Pal",
        thesis: "Project JRF, MeitY, Govt. of India",
        startYear: "2021",
        status: "Thesis Submitted"
      },
      {
        name: "Sreeparna Ganguly",
        thesis: "SRF, UGC-NET Fellow",
        startYear: "2021",
        status: "Ongoing"
      },
      {
        name: "Koushik Deb",
        thesis: "Institute Research Fellow",
        startYear: "2021",
        status: "Ongoing"
      }
    ]
  };

  const talks = [
    {
      title: "Quantum AI",
      venue: "Faculty Development Program, Electronics & ICT Academy, IIT Roorkee",
      date: "September 29, 2024"
    },
    {
      title: "Quantum Computing in the Era of Industry 4.0/5.0",
      venue: "Pailan College of Management & Technology",
      date: "September 28, 2024"
    },
    {
      title: "Quantum Computing & Quantum Machine Learning",
      venue: "Haldia Institute of Technology",
      date: "May 15, 2024"
    },
    {
      title: "Pushing the Limit: Quantum Technology Revamps Computing",
      venue: "Techno College of Engineering Agartala",
      date: "March 6, 2024"
    }
  ];

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      alt: "Quantum Computing Circuit",
      title: "Quantum Computing Research"
    },
    {
      url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=400&fit=crop",
      alt: "Digital Network",
      title: "Advanced Cryptography"
    },
    {
      url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      alt: "Machine Learning Code",
      title: "Quantum Machine Learning"
    },
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
      alt: "Computer Technology",
      title: "Information Security"
    }
  ];

  const filteredPublications = activeFilter === "all" 
    ? publications 
    : publications.filter(pub => pub.type === activeFilter);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation with Dropdowns */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">Dr. Imon Mukherjee</h1>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-blue-600 transition-colors">About</button>
              
              {/* Research Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1">
                  Research <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border shadow-lg">
                  <DropdownMenuItem onClick={() => scrollToSection('research')}>Research Interests</DropdownMenuItem>
                  <Link to="/funded-projects">
                    <DropdownMenuItem>Funded Projects</DropdownMenuItem>
                  </Link>
                  <Link to="/publications">
                    <DropdownMenuItem>Publications</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Academic Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1">
                  Academic <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border shadow-lg">
                  <Link to="/academic-supervision">
                    <DropdownMenuItem>Academic Supervision</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem onClick={() => scrollToSection('talks')}>Talks & Conferences</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4 leading-tight">
                  Dr. Imon Mukherjee
                </h1>
                <p className="text-xl text-slate-600 mb-6">
                  Distinguished Professor | Expert in Quantum Computing, Steganography & Information Security
                </p>
                <p className="text-lg text-slate-700 mb-8 max-w-2xl">
                  Leading researcher at IIIT Kalyani with Ph.D. from Jadavpur University, specializing in 
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
            
            {/* Image Carousel */}
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-lg">
                <Carousel className="w-full">
                  <CarouselContent>
                    {carouselImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative">
                          <img 
                            src={image.url} 
                            alt={image.alt}
                            className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
                            <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Academic Background</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <h4 className="font-semibold text-slate-700">Current Position</h4>
                  <p className="text-slate-600">Distinguished Professor, Department of Computer Science & Engineering</p>
                  <p className="text-slate-600">Indian Institute of Information Technology (IIIT) Kalyani</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-teal-50 rounded-lg">
                  <h4 className="font-semibold text-slate-700">Education</h4>
                  <p className="text-slate-600">Ph.D. in Computer Science from Jadavpur University</p>
                  <p className="text-slate-600">Specialization: Quantum Computing and Cryptography</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Mail size={20} className="text-blue-600" />
                  <span className="text-slate-600">imon@iiitkalyani.ac.in</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <MapPin size={20} className="text-purple-600" />
                  <span className="text-slate-600">IIIT Kalyani, West Bengal, India</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <ExternalLink size={20} className="text-green-600" />
                  <a href="https://scholar.google.com/citations?user=3xcXNz0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-green-600">
                    Google Scholar Profile
                  </a>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <ExternalLink size={20} className="text-orange-600" />
                  <a href="https://orcid.org/0000-0002-8598-148X" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-orange-600">
                    ORCID Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section id="research" className="py-16 px-6 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">Research Interests</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {researchInterests.map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-blue-600 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-full ${interest.color} flex items-center justify-center mb-4`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-2">{interest.name}</h3>
                    <p className="text-sm text-slate-600">{interest.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Funded Projects */}
      <section id="projects" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Funded Projects</h2>
            <Link to="/funded-projects">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Projects
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {fundedProjects.slice(0, 4).map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50/50">
                <CardHeader>
                  <CardTitle className="text-slate-800 text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        {project.funding}
                      </Badge>
                      <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                        {project.role}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar size={16} />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <DollarSign size={16} />
                      <span className="font-semibold text-green-600">{project.amount}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-16 px-6 bg-gradient-to-r from-slate-50 to-purple-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Publications</h2>
            <Link to="/publications">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Publications
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              onClick={() => setActiveFilter("all")}
              variant={activeFilter === "all" ? "default" : "outline"}
              className={activeFilter === "all" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : ""}
            >
              All
            </Button>
            <Button 
              onClick={() => setActiveFilter("journal")}
              variant={activeFilter === "journal" ? "default" : "outline"}
              className={activeFilter === "journal" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : ""}
            >
              Journals
            </Button>
            <Button 
              onClick={() => setActiveFilter("conference")}
              variant={activeFilter === "conference" ? "default" : "outline"}
              className={activeFilter === "conference" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : ""}
            >
              Conferences
            </Button>
          </div>

          <div className="space-y-6">
            {filteredPublications.slice(0, 4).map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-2">{pub.title}</h3>
                      <p className="text-slate-600 mb-2">{pub.journal}</p>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="bg-slate-50">
                          {pub.year}
                        </Badge>
                        <Badge className={pub.type === "journal" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-gradient-to-r from-green-500 to-teal-500 text-white"}>
                          {pub.type === "journal" ? "Journal" : "Conference"}
                        </Badge>
                        {pub.impactFactor && (
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                            IF: {pub.impactFactor}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="hover:bg-blue-50">
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ph.D. Supervision */}
      <section id="supervision" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ph.D. Supervision</h2>
            <Link to="/academic-supervision">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Supervision
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Awarded */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                <Award className="text-green-600" size={24} />
                Awarded ({phdSupervision.awarded.length})
              </h3>
              <div className="space-y-4">
                {phdSupervision.awarded.slice(0, 2).map((student, index) => (
                  <Card key={index} className="bg-gradient-to-r from-green-50 to-teal-50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-slate-800">{student.name}</h4>
                      <p className="text-slate-600 text-sm mb-2">{student.thesis}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-green-600 font-medium">{student.year}</span>
                        <span className="text-slate-500">{student.position}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Ongoing */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                <BookOpen className="text-blue-600" size={24} />
                Ongoing ({phdSupervision.ongoing.length})
              </h3>
              <div className="space-y-4">
                {phdSupervision.ongoing.slice(0, 2).map((student, index) => (
                  <Card key={index} className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-slate-800">{student.name}</h4>
                      <p className="text-slate-600 text-sm mb-2">{student.thesis}</p>
                      <span className="text-blue-600 font-medium text-sm">Started: {student.startYear}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talks & Outreach */}
      <section id="talks" className="py-16 px-6 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">Recent Invited Talks</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {talks.map((talk, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-2">{talk.title}</h3>
                        <p className="text-slate-600">{talk.venue}</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        {talk.date}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">Contact</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <Mail size={20} className="text-blue-600" />
                  <span className="text-slate-600">imon@iiitkalyani.ac.in</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-teal-50 rounded-lg">
                  <MapPin size={20} className="text-purple-600" />
                  <span className="text-slate-600">IIIT Kalyani, West Bengal, India</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-slate-100 to-blue-100 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Office Hours</h4>
                <p className="text-slate-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-slate-600">Or by appointment</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" className="w-full" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="w-full" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={5} className="w-full" />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                  <MessageSquare size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-slate-300">
            © 2024 Dr. Imon Mukherjee. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Distinguished Professor, Department of CSE, IIIT Kalyani
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
