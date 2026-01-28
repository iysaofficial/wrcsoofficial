import '../css/Category.css';

const Category = () => {
  return (
    <section class="products">
      <h2 className="mt-5">CATEGORY :</h2>
      <h2 className="garis-bawah">&nbsp;</h2>
      <div class="all-products">
        <div class="product gap-2">
          <img src="./assets/images/logo/Environment.png" alt="Environment" />
          <div class="product-info">
            <h4 class="product-title">Environment</h4>
          </div>
        </div>
        <div class="product">
          <img src="./assets/images/logo/robotic.png" alt="Robotics" />
          <div class="product-info">
            <h4 class="product-title">Robotics</h4>
          </div>
        </div>
        <div class="product">
          <img src="./assets/images/logo/Games.png" alt="Games" />
          <div class="product-info">
            <h4 class="product-title">Games</h4>
          </div>
        </div>
        <div class="product">
          <img src="./assets/images/logo/Computer.png" alt="Computer" />
          <div class="product-info">
            <h4 class="product-title">Computer</h4>
          </div>
        </div>
        <div class="product">
          <img src="./assets/images/logo/Physics_and_Engineering.png" alt="Physics and Engineering" />
          <div class="product-info">
            <h4 class="product-title">Physics and Engineering</h4>
          </div>
        </div>
        <div class="product">
          <img src="./assets/images/logo/Life_Sciences.png" alt="Life Sciences" />
          <div class="product-info">
            <h4 class="product-title">Life Sciences</h4>
          </div>
        </div>
        <div class="product">
          <img src="./assets/images/logo/Design and Animation.png" alt="Design and Animation" />
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