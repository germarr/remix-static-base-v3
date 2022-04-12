import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div>
      <Link to="./blah" prefetch="intent">
        <div>Ir a blah</div>
      </Link>
    </div>
  );
}
