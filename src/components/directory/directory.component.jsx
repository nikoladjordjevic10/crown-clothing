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
          linkUrl: "hats",
        },
        {
          title: "jackets",
          image: "jackets.jpg",
          id: 2,
          linkUrl: "",
        },
        {
          title: "sneakers",
          image: "sneakers.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "womens",
          image: "womens.jpg",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "mens",
          image: "mens.jpg",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
