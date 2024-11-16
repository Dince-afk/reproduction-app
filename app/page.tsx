import Image from "next/image";
import img from "./aid.jpg";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <Image src={img} alt="Test" />
    </div>
  );
}
