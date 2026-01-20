import { useState } from "react";
import { AnimatePresence, motion, TargetAndTransition } from "framer-motion";
import Header from "./(components)/Header";
import SignUpForm from "./(components)/SignUpForm";
import LoginForm from "./(components)/LoginForm";
import Footer from "./(components)/Footer";
import Image from "next/image";

const floatAnimation = {
  y: [0, -20, 0],
  rotate: [0, 1, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Index = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className='min-h-screen bg-background'>
      <Header />

      {/* Hero Section */}
      <main className='container mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12'>
        {/* Hero Text */}
        <div className='text-center mb-6 sm:mb-8'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-2 px-2'
          >
            Experience the{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className='switch-gradient-text font-display font-train font-medium'
            >
              Switch
            </motion.span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground px-2'
          >
            Experience the Convenience!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className='mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-foreground font-extrabold px-4'
          >
            Delivery | Mobility | Financial services
          </motion.p>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className='mt-4 sm:mt-6 inline-block'
          >
            <span className='px-4 sm:px-6 py-2 bg-[#002F2E] border border-[#002F2E] text-white text-sm sm:text-base font-montserrat rounded-full'>
              Achieve Delivery Excellence
            </span>
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className='mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-2 px-4'
          >
            <span className='w-1.5 h-1.5 rounded-full bg-primary'></span>
            Currently Serving Abuja, Nigeria
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className='flex flex-col lg:flex-row items-start justify-center gap-8 sm:gap-12 lg:gap-20 xl:gap-40'>
          {/* Left Column - Form */}
          <div className='w-full lg:w-auto flex justify-center relative min-h-[600px] sm:min-h-[700px] lg:min-h-[900px]'>
            <AnimatePresence mode='wait'>
              {isLogin ? (
                <motion.div
                  key='login'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className='w-full'
                >
                  <LoginForm onSwitchToSignup={() => setIsLogin(false)} />
                </motion.div>
              ) : (
                <motion.div
                  key='signup'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className='w-full'
                >
                  <SignUpForm onSwitchToLogin={() => setIsLogin(true)} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className='w-full lg:w-auto flex flex-col items-center gap-4 sm:gap-6'>
            <motion.div
              animate={floatAnimation as TargetAndTransition}
              className='w-auto h-auto'
            >
              <Image
                src='/assets/svgs/switch_app_snapshot.svg'
                alt='Switch App Snapshot'
                width={300}
                height={600}
                className='w-[200px] h-auto sm:w-[250px] md:w-[300px] object-cover'
              />
            </motion.div>

            {/* App Store Buttons */}
            <div className='flex flex-col items-center gap-3 sm:gap-4'>
              <h3 className='text-xl sm:text-2xl font-bold text-foreground'>
                Coming Soon!
              </h3>
              <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4'>
                <button className='flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-white text-black rounded-full text-sm sm:text-base font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 w-full sm:w-auto'>
                  <Image
                    src='/assets/svgs/app_store.svg'
                    alt='App Store'
                    width={18}
                    height={18}
                    className='sm:w-5 sm:h-5'
                  />
                  <span>App Store</span>
                </button>
                <button className='flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-white text-black rounded-full text-sm sm:text-base font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 w-full sm:w-auto'>
                  <Image
                    src='/assets/svgs/playstore.svg'
                    alt='Google Play'
                    width={18}
                    height={18}
                    className='sm:w-5 sm:h-5'
                  />
                  <span>Google Play</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
