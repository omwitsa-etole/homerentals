import { useEffect, useState } from "react";
import "../styles/List.scss";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setTripList } from "../redux/state";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer"
import properties from "../properties.json"
import fetchFunction from "../fetch.js"
import Session from "../Session.js"

const Url = properties.url

const TripList = () => {
  const [loading, setLoading] = useState(true);
  var userId = useSelector((state) => state.user._id);
  const tripList = useSelector((state) => state.user.tripList);
  const session = new Session()
  const dispatch = useDispatch();
  if(!userId || userId === undefined){
	  userId = session.get("user")
  }
  const getTripList = async () => {
    try {
      fetchFunction(`${Url}/users/${userId}/trips`,"get",null,function(data){
		  console.log(data)
		  dispatch(setTripList(data));
		  setLoading(false);
	  })
      
    } catch (err) {
      console.log("Fetch Trip List failed!", err.message);
    }
  };

  useEffect(() => {
    getTripList();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title-list">Your Trip List</h1>
      <div className="list">
        {tripList?.map(({ listingId, hostId, startDate, endDate, totalPrice, booking=true }) => (
          <ListingCard
            listingId={listingId._id}
            creator={hostId._id}
            listingPhotoPaths={listingId.listingPhotoPaths}
            city={listingId.city}
            province={listingId.province}
            country={listingId.country}
            category={listingId.category}
            startDate={startDate}
            endDate={endDate}
            totalPrice={totalPrice}
            booking={booking}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default TripList;
