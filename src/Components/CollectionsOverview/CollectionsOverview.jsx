import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./CollectionsOverviewStyles.scss";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { selectCollections } from "../../Redux/shop/shopSelectors";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});
export default connect(mapStateToProps)(CollectionsOverview);
