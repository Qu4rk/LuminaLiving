import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy | Lumina Living",
  description: "Privacy Policy and Data Protection information for Lumina Living.",
};

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <Link href="/" className="logo">
          <img src="/LuminaLiving/luminaliving_logo.webp" alt="Lumina Living" className="logo-img" />
          Lumina Living
        </Link>
      </nav>

      <main className="legal-container">
        <div className="section-label">[ Legal ]</div>
        <h1 className="legal-title">Privacy Policy</h1>
        
        <div className="legal-content">
          <p className="legal-date">Last Updated: June 2026</p>

          <h2>1. Introduction</h2>
          <p>
            Lumina Living ("we", "our", or "us") is committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner in accordance with the General Data Protection Regulation (GDPR) and applicable Cyprus data protection laws.
          </p>
          <p>
            This Privacy Policy outlines how we collect, use, process, and protect your personal data when you visit our website, inquire about our residence, or stay with us.
          </p>

          <h2>2. Data We Collect</h2>
          <p>We may collect and process the following personal data:</p>
          <ul>
            <li><strong>Identity Data:</strong> Name, surname, and identification documents required for booking verification.</li>
            <li><strong>Contact Data:</strong> Email address, phone number, and physical address.</li>
            <li><strong>Stay Preferences:</strong> Customization preferences (e.g., aesthetic choices, dietary requirements if applicable, temperature preferences) to tailor your experience.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, time zone setting, and operating system collected passively when you browse our website.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use your personal data exclusively for the following purposes:</p>
          <ul>
            <li>To process your inquiries and manage your bookings.</li>
            <li>To curate and customize the residence according to your explicit preferences prior to your arrival.</li>
            <li>To comply with legal, regulatory, and accounting requirements in the Republic of Cyprus.</li>
            <li>To communicate with you regarding your stay, including sending important arrival instructions.</li>
          </ul>

          <h2>4. Data Sharing and Third Parties</h2>
          <p>
            Discretion is a core pillar of our service. We do not sell, trade, or otherwise transfer your personal data to outside parties. Information may only be shared with:
          </p>
          <ul>
            <li>Trusted third-party service providers who assist us in operating our residence (e.g., secure payment processors or bespoke concierge services you request), bound by strict confidentiality agreements.</li>
            <li>Law enforcement or regulatory bodies, only if strictly required by law.</li>
          </ul>

          <h2>5. Data Security and Retention</h2>
          <p>
            We implement robust security measures to maintain the safety of your personal information. Your data is retained only for as long as necessary to fulfill the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements.
          </p>

          <h2>6. Your GDPR Rights</h2>
          <p>Under the GDPR, you possess the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Right to Access:</strong> You may request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> You may request correction of inaccurate data.</li>
            <li><strong>Right to Erasure:</strong> You may request deletion of your personal data ("right to be forgotten"), subject to legal retention obligations.</li>
            <li><strong>Right to Restrict Processing:</strong> You may request a suspension of the processing of your data.</li>
          </ul>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> inquire@lumina-living.net
          </p>
        </div>
      </main>

      <footer className="legal-footer">
        <p>&copy; {new Date().getFullYear()} Lumina Living. All rights reserved.</p>
      </footer>
    </div>
  );
}
