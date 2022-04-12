import { Link } from "@remix-run/react"


export default function Index() {
  return (
    <div>
      <Link to="./blah" prefetch="intent">
        <div>Ir a blah</div>
      </Link>
    </div>
  );
}
