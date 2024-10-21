const HeroSection = () => {
  return (
    <div className="Hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.<br/>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/image/amazon.png" alt="amazon-logo" />
            <img src="/image/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/image/shoe_image.png" alt="hero-image" />
      </div>
    </div>
  );
};
export default HeroSection;
