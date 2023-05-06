import ContactForm from "@/components/ContactForm";
import Navbar from "./../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <ContactForm />
      </div>
    </>
  );
}
