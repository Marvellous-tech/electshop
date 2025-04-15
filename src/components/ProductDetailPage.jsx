import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';
import Button from '../components/Button';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ShoppingCart, Heart, Share2, Star } from 'lucide-react';
import { useStateValue } from './StateProvider';

// Sample data (replace with your actual data source, e.g., API or context)
const products = [
  {
    id: '1',
    title: 'Wireless Bluetooth Headphones',
    description:
      'Experience premium sound quality with these wireless Bluetooth headphones. Featuring noise cancellation technology, long battery life, and a comfortable design for all-day wear.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80',
    ],
    rating: 4.5,
    reviews: 128,
    stock: 23,
    category: 'Electronics',
    specifications: [
      { name: 'Battery Life', value: 'Up to 40 hours' },
      { name: 'Connectivity', value: 'Bluetooth 5.0' },
      { name: 'Microphone', value: 'Built-in with noise reduction' },
      { name: 'Charging', value: 'USB-C, 2 hours full charge' },
      { name: 'Weight', value: '250g' },
    ],
  },
  // Add more products as needed
];

function ProductDetailPage() {
  const { id } = useParams();
  const [{ basket }, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);


  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://featureproducts/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  // Find the product with the matching ID
  // const product = products.find((p) => p.id === id);

  // Handle case where product is not found
  if (!product) {
    return (
      <Layout>
        <div className="container px-4 py-16 mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <a href="/products">Return to Products</a>
          </Button>
        </div>
      </Layout>
    );
  }

  // Function to add product to basket
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: product.rating,
        description: product.description,
        quantity: quantity,
      },
    });
  };

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2 overflow-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.title} - View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  <span className="ml-2 text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>

            <p className="text-gray-600">{product.description}</p>

            <div className="pt-4">
              <div className="flex items-center mb-4">
                <div className="text-sm text-gray-500 w-24">Availability:</div>
                <div className={`${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-sm text-gray-500 w-24">Category:</div>
                <div>{product.category}</div>
              </div>
            </div>

            <div className="py-4 border-t border-b">
              <div className="flex items-center space-x-4">
                <div className="w-24 text-sm text-gray-500">Quantity:</div>
                <div className="flex items-center border rounded-md">
                  <button
                    className="px-3 py-1 border-r"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button className="px-3 py-1 border-l" onClick={() => setQuantity(quantity + 1)}>
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button className="flex-1" onClick={addToBasket} disabled={product.stock === 0}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Product details tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="py-6">
              <p className="text-gray-600">{product.description}</p>
            </TabsContent>
            <TabsContent value="specifications" className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex">
                    <div className="w-1/2 font-medium">{spec.name}</div>
                    <div className="w-1/2 text-gray-600">{spec.value}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="py-6">
              <div className="text-center py-8">
                <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetailPage;