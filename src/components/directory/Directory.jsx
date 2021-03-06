import DirectoryItem from "../directory-item/DirectoryItem";
import "./Directory.scss";

const Directory = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      route: "shop/hats",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      route: "shop/jackets",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route: "shop/sneakers",
    },
    {
      id: 4,
      title: "Women's",
      imageUrl:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",

      route: "shop/womens",
    },
    {
      id: 5,
      title: "Men's",
      imageUrl:
        "https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191",

      route: "shop/mens",
    },
  ];

  return (
    <>
      <div className="categories-container">
        {categories.map((category) => {
          return <DirectoryItem categoryDetails={category} key={category.id} />;
        })}
      </div>
    </>
  );
};

export default Directory;
