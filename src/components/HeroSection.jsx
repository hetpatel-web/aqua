import Link from "next/link";

function HeroSection() {
  return (
    <section
      className="bg-blue-500 text-white bg-cover bg-center flex h-[700px] items-center "
      style={{
        backgroundImage: "url('images/hero.jpg')",
        backgroundPosition: "center top", // align image to bottom
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Your Way to a Successful Career
        </h1>
        <p className="text-lg mb-12">
          AquaConsulting can help you achieve your goals in the job market.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-500 py-3 px-8 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
