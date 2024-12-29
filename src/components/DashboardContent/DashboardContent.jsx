import "./DashboardContent.css";
import ProductsFilters from "../zaliczenie/ProductsFilters/ProductsFilters";
import ProductsList from "../zaliczenie/ProductsList/ProductsList";
import ShopingList from "../zaliczenie/ShopingList/ShopingList";
import LoadButton from "../LoadButton/LoadButton";
function DashboardContent() {
  return (
    <>
      <div className="appWrapper">
        <ProductsFilters />
        <LoadButton />
        <div className="columnsWrapper">
          <ProductsList />
          <ShopingList />
        </div>
      </div>
    </>
  );
}

export default DashboardContent;
