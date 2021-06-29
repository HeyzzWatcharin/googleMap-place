function Locate({ panTo }) {
  return (
    <button
      className="locate btn btn-primary"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
          },
          () => null
        );
      }}
    >
      My current Location
      {/* <img src="/compass.svg" alt="compass" /> */}
    </button>
  );
}

export default Locate;
