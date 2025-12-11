"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Mail,
  Puzzle,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

export const services = [
  {
    icon: Globe,
    title: "Website Creation",
    description:
      "From landing pages to advanced web apps—I'll bring your brand to life with a sleek, fast, mobile-ready website.",
    features: [
      "✅ Responsive design (mobile, tablet, desktop)",
      "✅ Custom UI tailored to your brand",
      "✅ Performance optimization",
      "✅ Contact forms & lead capture",
      "✅ Multi-language support (optional)",
    ],
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg",
  },
  {
    icon: Mail,
    title: "Email Setup & Domain",
    description:
      "I’ll help you set up professional email (like hello@yourcompany.com) and manage your domain hassle-free.",
    features: [
      "✅ Domain registration & DNS setup",
      "✅ Professional email setup (e.g. hello@yourcompany.com)",
      "✅ Webmail & mobile access configuration",
      "✅ SPF, DKIM & DMARC for email security",
      "✅ Redirects and email forwarding",
    ],
    image: "https://images.pexels.com/photos/3206079/pexels-photo-3206079.jpeg",
  },
  {
    icon: Search,
    title: "SEO & Visibility",
    description:
      "I optimize your website to be found on Google—so customers come to *you*.",
    features: [
      "✅ SEO-friendly site structure",
      "✅ Meta titles & descriptions",
      "✅ Google Search Console integration",
      "✅ Sitemap & robots.txt setup",
      "✅ Speed and Core Web Vitals optimization",
    ],
    image: "https://images.pexels.com/photos/1194775/pexels-photo-1194775.jpeg",
    imageCSS: "object-top top-[-50px]",
  },
  {
    icon: ShieldCheck,
    title: "Hosting & Maintenance",
    description:
      "I handle updates, backups, and server management, so your site stays fast, secure, and always online.",
    features: [
      "✅ Scalable hosting (shared, VPS, or cloud)",
      "✅ SSL certificate setup",
      "✅ Automatic backups & restore plans",
      "✅ Software updates & security patches",
      "✅ Uptime monitoring and alerts",
    ],
    image: "https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg",
  },
  {
    icon: Puzzle,
    title: "Custom Functionality",
    description:
      "Need booking, logins, file sharing, or internal tools? I’ll tailor the tech to your business needs.",
    features: [
      "✅ User accounts & authentication",
      "✅ Booking systems & calendar integrations",
      "✅ Admin dashboards & control panels",
      "✅ File uploads & media management",
      "✅ Integration with APIs or third-party services",
    ],
    image: "https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg",
  },
  {
    icon: Wrench,
    title: "Ongoing Support",
    description:
      "I offer ongoing care packages, so you can focus on your business while I handle the tech.",
    features: [
      "✅ Priority bug fixing & updates",
      "✅ Monthly performance reports",
      "✅ Email & phone support options",
      "✅ Feature expansion on request",
      "✅ Security audits & monitoring",
    ],
    image: "https://images.pexels.com/photos/3992926/pexels-photo-3992926.jpeg",
  },
];

export default function ServicesCraousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  //const [vw, setVw] = useState({ width: 0 });
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  // Preload all images on mount
  useEffect(() => {
    const imagePromises = services.map((service) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = service.image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((err) => {
        console.error("Error preloading images:", err);
        setImagesLoaded(true); // Still show content even if some images fail
      });
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(services.length / itemsPerPage);

  // Navigation handlers
  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Get current slice of items
  const startIndex = currentIndex * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, services.length);
  const currentItems = services.slice(startIndex, endIndex);

  useEffect(() => {
    console.log("inView:", inView);
  }, [inView]);
  const containerVariants = {
    hiddenLeft: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hiddenRight: { x: 10, opacity: 0 },
  };
  return (
    <div className="w-full max-w-7xl overflow-x-clip flex flex-col lg:flex-row mx-auto items-center justify-center">
      {/* Items container with animation */}
      <div key={currentIndex} className="flex justify-center gap-5 text-xl ">
        {currentItems.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="relative w-full ">
              <motion.div
                key={`${startIndex + index}`}
                variants={containerVariants}
                initial={currentIndex > 0 ? "hiddenLeft" : "visible"}
                animate="visible"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(event, info) => {
                  if (info.offset.x < -10) {
                    handleNext();
                  } else if (info.offset.x > 10) {
                    handlePrevious();
                  }
                }}
                className=" min-h-max rounded-2xl flex items-center justify-center cursor-grab active:cursor-grabbing"
              >
                <div
                  className="lg:hidden w-full rounded-lg mb-5 absolute top-0 left-0 h-screen bg-cover bg-center opacity-20 scale-150"
                  style={{ backgroundImage: `url('${service.image}')` }}
                >
                  {/* <img
                  src={service.image}
                  alt={service.title}
                  className=" absolute inset-0 w-full h-full object-cover opacity-20 scale-150"
                /> */}
                </div>
                <div
                  key={index}
                  className=" w-full h-full flex justify-between space-x-40 p-6 z-30"
                >
                  <div className="flex flex-col items-start gap-2 mb-4 w-full max-w-[500px]">
                    <h3
                      ref={ref}
                      className="text-xl md:text-3xl text-foreground font-semibold mb-2 flex items-start gap-2 text-wrap"
                    >
                      <Icon className="md:w-8 md:h-8 h-5 w-5" />
                      {service.title}
                    </h3>
                    <p className="text-foreground-600 text-xl md:text-2xl italic">
                      {service.description}
                    </p>
                    <ul className="list-disc pl-5 text-foreground-600 mt-5 space-y-3 text-xl md:text-2xl">
                      {service.features?.map((feature, i) => (
                        <li className="list-none" key={i}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden lg:block overflow-hidden rounded-lg h-[550px] w-[600px] pointer-events-none">
                    <img
                      src={`${service.image}`}
                      alt={service.title}
                      width={600}
                      height={550}
                      loading="eager"
                      className="rounded-lg w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <div
        className={`flex items-center justify-between w-full max-w-32 mt-5 bottom-2 z-50 bg-background text-foreground opacity-70 rounded-lg transition-opacity duration-300 ${
          inView ? "fixed" : "hidden"
        }`}
      >
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`
           rounded-full flex items-center justify-center transition-all duration-300
          ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "bg-transparent hover:bg-gray-800 hover:text-white"
          }
        `}
        >
          <ChevronLeft className="h-10 w-10 relative left-[-0.15rem]" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === totalPages - 1}
          className={`
          min-w-15 min-h-15 rounded-full
          flex items-center justify-center text-xl
          transition-all duration-300
          ${
            currentIndex === totalPages - 1
              ? "opacity-50 cursor-not-allowed"
              : "bg-transparent hover:bg-gray-800 hover:text-white"
          }
        `}
        >
          <ChevronRight className=" h-10 w-10 relative left-[0.15rem]" />
        </button>
      </div>
    </div>
  );
}
