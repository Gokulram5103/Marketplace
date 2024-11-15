import { Link,useNavigate } from 'react-router-dom';

export default function HomePage() {

    const nav = useNavigate()

    const logoutClick = ()  => {
        nav('/login')
    }
  return (

    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Empowering Farmers, Connecting Consumers</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Bringing fresh, local produce directly to your table with secure blockchain technology for transparency and trust.
        </p>
        <Link to="/marketplace">
          <button className="mt-6 px-8 py-3 bg-white text-green-600 font-semibold rounded-md hover:bg-gray-200">
            Explore Marketplace
          </button>
        </Link>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">How It Works</h2>
        <div className="flex justify-center gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <img src="/icons/browse.svg" alt="Browse Products" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-lg font-medium">Browse Products</h3>
            <p className="text-gray-600">Explore a variety of fresh, farm-sourced products.</p>
          </div>
          <div className="text-center">
            <img src="/icons/verify.svg" alt="Verify Origin" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-lg font-medium">Verify Origin</h3>
            <p className="text-gray-600">Check quality and origin using blockchain records.</p>
          </div>
          <div className="text-center">
            <img src="/icons/payment.svg" alt="Secure Payment" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-lg font-medium">Secure Payment</h3>
            <p className="text-gray-600">Pay directly to farmers with secure transactions.</p>
          </div>
          <div className="text-center">
            <img src="/icons/track.svg" alt="Track Delivery" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-lg font-medium">Track Delivery</h3>
            <p className="text-gray-600">Monitor your order’s journey from farm to table.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Our Platform</h2>
        <div className="grid gap-8 max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg text-center">
            <h3 className="text-xl font-bold">Blockchain Transparency</h3>
            <p className="text-gray-600 mt-2">Every transaction is verifiable, ensuring trust in the supply chain.</p>
          </div>
          <div className="p-6 border rounded-lg text-center">
            <h3 className="text-xl font-bold">Traceable Supply Chain</h3>
            <p className="text-gray-600 mt-2">Track each product’s journey, from farm to table, with blockchain records.</p>
          </div>
          <div className="p-6 border rounded-lg text-center">
            <h3 className="text-xl font-bold">Direct Sales to Consumers</h3>
            <p className="text-gray-600 mt-2">Support local farmers by purchasing directly, cutting out middlemen.</p>
          </div>
        </div>
      </section>

      {/* Mission & Impact */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          We aim to empower local farmers and provide consumers with fresh produce through a transparent and sustainable marketplace.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join the Movement</h2>
        <p className="text-lg max-w-lg mx-auto">
          Start buying directly from farmers today or sign up as a farmer to connect with customers.
        </p>
        <div className="mt-6">
          <Link to="/signup">
            <button className="px-8 py-3 bg-white text-green-600 font-semibold rounded-md hover:bg-gray-200 mx-2">
              Sign Up as Consumer
            </button>
          </Link>
          <Link to="/signup-farmer">
            <button className="px-8 py-3 bg-white text-green-600 font-semibold rounded-md hover:bg-gray-200 mx-2">
              Sign Up as Farmer
            </button>
          </Link>
            <button onClick = {logoutClick} className="px-8 py-3 bg-slate-400 text-green-900 font-semibold rounded-md hover:bg-gray-100 mx-2">
              Logout
            </button>

        </div>
      </section>
    </div>
  );
}
