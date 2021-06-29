import Search from "./Search";
import Locate from "./Locate";
export default function Nav({ panTo }) {
  return (
    <div>
      <h1>
        Watcharin Map{" "}
        <span role="img" aria-label="tent">
          💕💕
        </span>
      </h1>
      <Locate panTo={panTo} />
      <Search panTo={panTo} />
    </div>
  );
}
