import { Link } from "react-router-dom";

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1593344484461-f5b2d6551c30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    itemCount: 124,
  },
  {
    id: "clothing",
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    itemCount: 84,
  },
  {
    id: "home",
    name: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    itemCount: 97,
  },
  {
    id: "beauty",
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    itemCount: 65,
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-accent">Shop by Category</h2>
          <p className="text-gray-600 mt-2">
            Browse our most popular product categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      {category.itemCount} items
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;