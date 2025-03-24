

import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import SectionHeading from '@/components/main/SectionHeading';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <SectionHeading
        title="Privacy Policy"
        subtitle="Last updated: June 1, 2023"
        className="mb-12 text-left"
      />
      
      <div className="prose prose-gray max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-6">
          Welcome to Frontend Guru ("we," "our," or "us"). We respect your privacy and are committed 
          to protecting your personal data. This privacy policy will inform you about how we look after 
          your personal data when you visit our website and tell you about your privacy rights and how 
          the law protects you.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
        <p className="mb-3">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Identity Data</strong> includes first name, last name, username, or similar identifier.</li>
          <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
          <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
          <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
          <li><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback, and survey responses.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">3. Authentication Services</h2>
        <p className="mb-6">
          We use Clerk as our third-party authentication service provider. When you create an account or log in, 
          Clerk will collect certain personal information about you, such as your name, email, and other profile information.
          Please review Clerk's privacy policy to understand how they process your data. You can find their privacy 
          policy at <a href="https://clerk.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://clerk.com/privacy</a>.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Data</h2>
        <p className="mb-3">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>To register you as a new customer.</li>
          <li>To process and deliver your order.</li>
          <li>To manage our relationship with you.</li>
          <li>To improve our website, products/services, marketing, and customer relationships.</li>
          <li>To recommend products or services that may be of interest to you.</li>
          <li>To administer and protect our business and this website.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p className="mb-6">
          We have put in place appropriate security measures to prevent your personal data from being accidentally 
          lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your 
          personal data to those employees, agents, contractors, and other third parties who have a business need to know.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
        <p className="mb-6">
          We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
          including for the purposes of satisfying any legal, accounting, or reporting requirements.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">7. Your Legal Rights</h2>
        <p className="mb-3">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Request access to your personal data.</li>
          <li>Request correction of your personal data.</li>
          <li>Request erasure of your personal data.</li>
          <li>Object to processing of your personal data.</li>
          <li>Request restriction of processing your personal data.</li>
          <li>Request transfer of your personal data.</li>
          <li>Right to withdraw consent.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
        <p className="mb-6">
          This website may include links to third-party websites, plug-ins, and applications. Clicking on those links 
          or enabling those connections may allow third parties to collect or share data about you. We do not control 
          these third-party websites and are not responsible for their privacy statements.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">9. Changes to the Privacy Policy</h2>
        <p className="mb-6">
          We may update our privacy policy from time to time. We will notify you of any changes by posting the new 
          privacy policy on this page and updating the "Last updated" date at the top of this privacy policy.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p className="mb-6">
          If you have any questions about this privacy policy or our privacy practices, please contact us at:
          <br />
          <a href="mailto:academyshreyn12@gmail.com" className="text-primary hover:underline">academyshreyn12@gmail.com</a>
          <br />
          <a href="tel:+919679188394" className="text-primary hover:underline">+91 9679188394</a>
        </p>
      </div>
    </div>
  );
};

export default Privacy;