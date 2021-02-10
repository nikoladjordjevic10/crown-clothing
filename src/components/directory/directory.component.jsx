import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          image: "hats.jpg",
          id: 1,
        },
        {
          title: "jackets",
          image: "jackets.jpg",
          id: 2,
        },
        {
          title: "sneakers",
          image: "sneakers.jpg",
          id: 3,
        },
        {
          title: "womens",
          image: "womens.jpg",
          size: "large",
          id: 4,
        },
        {
          title: "mens",
          image: "mens.jpg",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, image, id, size }) => (
          <MenuItem key={id} title={title} image={image} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
