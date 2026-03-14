import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    {/*pathname represents the current URL path which updates every time a <Link> is clicked */}
  const { pathname } = useLocation();

  // The useEffect hook runs an action in response to a change
  useEffect(() => {
    // This snaps the scroll to the top-left (0,0) every time the path changes
    window.scrollTo(0, 0);
  }, [pathname]); //the dependency array which triggers the logic

  return null; // This component doesn't render any UI
}