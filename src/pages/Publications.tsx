import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, BookOpen, FileText, Award, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const journalPublications = [
    {
      title: "I-ROD: An Ensemble CNNs for Object Detection in Unconstrained Road Scenarios",
      authors: "Abhishek Mukhopadhyay, Harshitha BR, Prashant T Gaikwad, Imon Mukherjee, Pradipta Biswas",
      journal: "Signal, Image and Video Processing",
      year: "2024",
      doi: "10.1016/j.jisa.2024.103908",
      impactFactor: "2.0",
      indexed: "SCI/SCI(E)"
    },
    {
      title: "SteriCNN: Cloud Native Stego content Sterilization",
      authors: "Abhisek Banerjee, Sreeparna Ganguly, Imon Mukherjee, Nabanita Ganguly",
      journal: "Journal of Information Security and Applications",
      year: "2024",
      doi: "10.1016/j.jisa.2024.103908",
      impactFactor: "5.6",
      indexed: "SCI/SCI(E)"
    },
    {
      title: "Robust Deep Convolutional Solutions for Identifying Biotic Crop Stress in Wild Environments",
      authors: "Chiranjit Pal, Imon Mukherjee, Sanjay Chatterji, Sanjoy Pratihar, Pabitra Mitra, Partha Pratim Chakraborti",
      journal: "IEEE Transactions on AgriFood Electronics",
      year: "2024",
      doi: "10.1109/TAFE.2024.3422187",
      impactFactor: "N/A",
      indexed: "IEEE"
    },
    {
      title: "Utilizing attention mechanism with exemplar memory for improving domain adaptive person re-identification",
      authors: "Sugam Bhunia, Sambit K. Bakshi, and Imon Mukherjee",
      journal: "Multimedia Tools Applications",
      year: "2024",
      doi: "10.1007/s11042-024-19270-0",
      impactFactor: "3.6",
      indexed: "SCI/SCI(E)"
    },
    {
      title: "A complex network analysis approach to compare the performance of batsmen across different formats",
      authors: "Nayan Ranjan Das, Ankur Konar, Imon Mukherjee, Goutam Paul",
      journal: "Knowledge-Based Systems",
      year: "2024",
      doi: "10.1016/j.knosys.2023.111269",
      impactFactor: "8.8",
      indexed: "SCI/SCI(E)"
    },
    {
      title: "Integer Wavelet Transform based High Performance Secure Steganography Scheme QVD-LSB",
      authors: "Pratap Chandra Mandal, Imon Mukherjee, BN Chatterji",
      journal: "Multimedia Tools & Applications",
      year: "2024",
      doi: "10.1007/s11042-023-17927-w",
      impactFactor: "3.6",
      indexed: "SCI/SCI(E)"
    },
    {
      title: "High capacity secure dynamic multi-bit data hiding using Fibonacci Energetic pixels",
      authors: "Imon Mukherjee, Goutam Paul",
      journal: "Multimedia Tools & Applications",
      year: "2024",
      doi: "10.1007/s11042-023-15504-9",
      impactFactor: "3.6",
      indexed: "SCI/SCI(E)"
    },
    {
      title: "Stegano-Purge: An integer wavelet transformation based adaptive universal image sterilizer for steganography removal",
      authors: "Sreeparna Ganguly, Imon Mukherjee, Ashutosh Pati",
      journal: "Journal of Information Security and Applications",
      year: "2023",
      doi: "10.1016/j.jisa.2023.103586",
      impactFactor: "5.6",
      indexed: "SCI/SCI(E)"
    },
    {
      title: "Efficient Seizure Prediction and EEG Channel Selection Based on Multi-Objective Optimization",
      authors: "Ranjan Jana and Imon Mukherjee",
      journal: "IEEE Access",
      year: "2023",
      doi: "10.1109/ACCESS.2023.3281450",
      impactFactor: "3.9",
      indexed: "SCI/SCI(E)"
    },
    {
      title: "An intelligent clustering framework for substitute recommendation and player selection",
      authors: "Nayan Ranjan Das, Imon Mukherjee, Anubhab D. Patel, Goutam Paul",
      journal: "Journal of Super Computing",
      year: "2023",
      doi: "10.1007/s11227-023-05314-z",
      impactFactor: "3.3",
      indexed: "SCI/SCI(E)"
    }
  ];

  const conferencePublications = [
    {
      title: "A Quantum Public Key Cryptographic Scheme using Entangled States and Grover Operator",
      authors: "Soumen Bajpayee, Sushmita Sarkar, Imon Mukherjee",
      conference: "3rd International Conference on Security and Privacy (ICSP 2024)",
      venue: "National Institute of Technology, Jamshedpur",
      date: "20-21st November, 2024",
      publisher: "Springer",
      status: "Accepted"
    },
    {
      title: "Analysis of the Effects of Crosstalk Errors on Various Quantum Circuits",
      authors: "Soumen Bajpayee, Imon Mukherjee",
      conference: "37th International Conference on VLSI Design (VLSID 2024)",
      venue: "Kolkata, India",
      date: "6-10th January, 2024",
      publisher: "IEEE",
      doi: "10.1109/VLSID60093.2024.00074"
    },
    {
      title: "Few-TK: A Dataset for Few-shot Scientific Typed Keyphrase Recognition",
      authors: "Avishek Lahiri, Imon Mukherjee, Debarshi",
      conference: "Findings of the Association for Computational Linguistics: NAACL 2024",
      venue: "Mexico",
      date: "2024",
      publisher: "ACL",
      doi: "10.18653/v1/2024.findings-naacl.253"
    },
    {
      title: "Disjunctive Edge Map based Image Sterilization for Destruction of Steganograms in Spatial Domain",
      authors: "Sreeparna Ganguly, Srijanjeet Singh Sehra, Imon Mukherjee",
      conference: "2023 IEEE Silchar Subsection Conference (SILCON 2023)",
      venue: "National Institute of Technology Silchar",
      date: "2023",
      publisher: "IEEE",
      award: "Best Paper Award"
    },
    {
      title: "A Keyphrase-Centric Search Engine for Scientific Papers",
      authors: "Avishek Lahiri, Debarshi Kumar Sanyal and Imon Mukherjee",
      conference: "15th Annual Meeting of the Forum for Information Retrieval Evaluation",
      venue: "Association for Computing Machinery (ACM), New York, NY, USA",
      date: "2023",
      publisher: "ACM",
      doi: "10.1145/3632754.3632772"
    }
  ];

  const bookChapters = [
    {
      title: "DWT Difference Modulation Based Novel Steganographic Algorithm",
      authors: "Imon Mukherjee, Biswajita Dutta, Rituraj Banerjee, Srijan Das",
      book: "Lecture Notes, Chapter 36",
      publisher: "Springer",
      year: "2015",
      isbn: "978-3-319-26960-3"
    },
    {
      title: "DCT Based Robust Multi-bit Steganographic Algorithm",
      authors: "Imon Mukherjee, Arunanshu Podder",
      book: "Advanced Computing, Networking and Informatics- Volume 2",
      publisher: "Springer",
      year: "2014",
      isbn: "978-3-319-07349-1"
    },
    {
      title: "Efficient Multi-bit Image Steganography in Spatial Domain",
      authors: "Imon Mukherjee and Goutam Paul",
      book: "Lecture Notes, Chapter 21",
      publisher: "Springer",
      year: "2013",
      isbn: "978-3-642-45203-1"
    }
  ];

  const patents = [
    {
      title: "An Intelligent Device for Seizure Prediction Using Ensemble Learning for Smart Healthcare",
      inventors: "Ranjan Jana, Imon Mukherjee, Hiranmoy Roy, Soumyadip Dhar",
      applicationNumber: "202431039903",
      publishedDate: "31st May, 2024"
    },
    {
      title: "Drone-Augmented Pest Control System",
      inventors: "Koushik Deb, Imon Mukherjee",
      applicationNumber: "202431013004",
      publishedDate: "08/03/2024"
    }
  ];

  const filteredJournals = journalPublications.filter(pub =>
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredConferences = conferencePublications.filter(pub =>
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.conference.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors">
              ← Back to Portfolio
            </Link>
            <h1 className="text-xl font-bold text-slate-800">Publications</h1>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Publications
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive collection of Dr. Imon Mukherjee's research contributions in 
            Quantum Computing, Steganography, and Information Security
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="px-6 pb-8">
        <div className="container mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <Input
              placeholder="Search publications by title, authors, or journal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Publications Tabs */}
      <section className="px-6 pb-16">
        <div className="container mx-auto">
          <Tabs defaultValue="journals" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="journals" className="flex items-center gap-2">
                <FileText size={16} />
                Journals ({filteredJournals.length})
              </TabsTrigger>
              <TabsTrigger value="conferences" className="flex items-center gap-2">
                <BookOpen size={16} />
                Conferences ({filteredConferences.length})
              </TabsTrigger>
              <TabsTrigger value="chapters" className="flex items-center gap-2">
                <BookOpen size={16} />
                Book Chapters ({bookChapters.length})
              </TabsTrigger>
              <TabsTrigger value="patents" className="flex items-center gap-2">
                <Award size={16} />
                Patents ({patents.length})
              </TabsTrigger>
            </TabsList>

            {/* Journals Tab */}
            <TabsContent value="journals" className="space-y-6">
              {filteredJournals.map((pub, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-3 text-lg">{pub.title}</h3>
                        <p className="text-slate-600 mb-2 italic">{pub.authors}</p>
                        <p className="text-slate-700 mb-3 font-medium">{pub.journal}</p>
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge variant="outline" className="bg-slate-50">
                            {pub.year}
                          </Badge>
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                            {pub.indexed}
                          </Badge>
                          {pub.impactFactor !== "N/A" && (
                            <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                              IF: {pub.impactFactor}
                            </Badge>
                          )}
                        </div>
                        {pub.doi && (
                          <p className="text-sm text-slate-500 mt-2">
                            DOI: <span className="font-mono">{pub.doi}</span>
                          </p>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" className="hover:bg-blue-50">
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Conferences Tab */}
            <TabsContent value="conferences" className="space-y-6">
              {filteredConferences.map((pub, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-3 text-lg">{pub.title}</h3>
                        <p className="text-slate-600 mb-2 italic">{pub.authors}</p>
                        <p className="text-slate-700 mb-2 font-medium">{pub.conference}</p>
                        <p className="text-slate-600 mb-3">{pub.venue}</p>
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge variant="outline" className="bg-slate-50">
                            {pub.date}
                          </Badge>
                          <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                            {pub.publisher}
                          </Badge>
                          {pub.award && (
                            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                              {pub.award}
                            </Badge>
                          )}
                        </div>
                        {pub.doi && (
                          <p className="text-sm text-slate-500 mt-2">
                            DOI: <span className="font-mono">{pub.doi}</span>
                          </p>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" className="hover:bg-blue-50">
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Book Chapters Tab */}
            <TabsContent value="chapters" className="space-y-6">
              {bookChapters.map((chapter, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-3 text-lg">{chapter.title}</h3>
                        <p className="text-slate-600 mb-2 italic">{chapter.authors}</p>
                        <p className="text-slate-700 mb-2 font-medium">{chapter.book}</p>
                        <p className="text-slate-600 mb-3">{chapter.publisher}</p>
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge variant="outline" className="bg-slate-50">
                            {chapter.year}
                          </Badge>
                          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                            ISBN: {chapter.isbn}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="hover:bg-blue-50">
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Patents Tab */}
            <TabsContent value="patents" className="space-y-6">
              {patents.map((patent, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-3 text-lg">{patent.title}</h3>
                        <p className="text-slate-600 mb-2 italic">{patent.inventors}</p>
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge variant="outline" className="bg-slate-50">
                            {patent.publishedDate}
                          </Badge>
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                            {patent.applicationNumber}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="hover:bg-blue-50">
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
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

export default Publications;
