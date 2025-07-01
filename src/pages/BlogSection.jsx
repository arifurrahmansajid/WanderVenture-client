import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Hotel Booking Tips",
    summary: "What should you keep in mind when booking a hotel for your next trip? Discover some easy tips.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "July 1, 2025",
    author: "Rafi Ahmed"
  },
  {
    id: 2,
    title: "Best Family-Friendly Hotels in Dhaka",
    summary: "Where should you stay in Dhaka with your family? Check out our list of the best family-friendly hotels.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "June 28, 2025",
    author: "Sabrina Islam"
  },
  {
    id: 3,
    title: "How to Control Your Travel Budget",
    summary: "Effective strategies for comfortable travel on a budget.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "June 25, 2025",
    author: "Tanvir Hasan"
  }
];

const BlogSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Blog Posts</h2>
        <div className="flex justify-center">
          <span className="block w-20 h-1 bg-blue-500 rounded-full"></span>
        </div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover new tips and information about hotels, travel, and lifestyle from our blog.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
            <div className="relative overflow-hidden h-48">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <Link 
                to={`/blog/${post.id}`} 
                className="inline-flex items-center mt-2 text-[#4D869C] hover:text-blue-800 font-medium transition-colors"
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link 
          to="/blog" 
          className="inline-block px-6 py-3 bg-[#4D869C] text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          View All Blog Posts
        </Link>
      </div>
    </div>
  </section>
);

export default BlogSection;