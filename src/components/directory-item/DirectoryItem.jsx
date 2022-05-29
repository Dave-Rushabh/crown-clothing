import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryContainer,
} from "./DirectoryItemStyle";

const DirectoryItem = ({ categoryDetails }) => {
  const { imageUrl, title, route } = categoryDetails;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <>
      <DirectoryContainer onClick={onNavigateHandler}>
        <BackgroundImage imageUrl={imageUrl} />
        {/* Styled components can accept props, here imageUrl is a prop */}
        <Body>
          <h2> {title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryContainer>
    </>
  );
};

export default DirectoryItem;
