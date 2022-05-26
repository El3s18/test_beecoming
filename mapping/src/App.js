import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import "./index.css";

export default function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "" // Add your API key
  });

  return isLoaded ? <Map /> : null;
}
