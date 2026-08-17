import Link from 'next/link';
import { Zap, Shield, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F3FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#EDE9FE', color: '#7C3AED' }}>
              <Zap className="w-4 h-4" />
              Swift · Instant · Secure
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
              Swift Identity Verification<br /><span style={{ color: '#7C3AED' }}>At the Speed of Now</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              SwiftVerify delivers instant identity verification — fast, reliable, and built for the modern world. We built this because speed matters, and you shouldn't have to wait to prove who you are.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Why We Built This</h2>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              In a world that moves fast, verification should too. SwiftVerify was built to deliver instant results without sacrificing security or accuracy.
            </p>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              Speed without security is worthless. SwiftVerify combines lightning-fast processing with enterprise-grade security to give you the best of both worlds.
            </p>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Whether you need to verify once or thousands of times, SwiftVerify delivers consistent, instant results every time.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EDE9FE' }}>
                  <Zap className="w-5 h-5" style={{ color: '#7C3AED' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Instant Results</h3>
                  <p style={{ color: '#6B7280' }}>Get verified in seconds — SwiftVerify processes your identity verification faster than any other service.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EDE9FE' }}>
                  <Shield className="w-5 h-5" style={{ color: '#7C3AED' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Enterprise Security</h3>
                  <p style={{ color: '#6B7280' }}>Speed doesn't mean cutting corners. Every verification is secured with the highest industry standards.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EDE9FE' }}>
                  <Clock className="w-5 h-5" style={{ color: '#7C3AED' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Always On</h3>
                  <p style={{ color: '#6B7280' }}>SwiftVerify is available 24/7/365 — verify instantly whenever and wherever you need it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
