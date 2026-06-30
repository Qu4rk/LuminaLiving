import Link from 'next/link';

export const metadata = {
  title: "Terms & Conditions | The Limassol Circuit",
  description: "Terms and conditions for stays at The Limassol Circuit.",
};

export default function TermsAndConditions() {
  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <Link href="/" className="logo">The Limassol Circuit</Link>
      </nav>

      <main className="legal-container">
        <div className="section-label">[ Legal ]</div>
        <h1 className="legal-title">Terms & Conditions</h1>
        
        <div className="legal-content">
          <p className="legal-date">Last Updated: June 2026</p>

          <h2>1. Introduction</h2>
          <p>
            These Terms & Conditions govern the rental and use of The Limassol Circuit private residence. By confirming a booking and submitting payment, you ("the Guest") agree to abide by these terms. 
          </p>

          <h2>2. Booking and Payments</h2>
          <p>
            All inquiries are subject to availability and approval. A booking is only confirmed once a signed agreement and the required deposit (or full payment, depending on the stay duration) have been received.
          </p>
          <ul>
            <li><strong>Minimum Stay:</strong> 3 nights.</li>
            <li><strong>Maximum Stay:</strong> 364 days.</li>
            <li><strong>Payment Terms:</strong> Specific payment schedules, including security deposits, will be outlined in your individual booking agreement.</li>
          </ul>

          <h2>3. Nature of the Rental</h2>
          <p>
            The Limassol Circuit operates strictly as a private residential rental. It is not a hotel. While we offer extensive customization prior to arrival, daily housekeeping and 24/7 on-site staff are not provided unless explicitly requested and agreed upon as an additional service.
          </p>

          <h2>4. Use of the Property</h2>
          <p>The residence is provided for the exclusive use of the named guests on the booking agreement.</p>
          <ul>
            <li><strong>Occupancy:</strong> The maximum occupancy must not be exceeded at any time.</li>
            <li><strong>Events and Gatherings:</strong> Commercial use, parties, and large gatherings are strictly prohibited without prior written consent.</li>
            <li><strong>Smoking:</strong> Smoking is strictly prohibited indoors.</li>
            <li><strong>Pets:</strong> Pets are not permitted unless pre-approved in writing.</li>
          </ul>

          <h2>5. Liability and Damages</h2>
          <p>
            The Guest is responsible for the property and its contents during the stay. The residence features high-end finishes, bespoke furniture, and precision climate control systems. Any damages, missing items, or excessive cleaning required after departure will be deducted from the security deposit. If damages exceed the deposit amount, the Guest will be held liable for the remaining balance.
          </p>
          <p>
            We are not liable for any personal injury, loss, or damage to the Guest's personal property during their stay.
          </p>

          <h2>6. Cancellations</h2>
          <p>
            Cancellation policies vary based on the length of the stay and the season. The exact cancellation terms, including refund eligibility and timeframes, will be clearly detailed in your booking agreement.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms & Conditions shall be governed by and construed in accordance with the laws of the Republic of Cyprus. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Cyprus.
          </p>

          <h2>8. Contact</h2>
          <p>
            For any questions regarding these Terms & Conditions, please contact us prior to booking at:
          </p>
          <p>
            <strong>Email:</strong> legal@thelimassolcircuit.com
          </p>
        </div>
      </main>

      <footer className="legal-footer">
        <p>&copy; {new Date().getFullYear()} The Limassol Circuit. All rights reserved.</p>
      </footer>
    </div>
  );
}
