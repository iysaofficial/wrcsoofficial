import '../css/Category.css';

const Category = () => {
  return (
    <section class="products">
      <h2 className="mt-5">CATEGORY :</h2>
      <h2 className="garis-bawah"></h2>
      <div class="all-products">
        <div class="product gap-2">
          <img src="./assets/images/logo/Environment.png" />
          <div class="product-info">
            <h4 class="product-title">Environment</h4>
          </div>
        </div>
        <div class="product">
          <img src="./assets/images/logo/robotic.png" />
          <div class="product-info">
            <h4 class="product-title">Robotics</h4>
          </div>
        </div>
        <div class="product">
          <img src="./assets/images/logo/Games.png" />
          <div class="product-info">
            <h4 class="product-title">Games</h4>
          </div>
        </div>
        <div class="product">
          <img src="./assets/images/logo/Computer.png" />
          <div class="product-info">
            <h4 class="product-title">Computer</h4>
          </div>
        </div>
        <div class="product">
          <img src="./assets/images/logo/Physics_and_Engineering.png" />
          <div class="product-info">
            <h4 class="product-title">Physics and Engineering</h4>
          </div>
        </div>
        <div class="product">
          <img src="./assets/images/logo/Life_Sciences.png" />
          <div class="product-info">
            <h4 class="product-title">Life Sciences</h4>
          </div>
        </div>
        <div class="product">
          <img src="./assets/images/logo/Design and Animation.png" />
          <div class="product-info">
            <h4 class="product-title">Design and Animation</h4>
          </div>
        </div>
        {/* <div class="product">
          <img src="./assets/images/logo/public.png" />
          <div class="product-info">
            <h4 class="product-title">Public</h4>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Category;