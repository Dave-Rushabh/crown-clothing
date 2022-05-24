import "./categories.styles.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Women's",
      imageUrl:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
    },
    {
      id: 5,
      title: "Men's",
      imageUrl:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
    },
  ];

  return (
    <>
      <div className="categories-container">
        {categories.map((item) => {
          return (
            <>
              <div className="category-container" key={item.id}>
                <div
                  className="background-image"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
                <div className="category-body-container">
                  <h2> {item.title}</h2>
                  <p>Shop Now</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;
