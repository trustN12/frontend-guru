

import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import SectionHeading from '@/components/main/SectionHeading';

const Terms = () => {
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
            <BreadcrumbPage>Terms of Service</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <SectionHeading
        title="Terms of Service"
        subtitle="Last updated: June 1, 2023"
        className="mb-12 text-left"
      />
      
      <div className="prose prose-gray max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
        <p className="mb-6">
          By accessing or using Frontend Guru's services, you agree to be bound by these Terms of Service and all 
          applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using 
          or accessing this site.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
        <p className="mb-6">
          Permission is granted to temporarily access the materials on Frontend Guru's website for personal, 
          non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and 
          under this license you may not:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose or for any public display;</li>
          <li>Attempt to reverse engineer any software contained on Frontend Guru's website;</li>
          <li>Remove any copyright or other proprietary notations from the materials; or</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
        <p className="mb-6">
          To access certain features of our services, you may be required to register for an account. We use Clerk 
          for authentication services. By creating an account, you agree to:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Provide accurate, current, and complete information during the registration process;</li>
          <li>Maintain and promptly update your account information;</li>
          <li>Keep your account credentials secure and confidential;</li>
          <li>Be responsible for all activities that occur under your account;</li>
          <li>Immediately notify us of any unauthorized use of your account or other security breaches.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">4. User Content</h2>
        <p className="mb-6">
          Our services may allow you to post, link, store, share and otherwise make available certain information, 
          text, graphics, videos, or other material. You are responsible for the content you post and its legality, 
          reliability, and appropriateness.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
        <p className="mb-6">
          For paid services, you agree to pay all fees or charges to your account based on our current fee schedule, 
          payment terms, and billing policies. Prices for our products are subject to change without notice. We 
          reserve the right to modify or discontinue the service without notice at any time.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">6. Disclaimer</h2>
        <p className="mb-6">
          The materials on Frontend Guru's website are provided on an 'as is' basis. Frontend Guru makes no 
          warranties, expressed or implied, and hereby disclaims and negates all other warranties including, 
          without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
          or non-infringement of intellectual property or other violation of rights.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">7. Limitations</h2>
        <p className="mb-6">
          In no event shall Frontend Guru or its suppliers be liable for any damages (including, without limitation, 
          damages for loss of data or profit, or due to business interruption) arising out of the use or inability to 
          use the materials on Frontend Guru's website, even if Frontend Guru or a Frontend Guru authorized 
          representative has been notified orally or in writing of the possibility of such damage.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">8. Accuracy of Materials</h2>
        <p className="mb-6">
          The materials appearing on Frontend Guru's website could include technical, typographical, or photographic 
          errors. Frontend Guru does not warrant that any of the materials on its website are accurate, complete, or 
          current. Frontend Guru may make changes to the materials contained on its website at any time without notice.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">9. Links</h2>
        <p className="mb-6">
          Frontend Guru has not reviewed all of the sites linked to its website and is not responsible for the contents 
          of any such linked site. The inclusion of any link does not imply endorsement by Frontend Guru of the site. 
          Use of any such linked website is at the user's own risk.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">10. Modifications</h2>
        <p className="mb-6">
          Frontend Guru may revise these terms of service for its website at any time without notice. By using this 
          website, you are agreeing to be bound by the then current version of these terms of service.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
        <p className="mb-6">
          These terms and conditions are governed by and construed in accordance with the laws and you irrevocably 
          submit to the exclusive jurisdiction of the courts in that location.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
        <p className="mb-6">
          If you have any questions about these Terms of Service, please contact us at:
          <br />
          <a href="mailto:academyshreyn12@gmail.com" className="text-primary hover:underline">academyshreyn12@gmail.com</a>
          <br />
          <a href="tel:+919679188394" className="text-primary hover:underline">+91 9679188394</a>
        </p>
      </div>
    </div>
  );
};

export default Terms;