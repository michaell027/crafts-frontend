import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <nav>
      <h1>Header</h1>
      <Link href={"/"}>
        <Image
          width={150}
          height={150}
          alt={"logo"}
          src={"/assets/images/logo.png"}
        ></Image>
      </Link>
    </nav>
  );
};

export default Header;
