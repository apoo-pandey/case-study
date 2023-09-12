import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ITEM_DATA } from "../utils/constants";

const RestaurantGallery = () => {
  return (
    <div>
      <ImageList
        sx={{ width: 550, height: 500 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {ITEM_DATA.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default RestaurantGallery;
